function solution(s, t) {
  const tMap = new Map();
  const sMap = new Map();
  let answer = 0;
  let temp = 0;
  let lt = 0;
  let rt = t.length - 2;

  //tMap에 비교대상 저장
  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  //최초 sMap 저장
  for (let i = lt; i <= rt; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  //슬라이딩 윈도우
  while (rt < s.length) {
    //rt 1 증가 후 sMap에 추가
    rt++;
    if (sMap.has(s[rt])) {
      sMap.set(s[rt], sMap.get(s[rt]) + 1);
    } else {
      sMap.set(s[rt], 1);
    }

    //비교
    if (sMap.size === tMap.size) {
      for (const [key, value] of tMap) {
        if (sMap.has(key)) {
          if (value === tMap.get(key)) {
            temp = 1;
          } else {
            temp = 0;
            break;
          }
        } else {
          temp = 0;
          break;
        }
      }
      answer += temp;
    }

    //sMap에서 제거 후 lt 1 증가
    sMap.set(s[lt], sMap.get(s[lt]) - 1);
    if (sMap.get(s[lt]) === 0) {
      sMap.delete(s[lt]);
    }
    lt++;
  }

  return answer;
}

let a = "abcabca";
let b = "cba";
console.log(solution(a, b));
