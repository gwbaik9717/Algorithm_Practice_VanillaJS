function solution(str1, str2) {
    let answer;
    let map1 = new Map();
    let map2 = new Map();
  
    for (let x of str1) {
      if (map1.has(x)) {
        map1.set(x, map1.get(x) + 1);
      } else {
        map1.set(x, 1);
      }
    }
  
    for (let x of str2) {
      if (map2.has(x)) {
        map2.set(x, map2.get(x) + 1);
      } else {
        map2.set(x, 1);
      }
    }
  
    if (str1.length !== str2.length) {
      return "NO";
    }
  
    for (const [key, value] of map1) {
      if (map2.has(key)) {
        if (value !== map2.get(key)) {
          answer = "NO";
          break;
        }
      } else {
        answer = "NO";
        break;
      }
  
      answer = "YES";
    }
  
    return answer;
  }
  
  let a = "AbaAeeCDD";
  let b = "baeeACA";
  
  console.log(solution(a, b));