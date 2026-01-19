const arr=[1,2,3,4,5]

for (const num of arr) {
   // console.log(num); 
}
const greetings="Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`); 
}


const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
    
}

// const myObject={
//     'Game1':'NFS',
//     'game2':'Spiderman'
// }
// for (const [key,value] of myObj) {
//         //console.log(key, ':-', value);

// }


const myObj={
js:'javascript',
cpp:'c++',
rb:'ruby',
swift:'swift by apple'
}
for (const key in myObj) {
    //console.log(key); 
    
}



const program=["js","rb","py","java","cpp"]
for (const key in program) {
    //console.log(program[key]);  
}

const coding=['js','ruby','java','python','cpp']

