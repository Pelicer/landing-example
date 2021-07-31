import axios from "axios";

export class EmailAPI {

    async sendMail(content) {
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