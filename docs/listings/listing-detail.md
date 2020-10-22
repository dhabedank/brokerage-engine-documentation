---
id: listing-detail
title: What's in a listing?
sidebar_label: What's in a listing?
hide_title: false
hide_table_of_contents: false
description: The central source of truth for your listing.
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

Listings are supercharged in Brokerage Engine, encapsulating your photos, details, documents, tasks and much more. In this article, we describe the elements that make up a listing in Brokerage Engine.

![Listing Detail Page](/docs/listings-listing-detail.gif)

## Listing Essentials
This widget summarizes listing details and photos, with options to make changes and report on a given listing.

##### Public Link 🌎
For Realogy-affiliated customers, users can link out to the public listing available on your brand's website. For example: `https://www.sothebysrealty.com/id/4gtq3d`. This link will only be populated when a listing has moved to <Highlight color="#16D39A">ACTIVE</Highlight> status.

##### View on Map 🗺️
Allows users to view the listing on Google Maps.

### Media Browser
The media browser contains all assets related to photos, videos and media links.

#### Listing Photos
Listing photos are images chosen to display in syndication to publicly available websites. All unused photos will remain in Media Library.

:::info
Brokerage Engine has a default limit of 50 listing photos. However, depending on your brand affiliation, this number can be increased or decreased.
:::

##### Edit Captions ✏️
Users can add captions to each image for display on public marketing websites (where supported).

##### Delete Photo 🗑️
Users can chose to delete individual photos.

:::caution
Once a photo is deleted, it may not be recovered.
:::

##### Download Photo 📥
Users can download individual, or a select grouping of, photos in Original quality or MLS sized versions.

##### Zoom 🔍
Zoom in to get a better look at photos. Users can also use their left and right arrow keys to move through all photos.

#### Media Library
Photos are uploaded to the media library first, then selected for display in Listing Photos either by clicking on an image, or dragging and dropping into the Listing Photos section.

##### Add All to Listing Photos
Will add all images in your Media Library to the Listing Photos.

##### Remove All Photos
Delete all photos in your Media Library.

:::caution
Once photos are deleted, they may not be recovered.
:::

##### Dropbox Import
Import photos from a Dropbox folder. This function will only parse the main folder directory and will not account for subdirectories.

##### Download Photos
Users may download all photos of a listing, in their original size or MLS sized equivalents, via a .zip file to their desktop. Photos will maintain the sequence in which they're arranged in Brokerage Engine. By default, the .zip file will only include images in Listing Photos.

###### Include Offline Photos
If selected, the download will also include images from the Media Library.

#### Listing Links
Links to media such as virtual tours, floorplans and videos. For Realogy-affiliated companies, these fields will map to the corresponding fields in dashAPI.
- **Virtual Tour**
  - Link to the virtual tour website provided by your photographer.
- **Video Walk Through**
  - Link to the full motion video hosted on sites like Youtube or Vimeo.
- **3D Video**
  - Link to the 3D walkthrough tours, such as Matterport.
- **Local Listing Link**
  - Link to the listing on the company's own website.
- **Floor Plan**
  - Link to the interactive or static (Ex. a PDF or image) floorplan.
  - User has the option to toggle between a link or a direct upload (in the event the static floorplan has not already been hosted somewhere).

#### Brightcove (Sotheby's International Realty affiliates only)
With the Brightcove integration activated, users may upload full motion video to listings and have it reflect in DASH and on Brightcove.

:::tip
It is highly recommended that users refer to the Sotheby's International Realty Style Guide for guidelines on acceptable video content. Uploading video without these guidelines in-mind may result in QC rejection.
:::

