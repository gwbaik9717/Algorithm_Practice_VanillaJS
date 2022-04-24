function solution(m, arr){
    let count = 0;
    let lt = 0, rt = 0;
    let sum = 0;
  
    while(rt < arr.length){
  
      if(sum < m){
        count += (rt - lt + 1);
        sum += arr[rt++];
      }else if(sum === m){
        sum += arr[rt++];
      }
      else{
        sum -= arr[lt++];
      }
      }
      return count;
    }
  
  
  let a=[1, 3, 1, 2, 3];
  console.log(solution(5, a));