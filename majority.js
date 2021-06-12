let arrElement=arr=>{
    let result={}
    let a=true;
    for(let i of arr){
        if(result[i]==undefined){
            result[i]=1
        }else{
            result[i]+=1;
        }
    }
    for(let i in result){
        if(result[i] >arr.length/2){
            console.log(i)
            a=false;
        }
    }
    if(a){
        console.log("No Majority Element");
    }
};
arrElement([3,3,4,2,4,4,2,4,4]);
arrElement([3,3,4,2,4,4,2,4]);