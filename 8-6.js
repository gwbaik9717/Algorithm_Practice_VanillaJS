function solution(arr) {
  let hs;
  let pt;

  loopOut: for (let i = 1; i < arr.length; i++) {
    // 비정상적인 패턴 감지
    if (arr[i] < arr[i - 1]) {
      hs = i - 1;
      //짝궁 찾기
      for (let j = i; j < arr.length; j++) {
        if (arr[hs] < arr[j]) {
          pt = j - 1;
          break loopOut;
        }
        pt = j;
      }
    }
  }

  return [hs + 1, pt + 1];
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
