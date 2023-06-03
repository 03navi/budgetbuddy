// Transaction Class
class Transaction {
  constructor(amount, description, type) {
    this.amount = amount;
    this.description = description;
    this.type = type;
  }
}

// UI Class
class UI {
  static displayTransactions() {
    const transactions = Store.getTransactions();
    const transactionList = document.querySelector('#transactionList');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => UI.addTransactionToList(transaction, index));
  }

  static addTransactionToList(transaction, index) {
    const transactionList = document.querySelector('#transactionList');
    const listItem = document.createElement('li');
    listItem.classList.add(transaction.type);
    listItem.innerHTML = `
      <span>${transaction.description} (<span class="rupee-symbol">&#8377;</span>${transaction.amount.toFixed(2)})</span>
    `;
    transactionList.appendChild(listItem);
  }
}

// Store Class
class Store {
  static getTransactions() {
    let transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  }
}

// Event: Display Transactions
document.addEventListener('DOMContentLoaded', UI.displayTransactions);
