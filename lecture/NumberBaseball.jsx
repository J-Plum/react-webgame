import React, { useState } from "react";
import Try from "./Try";

function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수
   const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const array = [];
   for (let i = 0; i < 4; i++) {
      const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
   }
   return array;
}

const NumberBaseBall = () => {
   const [value, setValue] = useState('');
   const [result, setResult] = useState('');
   const [answer, setAnswer] = useState(getNumbers); //lazy init
   const [tries, setTries] = useState([]);

   console.log(answer);

   const onSubmitForm = (e) => {
      e.preventDefault();
      if (value === '') {
         alert('공백!')
         return
      }
      if (value.length !== 4) {
         alert('4자리를 입력해주세요')
         return
      }

      if (new Set(value).size !== 4) {
         return alert('중복없이 입력해주세요');
      }

      tries.forEach(e => {
         console.log(e.try === value);
      });
      if (tries.includes(value)) {
         alert('중복');
      }


      if (value === answer.join('')) {
         setResult('홈런!');
         setTries((prevState) => [...prevState, { try: value, result: '홈런!' }]);
         alert('홈런! 게임을 다시 시작합니다');
         setValue('');
         setAnswer(getNumbers());
         setTries([]);
      } else {
         const answerArray = value.split('').map((v) => parseInt(v));
         let strike = 0;
         let ball = 0;
         if (tries.length >= 9) {
            setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다! `);
            alert('게임을 다시 시작합니다');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
         } else {
            console.log('error')
            for (let i = 0; i < 4; i++) {
               if (answerArray[i] === answer[i]) {
                  strike += 1;
               } else if (answer.includes(answerArray[i])) {
                  ball += 1;
               }
            }
            setTries((prevState) => [...prevState, { try: value, result: `${strike}스트라이크 , ${ball}볼입니다.` }]);
            setValue('');
         }
      }

   }

   const onChangeInput = (e) => {
      setValue(e.target.value);
   };

   return (
      <>
         <h1>{result}</h1>
         <form onSubmit={onSubmitForm}>
            <input maxLength={4} value={value} onChange={onChangeInput} />
            <button>입력!</button>
         </form>
         <div>시도: {tries.length}</div>
         <ul>
            {tries.map((v, i) => {
               return (
                  <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
               )
            })}
         </ul>
      </>
   );
}

// export const hello = 'hello';  //  import { hello }       export 만 썼을때 불러오는방법    여러번 가능

export default NumberBaseBall;  //import NumberBaseball    default를 썼을대의 불러오는 방법,  단! default는 한번만 가능하다