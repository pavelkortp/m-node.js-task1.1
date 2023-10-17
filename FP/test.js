import {csvParse} from "./csv.js";

const parsed = csvParse(`
44.38,34.33,Alushta,31440,
49.46,30.17,Bila Cerkva,200131,
49.54,28.49,Berdichiv,87575,#некоммент
#
46.49,36.58,#Bredyansk,121692,
22.22,11.58,Kyiv,121692,
49.15,28.41,Vinnitsya,356665,
#45.40,34.29,Jankoy,43343,`
);

console.log(parsed('Kyiv is the capital of Ukraine!'));
console.log(parsed('Kyiv is the capital of Ukraine! Kyiv'));
console.log(parsed('Hello i am from Alushta, i like this town'));
console.log(parsed('Hello i am from Krivyi Rih, i like this town')); //no changes