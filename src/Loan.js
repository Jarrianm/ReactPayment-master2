class Loan {
  constructor(loanAmount, term, rate) {
    this.loanAmount = loanAmount;
    this.term = term;
    this.rate = rate;
    this.termInMonths = this.term * 12;
  }

  /**
   * @returns {float} monthly payment in dollars.
   */
  monthlyPayment() {
    var result = 0;
    var pmts = this.termInMonths;
    var monthlyRateInDec = this.rate / 1200;
    var topEq = monthlyRateInDec * Math.pow(1 + monthlyRateInDec, pmts);
    var botEq = Math.pow(1 + monthlyRateInDec, pmts) - 1;
    result = this.loanAmount * (topEq / botEq);
    return Math.round(result);
  }
}

export default Loan;
