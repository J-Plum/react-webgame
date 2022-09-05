import React, { Component } from "react";

function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수

}

class NumberBaseBall extends Component {
   state = {
      result: '',
      value: '',
      answer: getNumbers(),
      tries: [],
   };

   onSubmitForm = () => {

   }

   onChangeInput = () => {

   }

   render() {
      return (
         <>
            <h1></h1>
            <form onSubmit={this.onSubmitForm}>
               <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
            </form>
            <div>시도 : {this.state.tries.length}</div>
            <ul>
               <li>
                  {['사과', '바나나', '포도', '귤', '감', '배', '밤'].map((e) => {
                     return (
                        <li>{e}</li>
                     )
                  })}
               </li>
            </ul>
         </>
      )
   }

}

// export const hello = 'hello';  //  import { hello }       export 만 썼을때 불러오는방법    여러번 가능

export default NumberBaseBall;  //import NumberBaseball    default를 썼을대의 불러오는 방법,  단! default는 한번만 가능하다