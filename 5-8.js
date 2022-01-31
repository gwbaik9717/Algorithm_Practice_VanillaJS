function solution(s, t){
    const tMap = new Map();
    let answer = 0;
  
    //비교 대상 map에 저장
    for(let i=0; i<t.length; i++){
      if(tMap.has(t[i])){
        tMap.set(t[i], tMap.get(t[i]) + 1);
      }else{
        tMap.set(t[i], 1);
      }
    }
  
  
    for(let i=0; i<s.length - t.length + 1; i++){
      let sMap = new Map();
      let count = 0;
      
      //sMap 정의하기
      for(let j=i; j<i + t.length; j++){
        if(sMap.has(s[j])){
          sMap.set(s[j], sMap.get(s[j]) + 1);
        }else{
          sMap.set(s[j], 1);
        }
      }
  
      // iterator
      for (const [key, value] of sMap){
        if(tMap.has(key)){
          if(value !== tMap.get(key)){
            count = 0;
            break;
          }
        }else{
          count = 0;
          break;
        }
        count = 1;
      }
  
      answer += count;
    }
  
    return answer;
  }
  
  let a="bacaAacba";
  let b="abc";
  console.log(solution(a, b));