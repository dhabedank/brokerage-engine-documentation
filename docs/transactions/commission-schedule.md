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
