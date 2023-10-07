export function Validator() {
    /**
     * Validates an email.
     * @param {string} string email.
     */
    this.validateEmail = (string) => {

        return string.match(/^(?![+-.])[-\.\+A-Za-z0-9]{2,20}@[\.!$%&’*\+/=?^_-\w+]{1,15}\.[A-Za-z]{1,5}$/g) != null;
    }

    /**
     * Validates a phone number.
     * @param {string} string phone number.
     */
    this.validatePhone = (string) => {
        if (string.length > 25) return false;
        return string.replace(/\s+|-/g, '').match(/^(\+38)?(\(\d{3}\)|\d{3})?\d{7}$/g) != null;
    }

    /**
     * Validates a password.
     * @param {string} string password. 
     */
    this.validatePassword = (string) => {
        return string.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*\w+.{7}/g) != null;
    }

}

