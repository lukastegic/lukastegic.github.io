await import("./node_modules/react/umd/react.development.js");
await import("./node_modules/react-dom/umd/react-dom.development.js");
import BotunSaStanjem from "./Botun.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BotunSaStanjem, null), /*#__PURE__*/React.createElement(BotunSaStanjem, null), /*#__PURE__*/React.createElement(BotunSaStanjem, null));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));