### Edit Details
Listing [fields](listings-fields.md) can be updated manually, or through [automated MLS updates](listings-getting-started.md#automated-mls-updates).

### Activity Log
The Listings Activity Log tracks all changes made to a listing by Users or by Automated MLS Updates.

### Open House
Track Open House activities internally or, for Realogy-affiliated customers, syndicate dates and times to public marketing websites. To register a valid open house in Brokerage Engine, please ensure all following field requirements are met. Adding open houses will only be available when a listing has moved to <Highlight color="#16D39A">ACTIVE</Highlight> status.
- Date
- Start Time
- End Time
- Show on Internet?
- By Appointment **(optional)**
- Virtual Open House?
  - Virtual open houses will syndicate with a link to where the agent will be broadcasting (Zoom, Facebook Live, Google Hangouts, etc.).
- Remarks **(optional)**
  - Where supported, remarks will syndicate to public marketing websites.

Once all fields are complete, click the Save ( 💾 ) action button.

### Seller Report
Powered by [ListTrac](https://www.listtrac.com/MS/index.html), seller reports track view metrics on all public marketing websites where the listing is syndicated. Metrics include the following. Viewing seller reports will only be available when a listing has moved to <Highlight color="#16D39A">ACTIVE</Highlight> status.
- Total Listing Views
  - Breakdown by reporting source.
  - Top 10 Cities
  - Top 10 States (or International)
- Last 30 Days of Views
  - Breakdown by reporting source.
- Listing Views Over Time

In addition to ListTrac data, Brokerage Engine Seller Reports will display all completed Marketing tasks associated with a property.

#### Download PDF
A user may download the seller report rendered in PDF format.

#### Email Report

:::tip
Brokerage Engine will autofill **"To:"** with the seller's email, if it was previously entered under [Property Information](listings-fields.md/#property-information).
:::

##### Email
A user may send one-time seller reports to their client or a 3rd party.

##### Schedule Report
A user may schedule the seller report to send on a recurring basis, following the schedule below.
- Weekly
  - Every Wednesday @ 8:00 AM local time
- Semi-Monthly
  - 1st and 15th of each month @ 8:00AM local time
- Monthly
  - 1st of each month @ 8:00AM local time

:::note
Scheduled reports will cease once the listing has moved to <Highlight color="#455A64">Closed</Highlight> status.
:::

## Listing Documents
A listing documents checklist is populated automatically upon [Quick Launch](listings-getting-started.md/#quick-launch-method) of a listing. The Listing Documents widget displays statuses of each document in the checklist, along with a link to <Highlight color="#00B5B8">Manage Documents</Highlight> and see the full document checklist.

## Listing Tasks
The Listing Tasks widget displays all tasks associated with the listing which are in the following statuses.
- <Highlight color="#64B5F6">Requested</Highlight>
- <Highlight color="#FFA87D">In Progress</Highlight>
- <Highlight color="#FF5252">Pending Info</Highlight>
- <Highlight color="#FF1744">Pending Review</Highlight>
- <Highlight color="#10C888">Approved</Highlight>

### Manage Tasks
Clicking the Manage Tasks button on Listing Tasks provides a full task history including ones which are <Highlight color="#16D39A">Done</Highlight> or were <Highlight color="#B0BEC5">Cancelled</Highlight>.

#### Add Task

##### For `Admin` Users
Clicking the <Highlight color="#00B5B8">+ Add Task</Highlight> button allows `Admin` users to create the following task types.
- **Marketing**
  - Fields Required
    - Summary (Task Name)
    - Description
- **Reminder**
  - Fields Required
    - Summary (Task Name)
    - Description
- **Listing Milestone**
  - Fields Required
    - Summary (Task Name)
    - Description
    - Upload File (Cover Image)
      - This is necessary to have the Listing Milestone display on a seller report.
    - Reference Link
      - This is recommended for digital milestones, such as email marketing campaigns or links to social media posts.
      - Ensure that you upload a Cover Image with all milestones.

Clicking the <Highlight color="#00B5B8">+ Add Task</Highlight> **dropdown** allows the `Admin` to trigger the following tasks.
- Vendor Photo Shoot Workflow Task
- Vendor Sign Installation Request
- Vendor Copywriting Request

##### For `Agent` Users
Clicking the <Highlight color="#00B5B8">+ Add Task</Highlight> button allows `Agent` users to create the following task types.
- **Reminder**
  - Fields Required
    - Summary (Task Name)
    - Description
- **Listing Milestone**
  - Fields Required
    - Summary (Task Name)
    - Description
    - Upload File (Cover Image)
      - This is necessary to have the Listing Milestone display on a seller report.
    - Reference Link
      - This is recommended for digital milestones, such as email marketing campaigns or links to social media posts.
      - Ensure that you upload a Cover Image with all milestones.

## Marketing Opportunities
Marketing Opportunities tagged "Featured on Listing Detail" will display on this widget, which is only visible to `Agent` users. Clicking <Highlight color="#00B5B8">View All Opportunities</Highlight> will take the user to the Marketing Catalog.