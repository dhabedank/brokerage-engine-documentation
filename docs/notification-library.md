---
id: notification-library
title: Notification Library
sidebar_label: Notification Library
hide_title: false
hide_table_of_contents: false
description: A library of all available notifications in Brokerage Engine.
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

Our email inboxes are completely overwhelmed with clients asking us for things, people trying to sell us things and systems hounding us to do things. Brokerage Engine strives to change this, by eliminating the use of statusing emails and distilling notifications down to the essentials. Below are examples of the notifications users will receive through Brokerage Engine.

## System
System notifications apply to the system at large, and do not pertain to a specific module.

### Welcome Email
Sent to a user when they are first provisioned an account, or when a `System` admin resends the user's password.

```txt title="Welcome to Brokerage Engine"
Hi David,

Your account has been created.

Please use the credential below to login.

https://demo.yoursite.com
email: david@brokerageengine.com
password: ********

[Login]

You can also learn more about Brokerage Engine on
the features page https://demo.yoursite.com/features

With any tech support questions, please send
them directly to support@yourdomain.com.
```

### Password Reset
Sent to a user requesting a new password from the main login screen.

```txt title="Reset Password"
Hi David,

We received a request to reset your account password.

To reset your password, click the link below. If you
did not make the request, please ignore this email.

[Reset Password]

With any tech support questions, please send them
directly to support@yourdomain.com.
```

## Listing
Listing notifications are generated based off of actions taken in the Listings module, such as when a new listing is launched or one is about to expire.

### Coming Soon Listing Announcement
Sent to all `Agent` users opted into Coming Soon notifications when a Coming Soon - Listing Announcement task is completed by another user.

```txt title="Coming Soon - 7 Whittier Lane, Easton, MA 02356"
Stunning Single Story in a Gated Community

Located within the coveted Casa Del Rio community, this masterfully
designed estate features premium finishes, walls of glass and rooftop
terrace overlooking the foothills.

Address: 7 Whittier Lane, Easton, MA 02356
Bedroom: 2
Bathroom: 3 | 0
List Price: $500,000

Agents:
- David Habedank c: 530.555.5555 / e: david@brokerageengine.com

[View Details]
```

### Vendor Photo Shoot Request
Sent to the associated `Agent` and `Vendor` user(s) when a media order is placed.

```txt title="*New Order* 7 Whittier Lane, Easton, MA 02356 - David Habedank - Order #SIC8218"
David Habedank would like to order photos on 7 Whittier Lane, Easton, MA 02356.
The home will be listed at $500,000 and is 2174 Sq.Ft. Please see below for agent
comments regarding access instructions and contact information.

Order #SIC8218

Agent Name: David Habedank
Agent Email: david@brokerageengine.com
Agent Phone: 530.555.5555

Preferred Shoot Date: 2020-09-04
Preferred Shoot Time: 02:00 pm
Access Instructions: I will meet you there.
Comments: Please schedule me for a GOLD package.
I would like to also include twilight and drone photos.

[Upload Photos]
```

### Photos Received
Sent to the associated `Agent` user(s) when a media order has been fulfilled.

```txt title="*Photo Received* 7 Whittier Lane, Easton, MA 02356"
Hi David,

Photos for 7 Whittier Lane, Easton, MA 02356 have been
completed! They can now be accessed from your listing in Brokerage
Engine, or downloaded using the below link.

[View Photos]

It is highly recommended that you review the photos in Brokerage Engine
and arrange them based on your preference. If an agent chooses to not
review pictures in Brokerage Engine prior to launching, the photo
ordering will be done at your staff's discretion.
```

### Listing Launched
Sent to the associated `Agent` user(s) when an `Admin` user has approved the listing and changed the status to <Highlight color="#16D39A">ACTIVE</Highlight>.

```txt title="*Listing Launched* 7 Whittier Lane, Easton, MA 02356"
Hi David,

Your listing at 7 Whittier Lane, Easton, MA 02356 has been launched
on yourdomain.com! This may take up to 48hrs to display. The MLS# is 123456.

Marketing materials will be designed as requested in Brokerage Engine. Once
materials have been designed, you will receive a proof from your staff via 
Brokerage Engine. Please look over these carefully. Proofs must be approved
by the agent before the order can be placed. The agent is responsible for
checking for accuracy. Materials will be ordered upon approval.

Initial proofs will be sent within 24 - 48 hours of submitting your request.

Please click the button below to complete the marketing services order form.

[Order Marketing Services]

Brian Zhang
Email: brian@brokerageengine.com
```

