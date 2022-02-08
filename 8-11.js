function count(songs, mid) {
  let count = 1;
  let sum = 0;

  //몇 개의 테이프가 필요한지 확인
  for (let x of songs) {
    if (sum + x <= mid) {
      sum += x;
    } else {
      count += 1;
      sum = x;
    }
  }

  return count;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  // 이진탐색
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
