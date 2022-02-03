// 슬라이딩 윈도우 사용하기
function solution(k, arr){
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
  
    // 초기 sum 설정
    for(let i=0; i<k; i++){
      sum += arr[i];
      max = Math.max(sum, max);
    }
  
    for(let i=1; i<arr.length - k + 1; i++){
      sum -= arr[i-1];
      sum += arr[i+k-1];
  
      max = Math.max(sum, max);
    }
    return max;
  }
  
  let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  console.log(solution(3, a));