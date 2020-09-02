---
id: listings-statuses
title: Listing Statuses Explained
sidebar_label: Statuses
hide_title: false
hide_table_of_contents: false
description: Understand what statuses are available in Brokerage Engine.
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

Statuses in Brokerage Engine are derived, with some limited exceptions, from those available in Realogy's dashAPI.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/M2WPaaF5ecY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Below we outline the listing statuses in Brokerage Engine.

#### <Highlight color="#B2EBF2">PROSPECTIVE</Highlight>
A listing in this status will not be transmitted to DASH, but still available in the system for the purposes of triggering tasks and notifications. This is most commonly used for coordinating situations on properties where a formal listing agreement has not yet been signed, such as listing presentations.

:::note
The Prospective status is custom to Brokerage Engine and does not map to an equivalent Realogy dashAPI status. Available to companies with the Prospective Listings feature enabled on their account.
:::

#### <Highlight color="#E57373">DRAFT</Highlight>
Listings in this status have been transmitted to DASH but are not publicly visible or syndicated. The draft status is where users can stage listings for the purposes of sending a coming soon announcement, uploading photos, preparing marketing and ensuring listing details are accurate, prior to publishing online.

#### <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight>
A listing in this status has been initially reviewed for completeness in <Highlight color="#E57373">DRAFT</Highlight> status, and is now awaiting final review by another member of the brokerage staff. The listing is still not publicly visible or syndicated. If no secondary review is necessary, listings can be immediately moved to <Highlight color="#16D39A">ACTIVE</Highlight> status.

#### <Highlight color="#16D39A">ACTIVE</Highlight>
A listing in this status is now publicly visible and available to syndicate, if applicable. For Realogy affiliated companies, by default, the listing will begin syndicating to all available syndication sources for the customer's brand.

#### <Highlight color="#16D39A">ACTIVE OPTION</Highlight>
A listing in this status continues to be publicly visible and syndicated, but allows the brokerage to begin tracking transaction details and documents. This status is useful in markets where an option period is commonly used prior to going under contract.

:::note
The Active Option status is custom to Brokerage Engine and does not map to an equivalent Realogy dashAPI status. Please contact your Brokerage Engine representative to have this status enabled on your account.
:::

#### <Highlight color="#FFA87D">PENDING</Highlight>
A listing will convert to this status once an associated transaction has been attached in Brokerage Engine or DASH. Where applicable, the listing will now show as <Highlight color="#FFA87D">PENDING</Highlight> on syndication websites.

If changes to the listing are needed while in <Highlight color="#FFA87D">PENDING</Highlight> status - they can be made from the DASH interface directly by brokerage staff.

#### <Highlight color="#B0BEC5">EXPIRED</Highlight>
A listing in this status has surpassed the `Expiration Date` and is no longer publicly visible or syndicated. An `Admin` user must visit the Listing Detail page, click <Highlight color="#00B5B8">Extend</Highlight> and enter a new `Expiration Date`.

#### <Highlight color="#B0BEC5">WITHDRAWN</Highlight>
A listing in this status has been marked as Withdrawn by an `Admin` under <Highlight color="#00B5B8">Change Status</Highlight>, found on the Listing Detail page. The listing is no longer publicly visible or syndicated.

#### <Highlight color="#455A64">Closed</Highlight>
Finally, a listing in this status has had an associated <Highlight color="#FFA87D">PENDING</Highlight> transaction close, which indicates the listing as <Highlight color="#455A64">Closed</Highlight> automatically. The listing is no longer publicly visible or syndicated.