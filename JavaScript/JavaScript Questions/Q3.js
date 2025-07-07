let str1 = "Hello";
let str2 ="";

for(let i = str1.length-1;i>=0;i--){
    str2 = str2 + str1[i]; 
}

let final = str1 + str2;

console.log("Mirror string is",final);


