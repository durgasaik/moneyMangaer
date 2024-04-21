// Write your code here
const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance-amount-container">
          <p className="heading">Your Balance</p>
          <p className="balance-amount" data-testId="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="income-amount-container">
          <p className="heading">Your Income</p>
          <p className="income-amount" data-testId="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="expense-amount-container">
          <p className="heading">Your Expenses</p>
          <p className="expense-amount" data-testId="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
