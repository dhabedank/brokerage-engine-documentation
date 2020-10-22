---
id: vendors
title: Vendors
sidebar_label: Vendors
hide_title: false
hide_table_of_contents: false
description: Integrate vendors into your marketing and task workflows.
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

3rd party vendors are at the heart of real estate operations. They take our photos, help us with marketing, do our inspections, install our signs and so much more. To that end, its essential for your back office to effectively interface with those valued parties. Brokerage Engine supports creating vendor profiles and assigning opportunities to be worked on by those vendors.

## Manage Vendors
To manage vendors, simply click on the Marketing tab while logged in as an `Admin` user. From the Marketing Opportunities browser, select "Manage Vendors" from the <Highlight color="#00B5B8">+ Add Opportunity</Highlight> dropdown. You will now see all vendors for your company listed here.

:::info
Vendors may only be added or updated by `Admin` users. If an `Agent` would like to have their vendor available in Brokerage Engine, they should submit the request to a representative of the brokerage.
:::

### New Vendor
To create a new vendor, click <Highlight color="#00B5B8">+ Add Vendor</Highlight>.
- **First Name**
  - First name of the primary point-of-contact for the vendor.
- **Last Name**
  - Last name of the primary point-of-contact for the vendor.
- **Display Name**
  - How would the vendor like to be represented in Brokerage Engine? **Example:** Larry Jones runs a photography business called Luxe Life Real Estate Media. As such, he would like agents to see his company's name when ordering photography.
- **Email**
  - What email address would the vendor like order notifications sent to?
  - This email will also be visible to agents in Brokerage Engine, from the vendor profile.
- **Phone**
  - This phone number will be visible to agents in Brokerage Engine, from the vendor profile.
- **Website**
  - This website will be visible to agents in Brokerage Engine, from the vendor profile.
- **Price Sheet**
  - A link to this price sheet, if available, will be available in the vendor profile.
- **Tags**
  - Classify the vendor type.
    - Sign Manufacturer or Installer (sign)
    - Media Vendor (photo)
    - Copywriter (copywrite)
    - Graphic Design Services (creative marketing)
    - Other
- **Bio**
  - This bio will be visible to agents in Brokerage Engine, from the vendor profile.

Be sure to save the new vendor by clicking <Highlight color="#00B5B8">Add</Highlight>.

### Edit Existing Vendor
Existing vendors are searchable by Name or by Tag. Once you find the vendor whose profile you would like to update, click on the "Edit Vendor" action button. Or, if you would like to delete the vendor, click the trashcan icon.

### Assign Vendor Portal Credentials
Brokerage Engine allows vendors to complete assigned tasks without ever logging into the system. However, some vendors that manage high volumes of tasks for the brokerage may require a task management portal of their own. Once a vendor has been added to the system, a `System` user can send a welcome email using the [User Account Management](admin-tools.md/#user-account-management) tool.

This welcome email will include the vendor's login credentials, and a link to access the Customer's instance of Brokerage Engine with limited permissions. We recommend reading more about [Vendor](permissions.md/#vendor) permissions.

## Vendor Opportunities
When setup as such, opportunities in the marketing catalog can be managed completely between agents and vendors. Setup is simple! When [creating a marketing opportunity](marketing/marketing-create.md#add-opportunity), set the Task Category field to one of the Vendor specific categories. By default, Brokerage Engine includes the following categories which correlate to the very same vendor tags.
- Vendor - Copy Writing
- Vendor - Creative Marketing
- Vendor - Photo Shooting
- Vendor - Sign
- Vendor - Other

When an `Agent` orders an opportunity through the marketing catalog that is categorized under Vendor, the vendor will receive a notice and be able to upload the deliverable once completed.

## Listing Media Orders
One of the many benefits to Brokerage Engine is integrating photo and media ordering into the overall listing launch process. By default, whenever a listing is quick launched, Brokerage Engine will populate a photo shooting task.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4QpOY3siVPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>