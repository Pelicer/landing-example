/**
 * API Contact
 * @module     api/v1/contact
 * @file       API to provice back-end support to Contact component
 * @version    1.0.0
 * @author     takaki-tk (takaki(at)tk.tec.br)
 * @copyright  TK Technology (c) 2021
 * @requires   module:lib/global
 * @requires   module:lib/contact_msg
 * @requires   module:nodemailer
 */

/**
 * @constant
 * @module lib/global
 * @see global
 */
const GLOBAL = require("../../lib/global");

/**
 * @constant
 * @module lib/contact_msg
 * @see contact_msg
 */
const MSG = require("../../lib/contact_msg");

/**
 * @constant
 * @module nodemailer
 * @see {@link https://nodemailer.com/about/}
 */
const nodemailer = require("nodemailer");
const { getOriginalNode } = require("typescript");

/**
 * Exposed call for Contact API
 * @author   takaki-tk (takaki(at)tk.tec.br)
 * @version  1.0.0
 * @module   api/v1/contact
 * @param    {*}  req  Request object
 * @param    {*}  res  Response object
 */
module.exports = async (req, res) => {
  try {
    if (req.method === "POST") {
      req.body = JSON.parse(req.body);
      var { lang, sender, mail } = req.body;
     
      console.log(lang)
      console.log(sender)
      console.log(mail)
      let missingField = [];

      if (lang == null) lang = "pt-BR"; // If UI does not set the language, so we will assume Portuguese as default
      else if (lang != "pt-BR" && lang != "en-US") lang = "pt-BR"; // If the selected language is not supported, then we force to be pt-BR

      if (sender.name == null) missingField.push(MSG.contact_msg.sendername[lang]);
      if (sender.mail == null) missingField.push(MSG.contact_msg.sendermail[lang]);
      if (mail.subject == null) missingField.push(MSG.contact_msg.mailsubject[lang]);
      if (mail.body == null) missingField.push(MSG.contact_msg.mailbody[lang]);

      if (missingField.length > 0) {
        res.statusCode = 200;
        res.json({ bool: false, value: `${MSG.contact_msg.invalidContract[lang]}: ${missingField.join(", ")}` });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_HOST_PORT,
        secure: process.env.MAIL_HOST_SECURE,
        auth: {
          user: process.env.MAIL_USR,
          pass: process.env.MAIL_PWD
        }
      });

      let addInfo = "";
      if ("additionalInfo" in req.body && Object.keys(req.body.additionalInfo).length > 0)
        Object.keys(req.body.additionalInfo).forEach(k => addInfo = `${k}: ${req.body.additionalInfo[k]}<br />`);

      const mailOption = {
        from: `Website <${process.env.MAIL_DESTINATION}> ${MSG.contact_msg.mailtext.onbehalf[lang]} ${sender.name} <${sender.mail}>`,
        to: process.env.MAIL_DESTINATION,
        subject: `${mail.subject}`,
        html: `
          ${MSG.contact_msg.mailtext.from[lang]}: ${sender.name} &lt;${sender.mail}&gt;<br />
          ${MSG.contact_msg.mailtext.date[lang]}: ${(new Date()).toISOString()}<br />
          ${addInfo}
          ${MSG.contact_msg.mailtext.message[lang]}: ${mail.body}
          `
      };

      GLOBAL.debug(mailOption, "dir");

      await transporter.sendMail(mailOption)
        .then(data => {
          GLOBAL.debug(data, "dir");
          res.json({ bool: true, value: MSG.contact_msg.success[lang] });
        })
        .catch(err => {
          GLOBAL.debug(err, "error");
          res.json({ bool: false, value: MSG.contact_msg.failed[lang] });
        });
    }
    else if (req.method === "GET" && "contract" in req.query) {
      res.statusCode = 200;
      res.json({ bool: true, value: { lang: "pt-BR|en-US", sender: { description: "Only Name and Mail are required, String format. Any additional info, use additionalInfo key.", name: "[String]", mail: "[String]" }, mail: { description: "Only Subject and Body are required, String format. Body can use HTML tags to enrich the text. Any additional info, use additionalInfo key.", subject: "[String]", body: "[String]" }, additionalInfo: { description: "additionalInfo is optional, all keys inside within it will be used as is (key1: value, key2: value, etc), use then accordingly.", anyInfo: "[String]", anotherInfo: "[String]" } } });
    }
    else {
      res.statusCode = 404;
      res.json({ bool: false, value: MSG.contact_msg.fourzerofour["pt-BR"] });
    }
  }
  catch (err) {
    GLOBAL.debug(`Exception raised @ contact.js\n${err}`, "error");
    res.json({ bool: false, value: MSG.contact_msg.exception["pt-BR"] });
  }
}