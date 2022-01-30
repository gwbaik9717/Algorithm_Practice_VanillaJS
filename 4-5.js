function solution(n, nth, arr){
    arr.sort((a,b) => a-b);
    let cnt = 0;
    let prev = 0;
  
    for(let i = n; i>=2; i--){
      for(let j = i-1; j>=1; j--){
        for(let k=j-1; k>=0; k--){
          let sum = arr[i] + arr[j] + arr[k];
          if(sum !== prev){
            cnt++;
            prev = sum;
          }
  
          if(cnt === nth){
            return sum;
          }
  
          
        }
  
      }
    }
  }
  
  let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(10, 3, arr));