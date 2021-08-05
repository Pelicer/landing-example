import axios from "axios";

class EmailAPI {

    /**
     * Sends e-mail to the site owner
     *
     * @param {string} name Name of the person sending the email.
     * @param {string} email Email address of sender.
     * @param {string} subject Subject of the message.
     * @param {string} phone Phase number of the sender.
     * @param {string} message Message to be sent.
     * @return {Promise} Async promise with the AJAX request response.
     */
    async sendMail(name, email, subject, phone, message) {
        let content = {
            lang: "pt-BR",
            sender: {
                name: name,
                mail: email
            },
            mail: {
                subject: subject,
                body: message
            },
            additionalInfo: {
                phoneNumber: phone
            }
        }
        console.log(content);
        let response = new Promise((resolve, reject) => {
            axios(
                {
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/todos/1'
                }
            ).then(response => {
                resolve(response);
            }
            ).catch(error => {
                reject(error);
            })
        });
        return response;
    }

}

export const email = new EmailAPI();