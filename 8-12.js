function count(c, stable, mid) {
  let save = stable[0];
  let cnt = 0;

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] >= save + mid) {
      save = stable[i];
      cnt++;
    }
  }

  if (cnt >= c - 1) {
    return true;
  } else {
    return false;
  }
}

function solution(c, stable) {
  let answer;
  let lt = Number.MAX_SAFE_INTEGER;

  stable.sort((a, b) => a - b);

  //lt 구하기
  for (let i = 1; i < stable.length; i++) {
    lt = Math.min(lt, stable[i] - stable[i - 1]);
  }

  //rt 구하기
  let rt = stable[stable.length - 1] - stable[0];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(c, stable, mid)) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
