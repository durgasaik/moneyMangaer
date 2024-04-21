// Write your code here

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const deleteTransactionItem = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transaction-item-list">
      <p className="item-name">{title}</p>
      <p className="item-name">Rs {amount}</p>
      <p className="item-name">{type}</p>
      <button
        type="button"
        onClick={deleteTransactionItem}
        data-testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
