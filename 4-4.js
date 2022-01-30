function solution(m, product){
    let max = Number.MIN_SAFE_INTEGER;
  
    product.sort((a,b) => {
      return (a[0]+a[1]) - (b[0] + b[1]) 
    })
  
    for(let i = product.length-1; i>=0; i--){
      let target = product[i][0] / 2 + product[i][1];
      let limit = m - target;
      let sum = 0;
      let count = 1;
      for(let j = 0; j < product.length; j++){
        if(i === j){
          continue;
        }
  
        sum += product[j][0] + product[j][1];
        if(sum > limit){
          break;
        }else{
          count++;
          if(count > max){
            max = count;
          }
        }
      }
    }
    return max;
  }
  
  let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
  console.log(solution(28, arr));