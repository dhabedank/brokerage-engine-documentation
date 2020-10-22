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
      items: ['listings/overview','listings/statuses','listings/fields','listings/getting-started', 'listings/listing-detail'],
    },
    {
      type: 'category',
      label: 'Marketing',
      collapsed: true,
      items: ['marketing/overview','marketing/opportunity-setup','marketing/vendors'],
    },
    {
      type: 'category',
      label: 'Documents',
      collapsed: true,
      items: ['documents/overview','documents/getting-started'],
    },
    {
      type: 'category',
      label: 'Transactions',
      collapsed: true,
      items: ['transactions/overview','transactions/getting-started', 'transactions/commission-schedule', 'transactions/dashboard','transactions/transaction-detail','transactions/address-book'],
    },
  ]
}