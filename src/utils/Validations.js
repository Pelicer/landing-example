
export class StringValidator {

    validateField(string, condition) {
        if (condition !== undefined) {
            if (!condition.test(string)) {
                return false;
            }
        }
        return true
    }

    validateLength(event, maxMessageLength) {
        let msg = event.target.value;
        if (msg.length > maxMessageLength) {
            event.target.value = msg.substring(0, maxMessageLength);
            return 0;
        }
        return (maxMessageLength - msg.length);
    }

}

export const stringValidator = new StringValidator();