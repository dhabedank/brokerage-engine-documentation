---
id: commission-schedule
title: Creating a Commission Schedule
sidebar_label: Commission Schedules
hide_title: false
hide_table_of_contents: false
description: Create, update and manage commissions schedules.
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

Effective commission schedule management is critical to maintaining  This section outlines how to create a commission schedule in the commission schedule library.

## Navigating to Commission Schedule Library
- Go to <Highlight color="#222222" padding="0.3em"><FontAwesomeIcon icon={['fas', 'cogs']} /> Settings</Highlight> in the navigation sidebar.
  - Select Commission Schedule Library.
  - You will see all of the commission schedules currently available.
- Click the <Highlight color="#3472f7" padding="0.3em"><FontAwesomeIcon icon={['fas', 'plus']} /></Highlight> to add a new commission schedule to the library.
- You will have two options:
  - Select ‘New’ to create a commission schedule from scratch.
  - Select ‘Library’ to copy an existing commission schedule.
    - This allows you to make small edits or variations to an existing plan, without having to create a plan from scratch.

## Commission Schedule Fields
Fields with an asterisk (*) indicate that the field is required to create a commission schedule.

### Name*
This is where you will create a name for the commission schedule.

### Date Range for the Schedule*
This date range serves as a reminder as to when the commission schedule needs to be changed for the agent once it is attached to his or her profile. The date range can also serve as the time frame for which the commission schedule is going to look for accumulation for the agent.

### Description
This can be used to input notes on the schedule you would like others to see.

### Commission Tag Rule
Used to limit the commission schedules that will be selectable when tagged. For example, if we added #Relo to this field, this commission schedule will only be an option when the #Relo is added to the top of the transaction or the transaction side. (Consistency will help for reporting purposes).

### Commission Schedule Strategy*
Here we will select how we want this commission schedule to be calculated. We currently have five different options. They are as follows.
- Flat Rate
  - When selected, you will be given the option of Percentage Rate. This is where you would input the split percentage the agent is to receive per transaction.
- Threshold Based
  - When selected, you will be given the option of Commission Source Field, where you select Full Sales Price. This feature allows you to base the percentage an agent receives off the Sales Price of the home. For example, you can have a plan where an agent receives 50% commission when the home is priced between $0 and $500,000, but the agent receives 75% commission when the home is priced between $500,001 and greater.
- CAP Fees
  - This is used if you would like to charge an agent a fee once they have reached their highest threshold tier.
- Minimum Commission Rate
  - This is referred to as the commission floor. The agent’s commission split will never fall below the rate that is put in this field, no matter what modifiers are added.
- Maximum Commission Rate
  - This is referred to as the commission ceiling. The agent’s commission split will never go above the rate that is put in this field, no matter what modifiers are added. 
- Accumulation (Specific Date Range)
  - Refers to a specific date range to account for the accumulation. When selected, you will be given the option of Commission Source Field, where you can select which part of the commission tree you would like the agent’s accumulation to be based from. The options are as follows.
>    - GCI Gross or GCI Net
>    - ADJ GCI Gross or ADJ GCI Net
>    - Agent Gross or Agent Net
>    - ADJ Agent Gross or ADJ Agent Net
>      - Brokerage Gross or Brokerage NetADJ Brokerage Gross or ADJ Brokerage NetThe 12 options above are NOT affected by the question of “Does this fee affect the agent’s commission?” that is asked when creating fees within a commission schedule or manual fees within a transaction.
>    - GCI Commission Gross or GCI Commission Net
>    - ADJ GCI Commission Gross or ADJ GCI Commission Net
>    - Agent Commission Gross or Agent Commission Net
>    - ADJ Agent Commission Gross or ADJ Agent Commission Net
>    - Brokerage Commission Gross or Brokerage Commission Net
>    - ADJ Brokerage Commission Gross or ADJ Brokerage Commission Net
>      - The 12 options above ARE affected by the question of “Does this fee affect the agent’s commission?” that is asked when creating fees within a commission schedule or manual fees within a transaction.
>    - Earned Volume
>      - This option lets you base the accumulation off the sales price of the property.
  - Accumulation on Side Count
    - This option gives the agent the ability to hit his or her next threshold based on the number of sides of a transaction he or she is representing.
  - Calculate Based off Highest Threshold
    - Selecting “Yes” on this question will allow the agent to move up to the next threshold once either the accumulation requirement or side count requirement is met. Selecting “No” on this question will require the agent to reach both the accumulation and side count requirements in order to move up to the next threshold. 
  - CAP Fees
    - This is used if you would like to charge an agent a fee once he or she has reached the highest threshold tier.
  - Accumulation Tag Rule
    - This can be used to ensure that only transactions with a specific hashtag will count towards the accumulation of this schedule.
  - Minimum Commission Rate
    - This is referred to as the “commission floor”. The agent’s commission split will never fall below the rate that is put in this field, no matter what modifiers are added.
  - Maximum Commission Rate
    - This is referred to as the “commission ceiling”. The agent’s commission split will never go above the rate that is put in this field, no matter what modifiers are added. 
