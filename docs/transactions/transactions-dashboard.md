---
id: transactions-dashboard
title: Dashboard
sidebar_label: Dashboard
---
The Dashboard offers a quick summary of transactional activity in Brokerage Engine.
![Dashboard](/docs/tss-dashboard.png)
## Key Indicators
Provides quick insights into transactions or agents. Key indicators also act as filtered searches, and can be 
- **Transactions Not Commissioned**
  - A transactions is added into Brokerage Engine through LLS and feeds to over TSS into the uncommission folder. This allows the accounting department to get a perspective on the amount of newly pending properties and a first look at the calculations.
  
  :::info
  The user is required to set the gross commission amount and assign the agent appropriate compensation plan. Once these features are set the transaction is now active and will be reflect on the Under Contract Forecasting Report.
  :::
- **Quickbooks Errors**
  - If the transaction is not able to sync to QBO successful it will populate in the folder along with and explanation of the error.
- **Completed/Pending Quickbooks**
  - Once a transaction is make in completed status there is a manual push button to Quickbooks. This folder will indicate and completed transactions that have not been pushed to Quickbooks.
- **Agents with Expired Commission**
  - An agent whose commission anniversary date has expired.
- **Agents with Commission Expiring Soon**
  - An agents whose commission anniversary date is to expire within the next three months. This allows staff to plan ahead and communicate with the agent accordingly.
- **Transactions closing in the next x days**
  - Based on Close Date, refers to the number of transactions closing within a specified period of time. The time period can be configured in Brokerage settings.

## Active Transactions
Provides a snapshot of Customer transactions which have been recently updated.
- **Search Navigation**
  - Allows the user to quickly find a transaction within Brokerage Engine. A user can search by Property Address, Status, or Agent.
- **Actions**
  - Allow the user to navigate directly to the transaction details page by click the arrows.
- **Status**
  - The status is reflective of what stage the individual transaction in.