import React, { Component } from "react";
import "./Calculator.css";
import Loan from "./Loan";
import Payment from "./Payment";
import { Button, Popup } from "semantic-ui-react";

class Calculator extends Component {
  state = {
    loanAmount: 0,
    term: 0,
    rate: 0,
    payment: 0,
    showComponent: false,
    change: false,
    name: "",
  };

  calculatorClickHandler = (e) => {
    e.preventDefault();
    // console.log(this.state)
    let loanAmount = this.state.loanAmount;
    let term = this.state.term;
    let rate = this.state.rate;

    const loan = new Loan(loanAmount, term, rate);
    let payment = loan.monthlyPayment();

    payment += "";
    payment = payment.replace(",", "");
    let x = payment.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2");
    payment = x1 + x2;
    console.log(payment);
    this.setState({ payment: payment, showComponent: true });
  };

  onChange = (e) => {
    //   console.log(e.target.value);
    let name = e.target.name;
    // let loanAmount = this.state.loanAmount;
    // let term = this.state.term;
    // let rate = this.state.rate;

    // console.log(rate);
    // const loan = new Loan(loanAmount, term, rate);

    // let payment = loan.monthlyPayment();
    // console.log(payment);
    // payment += "";
    // payment = payment.replace(",", "");
    // let x = payment.split(".");
    // let x1 = x[0];
    // let x2 = x.length > 1 ? "." + x[1] : "";
    // let rgx = /(\d+)(\d{3})/;
    // while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2");
    // payment = x1 + x2;

    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <div className="card">
        <form>
          {/* <div>  <Popup position='right center' content='Enter the total amount of your loan' trigger={<Button floated='right' size= 'mini'icon='question' />} /></div> */}
          <fieldset>
            <legend>
              <span className="number"></span> Let us do the work for you!
            </legend>
            $Loan Amount
            <Popup
              position="right center"
              content="Please enter the total amount of your loan"
              trigger={
                <input
                  type="text"
                  name="loanAmount"
                  placeholder={this.state.loanAmount}
                  onChange={(e) => this.onChange(e)}
                />
              }
            ></Popup>
            Term
            <Popup
              position="right center"
              content="Please enter the loan term in years"
              trigger={
            <input
              type="text"
              name="term"
              placeholder={this.state.term}
              onChange={(e) => this.onChange(e)}
            />}></Popup>
            %Rate
            <Popup
              position="right center"
              content="Please enter your intrest rate"
              trigger={
            <input
              type="text"
              name="rate"
              placeholder={this.state.rate}
              onChange={(e) => this.onChange(e)}
            />}></Popup>
          </fieldset>
          <button type="submit" onClick={(e) => this.calculatorClickHandler(e)}>
            Show Payment Info
          </button>
        </form>
        {this.state.showComponent ? (
          <Payment change={this.state.change} payment={this.state.payment} />
        ) : null}
      </div>
    );
  }
}

export default Calculator;
