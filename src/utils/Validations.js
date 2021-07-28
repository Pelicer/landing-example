
export class StringValidator {


    /**
     * Validates if a string is valid by checking
     * it agains a regex condition.
     *
     * @param {string} string The string to be checked.
     * @param {RegExp} condition Regular expression for a valid given string.
     * @return {Boolean} True if valid, false if not.
     */
    validateField(string, condition) {
        if (condition !== undefined) {
            if (!condition.test(string)) {
                return false;
            }
        }
        return true
    }

    /**
     * Makes sure the target element for the given
     * event doesn't surpass the maximum allowed 
     * value length. Returns the remaining length.
     *
     * @param {Event} event The event to be checked.
     * @param {Number} maxMessageLength Maximum permitted value length.
     * @return {Number} Remaining length.
     */
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