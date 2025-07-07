let password = "HelloWorld9"

function hasLowercase(str) {
    return /[a-z]/.test(str);
}

function hasUppercase(str) {
    const regex = /[A-Z]/;
    return regex.test(str);
}

function hasNumber(str) {
    const regex = /\d/;
    return regex.test(str);
}

console.log(hasLowercase(password));
console.log(hasUppercase(password));
console.log(hasNumber(password));

if ((password.length >= 8) && (hasLowercase(password)) && (hasLowercase(password)) && (hasNumber(password))) {
    console.log("Valid");
}
else{
    console.log("Invalid");
}


