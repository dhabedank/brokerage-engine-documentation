---
id: opportunity-setup
title: Manage Opportunities
sidebar_label: Manage Opportunities
hide_title: false
hide_table_of_contents: false
description: Centralize and manage your company's marketing catalog.
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

How many times have you been asked when the next issue of a local magazine runs or how much a brochure costs? Perhaps, as a brokerage marketer, you never seem to get quite the right information on a request. And have we mentioned the accounting spreadsheets? Those are the worst. The Marketing Opportunities Catalog in Brokerage Engine is designed to streamline the way you offer marketing, services and swag to the brokerage. Equal parts educational and functional, agents can learn about opportunities, order and pay - leaving marketers with more time to do what they love.

## Admin versus Agent
When navigating to the Marketing tab in Brokerage Engine, there is a striking difference between what a user will see depending on their permission type. For `Agent` users, Brokerage Engine assumes their primary mission is to order marketing opportunities or services. For `Admin` users, we assume their primary goal is to add new opportunities, or maintain existing ones.

:::info
In the event that a member of staff is an `Admin`, but also maintains a salesperson position and needs to order from the catalog, a `System` user should create the salesperson a separate user account with `Agent` permissions assigned.
:::

## Add Opportunity
Below we discuss the fields included on a New Marketing Opportunity screen, and also suggest best practices for setting up your own opportunities.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8B2iwHQSTr4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Basic Info
Whenever adding opportunities, Brokerage Engine requires the following fields at a minimum.
- **Task Category**
  - Categories are initially configured during the Customer's onboarding period, and determine which opportunities correlate to which department in the brokerage.
- **Ledger Account**
  - For opportunities which have costs associated, this field will determine where the receivable is journaled upon an invoice being issued.
- **Name**
  - What is the name of the opportunity? For example, New York Times, Luxury Home Magazine, Brochures, Postcards, etc.
- **Variant**
  - Opportunities, such as the New York Times or Brochures, generally offer several options for the agent to choose from. Variants allow for grouping these options under the main heading of an opportunity. Examples are provided below.
    - New York Times **(Name)**
      - Weekend Edition - Quarter Page **(Variant)**
      - Full Page **(Variant)**
      - Quarter Page **(Variant)**
      - Half Page **(Variant)**
      - Weekend Edition - Full Page **(Variant)**
    - Brochures **(Name)**
      - Landscape **(Variant)**
      - Portrait **(Variant)**
      - Square **(Variant)**
      - Electronic **(Variant)**
    - Postcards **(Name)**
      - Just Listed **(Variant)**
      - Just Sold **(Variant)**
      - Coming Soon **(Variant)**
      - Price Adjustment **(Variant)**
  - Variants, although grouped under a primary Opportunity in the `Agent` interface, can be completely customized with individual pricing, descriptions, discounts and instructions. So, they're super helpful for keeping an organized Marketing Catalog, but also very flexible!
  - <Highlight color="#f0ad4e">Caution</Highlight> changing the name of a variant will disassociate it from the rest of the variants.
- **Description**
  - Descriptions will be shown to agents when browsing the catalog, in addition to when they select an opportunity to learn more.

### Configurations

#### Taxable
Should taxes be added to the order prior to checking out?