- Rolling Accumulation (Rolling Date Range)
  - Refers back to the transactions within the previous 11 months to calculate the agent’s split for the 12th month. When selected, you will be given the option of Commission Source Field, where you can select which part of the commission tree you would like the agent’s accumulation to be based from. The options are as follows.
>    - GCI Gross or GCI Net
>    - ADJ GCI Gross or ADJ GCI Net
>    - Agent Gross or Agent Net
>    - ADJ Agent Gross or ADJ Agent Net
>    - Brokerage Gross or Brokerage Net
>    - ADJ Brokerage Gross or ADJ Brokerage Net
>      - The 12 options above are NOT affected by the question of “Does this fee affect the agent’s commission?” that is asked when creating fees within a commission schedule or manual fees within a transaction.
>    - GCI Commission Gross or GCI Commission Net
>    - ADJ GCI Commission Gross or ADJ GCI Commission Net
>    - Agent Commission Gross or Agent Commission Net
>    - ADJ Agent Commission Gross or ADJ Agent Commission Net
>    - Brokerage Commission Gross or Brokerage Commission Net
>    - ADJ Brokerage Commission Gross or ADJ Brokerage Commission Net
>      - The 12 options above ARE affected by the question of “Does this fee affect the agent’s commission?” that is asked when creating fees within a commission schedule or manual fees within a transaction.
>    - Earned Volume
>      - This option lets you base the accumulation off the sales price of the property. 
  - Accumulation on Side Count
    - This option gives the agent the ability to hit his or her next threshold based on the number of sides of a transaction he or she is representing.
  - Calculate Based off Highest Threshold
    - Selecting “Yes” on this question will allow the agent to move up to the next threshold once either the accumulation requirement or side count requirement is met. Selecting “No” on this question will require the agent to reach both the accumulation and side count requirements in order to move up to the next threshold. 
  - CAP Fees
    - This is used if you would like to charge an agent a fee once he or she has reached the highest threshold tier.
  - Accumulation Tag Rule
    - This can be used to ensure that only transactions with a specific hashtag will count towards the accumulation of this schedule.
  - Minimum Commission Rate
    - This is referred to as the “commission floor”. The agent’s commission split will never fall below the rate that is put in this field, no matter what modifiers are added.     
  - Maximum Commission Rate
    - This is referred to as the “commission ceiling”. The agent’s commission split will never go above the rate that is put in this field, no matter what modifiers are added. 				
  - Volume / Side Count Only
    - This option is only used when you want to set up a commission schedule to ONLY account for agent volume. This schedule WILL NOT calculate any sort of commission split.

### Additional Settings Within All Commission Schedules
- Include in Side Count
  - Selecting “Yes” will include every transaction that is attached to this schedule within its side count. Selecting “No” will exclude every transaction that is attached to this schedule. 
- Side Count Override Rule
  - This can be used to turn the “Include in Side Count” feature on or off. For example, if “Yes” is selected on the “Include in Side Count” question, then an override rule can be applied, which then allows you to make a certain transaction that is attached to the commission schedule not count towards the agent’s side count.
- Include in Volume
  - Selecting “Yes” will include every transaction that is attached to this schedule within its volume. Selecting “No” will exclude every transaction that is attached to this schedule.
- Volume Override Rule
  - This can be used to turn the “Include In Volume” feature on or off. For example, if “Yes” is selected on the “Include in Volume” question, then an override rule can be applied, which then allows you to make a certain transaction that is attached to the commission schedule not count towards the agent’s volume.
- Mid Transaction Crossover
  - Selecting “Yes” will allow the agent to move to a higher split within a transaction if he or she reaches the threshold for accumulation. Selecting “No” means that the agent will complete the transaction at the current split and only move to a higher split on the following transaction.

## Commission Schedule Details
### Adjustments
Adjustments can be made to an accumulation/rolling accumulation based commission schedule. This is used to give an agent credit towards his or her accumulation or to deduct from his or her current accumulation. This can ONLY be done when the commission schedule is attached to an agent and not in the commission schedule library.

### Fees and Income
This section is used to attach fees or income to a commission schedule. Within the fee/income, you will be asked a series of questions relating to the item you are creating. It will go as follows.
- Commission Fee Label
  - This is what you would like to name the fee/income.
- Should we Display this Charge on the Agent Breakdown?
  - Clients will have the option to display the item being created on the Agent Breakdown that is generated for the agent on every transaction. 
- Is this Fee Split Across the Side?
  - Selecting “Yes” on this option will allow this fee to be split with another agent that is on the same side of the transaction as the agent you are creating it for. For example, John and Mary split a deal 60/40, and John has a $100 fee that he splits across the side with Mary. Now, John will only be charged the percentage of the deal he is receiving, so for this transaction, he will only be charged $60. Mary MUST have the same fee on her commission schedule and also have “split across the side” selected in order for her to be charged properly.
- Pay this Fee to the Mentee?
  - Agents have the option to pay the fee/income being created to a mentee that they have added to their profile.
- Payor
  - This is where the fee is going to be charged to within the commission tree. You will be able to select the following options.
