function Validator() {

    /**
     * Validates an email.
     * @param {string} string email.
     */
    this.validateEmail = (string) => {

        return string.match(/(?!-)[-\.\+\w+]{2,20}@[.!$%&’*/=?^_+\w+]{1,15}\.[A-Za-z]{1,5}/g) != null;
    }

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
        return string.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*\w+.{7}/g) != null;
    }

}

const v = new Validator();
console.log(v.validateEmail('fi@secondpart.end'));
console.log(v.validateEmail('first-part@.se=cond%p.art.end'));
console.log(v.validateEmail('fi@secondpart.end'));

console.log(v.validateEmail('f@secondart.end,'));
console.log(v.validateEmail('first-part@.se=cond@part.end'));
console.log(v.validateEmail('-firstpart@.se=cond%.enddeded'));
console.log(v.validateEmail('+firstpart@.se=cond%.enddeded'));
console.log(v.validateEmail('.firstpart@.se=cond%.enddeded'));
console.log(v.validateEmail('firs_tpart@.se.en'));
console.log(v.validateEmail('firstpart@.se.enddeded'));

// console.log(`C00l_Pass: ${v.validatePassword('C00l_Pass')}`);//Valid
// console.log(`SupperPas1: ${v.validatePassword('SupperPas1')}`);//Valid
// console.log(`DDDDDDDDDDDDDDsaaaaaaaaaaaa___111: ${v.validatePassword('DDDDDDDDDDDDDDsaaaaaaaaaaaa___111')}`);//Valid
// console.log(`PP11__aa: ${v.validatePassword('PP11__aa')}`);//Valid
// console.log(`1aaaa2aP: ${v.validatePassword('1aaaa2aP')}`);//Valid
// console.log(`Cool_pass: ${v.validatePassword('Cool_pass')}`);
// console.log(`C00l: ${v.validatePassword('C00l')}`);
