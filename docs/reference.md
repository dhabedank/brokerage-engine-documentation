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
`Admin` users may select marketing opportunities to display under this section via the Featured on Agent Dashboard checkbox in the Edit Marketing Opportunity screen.

### Quick Search 🔍
The Quick Search feature allows users to quickly find records of multiple types through a global search mechanism. Quick Search is found in the upper left-hand corner of the screen next to **Apps & Tools** and includes the following types of information.
- Listings
- Transactions **(staff only)**
- Agents
  - `Admin` and above users may click on an agent's profile picture to quickly impersonate that agent.
- Links & Documents
- Marketing Opportunities
- Invoices

### Apps & Tools
The Apps & Tools dropdown will contain any Single Sign On (SSO) links that the brokerage has opted into for their instance of Brokerage Engine. Additionally, links to non-integrated services can be included here for convenient access.

:::info
Please contact [Support](support@brokerageengine.com) to have links added to this section.
:::

## Profile Options
Located in the upper right-hand corner, users will see their profile picture (if available) and name. Hovering over the name dropdown will expose three (3) options.
-  Edit Profile
-  Tutorial Videos
-  Logout
   -  Exit Impersonation **(staff only, when impersonating an agent's profile)**

### Edit Profile
The Edit Profile screen contains details about a users profile as it pertains to Brokerage Engine.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/N3AOuhDB-oI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### For `Admin` Users
Admin level users and above may edit their Brokerage Engine profile, or change their password from the Edit Profile screen.

##### Edit Profile
- **About User**
  - First Name
  - Last Name
  - Display Name
    - Will determine how the user is known to other users in the system. For example, when claiming a task, the Display Name is who the agent will see working on the task.
- **Profile Images**
  - User Avatar
- **Contact Info**
  - Email
    - Email used for logging in and receiving notifications. This email may not be updated by the user. Please contact your `System` admin to update an email using the [User Account Management](admin-tools#user-account-management) administrator tool.
  - Phone
  - Slack
- **Social Info**
  - Facebook
  - Twitter
  - LinkedIn
  - Instagram

##### Change Password
Users may update their own password when logged into Brokerage Engine, or by a `System` admin using the tools referenced above.

#### For `Agent` Users
Agent level users may edit their Brokerage Engine profile, make limited edits to their public DASH profile or change their password from the Edit Profile screen.

##### Edit Profile
- **About User**
  - First Name
  - Last Name
  - Display Name
    - Derived from the agent's Familiar Name + Last Name.
- **Profile Images**
  - User Avatar
- **Contact Info**
  - Email
    - Email used for logging in to Brokerage Engine. This email may not be updated by the user. Please contact your `System` admin to update an email using the [User Account Management](admin-tools#user-account-management) administrator tool.
  - Phone
  - Slack
- **Social Info**
  - Facebook
  - Twitter
  - LinkedIn
  - Instagram

##### Edit DASH
- **Profile Image**
  - Allows an agent to update their DASH public profile image.
- **Contact Info**
  - Phone Number
    - Allows an agent to update their DASH public profile phone number.
  - Website
    - Allows an agent to update their DASH public profile website link.
- **Profile Remarks**
  - Allows an agent to update their DASH public profile biography.


##### Change Password
Users may update their own password when logged into Brokerage Engine, or by a `System` admin using the tools referenced above.

##### Office Affiliation
Displays the agent's Primary Office, as determined in their DASH profile. Brokerage Engine does not recognize secondary offices or affiliations.

##### Edit Notification Preference
Control how, when and who is notified.

- **Notification Settings**
  - **Email**
    - Designate the email which notifications are sent to. This is decoupled from the login email on `Agent` user profiles, as the agent may prefer to have these go to a team inbox.
    - Assistants or 3rd parties may be added to receive email communications by separating emails using commas. (i.e. **`david@brokerageengine.com,matt@brokerageengine.com`**)
      - An assistant or 3rd party will now receive all the same emails that the primary agent would receive, based on their Topics settings.
  - **Mobile (SMS)**
  - **Notification Method**
    - Email Only
    - Email and Text Message (SMS)
- **Notification Topics**
  - Coming Soon Listings
  - Buyer Needs
  - Marketing Opportunities

##### Payment Settings
Area to manage an agent's preferred payment method, adding a new payment method, or configuring their Automatic Payment settings.

:::tip
In order to remove a payment method, an `Accounting` user must revoke the card in Braintree. Agents may not remove their own payment methods at this time.
:::

:::note
Although Brokerage Engine can be configured to have Automatic Payments enabled by default on agent profiles, an agent **may** chose to disable Automatic Payments at their own discretion.
:::

## Training Videos
For your convenience and benefit, instructional videos have been included in-app to better explain common uses of Brokerage Engine. Videos are segmented by the user's permissions, so `Agent` users will only see videos pertaining to them. `Admin` users will see videos intended for staff **and** agents.

## Logout
For security purposes, it is recommended to logout of Brokerage Engine if the application was used on a public computer.

### Exit Impersonation
When an `Admin` is impersonating an `Agent` profile, exiting the impersonation will return the user back to their `Admin` account. The user may now proceed logging out of Brokerage Engine.