#### Restricted for Admin Invoicing
Opportunities with this selected will not be visible in the catalog to `Agent` users and are intended for [manual invoicing](invoices.md/#manual-invoice) purposes only.

#### Listing Selection Required
Requires the user to select a listing or multiple listings. This generally differentiates listing-specific opportunities from agent promotion marketing.

##### Restrict to Single Listing
Only permits the user to select a single listing associated with the marketing opportunity.

#### Invoice Upon Task Completion
Enabling this configuration will generate a <Highlight color="#FFA87D">Pending</Highlight> invoice when an order is submitted, along with the task to be completed by an `Admin` user. Once task has been <Highlight color="#10C888">Approved</Highlight> by the `Agent`, an `Admin` user will be presented an Invoice Confirmation screen to adjust the following invoice attributes.
- **Adjusted Amount**
  - Input an adjusted amount that the agent should be billed for.
  - Using a Just Listed Postcard as our example - the original invoice was issued for $156.00 but during the task lifecycle, the agent asked for 50 additional postcards to be included in the final order. This increased the cost by $37.50. So, the `Admin` would enter **$193.50** as the Adjusted Amount.
- **Adjustment Comments**
  - Provide an reason for the adjusted amount.
- **Invoice File Upload**
  - If services were provided by a 3rd party (such as a printing company), you may attach the invoice here.
- **Design Hours**
  - If the Customer charges for design hours, enter the number of hours spent here.
  - By default, Brokerage Engine has a default value of $50/hour for design hours.
- **Design Hours - Chargeable?**
  - Indicate if the agent should be billed for design hours. When selected, an additional line item will display on the final invoice. If unselected, the hours will be displayed, but shown as discounted 100%.

Once adjustments have been made and submitted, the task will be moved to <Highlight color="#16D39A">Done</Highlight> status and the associated invoice will be moved to <Highlight color="#FFA87D">Open</Highlight> status. You can learn more about invoice statuses in our [Invoicing](invoices.md/#invoice-statuses) guide.

### Restrictions
Used for communicating limitations of the order process, such as deadlines or minimum quantities.
- **Available Spots**
  - Limits the number orders which can be submitted on an opportunity or variant.
- **Available From**
  - Indicates when the company will start accepting orders.
- **Available To**
  - Indicates when the company will stop accepting orders.
- **Commitment Due Date**
  - Indicates the final date an agent must commit to the publication.
- **Art Due Date**
  - Indicates the final date an agent must have their content submitted to the company so that marketing can design the ad.
- **Run Date**
  - Indicates when the publication will run the ad.
- **Minimum Order Quantity**
  - Setting a minimum order quantity will default an order in the catalog to this amount. Orders may not be submitted with a smaller order quantity.
- **Office Restrictions**
  - Allows users to restrict visibility of opportunities or variants to agents associated with specific offices. Often used for companies which span a large geographical area, certain opportunities might only be applicable to a handful of offices.
- **Other Restrictions**
  - Area to communicate additional details about the publication or order process.

### Target Audience
When used in combination with the Listing Marketing Service task, Target Audiences can offer exclusive marketing opportunities based on property type and list price.

:::note
Make sure your opportunity has **Restricted for Admin Invoicing** selected so that agents cannot access the exclusive opportunity through the Catalog.
:::

### Samples
The most impactful experience is a visual one. Marketing is all about the visuals, so be sure to add a cover image and samples to all opportunities. You wouldn't sell a house without pictures, right? 🙂

### Pricing
Remove the headaches of having to track agent expenses on marketing, and allow Brokerage Engine to handle all of the heavy lifting when it comes to billing. Users have the option to set a **Fixed Price**, for things like magazine ads, or **Tiered Pricing**, for things like brochures and postcards.
- **Market Price (MSRP)**
  - The price an agent would usually pay in the fair market for a service or opportunity, were they not part of the brokerage. This will help calculate what kind of discount an agent is receiving on the opportunity.
- **Vendor Price**
  - The cost of the service or opportunity to the brokerage. This is **not** visible to the agent.
- **Default Price**
  - The actual cost to the agent. This amount is what the agent will be invoiced for.

:::tip
If the Market Price is more than the Default Price, the catalog will show the agent they are receiving a discount. Additionally, this difference will contribute towards the Marketing Savings widget on their Broker360 report. **Don't neglect to use this feature!** It is important to always be reminding agents of the value they receive at your brokerage.
:::

### Agent Discount
Individual agents can be assigned additional discounts. Once assigned, the agent will see the additional discount as they browse the marketing catalog. Discounts can be given in the form of a **Free Quota**, or as a **Percentage** off the entire order.

### Instructions Configuration
Marketing opportunities can be complex, requiring additional information from an agent during the ordering process. Through the use of Brokerage Engine's instruction editor, users can request or require custom fields from agents.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bf_qMZUJsag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Below we discuss the types of fields that can be added to opportunities, and how they are utilized.
- **Textbox**
  - **Description**
    - Includes a single line for text input.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Limit
      - Sets a character limit.
    - Required Field
      - When selected, this field will be required.
- **Textarea**
  - **Description**
    - Includes a multiple lines for text input.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Limit
      - Sets a character limit.
    - Rows
      - Sets the dimensions of the textarea.
    - Required Field
      - When selected, this field will be required.
- **Rich Text Editor**
  - **Description**
    - Includes a WYSIWYG text editor for formatted rich-text entry.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
- **Photo**
  - **Description**
    - Includes an area to upload photos or, when [Listing Selection Required](#listing-selection-required) is enabled, an agent will be able to select photos from their existing [listing photos](listings/listing-detail.md#listing-photos).
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Limit
      - Sets a photo limit.
- **File**
  - **Description**
    - Includes an area to upload files, such as PDFs or spreadsheets.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Limit
      - Sets a file limit.
- **Time**
  - **Description**
    - Includes an area to indicate a time.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
- **Date**
  - **Description**
    - Includes an area to indicate a date.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
- **Hidden**
  - **Description**
    - Used for displaying the Instruction Name and Description, generally for indicating new sections.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
- **Link**
  - **Description**
    - Includes a link to an external resource.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Label
      - Displays the "friendly" label instead of the actual URL.
    - Link
      - Include the link to the external resource.
- **Select**
  - **Description**
    - Allows the user to select **one** item from a list.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Options
      - Separate options with commas.
    - Required Field
      - When selected, this field will be required.
- **Select Multiple**
  - **Description**
    - Allows the user to select **many** items from a list.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Options
      - Separate options with commas.
    - Required Field
      - When selected, this field will be required.
- **Select Advanced**
  - **Description**
    - Allows the user to select an item from a list with thumbnails. This is particularly helpful in providing context to a user when the company offers different styles of, for example, brochures such as modern or traditional.
  - **Additional Fields**
    - Instruction Name
      - What do you want the title of the field to display?
    - Instruction Description
      - Displays a description of the field for the user.
    - Options
      - Title
        - Title of the option.
      - Image URL
        - Link to the hosted thumbnail.
      - Description
        - Individual description of the option.
    - Add Option
      - Adds another option field.
    - Remove Option
      - Removes last option field.

The Instruction Editor will generate the new fields using JSON.

## Edit Opportunities
To edit opportunities, simply click the action icon on the opportunities browser. For opportunities with **variants**, it is suggested that you click on the specific variant name you would like to edit.

### Add Variant
If you would like to add a variant to an existing opportunity, simply click the **+ Add Variant** button. You will be asked to provide a name of the new variant. Upon creation of the new variant, Brokerage Engine will duplicate all existing field information into the new variant.

### View Invoices
See how many times a particular opportunity or variant has been ordered. Clicking the View Invoices button on existing opportunities will display a summary report of invoices issued from orders of that particular opportunity.