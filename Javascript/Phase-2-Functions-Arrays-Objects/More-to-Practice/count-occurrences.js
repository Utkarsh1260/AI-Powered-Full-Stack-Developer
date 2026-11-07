let arr=[1,2,3,2,3,4,3];

let freq={};

for(let i=0; i<arr.length; i++){
    let count=1;
    if(arr[i] in freq) continue;
    for(j=i+1; j<arr.length; j++){
        if(arr[j]===arr[i]) count++;
    }
    freq[arr[i]]=count;
}

console.log(freq);


//using forEach
let freq2={};
console.log("Using forEach")
arr.forEach((n) =>{
    if(Object.hasOwn(freq2,n)){
        freq2[n]++;
    }

    else freq2[n]=1;
})

console.log(freq2);