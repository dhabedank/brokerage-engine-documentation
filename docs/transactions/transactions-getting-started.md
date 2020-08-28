---
id: transactions-workflow
title: Getting Started with a Transaction Workflow
sidebar_label: Getting Started with a Transaction Workflow
---
Processing a commission doesn't need to be difficult. In fact, with Brokerage Engine, you could process a commission and pay an agent in less time than it takes to read this article. Below, we outline our suggested workflow for processing transactions.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.3rem',
    }}>
    {children}
  </span>
);

:::tip
Transactions should be initiated from a Customer's white-label instance of Brokerage Engine. To put a **listing** under contract, navigate to the Listing Detail page and under Change Status dropdown, click **Add Transaction**. For a transaction where only the buyer is represented, use the "New Transaction" button on the Transactions >> Pending page.
:::

1. **Create the Transaction**
   - Add a New Transaction (UCC) from either the Listing Detail page or by navigating to Transaction >> Pending and clicking "New Transaction".
      - Two things happen when a user initially saves the New Transaction (UCC). 
        1. A pending transaction is created in DASH.
        2. The transaction becomes available in the Transactions Module in Open 
2. **Trust but Verify**
   - Agent commission schedules will be automatically attached to new transactions.
      - If there is already a default commission schedule attached, it is recommended to verify that plan.
      - A default commission schedule is a plan that will automatically get attached to an agent when he or she is added to a transaction.
3. **Modify**
   - Commission rate reductions or increases need to be added or verified (if applicable).
   - Any referral fees need to be added (if applicable).
4. **Distributions**
   - Set or change distributions, if necessary.
     - This shows how all parties will be paid.
       - Is the agent being paid at title or settling at brokerage?
       - If settling at brokerage, will the agent be paid by check or EFT?
       - If a referral company is involved, how will they be paid? From title or brokerage?
5. **Status Updates**
   - When the commission disbursement authorization has been sent to title, if applicable, the transaction status can be changed to <Highlight color="#5bc0de">Distributions Submitted to Title</Highlight>.
   - When title payment has been received by the brokerage, the transaction status can be changed to <Highlight color="#5cb85c">Title Payment Received</Highlight>.
6. **Finalize**
   - To finalize the transaction, update the workflow status to <Highlight color="#5cb85c">Completed</Highlight>.
   - Once the transaction is marked as <Highlight color="#5cb85c">Completed</Highlight>, Brokerage Engine will sync all finalized data to the New Transaction (UCC) and update the DASH status from “Pending” to “Closed”.
   - This data will sync up and change the transaction status in Dash to “Closed”.
7. **Push to Accounting**
   - Once the transaction has been completed, Upload to Accounting System can be selected in order to push all data to QuickBooks Online.
     - If the agent is being paid by check, then a check to be printed will be generated in QuickBooks Online.
     - If the agent is being paid by EFT, then payment will be sitting in work queues as a pending payment, waiting to be batched.
