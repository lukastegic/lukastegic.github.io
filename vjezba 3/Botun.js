await import("./node_modules/react/umd/react.development.js");
export default class BotunSaStanjem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Sklopka podignuta"), /*#__PURE__*/React.createElement("button", {
        onClick: () => this.setState({
          liked: false
        })
      }, "Spusti sklopku"));
    } else {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Sklopka spu\u0161tena"), /*#__PURE__*/React.createElement("button", {
        onClick: () => this.setState({
          liked: true
        })
      }, "Podigni sklopku"));
    }
  }

}