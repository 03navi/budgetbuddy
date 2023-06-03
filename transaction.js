// Transaction Class
class Transaction {
    constructor(amount, description) {
      this.amount = amount;
      this.description = description;
    }
  }
  
  // UI Class
  class UI {
    static displayTransactions() {
      const transactions = Store.getTransactions();
      const transactionList = document.querySelector('#transactionList');
      transactionList.innerHTML = '';
  
      transactions.forEach((transaction) => UI.addTransactionToList(transaction));
    }
  
    static addTransactionToList(transaction) {
      const transactionList = document.querySelector('#transactionList');
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${transaction.description} (${transaction.amount}₹)</span>
        <span class="delete" data-description="${transaction.description}">x</span>
      `;
      transactionList.appendChild(listItem);
    }
  
    static deleteTransaction(description) {
      Store.removeTransaction(description);
      UI.displayTransactions();
    }
  }
  
  // Store Class
  class Store {
    static getTransactions() {
      let transactions = localStorage.getItem('transactions');
      return transactions ? JSON.parse(transactions) : [];
    }
  
    static addTransaction(transaction) {
      const transactions = Store.getTransactions();
      transactions.push(transaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  
    static removeTransaction(description) {
      const transactions = Store.getTransactions();
      const filteredTransactions = transactions.filter(transaction => transaction.description !== description);
      localStorage.setItem('transactions', JSON.stringify(filteredTransactions));
    }
  }
  
  // Event: Display Transactions
  document.addEventListener('DOMContentLoaded', UI.displayTransactions);
  
  // Event: Add Transaction
  document.querySelector('#transactionForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const amount = parseFloat(document.querySelector('#amount').value);
    const description = document.querySelector('#description').value;
  
    if (isNaN(amount) || description === '') {
      alert('Please enter a valid amount and description.');
      return;
    }
  
    const transaction = new Transaction(amount, description);
  
    Store.addTransaction(transaction);
    UI.addTransactionToList(transaction);
    document.querySelector('#amount').value = '';
    document.querySelector('#description').value = '';
  });
  
  // Event: Delete Transaction
  document.querySelector('#transactionList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const description = e.target.dataset.description;
      UI.deleteTransaction(description);
    }
  });
  