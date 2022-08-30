const React = require("react");
const { Component } = React;

class WordRelay extends Component {
   state = {
      text: "hello, webpack",
   };

   render() {
      return <h1>{this.state.text}</h1>;
   }
}

module.exports = WordRelay; //노드의 모듈 시스템 module.exports를 추가하면 다른곳에서 불러올 수 있다.
