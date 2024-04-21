import {Component} from 'react'
import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      deleteList => deleteList.id !== id,
    )
    this.setState({transactionList: updateTransactionList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const optionType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )

    const {displayText} = optionType

    const transactionItem = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, transactionItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="wishes">
            Welcome back to your
            <span className="concept-name"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-container">
          <h1 className="transaction-heading">Add Transaction</h1>
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onChangeTitleInput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="text"
              id="amount"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onChangeAmountInput}
            />
            <label htmlFor="select">TYPE</label>
            <select
              id="select"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(transactionType => (
                <option
                  key={transactionType.optionId}
                  value={transactionType.optionId}
                >
                  {transactionType.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="transaction-list-container">
          <h1 className="history-heading">History</h1>
          <div className="history-menu-bar">
            <ul className="history-item-container">
              <p className="menu-item">Title</p>
              <p className="menu-item">Amount</p>
              <p className="menu-item">Type</p>

              {transactionList.map(eachList => (
                <TransactionItem
                  key={eachList.id}
                  transactionDetails={eachList}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
