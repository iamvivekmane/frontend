let arr =[ 10,10,30,30,50];

function doubleTrouble(arr){
    for(let i = 0;i<arr.length;i++){
        // if(arr[i]==arr[i+1]){
        //     console.log(arr[i]);
        //     console.log(arr[i+1]);
        //     arr[i+1] = arr[i+1]*2;
        //     continue;
        // }
        // else{
        // }
        arr[i]= arr[i] * 2;
    }
    return arr;
}

let dArr = doubleTrouble(arr)
console.log(dArr);
