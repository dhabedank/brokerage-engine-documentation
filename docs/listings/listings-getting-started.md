---
id: listings-getting-started
title: Getting Started with Listings
sidebar_label: Getting Started with Listings
hide_title: false
hide_table_of_contents: false
description: Learn how you can get up and running with listings in Brokerage Engine.
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

## New Listing
An agent at the brokerage will initiate a listing in Brokerage Engine using the Quick Launch feature. However, a member of the brokerage staff can initiate the listing within Brokerage Engine upon the agent’s request.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RrtNuDGZHlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Quick Launch Method
A Quick Launch is the recommended method for initial listing entry to Brokerage Engine. By encouraging users to Quick Launch their new listing, Brokerage Engine provides several benefits such as: Send a Coming Soon, Order marketing and photos and Upload documentation prior to MLS listing activation.

1. From the Dashboard, start by clicking the <Highlight color="#00B5B8">Quick Launch</Highlight> button on the Coming Soon dashboard widget.
2. Begin typing the listing address. You will notice that Brokerage Engine beings to populate a list of suggested addresses from Google Maps.
   - Alternatively, you can enter an addresses manually if they have not been mapped yet. Use the ***Click Here*** link below the search box to proceed with manual entry.
3. Once the address is selected, Brokerage Engine will now display additional fields for things like Location, Property Information and Listing Details. You **must** include the following fields to save a Quick Launch.
   - `Property Type`
   - `Property Style`
   - `Beds`
   - `List Price`
   - `Expiration Date`
4. Click <Highlight color="#00B5B8">Save</Highlight>

Great job! You've just created your first <Highlight color="#E57373">DRAFT</Highlight> listing.

### Automated MLS Import Method
Some clients of Brokerage Engine may choose to automate their listing input from an MLS data source. We generally recommend this option only if agents will not be interacting with the Brokerage Engine platform. The system scans for new Active residential listings in MLS every (2) two hours, imports to Brokerage Engine and activates the listing in DASH. When automated listing entry is used, agents lose the ability to premarket via Coming Soon, upload listing documents prior to activating the listing or ordering marketing services in preparation for listing launch. This process bypasses the <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight> process.

### Manual MLS Import Method
For clients who would like staff to control the listing entry process completely, but rely on MLS as the data source, staff members can create new listings by selecting their MLS, entering the MLS number and all photos/details will import/create/launch the new listing in Brokerage Engine.

### Mixed Listing Entry Mode
In an effort to limit the amount of duplicate entry done by an agent or staff member, but also gain benefits of the Quick Launch process - Brokerage Engine supports what we call Mixed Listing Entry Mode. Agents may perform the traditional Quick Launch process and upon the listing going Active in MLS, a staff member can do a full import/overwrite of the existing listing in Brokerage Engine with data and photos from the MLS. The agent or staff member must ensure a valid MLS number is entered on the Brokerage Engine listing prior to import to avoid duplicate listings in the system.

## Edit Listing
The agent is encouraged to provide as much detail on a listing as possible, prior to going <Highlight color="#16D39A">ACTIVE</Highlight>. This can be accomplished through manual data entry by the agent, or by the brokerage staff member. Throughout the lifetime of the listing, an agent has the ability to update critical and time sensitive details of a listing like `Price` and `Expiration Date`. Brokerage Engine will automatically issue a required compliance task and notification email to agents for them to submit the necessary paperwork.

### Manual Updates
Listings details may be updated while the listing is in <Highlight color="#E57373">DRAFT</Highlight>, <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight> and <Highlight color="#16D39A">ACTIVE</Highlight> statuses. Once a listing goes into <Highlight color="#FFA87D">PENDING</Highlight> status, neither agents nor staff members may make any alterations to the listing. This is a restriction of the dashAPI. If changes to the listing are needed while in <Highlight color="#FFA87D">PENDING</Highlight> status - they can be made from the DASH interface directly by brokerage staff.

### Automated MLS Updates
Brokerage Engine can automate common updates made to listings during their lifespan. When a listing has a valid MLS number associated with the Brokerage Engine entity - our system will scan the MLS every two (2) hours for changes made to `Price`, `Expiration Date` and `Open Houses` to update the associated Brokerage Engine listing accordingly. Client has the option during product implementation to define additional fields that will be updated when changes are made in the MLS, such as status or photo arrangement. Additionally, client may define tasks that are triggered upon updates being made from the MLS.

:::info
Brokerage Engine cannot automate putting a listing under contract (PENDING) as an associated DASH transaction entity is required to be created by the agent or brokerage staff member.
:::

## Activate Listing
Once listing documents have been uploaded, verified and approved - the brokerage staff member converts the listing status from <Highlight color="#E57373">DRAFT</Highlight> to <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight>. At this point, we encourage staff to confirm accuracy of listing data and media. Once this has been completed, only brokerage staff may launch a listing. It is at this point that a listing will move from <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight> status and on to <Highlight color="#16D39A">ACTIVE</Highlight> status.

### Agent Initiated Launch
Based on certain client requirements and business processes - Brokerage Engine can configure a client system to allow for agents to launch their own listings. This can be accomplished in the three methods described below.

#### Agent Launch Button
![Agent Launch Button](/docs/listing-agent-gtl.png)
By Customer request, agent-facing <Highlight color="#00B5B8">Good to Launch</Highlight> and <Highlight color="#00B5B8">Launch</Highlight> buttons can be exposed in the Brokerage Engine interface. This allows an agent to take their listing immediately <Highlight color="#16D39A">ACTIVE</Highlight> without brokerage approval.

#### Automated MLS Import
If [Automated MLS Import](#automated-mls-import-method) is enabled for the company, an agent of the brokerage may activate their listings in MLS and an associated listing will be created in <Highlight color="#16D39A">ACTIVE</Highlight> status on Brokerage Engine.

:::tip
If an agent previously Quick Launched their listing on Brokerage Engine, the MLS listing data will be merged with the existing DRAFT and automatically converted to ACTIVE status.
:::

#### Advanced Good to Launch Process
Under Advanced Good to Launch, the brokerage is still responsible for putting a listing in <Highlight color="#FFD54F">GOOD TO LAUNCH</Highlight> status. However, an agent will now receive a task to launch the listing at a time of their choosing.

## Listing Launched 🎉
Congratulations! Your listing is now active within the DASH listing and online syndication system.