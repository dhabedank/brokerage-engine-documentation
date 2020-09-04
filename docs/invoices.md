---
id: invoices
title: Invoicing
sidebar_label: Invoicing
hide_title: false
hide_table_of_contents: false
description: Invoice agents effectively and accurately.
---
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '4px',
      color: '#fff',
      padding: '0.3rem',
    }}>
    {children}
  </span>
);

Prior to Brokerage Engine, tracking agent expenses on marketing and services was a messy process. Tracking spreadsheets, missed charges, erroneous charges, weeks (or months) of waiting on receivables - were so commonplace. With Brokerage Engine's invoicing system, you can say goodbye to all of that. Issued invoices are immediately available to agents for payment, or autopayment, and stay in sync with the Accounting System.

## Invoice Statuses

#### <Highlight color="#FFA87D">Open</Highlight>
An invoice in Open status is available to be paid by an agent.

#### <Highlight color="#FFA000">Overdue</Highlight>
An invoice in Overdue status is available to be paid by an agent, but has exceeded its Due Date.

#### <Highlight color="#FFA87D">Pending</Highlight>
An invoice in Pending status is not yet available to be paid by an agent, as it is awaiting confirmation of a final amount due. Pending invoices are generated from Marketing Opportunities which have "Invoice Upon Task Completion" selected.

#### <Highlight color="#16D39A">Paid</Highlight>
An invoice in Paid status has been paid by the agent, or indicated as paid by an `Accounting` user.

#### <Highlight color="#B0BEC5">Voided</Highlight>
An invoice in Voided status has been voided by an `Accounting` user.

## Create an Invoice
Creating invoices can be accomplished several ways, either manually or through workflows. Below we discuss these methods and the differences between them.

### Marketing Orders
When initiating an order through the Marketing Catalog, `Agent` users will be issued an invoice for the relevant amount in <Highlight color="#FFA87D">Open</Highlight> status. If the opportunity has been configured with **Invoice Upon Task Completion** selected, the invoice will be issued in <Highlight color="#FFA87D">Pending</Highlight> status.

### Subscriptions
Subscriptions are used to invoice agents for services provided on a recurring basis such as desk fees, MLS dues or E&O. `System` users have the option to create new Subscriptions, while `Admin` and above users can opt agents into Subscriptions.

:::info
Customers can choose whether they would like Subscriptions to follow "bill forward" or "bill backwards" logic. This logic must be applied to all Subscriptions.
:::

#### Add Subscription
While logged in as a `System` user, navigate to **Invoices >> Subscriptions** and click on the <Highlight color="#00B5B8">+ Add Subscription</Highlight> button. After completing the fields below, be sure to click <Highlight color="#00B5B8">Add</Highlight>.
- Name
  - How the Subscription will be referred-to in Brokerage Engine, as well as the line item that is displayed on an invoice.
- Ledger Account
  - Select which account the receivable should track to in the Accounting System.
- Frequency
  - How often should an agent be billed?
    - Monthly
    - Quarterly
    - Yearly
- Default Price
  - How much should the agent be charged?
  - This value can be overridden on an case-by-case basis when opting agents into the Subscription.
- Description
  - This will display in Brokerage Engine and on any Subscription invoices issued.

#### Edit Subscription
Edits to Subscriptions can be made but are not retroactive and will only apply to future Subscription invoices issued.

#### Edit Subscribers
Individual agents can be searched from the company roster and opted into subscriptions using the Activate Subscription action button. <Highlight color="#00B5B8">Batch Activation</Highlight> is particularly helpful for opting entire offices into new Subscriptions, or making updates to existing Subscription terms.

##### Activate Subscription
Click the Activate Subscription action icon on a given agent and provide the following details. After completing the fields below, be sure to click <Highlight color="#00B5B8">Activate</Highlight>.
- Start Date
  - Invoices are billed on the 1st of each month and cannot be issued retroactively.
  - It is recommended to set an agent's Start Date to the last day of the month prior to when you would like Subscription billing to start.
- End Date **(optional)**
  - It is recommended to set an agent's End Date to the day after you would like them to receive their final Subscription invoice.
- Term **(optional)**
  - Predefined subscription term lengths.
    - 3 Months
    - 6 Months
    - 12 Months
- Price Override
  - Leave blank to use default price.
- Comments
  - What additional comments would you like shown on an invoice?

### Manual Invoice
Invoices can be issued manually by navigating to **Invoices >> Open Invoices** and clicking the <Highlight color="#00B5B8">+ New Invoice</Highlight> button. After completing the fields below, be sure to click <Highlight color="#00B5B8">Save</Highlight>.
- Bill To
  - Indicate which `Agent` user should be assigned the invoice.
- Invoice Date
  - Indicate the date an invoice was should be issued.
    - If issued at a future date, the invoices will still be visible to the agent once saved.
- Due Date
  - Once an unpaid invoice has surpassed its Due Date, the status will change to <Highlight color="#FFA000">Overdue</Highlight>.
  - If the agent is opted into Autopay, they will be billed for an invoice on its Due Date.
- Invoice Item
  - Opportunities configured with **Restricted for Admin Invoicing** checkbox selected.
  - Brokerage Engine requires an Opportunity to be created prior to billing an agent manually. Opportunities contain additional logic, such as category and ledger account, which are essential to ensure correct accounting of receivables.