>    - Pre GCI
>    - GCI
>    - ADJ GCI
>    - Agent
>    - ADJ Agent
>    - Brokerage
>    - ADJ Brokerage
>    - Earned Volume
- Should this Fee Count Against Accumulation of their Commission?
  - Depending on which strategy field was selected for the commission schedule, you will have the option of having this fee either affect or not affect the accumulation of the agent. Flat rate commission schedules will not be affected by answering “Yes” or “No” for this question.
- Tag Rule
  - If left blank, this fee will automatically be applied to every transaction. If you would like this fee to be charged when a certain hashtag is used, then we would simply need to add the hashtag we would like to use in this field. For example, John has a $150 relocation charge that he only incurs when he does a relocation transaction. We would need to add #Relo in this field to only charge John this $150 fee when it sees the hashtag on the same side of the transaction that John is on.
- Tracking Account
  - This is where we would select which ledger account we would like this fee tracked in, within the accounting system the client chooses to use.
- Is Liability / No Liability
  - This option gives the client the ability to add a liability account that will be used for this specific fee. For example, a franchise fee would be tracked to your Franchise Fee Expense account, and the liability account associated with this would be your Accounts Payable account. The liability account is only selectable if “Is Liability” is selected. 
- Liability Vendor
  - This option allows you to choose the vendor that you would like to pay this liability out to, i.e Sotheby’s International Realty, BHGRE Franchise Fee, etc. The liability vendor is only selectable if “Is Liability” is selected.
- Amount
  - You will be given multiple options when it comes to deciding on the amount for the fee/income being created. The options are as follows.
>    - Flat Fee
>      - Selecting this option will give you the ability to put in a flat amount for the fee.
>    - Percentage Fee
>      - Selecting this option will give you the ability to calculate the fee from a certain section of the commission tree. A payor must be selected, and you can only calculate from the same section as the payor and any section above the payor. For example, if the payor was the ADJ GCI, then you would be able to calculate from the ADJ GCI, GCI, Pre GCI, Pro Rata Contract Price, or Full Sales Price.
>    - Threshold Flat Fee
>      - Selecting this option will give you the ability to charge a flat amount once a specific field has crossed a set amount. For example, if you want to charge a $100 transaction fee to an agent for transactions with a GCI of $2000 or less and charge a $150 transaction fee to the same agent once the GCI is between $2000 and $4000, this is where you can create such a fee. You can add multiple thresholds by selecting the “+ Threshold” button.
>    - Threshold Percentage Fee
>      - Selecting this option will give you the ability to charge a certain percentage to an agent once a specific field has crossed a set amount. For example, if you wanted to charge an agent a 3% transaction fee for transactions with a GCI of $2000 or less and charge a 5% transaction fee to the same agent once the GCI is between $2000 and $4000, this is where you can create such a fee. You can add multiple thresholds by selecting the “+ Threshold” button.
>    - Formula Fee
>      - This works like an equation, but instead of X, Y, and Z, you are given the ability to use Pre GCI, GCI, and ADJ GCI. An example would be ((GCI x 6%) + (Pre GCI x 2%)).

### Cap Fees and Income
Works exactly like the Fees / Income section, except the fees / income added under this section will only apply to the transaction once the agent has reached the highest tier of his/her threshold. The “Yes” option for “Use Cap Fees” must be selected in order to use this feature.

### Shared Performance
In this section, you are able to have commission schedules share into the same accumulation, either within the same agent’s profile or with another agent’s profile. This option is only available once the commission schedule is attached to an agent and not in the commission schedule library.

### Schedule Performance
In this section, you are given the ability to make different tiers for the agent to reach within his/her commission schedule. For example, the first tier will read $0 at 50%, and the second tier will read $3000 at 70%. The section with the dollar amount is referring to what was selected during the “Commission Schedule Strategy” section. If Brokerage Net was selected, then the agent would receive a 50% split for all transactions until he/she paid in $3000. Once this amount is reached, the agent will receive 70% on all remaining transactions until the commission schedule is reset. You can add a tier by clicking on the “+ Threshold” button.

### Modifiers
Modifiers are used to change an agent’s split percentage for those one off transactions. This prevents you from having to create another commission schedule for an agent for those one off situations. You can add a modifier by selecting the “+ Modifier” button. Once selected, you will need to fill out the following information.
- Modification Name
  - This is what you would like to name your modification.
- Description
  - An area to write a small description about the modifier you are going to create
- Tag Rule
  - This modifier will not apply to an agent unless the specific hashtag put into this field is on the same side of a transaction as the agent. For example, if John has a 50% split but is getting 75% on a certain transaction, we can apply this modifier to a unique hashtag like #CommIncrease. Now, this modifier will only apply when it sees #CommIncrease on the same side that John is representing.
- % Commission Modification
  - Here you would simply put in the increase or decrease (putting a negative before the number) that the agent is going to be receiving for this modification. For example, if John was at a 50% split but got approval to receive 75% on a specific transaction, you can simply add a commission increase to his commission schedule by putting in “25” in this field and making sure the #CommIncrease (previous example) is on the same side that John is representing.