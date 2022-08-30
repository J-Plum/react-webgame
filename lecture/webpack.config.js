const path = require("path");

module.exports = {
   name: "wordrelay-setting",
   mode: "development", //실 서비스 production
   devtool: "eval", //빠르게
   resolve: {
      extensions: [".js", ".jsx"], // 아래의 entry에 적지않은 확장자들을 여기서 찾아서 맞춰준다.
   },

   entry: {
      app: ["./client"], // client.jsx에서 이미 WordRelay.jsx를 불러오고있기 때문에 적어줄 필요가 없다.
   }, //입력

   module: {
      rules: [
         {
            test: /\.jsx?/, //js파일과 jsx파일을 이 룰을 적용하겠다는 의미.
            loader: "babel-loader", // babel-loader를 적용해 문법호환이 가능하게 만들기위함
            options: {
               presets: ["@babel/preset-env", "@babel/preset-react"],
               plugins: ["@babel/plugin-proposal-class-properties"],
            }, //바벨의 옵션
         },
      ],
   }, //entry 의 파일을 읽고 적용할 module

   output: {
      path: path.join(__dirname, "dist"),
      filename: "app.js",
   }, // 출력
};
