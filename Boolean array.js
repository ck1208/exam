let booleanArr=(boolArr)=>{
    let min=9999999;
    let c=0;
    let count;
    let valueOf;
    for (let i of boolArr){
        count=0;
        for (let j of i){
            if (j===1){
                break;
            }
            count+=1
        }
        if (min>count){
            min=count;
            valueOf=c;
        }
        c=c+1;
    }
    return valueOf;
};
console.log(booleanArr([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]));