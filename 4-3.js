function solution(arr){
    let ans = [];
    let tchr = [];
    let stnt = [];
    
    for(let i=0; i<arr[0].length-1; i++){
      for(let j=i+1; j<arr[0].length; j++){
        tchr.push(arr[0][i]);
        stnt.push(arr[0][j]);
      }
    }
  
    for(let i=1; i<arr.length; i++){
      for(let j=0; j<tchr.length; j++){
        let left = tchr[j];
        let right = stnt[j];
  
        if(arr[i].indexOf(left) > arr[i].indexOf(right)){
          tchr[j] = null;
          stnt[j] = null;
        }
      }
    }
  
    let count = 0;
  
    for(let x of stnt){
      if(!x){
        count++;
      }
    }
  
    return count;
  }
  
  let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
  console.log(solution(arr));