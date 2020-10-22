---
id: transaction-detail
title: Transaction Details Page
sidebar_label: Transaction Details Page
---
The Transaction Details page functions as a "command center" for accounting staff members to process a transaction.

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

From this screen, information about a transaction can be updated and when the transaction is <Highlight color="#5cb85c">Completed</Highlight>, changes will sync to the New Transaction (UCC) screen and close the pending transaction in DASH (if applicable to Customer).

:::note
A transaction may not be closed if the Closed date is in the future. Make sure the Closed date is set to the present or earlier.
:::

## Transaction Summary
The Transaction Summary section showcases key details about a given transaction.
![Transaction Detail Page](/docs/tss-transaction-details.png)
- **Workflow**
  - A Workflow is customized to your brokerage processes to allow staff to know which stage a transactions is in at any given time.
    - <Highlight color="#f0ad4e">Open</Highlight>
    - <Highlight color="#5bc0de">Schedule/Source Reviewed</Highlight>
    - <Highlight color="#5bc0de">Legal Verified</Highlight>
    - <Highlight color="#5bc0de">Contract Verified</Highlight>
    - <Highlight color="#5cb85c">Accounting Verified</Highlight>
    - <Highlight color="#5bc0de">Distributions Submitted to Title</Highlight>
    - <Highlight color="#5cb85c">Title Payment Received</Highlight>
    - <Highlight color="#5cb85c">Completed</Highlight>
    - <Highlight color="#777777">Fell Through/Cancelled</Highlight>
- **Fell Thru**
  - The property in which the contract is no longer valid can be marked as Fell Thru. This feature allows the brokerage to get a clear view of their ‘Fell Thru Rate’.
- **Hashtags**
  - Hashtags are unique to Brokerage Engine and allow the ability to effortless classify transactions and run reports. Hashtags can be added to encompass the overall type of transaction For example residential, commercial, or development. Hashtags can equally be added to the transaction side. For Example to distinguish between company generate deal or relocation.
- **BT Number**
  - Each Transaction receives a unique identifier once it is created in the system.
- **Recalculation**
  - If there are any edits to a transaction, the Recalculation button will update any changes made which affect the final values.
## Under Contract Checklist (UCC)
The Under Contract Checklist contains the raw data a user has initially entered, or updated, on the New Transaction (UCC) entry screen. This data is used to populate the Transaction Details for the purposes of processing a commission. If a user makes updates to the New Transaction (UCC) entry screen, the system will add a <Highlight color="#f0ad4e">Modifications</Highlight> banner to the UCC section.

:::caution
The Transaction Details page will not be updated automatically by changes made to the New Transaction (UCC) screen. Staff must review, approve and update the Transaction Details manually.
:::

## Sides
Sides indicates which side(s) the Customer's agent(s) are representing in the transaction. The side hashtag will automatically be generated and equally such if the deal is in-house an intermediary hashtag would appear. At this level you can add additional agents, referrals, concessions and bonuses.
![Transaction Detail Page](/docs/tss-sides.png)

### Side Details
Side Details are associated with the Agent and provides an overview of the calculation breakdown. Any additional calculations associated with the Agent can be added at this level. For example:
- **Manual Fee**
  - To create any fee needed that is not being accounted for on a commission schedule.
  - Utilized to give a credit back for an existing fee (negative value = positive credit).
- **Manual Income**
  - **Not recommended.** The manual income button can create additional income by using a negative value, which will create a positive credit.
- **In-house Assistance**
  - Create a flat payment to anyone helping with the transaction. This can be for another agent, administrator, or assistant.
  - Can only be charged to either the brokerage or the agent.
- **Group Admin Fee**
  - Create a percent or flat payment to anyone helping with the transaction. Can be another agent, administrator, or assistant.
  - Can only be charged to either the brokerage or the agent.
- **Agent Concession**
  - Create a concession to the buyer or seller that is charged to **only** the agent.
- **Agent Referral**
  - Create a referral to be paid to either another agent, administrator, or assistant.
  - This referral can ONLY be charged to the agent.
- **Spot Mentor**
  - Create a % bonus to another agent who is helping with this transaction.
  - Can only be charged to either the brokerage or the agent.

Side Details also identifies what compensation plan was selected for the agent(s) and which office the transaction will be attributed to.

### Brokerage
Displays the brokerage, the brokerage base commission rate and any calculations which will impact company dollar (such as commission reductions or referrals taken off the top).

### Commission-based Fees
- **Volume Breakdown**
  - Discern the amount of volume that will be attributed to each agent.
- **Side Count Breakdown**
  - Discern the number of sides that will be attributed to each agent.

## Notes
A place to add notes on a transaction.

:::info
Comments made on the New Transaction (UCC) screen will also be displayed in this section.
:::

## Agent Credit Lines
Displays if an agent on the transaction has an open credit line, such as an eCommission, which can be added to the agent profile in Address Book. The Agent Credit Lines section allows for the brokerage to pay out the company who granted to commission advancement, or display on the Commission Disbursement Authorization.

## Agent Open Balances
Displays if an agent on the transaction has an open balance with the brokerage. This is actively kept in sync with the accounting system, and updates as new invoices are issued. An outstanding balance may be deducted directly from an agent's commission.

## Distributions
Distributions determine how all parties involved on a transaction will be paid, either by check, EFT or at Title.

### Distribution Instructions
Distribution Instructions are set to indicate who is responsible for payouts of the transaction. The user can select if the payment is to be received from title at closing or paid by the Brokerage. The ability is specify payment instructions is also an option. For Example, company wire information or where to deliver the check.

### Agent Breakdowns
Provides a clear breakdown of calculations for the agent. A user can download the breakdown in PDF format or send directly to the agent via email. If multiple agents are present on the transaction, each agent with have their own breakdown.

### CDA Documents
A Commission Disbursement Authorization Document (CDA) is generated on all transactions, regardless of agent distribution instructions. The CDA can be grouped per agent or by brokerage. Within Brokerage Engine there is an electronic signature that allows the issuing user to conveniently download a signed or unsigned document.

:::info
The CDA and Breakdown will only be available once Distribution Instructions have been set for all parties, and Closer information has been added to the transaction.
:::

## Accounting
The Accounting section provides information about how a transaction will journal in the Accounting System, and controls to submit to the Accounting System.

### Journal Entries
View of the journal entries that feed into the Accounting System prior to syncing. The ability to view the mapping of GL accounts shows how the entry will land on the company P&L.

### Upload to Accounting System
Once the transaction is in <Highlight color="#5cb85c">Completed</Highlight> status, a user will have the ability to review and upload to the Accounting System in one click. This must be done manually to ensure all information is accurate prior to the sync.

### Block Upload to Accounting
Prevents a transaction from feeding to the Accounting System. This is often used for transactions which do not generate income, such as a personal transaction.

### Check Entries
Created for any Agent or Company that is being paid by check, at the brokerage, on a transaction. It gives the user a clear view of the amount to be paid, to whom the check is written to and what account it will be debited from. The memo line will list the property address.

### Billing Entries
Created for any Agent or Company who is being paid by EFT. Electronic Fund Transfers file, commonly referred to as ACH, can be generated directly from Brokerage Engine under Work Queues. The entry will look identical to the Check Entries.

### Accounting System Response
Quick reference links to access journal entry and bill entities in the Accounting System.