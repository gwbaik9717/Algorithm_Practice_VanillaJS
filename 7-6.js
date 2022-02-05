function solution(n, k) {
  let queue = [];
  let count = 1;

  // 최초 queue 생성
  let queue = Array.from({ length: n }, (v, i) => i + 1); // [1,2,3,4,5,6,7,8] 배열 생성

  while (queue.length > 1) {
    if (count !== k) {
      queue.push(queue.shift());
      count++;
    } else {
      queue.shift();
      count = 1;
    }
  }

  return queue[0];
}

console.log(solution(8, 3));
