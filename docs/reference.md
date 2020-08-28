---
id: reference
title: Brokerage Engine Reference Guide
sidebar_label: Brokerage Engine Reference Guide
hide_title: false
hide_table_of_contents: false
description: Understand common terminology and fields used in Brokerage Engine.
keywords:
  - listings
  - transactions
  - documents
  - tasks
  - marketing
  - terminology
  - guide
  - quick reference
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

The language of real estate is diverse and wide-ranging. Understanding the terms we use in Brokerage Engine is key to effectively navigating your way through the platform. In this article, we provide definitions and additional context to the fields, functionalities and features contained within the platform.

## General
Brokerage Engine is a modular platform, but there are some common features that interplay with listings, tasks, marketing and documents. Below we discuss those in more detail.

### Dashboard
The Dashboard provides users with updates and quick access to Brokerage Engine data through a collection of pre-defined widgets. This is not to be confused with the [Transactions dashboard](./transactions/transactions-dashboard.md), which is only accessible by `Accounting` users. 

![Dashboard](/docs/general-dashboard.gif)

:::note
Dashboard widgets are fixed, and **cannot** be modified on a per-customer basis.
:::

#### Quick Launch Dashboard Widget
Displays all new listings in <Highlight color="#E57373">DRAFT</Highlight> status, where a user has **also** completed the Coming Soon - Listing Announcement task. When the listing moves to <Highlight color="#16D39A">ACTIVE</Highlight> it will be automatically removed from the Coming Soon dashboard widget.

#### Buyer Needs Dashboard Widget
Users may add buyer needs to the company dashboard, and also broadcast that buyer need to agents in selected offices. By clicking <Highlight color="#00B5B8">**+** Add Buyer Needs</Highlight>, the user is prompted to enter the following fields.
- `Location`
- `Budget`
- `Comments`
- `Who Should Know?`
  - Tagging offices in this section will notify all agents in that office by email of the new buyer need.
- `Contact Agent` **(staff only)**
  - When a staff member is adding the buyer need on behalf of an agent, they must designate who that agent is.

:::tip
Upon customer request, Brokerage Engine can enable a 30, 60 or 90 day auto-cleanup routine for Buyer Needs.
:::

#### Task Dashboard Widget
Provides a summary of task pending the `Agent` user's input or tasks in progress by another `Admin` user. Agents will only have visiblity to their own tasks, while Admins may see all tasks in the company.

#### Upcoming Events Dashboard Widget
Integrates natively with [Eventbrite](https://www.eventbrite.com/) to display company events, trainings or sales meetings. Customer does have an option to embed a calendaring solution of their choice, as long as it supports iFrame embedding.

#### Links & Documents Dashboard Widget
`Admin` users may add links, or upload files, for commonly used resources in the brokerage. `Agent` users can search by name or category (which can be defined under the [General System Configuration](/docs/admin-tools#general-system-configuration) screen) to easily find the resources.

#### Document Lists Dashboard Widget
Provides a summary of open document files and the status of each checklist item. `Agent` users will have visibility of their own document files, while `Admin` users will see all document files in the company.

#### Marketing Dashboard Widget
`Admin` users 