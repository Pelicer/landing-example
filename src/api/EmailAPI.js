import axios from "axios";

export class EmailAPI {

    sendMail(content) {
        axios(
            {
                method: 'POST',
                url: './api/v1/contact',
                data: JSON.stringify(content)
            }
        ).then(response => {
            console.log(response);
        }
        ).catch(error => {
            console.error(error);
        })
    }

}

export const email = new EmailAPI();