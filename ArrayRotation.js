let firstFunction=(arr,d,n)=>{
    d=d%n;
    let a;
    while(d>0){
        a=arr.shift();
        arr[n-1]=a;
        d=d-1;
    }
    return arr;
};
console.log(firstFunction([1,2,3,4,5],2,5));