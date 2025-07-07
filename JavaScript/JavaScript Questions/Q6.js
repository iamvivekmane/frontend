let str = "JavaScript"
let counter = 0;

for(let i = 0;i<str.length;i++){
    if(str[i]=='a'||str[i]=='A'){
        counter++;
    }
    if(str[i]=='e'||str[i]=='E'){
        counter++;
    }
    if(str[i]=='i'||str[i]=='I'){
        counter++;
    }
    if(str[i]=='o'||str[i]=='O'){
        counter++;
    }
    if(str[i]=='u'||str[i]=='U'){
        counter++;
    }
}

console.log("The count of vowels is",counter);