### Critical Listing Field Changes
Sent to the associated `Agent` user(s) when a change is made to `Expiration Date` or `List Price` in <Highlight color="#16D39A">ACTIVE</Highlight> status. The user will be prompted to submit listing amendment paperwork through Brokerage Engine to avoid automatic withdrawal.

:::note
The agent will receive this email if the change(s) were made manually, or a change was imported from MLS.
:::

```txt title="[Urgent] Amendment Needed - 7 Whittier Lane, Easton, MA 02356"
Hi David,

Listing documents are still outstanding for 7 Whittier Lane, Easton, MA 02356.

Summary: Listing Amendment

Date Created: 09/02/2020

David Habedank made the following updates to the listing.
- changed list price from $500,000 to $450,000
- changed expiration date from 09/25/2020 to 09/04/2020

Please submit a signed Listing Amendment or Proper Documentation in the
next 5 business days. Failure to do so will result in the automatic
withdrawal of your Listing.

Please click the button below to view the task and to upload listing documents.

[Upload Documents]
```

### Quality Control Results
Sent to the associated `Agent` user(s) when a staff member has updated, or completed, the Launched - Quality Control task.

```txt title="*QC Results* Launched - Quality Control - 7 Whittier Lane, Easton, MA 02356"
Hi David,

Brian Zhang added the updates to the following task.

Summary: Launched - Quality Control
- 7 Whittier Lane, Easton, MA 02356

Date Created: 09/02/2020

Syndication Websites:

Zillow
Passed  Passed with no issues.
https://www.zillow.com/homedetails/7-Whittier-Ln-North-Easton-MA-02356/56830880_zpid/

Trulia
Passed  Passed with no issues.
https://www.trulia.com/7-Whittier-Ln-North-Easton-MA-02356

Realtor
Passed  Passed with no issues.
https://www.realtor.com/7-Whittier-Ln-North-Easton-MA-02356

Company
Passed  Passed with no issues.
https://www.yourdomain.com/7-Whittier-Ln-North-Easton-MA-02356

SIR
Passed  Passed with no issues.
https://www.sir.com/7-Whittier-Ln-North-Easton-MA-02356
```

## Transaction
Listing notifications are generated based off of actions taken in the Listings module, such as when a new listing is launched or one is about to expire.

### New Transaction
Sent to `Accounting` user(s) for recording-keeping purposes and associated `Agent` user. Notification is triggered when a new transaction is created, either on their behalf by an `Admin` user or by the `Agent` user themselves.

```txt title="New Transaction - 7 Whittier Lane, Easton, MA 02356"
7 Whittier Lane, Easton, MA 02356

Address: 7 Whittier Lane, Easton, MA 02356
Sale Price: $500,000
Contract Date: 2020-09-02
Close Date: 2020-09-04

Seller: Brokerage Builders LLC c: 541.555.5555 / e: accounting@bbl.com
Representing Associates:
- David Habedank    c: 530.417.3741 / e: david@brokerageengine.com

Buyer: Brokerage Buyers LLC c: 530.555.5555 / e: purchasing@bbl.org

Special Programs:
Sale Source:
Comments:
Entered By: Brian Zhang

[View Details]
```

### Critical Transaction Field Changes
Sent to the associated `Agent` user(s) when a change is made to `Sale Price`, `Close Date` or `Referrals` in <Highlight color="#FFA87D">PENDING</Highlight> status. The user will be prompted to submit a contract amendment and/or referral agreement paperwork through Brokerage Engine.

```txt title="[Urgent] Amendment Needed - 7 Whittier Lane, Easton, MA 02356"
Hi David,

Transaction documents are still outstanding for 7 Whittier Lane, Easton, MA 02356.

Summary: Contract Addendum, Referral Agreement

Date Created: 09/02/2020

David Habedank made the following updates to the transaction.
- changed closeDate from 2020-09-11 to 2020-09-18
- changed sale price from $515,000 to $500,000
- changed listing referral from $3,450 to $3,000

Please click the button below to view the task and to upload transaction documents.

[Upload Documents]
```

## Marketing

### Task Update
Received by an `Agent` when an `Admin` uploads a marketing proof for review.

```txt title="*Task Update* 8-Pg Brochure (Landscape)"
Hi David,

Brian Zhang has a new update available for 8-Pg Brochure (Landscape)

Summary: 8-Pg Brochure (Landscape)
- 7 Whittier Lane, Easton, MA 02356

Date Created: 09/02/2020

Comments: David - please take a moment to review and let me know if changes are necessary.

Please click the button below to view the update and either approve or reject with changes.

[Review Submission]

Brian Zhang
brian@brokerageengine.com
```