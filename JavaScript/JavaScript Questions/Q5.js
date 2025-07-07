let arr = [-2,10,20,30,10,22];
let sum = 0;
for(let i = 0;i<arr.length;i++){
    if(arr[i]>=0){
        sum = sum+arr[i];
    }
    else{
        break;
    }
}
console.log("The sum is ",sum);

