module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['intro','reference','dashapi','admin-tools','invoices','permissions'],
    },
    {
      type: 'category',
      label: 'Listings',
      collapsed: false,
      items: ['listings/listings-overview','listings/listings-getting-started'],
    },
    {
      type: 'category',
      label: 'Transactions',
      collapsed: false,
      items: ['transactions/transactions-overview','transactions/transactions-workflow', 'transactions/transactions-dashboard','transactions/transactions-transaction','transactions/transactions-addressbook'],
    },
  ]
}