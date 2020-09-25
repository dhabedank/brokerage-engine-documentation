module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['intro','reference','dashapi','admin-tools','invoices','permissions','notification-library'],
    },
    {
      type: 'category',
      label: 'Listings',
      collapsed: true,
      items: ['listings/listings-overview','listings/listings-statuses','listings/listings-fields','listings/listings-getting-started', 'listings/listings-listing-detail'],
    },
    {
      type: 'category',
      label: 'Marketing',
      collapsed: true,
      items: ['marketing/marketing-overview','marketing/marketing-create','marketing/marketing-vendors'],
    },
    {
      type: 'category',
      label: 'Documents',
      collapsed: true,
      items: ['documents/documents-overview','documents/documents-getting-started'],
    },
    {
      type: 'category',
      label: 'Transactions',
      collapsed: true,
      items: ['transactions/transactions-overview','transactions/transactions-workflow', 'transactions/transactions-dashboard','transactions/transactions-transaction','transactions/transactions-addressbook'],
    },
  ]
}