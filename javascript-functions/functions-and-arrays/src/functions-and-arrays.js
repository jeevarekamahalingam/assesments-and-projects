// Progression #1: Greatest of the two numbers
const greatestOfTwoNumbers=(a,b)=>{
  return Math.max(a,b);
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const findScaryWord=(a)=>{
   if (a.length===0) 
     return null;
   let ans=a[0];
   for(let i=1;i<a.length;i++){
     if(ans.length<a[i].length)
       ans=a[i];
   }
   return ans;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const netPrice=(a)=>{
  if(a.length===0) return 0;
  return a.reduce((acc,num)=>acc+num,0);
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const add=(a)=>{
  if(a.length===0) return 0;
  let ans=0;
  for(let i=0;i<a.length;i++){
    if(typeof(a[i])==='string'){
      ans+=a[i].length;
    }
    else if(typeof(a[i])==='number'){
      ans+=a[i];
    }
    else if(typeof(a[i])==='boolean'){
      ans+=a[i]?1:0;
    }
    else{
      throw new Error("Unsupported data type sir or ma'am");
    }  
  }
  return ans;
 }

const midPointOfLevels=(a)=>{
  if(a.length==0) return null;
  return netPrice(a)/a.length;
}
const averageWordLength=(a)=>{
  if(a.length===0) return null;
  let ans=a.reduce((acc,val)=>acc+val.length,0);
  return ans/a.length;
}
const avg=(a)=>{
  if(a.length===0) return null;
  let ans=add(a)/a.length;
  return Number(ans.toFixed(2));
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
const uniqueArray=(a)=>{
  if(a.length===0) return null;
  return [...new Set(a)];
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const searchElement=(a,b)=>{
  if(a.length===0) return null;
  for(let i=0;i<a.length;i++){
    if(a[i]===b) return true;
  }
  return false;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const howManyTimesElementRepeated=(a, b)=>{
  //if(a.length===0) return null;
  return a.reduce((acc,val)=>{
    if(val===b) acc++;
    return acc;
  },0)
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
const maximumProduct = (a) => {
  let mp = 0;
  const m = a.length;
  const n = a[0].length;
  const lim = 4;
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if (j<=n-lim){
        let hp=1;
        for (let k=0;k<lim;k++){
          hp *=a[i][j+k];
        }
        mp=Math.max(mp,hp);
      }
      if (i<=m-lim){
        let vp=1;
        for (let k=0;k<lim;k++) {
          vp*=a[i+k][j];
        }
        mp=Math.max(mp,vp);
      }
    }
  }
  return mp;
};

const maximumProductOfDiagonals = (a) => {
  let mp=0;
  const m=a.length;
  const n=a[0].length;
  const lim=4;
  for(let i=0;i<=m-lim;i++) {
    for(let j=0;j<=n-lim;j++) {
      let d1=1;
      for(let k=0;k<lim;k++) {
        d1*=a[i+k][j+k];
      }
      mp=Math.max(mp,d1);
    }
  }
  for(let i=0;i<=m-lim;i++) {
    for(let j=lim-1;j<n;j++) {
      let d2 = 1;
      for(let k = 0;k<lim;k++) {
        d2*=a[i+k][j-k];
      }
      mp=Math.max(mp,d2);
    }
  }
  return mp;
};
