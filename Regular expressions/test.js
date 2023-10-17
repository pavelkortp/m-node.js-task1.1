import {Validator} from "./regEx.js"

const v = new Validator();
//Valid
console.log(`fi@secondpart.end : ${v.validateEmail('fi@secondpart.end')}`);
console.log(`first-part@.se=cond%p.art.end : ${v.validateEmail('first-part@.se=cond%p.art.end')}`);
console.log(`fi@secondpart.end : ${v.validateEmail('fi@secondpart.end')}`);
console.log(`'2-@?.e : ${v.validateEmail('2-@?.e')}`);

//Invalid
console.log(`f@secondart.end, : ${v.validateEmail('f@secondart.end,')}`);
console.log(`first-part@.se=cond@part.end : ${v.validateEmail('first-part@.se=cond@part.end')}`);
console.log(`-firstpart@.se=cond%.enddeded : ${v.validateEmail('-firstpart@.se=cond%.enddeded')}`);
console.log(`+firstpart@.se=cond%.enddeded : ${v.validateEmail('+firstpart@.se=cond%.enddeded')}`);
console.log(`.firstpart@.se=cond%.enddeded : ${v.validateEmail('.firstpart@.se=cond%.enddeded')}`);
console.log(`firs_tpart@.se.en : ${v.validateEmail('firs_tpart@.se.en')}`);
console.log(`firstpart@.se.enddeded : ${v.validateEmail('firstpart@.se.enddeded')}`);

//Valid
console.log(`+38 (099) 567 8901 : ${v.validatePhone('+38 (099) 567 8901')}`);
console.log(`+38 099 5 6 7 8 9 : 01 ${v.validatePhone('+38 099 5 6 7 8 9  01')}`);
console.log(`(09-9) 567-890-1 : ${v.validatePhone('(09-9) 567-890-1')}`);
console.log(`--  (099) 567 890-1 : ${v.validatePhone('--  (099) 567 890-1')}`);
console.log(`+380 96 210 43 81 : ${v.validatePhone('+380 96 210 43 81')}`);


//Invalid
console.log(`+38 (099) 567 8901 0 : ${v.validatePhone('+38 (099) 567 8901 0')}`);
console.log(`(09-9 567-890-1 : ${v.validatePhone('(09-9 567-890-1')}`);
console.log(`--  (099) - 567 - 890-1---- : ${v.validatePhone('--  (099) - 567 - 890-1----')}`);
console.log(`+38 099 a0000000 : ${v.validatePhone('+38 099 a0000000')}`);
console.log(`+38 (0989) 567 8901 : ${v.validatePhone('+38 (0989) 567 8901')}`);
console.log(`+48 (0989) 567 8901 : ${v.validatePhone('+48 (0989) 567 8901')}`);



//Valid
console.log(`C00l_Pass: ${v.validatePassword('C00l_Pass')}`);
console.log(`SupperPas1: ${v.validatePassword('SupperPas1')}`);
console.log(`DDDDDDDDDDDDDDsaaaaaaaaaaaa___111: ${v.validatePassword('DDDDDDDDDDDDDDsaaaaaaaaaaaa___111')}`);
console.log(`PP11__aa: ${v.validatePassword('PP11__aa')}`);
console.log(`1aaaa2aP: ${v.validatePassword('1aaaa2aP')}`);

//Invalid
console.log(`Cool_pass: ${v.validatePassword('Cool_pass')}`);
console.log(`C00l: ${v.validatePassword('C00l')}`);
