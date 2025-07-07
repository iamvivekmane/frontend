let arr =[ 10,10,20,30,40];

function doubleTrouble(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==arr[i+1])
        {
            // console.log("skipping ",i);
            continue;
        }
        else{
            arr[i] =arr[i]*2;
        }
    }
    return arr;
}

let dArr = doubleTrouble(arr)
console.log(dArr);
