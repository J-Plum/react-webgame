// const React = require("react");
// const { Component } = React;

// class WordRelay extends Component {
//    state = {
//       word: "이정재",
//       value: "",
//       result: "",
//    };
//    onSubmitForm = (e) => {
//       e.preventDefault();
//       if (this.state.value === "") {
//          return this.setState({
//             result: "공백은 안댑니다.",
//          });
//       }
//       if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//          this.setState({
//             result: "딩동댕",
//             word: this.state.value,
//             value: "",
//          });
//          this.input.focus();
//       } else {
//          this.setState({
//             result: "땡",
//             value: "",
//          });
//          this.input.focus();
//       }
//    };

//    onChangeInput = (e) => {
//       this.setState({
//          value: e.target.value,
//       });
//       console.log(this.state.word);
//       console.log(this.state.value);
//    };

//    onRefInput = (c) => {
//       this.input = c;
//    };

//    render() {
//       return (
//          <>
//             <div>{this.state.word}</div>
//             <form onSubmit={this.onSubmitForm}>
//                <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
//                <button>입력!</button>
//                <h1>핫로더 짱이다아아</h1>
//             </form>
//             <div> {this.state.result}</div>
//          </>
//       );
//    }
// }

// module.exports = WordRelay; //노드의 모듈 시스템 module.exports를 추가하면 다른곳에서 불러올 수 있다.
