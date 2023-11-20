const myString = 'Rami gg'
//const myRegx = /gg/;
const isContins = myString.search(/gg/);

//console.log(isContins)

let color =['red' ,'green' , 'blue' ]
let [,,color3 = 'black'] = color

let ages = [1,2,3]
let [fg,sg,tg] = ages
console.log(color3)

///////////////////////
let first = 5 , seconde = 7;
[first , seconde] = [seconde, seconde];
console.log(first, seconde)
//////////////////////////
let student = {
    name: {
        firstName: 'Rami',
        lastName: 'Ramadan'
    },
    age: 23
}
let {name: {lastName: yourLastName}} = student
console.log(yourLastName)

let {age: yourAge } = student
console.log(yourAge)

////////////////////////////
let Numbers = [1,2,3,4,5]
let [firstNum , secondeNum , ...thirdNum] = Numbers
console.log(firstNum , secondeNum , thirdNum[1])
////////////////////////////

let first1 = [1,2,3]
let seconde2 = [4,5]
let third3 = [...first1,...seconde2]
console.log(third3)
///////////////////////////

let person = {
    Pname: 'Rami',
    age: 23,
    gender: false

}

let {Pname, NikName = 'unknown',...allAtrrbute} = person

console.log(Pname,NikName ,allAtrrbute )

///////////////////////////