- Invoice Amount
  - How much should the agent be billed for?
- Invoice Detail
  - What comments should show on an invoice?

Clicking <Highlight color="#00B5B8">Add Item</Highlight> will allow the user to add additional line items.

## Invoice Detail
The Invoice Detail screen provides information about an invoice, notes, an audit trail and controls for editing the invoice. Only users with `Accounting` permissions and above may edit invoices.

#### Download PDF
Downloads a copy, in PDF format, of the invoice for record-keeping purposes.

### Edit Details
The Edit Details button allows an `Accounting` user to modify the following.
- Bill To
  - Invoices may be reassigned to another agent.
- Delete Line Item
  - Allows the user to delete specific line items on an invoice.
- Add Adjustment
  - Increase or decrease the $ amount of a line item. Putting a negative (-) before the adjustment will decrease the line item by that amount.

Be sure to click <Highlight color="#16D39A">Done Edit</Highlight> once all adjustments to the invoice have been made.

#### Split Invoice
Found under the Edit Details dropdown, `Accounting` users can split invoices between two or more agents.

:::note
Splitting invoices will void the existing invoice and create new invoices for the agents.
:::

#### Mark Paid
Found under the Edit Details dropdown, `Accounting` users can mark an invoice as paid or issue a partial payment towards the invoice.

#### Void Invoice
Found under the Edit Details dropdown, `Accounting` users can mark an invoice as <Highlight color="#B0BEC5">Voided</Highlight>. Voiding an invoice will also void the receivable in the Accounting System.

## Payment Methods
Brokerage Engine enables agents to seamlessly pay for invoices via credit card, allowance or commission. Below we outline how different payment methods interact with invoices and the Accounting System.

### Credit Card
Brokerage Engine supports paying invoices by credit card, powered by an integration with [Braintree Payment Gateway](https://www.braintreepayments.com/). This integration offers an effortless, efficient and secure way of paying down invoices natively within Brokerage Engine.

:::note
Braintree generally charges 2.9% + $0.30 on all transactions it processes. **Example:** An agent is invoiced for $100 and pays via credit card. The agent will see a $100 charge to their card, while the brokerage receives $96.80. Braintree keeps $3.20 (2.9% + $0.30).
:::

When viewing an invoice, an `Agent` user may click <Highlight color="#00B5B8">Pay Invoice</Highlight> to select a previously used [credit card](reference.md/#payment-settings), or enter details of a new credit card with "Choose another way to pay". Invalid or expired credit cards will return an error message ("Please check your information and try again.").

If the payment is successful, the agent will receive a confirmation message. If the payment is unsuccessful, the agent will receive a "Failed to Process Payment. Please contact accounting for assistance." error message.

:::info Monthly Statements
For customers who issue monthly statements to agents, when an `Agent` user clicks the <Highlight color="#00B5B8">Pay Invoice</Highlight> button - they will receive a "No Payment Required. The invoice will be included in your monthly statement." notice.
:::

Invoices paid by credit card will automatically apply towards that agent's balance in the Accounting System.

### Allowances
For companies which issue allowances, `Agent` users can choose to pay any invoice from their available balance. Use of allowances may not be restricted to only certain types of invoices.

#### Manage Allowances
`Accounting` users can issue allowances to `Agent` users by navigating to **Invoices >> Allowances**, searching for the agent in question and clicking the action button. The Allowance Detail screen will display an agent's current allowance accounting, along with invoices that have been paid using their allowance.

:::tip
An `Agent` user can view their current allowance balance, and history, by navigating to the **Invoices** tab from their account.
:::

##### Add Adjustment
In the event an allowance needs to be fully or fractionally rescinded, clicking the <Highlight color="#00B5B8">Add Adjustment</Highlight> will allow the `Accounting` user to make such adjustments.
- Adjustment Type
  - Allowance Expiration
    - If the customer's allowance program has a time frame on allowances issued.
  - Accounting Adjustment
    - Generally used in over-allocation scenarios.
  - Others
    - Please be sure to include comments.
- Amount
  - Enter an exact dollar figure to be subtracted from the agent's current allowance balance. Or, enter a percentage which will calculate the dollar amount to reduce from the current allowance balance.
- Comments
  - Comments are reflected on the Allowance Detail history screen.

##### Make Deposit
To issue an allowance, click the <Highlight color="#00B5B8">Make Deposit</Highlight> button.
- Amount
  - Enter the amount you would like to increase an agent's allowance by.
- Comments
  - Comments are reflected on the Allowance Detail history screen.

Should an invoice be paid by allowance, an `Accounting` user must mark that invoice as paid in the Accounting System.

### Commission
`Accounting` users may, while processing a [transaction](transactions-transaction.md/#agent-open-balances), pay down an agent's open balance from the proceeds of a transaction.

Should an invoice be paid by commission, an `Accounting` user must mark that invoice as paid in the Accounting System **and** also Mark Paid from the Edit Invoice dropdown located in the Invoice Detail screen.

### Other Payment Methods
Agents may choose to pay invoices with alternative payment methods, such as by check or cash. In this event, an `Accounting` user must mark that invoice as paid in the Accounting System **and** also Mark Paid from the Edit Invoice dropdown located in the Invoice Detail screen.

