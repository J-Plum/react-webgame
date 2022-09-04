const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
   const [word, setWord] = useState('이정재');
   const [value, setValue] = useState('');
   const [result, setResult] = useState('');
   const inputRef = useRef(null);


   const onSubmitForm = (e) => {
      e.preventDefault();
      if (value === "") {
         return setResult("공백은 안댑니다.");
      }
      if (word[word.length - 1] === value[0]) {
         setResult("딩동댕");
         setWord(value);
         setValue('');
         inputRef.current.focus();
      } else {
         setResult('땡');
         setValue("");
         inputRef.current.focus();
      }
   };

   const onChangeInput = () => {
      setValue(value);
   };

   return (
      <>
         <div>{word}</div>
         <form onSubmit={onSubmitForm}>
            <label htmlFor="wordInput">글자를 입력하세요</label>
            <input className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
            <button className="클래스입니다">입력!!</button>
            <h1>핫로더! 짱이다아아</h1>
         </form>
         <div>{result}</div>
      </>
   );
}

module.exports = WordRelay; //노드의 모듈 시스템 module.exports를 추가하면 다른곳에서 불러올 수 있다.
