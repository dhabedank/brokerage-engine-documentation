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
When initiating an order through the Marketing Catalog, `Agent` users will be issued an invoice for the relevant amount in <Highlight color="#FFA87D">Open</Highlight> status. If the opportunity has been configured with Invoice Upon Task Completion selected, the invoice will be issued in <Highlight color="#FFA87D">Pending</Highlight> status.

### Subscriptions
Subscriptions are used to invoice agents for services provided on a recurring basis such as desk fees, MLS dues or E&O. `System` users have the option to create new Subscriptions, while `Accounting` and above users can opt agents into Subscriptions.

#### Add Subscription
While logged in as a `System` user, navigate to Invoices >> Subscriptions and click on the <Highlight color="#00B5B8">+ Add Subscription</Highlight> button. After completing the fields below, be sure to click <Highlight color="#00B5B8">Add</Highlight>.
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

### Manual Invoice