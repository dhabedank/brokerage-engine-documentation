---
id: getting-started
title: Getting Started with Documents
sidebar_label: Getting Started with Documents
hide_title: false
hide_table_of_contents: false
description: Manage compliance and storage of documents like a pro.
---
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(
  fas
);

export const Highlight = ({children, color, padding}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '4px',
      color: '#fff',
      padding: padding,
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
  - Documents which do not automatically populate on a checklist but can be manually added, when necessary, by an agent or staff member using the <Highlight color="#00B5B8" padding="0.3em">+ Add Document</Highlight> button.
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
In the following section, we discuss some common functionality for document lists. The Document List name is automatically generated, but can be renamed using the edit ( <Highlight color="#FFA87D" padding="0.3em"><FontAwesomeIcon icon={['fas', 'edit']} /></Highlight> ) button.

### Documents
Shows the current checklist of document requirements for a given file. Users may drag and drop PDFs or JPEGs (which will convert to PDF) onto individual checklist requirements, or use the upload ( <Highlight color="#FFA87D" padding="0.3em"><FontAwesomeIcon icon={['fas', 'upload']} /></Highlight> ) button to select a file from their desktop.

![Document List](/docs/document-list.png)

When enabled, users have the ability to email documents into checklists using a unique email address generated by Brokerage Engine. The email, which is unique to each checklist, can be copied to the user's clipboard ( <Highlight color="#626E82" padding="0.3em"><FontAwesomeIcon icon={['fas', 'clipboard']} /></Highlight> ) or the user can launch into their mail client ( <Highlight color="#626E82" padding="0.3em"><FontAwesomeIcon icon={['fas', 'envelope']} /></Highlight> ) with the email populated.

Below we discuss some of the functionalities found on the Documents checklist.
- **Audit** - <Highlight color="#FF7588" padding="0.3em"><FontAwesomeIcon icon={['fas', 'gavel']} /></Highlight>
  - Opens the document awaiting review with a preview window, audit controls (Reject / Approve) and a comment box.
  - Notify Agent on Review Decision can be chosen to email the agent with your review decision.
- **Waive** - <Highlight color="#626E82" padding="0.3em"><FontAwesomeIcon icon={['fas', 'times']} /></Highlight>
  - Allows an `Admin` user to dismiss a checklist requirement.
- **Delete Document** - <Highlight color="#FF7588" padding="0.3em"><FontAwesomeIcon icon={['fas', 'trash-alt']} /></Highlight>
  - Allows an `Admin` user to delete documents in <Highlight color="#16D39A" padding="0.3em">Done</Highlight> status.
- **View Log** - <Highlight color="#00B5B8" padding="0.3em"><FontAwesomeIcon icon={['fas', 'history']} /></Highlight>
  - Provides the user a complete log of all activities on a specific document in a checklist. The View Log modal also exposes the user to a subset of tools which are outlined below.
    - **Send Email**
      - Used to send an email related to the specific document. Only documents in <Highlight color="#16D39A" padding="0.3em">Done</Highlight> status may be attached.
    - **Rename Document**
      - Can be used to rename the existing document as it displays in the checklist.
    - **Upload and Merge**
      - Allows the user to upload additional documents to a checklist requirement and Brokerage Engine will append those pages into the existing PDF file.
    - **Split Document**
      - Allows the user to split a document that has already been uploaded into its respective checklist requirements. This is helpful for documents which have been emailed into the checklist. Once splitting is completed, the original document will be marked as <Highlight color="#B0BEC5" padding="0.3em">Waived</Highlight>.

### Checklist Controls

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'file-pdf']} /> Quick Audit</Highlight>

Quick Audit is a powerful tool which empowers document managers to do the majority of their work from one interface.

![Quick Audit](/docs/quick-audit.png)

When Quick Auditing an individual file, the `Admin` user will see all documents in <Highlight color="#FF1744" padding="0.3em">Pending Review</Highlight> or <Highlight color="#D50000" padding="0.3em">Pending Final Review</Highlight> and can either approve or reject. When a document is approved or rejected, the Quick Audit interface will cycle to the next document automatically, upating the preview window and making the file review process much faster. The Quick Audit screen includes the following elements.
- **Document Lists**
  - Checklists included in the current Quick Audit, based on filters.
- **Documents**
  - Documents available for review in the selected Document List.
- **Document Preview**
  - Renders an on-screen PDF preview of the selected document.
- **Listing Info**
  - Listing checklists only.
  - Provides some key information on the listing related to the current document checklist.
- **Transaction Info**
  - Transaction checklists only.
  - Provides some key information on transaction related to the current document checklist.
- **Past Comments**
  - Lists out the recent comments left on the document.

:::note
For transaction checklists related to a company listing, the home (<FontAwesomeIcon icon={['fas', 'home']} />) icon links a user back to the listing details page for easy referencing.
:::

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'envelope']} /> Send Status Recap</Highlight>

Allows the `Admin` user to send a email recap of the status of the document file. User can chose to include agents on the Listing side or Selling side, along with CCing third parties.

![Quick Audit](/docs/send-status-recap.png)

`System` users have the ability to pre-define commonly used CC emails from the [General System Configuration](admin-tools.md#general-system-configuration) screen. To include pre-defined templates, please submit your request to the Brokerage Engine [support](mailto:help@brokerageengine.com) team.

:::tip
Sometimes, a document manager just wants to leave a comment on a file for their personal use. This can be accomplished through the **Send Status Recap** screen by selecting no recipients and clicking **Send** after writing your comment.
:::

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'plus']} /> Add Document</Highlight>

The Add Document modal allows a user to add Optional [document templates](#configuring-document-lists) to the current checklist, or to create custom checklist items specific to the current checklist.

![Add Document](/docs/add-document.gif)

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'plus']} /> Upload & Split</Highlight>

The upload & split tool allows users to take a PDF and split its pages out into several checklist requirements. The video below explains the process in greater detail.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XFgmxs_95V8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'download']} /> Download Documents</Highlight>

The Download Documents button allows users to download all documents, in the specific checklist, which are in <Highlight color="#16D39A" padding="0.3em">Done</Highlight> status. Clicking this button will initiate the download of a .zip file.

##### <Highlight color="#00B5B8" padding="0.7em"><FontAwesomeIcon icon={['fas', 'print']} /> Print Document Log</Highlight>

The Print Document Log feature provides a complete snapshot of a file, including details about the transaction, all activities, comments and direct download links to files. Use **CMD+P** (Mac) or **CTRL+P** (Windows/Linux) to print the log. Use the <Highlight color="#00B5B8" padding="0.3em"><FontAwesomeIcon icon={['fas', 'share-alt']} /> Share Link</Highlight> button to turn on, or turn off, 3rd party access to the document log - this will output a link which can be shared with the 3rd party without requiring a Brokerage Engine login. This tool is especially helpful if the transaction is involved in any sort of legal dispute.

##### <Highlight color="#FF7588" padding="0.7em"><FontAwesomeIcon icon={['fas', 'archive']} /> Archive Document List</Highlight>

`System` users have the ability to manually archive, or unarchive, document lists.

:::note
Document lists will automatically archive four (4) weeks after a transaction closes.
:::

##### <Highlight color="#FFA87D" padding="0.7em"><FontAwesomeIcon icon={['fas', 'expand-arrows-alt']} /> Generate Documents</Highlight>

Only used by `Admin` users to generate a checklist if one has not already populated. This is a rare occurrence, and generally only encountered by customers with special workflows.