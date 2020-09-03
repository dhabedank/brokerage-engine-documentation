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

Prior to Brokerage Engine, tracking agent expenses on marketing and services was a messy process. Tracking spreadsheets, missed charges, erroneous charges, weeks (or months) of waiting on receivables - were so commonplace. With Brokerage Engine's invoicing system, you can say goodbye to all of that.

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

## Workflow