function solution(m, arr){
    let count = 0;
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
  
    while(p2 < arr.length){
      sum += arr[p2];
  
      if(sum === m){
        count++;
      }
      while(sum >= m){
        sum -= arr[p1++];
        if(sum === m) count++;
      }
  
      if(sum < m){
        p2++;
      }
    }
  
    return count;
  }
  
  let a=[1, 2, 1, 3, 1 , 1, 1, 2];
  console.log(solution(6, a));