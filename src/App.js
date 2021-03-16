import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NumberFormat from "react-number-format";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BCH,DOGE,DSH,BNB,ADA&tsyms=USD,EUR,NGN&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">CryptoXchange</header>
        <table id="table">
          <thead>
            <tr>
              <th></th>
              <th>USD 💵 </th>
              <th>EUR 💶 </th>
              <th>NGN 🆖 </th>
            </tr>
          </thead>
          {Object.keys(this.state.cryptos).map((key) => (
            <tbody>
              <tr>
                <td className="left">{key} </td>
                <td className="usd">
                  <NumberFormat
                    value={this.state.cryptos[key].USD}
                    displayType={"text"}
                    decimalprecision={4}
                    thousandSeparator={true}
                  />
                </td>
                <td className="eur">
                  <NumberFormat
                    value={this.state.cryptos[key].EUR}
                    displayType={"text"}
                    decimalprecision={4}
                    thousandSeparator={true}
                  />
                </td>
                <td className="ngn">
                  <NumberFormat
                    value={this.state.cryptos[key].NGN}
                    displayType={"text"}
                    decimalprecision={4}
                    thousandSeparator={true}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <footer>Fiyifoluwa 🗿 © 2020</footer>
      </div>
    );
  }
}

export default App;
