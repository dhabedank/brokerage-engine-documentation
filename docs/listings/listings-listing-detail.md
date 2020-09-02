---
id: listings-listing-detail
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

## Edit Details
Listings can be updated manually