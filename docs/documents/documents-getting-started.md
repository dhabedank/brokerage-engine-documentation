---
id: documents-getting-started
title: Getting Started with Documents
sidebar_label: Getting Started with Documents
hide_title: false
hide_table_of_contents: false
description: Manage compliance and storage of documents like a pro.
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

How many times have you seen listings at your brokerage go public, only to realize that the agent hadn't turned in all of their paperwork? Or even worse - the mad dash near closing and having to hunt down docs. These situations are (mostly) avoidable, and the solution starts with making it more simplifying the document workflows.

Brokerage Engine Documents are fully integrated into the back office management experience, and encompass listings, transactions and agents.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ATYQIDkujJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Configuring Document Lists
Whereas a more traditional document management platform has administrators managing potentially dozens of checklist templates, Brokerage Engine focuses on five (5) "master" checklists which dynamically generate depending on the scenario. The "master" checklists are as follows.
- **Listing**
  - Checklist triggers whenever a listing is added to Brokerage Engine.
- **Lease**
  - Checklist triggers whenever a rental/lease is added to Brokerage Engine.
- **Transaction**
  - Checklist triggers whenever a transaction is added to Brokerage Engine.
- **Other Income Transaction**
  - Checklist triggers whenever an Other Income transaction is added to Brokerage Engine.
- **Agent**
  - Checklist triggers whenever an agent is added to Brokerage Engine.

For each scenario, the administrator lists all documents and defines them as either `Required`, `Optional` or `Conditional`.
- **`Required`**
  - Documents which populate on all checklists of that type. For example, a *Listing Agreement* is generally required on all listings.
- **`Optional`**
  - Documents which do not automatically populate on a checklist but can be manually added, when necessary, by an agent or staff member using the <Highlight color="#00B5B8">+ Add Document</Highlight> button.
- **`Conditional`**
  - Documents which **only** populate when specific criteria is met. For example, you only want a Lead Based Paint disclosure to populate when the property was built prior to 1978.

### Conditional Documents
Conditional documents trigger at the point a listing, transaction, agent, etc. is entered into the system. By default, Brokerage Engine offers the following conditional options to select from.
- **Listings**
  - *Property Type*
    - For listings which require additional documentation based on property type, such as HOA disclosures for condominiums.
  - *State*
    - For companies located in multiple states that require their own set of documentation.
  - *Lead Based Paint*
    - For properties built prior to 1978.
- **Lease**
  - *Property Type*
    - For lease listings which require additional documentation based on property type, such as HOA disclosures for condominiums.
  - *State*
    - For companies located in multiple states that require their own set of documentation.
  - *Lead Based Paint*
    - For properties built prior to 1978.
- **Transaction**
  - *Property Type*
    - For transactions which require additional documentation based on property type, such as HOA disclosures for condominiums.
  - *State*
    - For companies located in multiple states that require their own set of documentation.
  - *Lead Based Paint*
    - For properties built prior to 1978.
  - *Associate Represents Seller*
    - Populates documents visible only to the listing agent and staff.
  - *Associate Represents Buyer*
    - Populates documents visible only to the selling agent and staff.
- **Other Income Transaction**
  - *Property Type*
    - For Other Income Transactions which require additional documentation based on property type, such as HOA disclosures for condominiums.
  - *State*
    - For companies located in multiple states that require their own set of documentation.
  - *Lead Based Paint*
    - For properties built prior to 1978.
- **Agent**
  - No conditional options at this time.

## Navigate to a Checklist
The beauty of Brokerage Engine is that documents are located in the very same place you manage your listing, transaction, and agent data records details. This is key to making double data entry a thing of the past.

Documents can be managed through the Documents List screen, accessed from the main navigation bar, or by visiting the associated listing, transaction, agent, etc., record.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/j9uXgtGZrIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Anatomy of a Checklist
