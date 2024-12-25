//SLICE FUNCTION
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const modifiedFood=foods.slice(1,4);
console.log(modifiedFood);

//SPLICE FUNCTION
const foods1=['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods1.splice(2,0,'noodles','icecream');
console.log(foods1);


const numberArray = [12,324,213,4,2,3,45,4234];

//isEven(a) FUNTION
const isEven=(a)=>{
    return a.filter(n=>n%2===0);
}
console.log(isEven(numberArray));

//helper function
const prime=(n)=>{
    if(n<=1) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return false;
    }
    return true;
}

//isPrime(a) FUNTION
const isPrime=(a)=>{
    return a.filter(n=>{
        if(prime(n)) return true;
        return false;
    });
};
console.log(isPrime(numberArray));

//nonPrime(a) FUNTION
const nonPrime=(a)=>{
    return a.filter(n=>{
        if(prime(n)) return false;
        return true;
    })
}
console.log(nonPrime(numberArray))

//isEven using filter
const isEven1=(a)=>a.filter(n=>n%2===0);
console.log(isEven1(numberArray));

//finding the squares of array elements using map
const findSquareOfNumber=(a)=>a.map(n=>n*n);
const myArray = [11, 34, 20, 5, 53, 16];
console.log(findSquareOfNumber(myArray));

//multiply using reduce
const multiply=(a)=>a.reduce((acc,n)=>acc*n);
const myArray1=[2,3,5,10];
console.log(multiply(myArray1))

//finding the squares of array elements using reduce
const findSquareOfNumberUsingReduce=(a)=>{
    return a.reduce((acc,n)=>{
        acc.push(n*n);
        return acc;
    },[])
};
console.log(findSquareOfNumberUsingReduce(myArray));