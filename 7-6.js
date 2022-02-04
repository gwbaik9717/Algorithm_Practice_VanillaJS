function solution(n, k) {
  let queue = [];
  let count = 1;

  // 최초 queue 생성
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

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
