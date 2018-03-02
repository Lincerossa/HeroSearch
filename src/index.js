import React from "react";
import { render } from "react-dom";
import HeroSearch from "./HeroSearch";

const randomMember = array => array[Math.floor(Math.random() * array.length)];
const itemFactory = id => {
  return {
    id,
    slug: randomMember([
      "ciao-marcello",
      "gay-ville",
      "castello-e-parco-di-masino"
    ]),
    type: randomMember(["torre", "bene", "luogo"]),
    name: randomMember(["Castello Masino", "Villa Bella"])
  };
};

let id = 0;
let makeItems = () => [...new Array(20)].map(() => itemFactory(id++));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: false
    };
  }

  onSelect(value) {
    console.log(value);
  }

  updateItems(value) {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      if (!value) {
        this.setState({
          items: [],
          loading: false
        });
        return false;
      }
      this.setState({
        items: makeItems(),
        loading: false
      });
    }, Math.random() * 2000);
  }

  render() {
    const { items, loading } = this.state;
    return (
      <div>
        <HeroSearch
          items={items}
          loading={loading}
          onInputValueChange={this.updateItems.bind(this)}
          onSelect={this.onSelect.bind(this)}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
