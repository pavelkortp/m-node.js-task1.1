function Validator() {

    // /**
    //  * Validates an email.
    //  * @param {string} string email.
    //  */
    // this.validateEmail = (string) => {

    //     return string.match(/^(?![.-+])[\w+.+-]{2,20}@[\w+.!$%&*+/=?^_-]{1,15}.[\w+{1,5}]/) != null;
    // }

    /**
     * Validates a phone number.
     * @param {string} string phone number.
     */
    this.validatePhone = (string) => {

    }

    /**
     * Validates a password.
     * @param {string} string password. 
     */
    this.validatePassword = (string) => {
        return string.match(/[\w+]{8}/) != null;
    }

}

const v = new Validator();
// console.log(v.validateEmail('fi@secondpart.end'));
// console.log(v.validateEmail('first-part@.se=cond%p.art.end'));
// console.log(v.validateEmail('fi@secondpart.end'));

// console.log(v.validateEmail('f@secondart.end,'));
// console.log(v.validateEmail('first-part@.se=cond@part.end'));
// console.log(v.validateEmail('-firstpart@.se=cond%.enddeded'));
// console.log(v.validateEmail('firs_tpart@.se.en'));
// console.log(v.validateEmail('firstpart@.se.enddeded'));

console.log(v.validatePassword('C00l_Pass'));
console.log(v.validatePassword('SupperPas1'));
console.log(v.validatePassword('Cool_pass'));
console.log(v.validatePassword('C00l'));