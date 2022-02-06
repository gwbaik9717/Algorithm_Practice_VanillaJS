function solution(size, arr) {
  //기본 cache 생성
  let cache = Array.from({ length: size }, (value, index) => 0);

  loopOut: for (let x of arr) {
    for (let i = 0; i < size; i++) {
      //캐쉬 내에 해당 작업이 있을 경우
      if (x === cache[i]) {
        // 뒤로 한 칸씩 밀기
        for (let j = i - 1; j >= 0; j--) {
          cache[j + 1] = cache[j];
        }
        // 캐쉬 메모리 첫번째에 배치
        cache[0] = x;
        continue loopOut;
      }
    }
    //캐쉬 내에 해당 작업이 없을 경우
    cache.unshift(x);

    //캐쉬 메모리 초과시 삭제
    if (cache.length > size) {
      cache.pop();
    }
  }

  return cache;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7, 8, 7, 2];
console.log(solution(5, arr));
