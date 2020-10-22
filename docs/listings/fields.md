---
id: fields
title: Fields
sidebar_label: Fields
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

Fields in Brokerage Engine are derived, with some limited exceptions, from those available in Realogy's dashAPI. 

:::note
During a customer's initial implementation of Brokerage Engine, additional "custom" fields may be requested. These custom fields are meant to accommodate the customer's internal business requirements and are not intended to sync to dashAPI.
:::

## Location
- Address Line 1
- Address Line 2
  - For listings part of a multi-unit building, such as condominiums, apartments or townhouses - it is recommended to enter the APT or UNIT number here.
- Subdivision / Neighborhood
- City
- State
- Zip Code
- Latitude
- Longitude

## Property Information
- Property Type
- Style
- Beds
- Baths
- Lot Size
  - The customer may choose to use Acres or SqFt for their company.
- Year Built
- Parking Places
- Tax Year
- Annual Tax
- Elementary School
- Middle School
- High School
- Seller Info
  - First Name
  - Last Name
  - Phone Number
  - Email

## Features

<details>
<summary>Click to show full feature list</summary>

|         Age                          |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     New   Construction               |     1-5   Years Old                  |     6-10   Years Old                |     11-20   Years Old             |
|     21-30   Years Old                |     31-40   Years Old                |     41-50   Years Old               |     Over   50 Years Old           |

|                Basement              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Crawl   Space                    |     Finished                         |     Full                            |     None                          |
|     Other   Basement                 |     Partial                          |     Slab   Foundation               |     Unfinished                    |
|     Walk-out                         |                                      |                                     |                                   |

|                Fireplace Count       |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     1   Fireplace                    |     2   Fireplaces                   |     3   Fireplaces                  |     4+   Fireplaces               |

|                Garage Count          |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     1   Car Garage                   |     2   Car Garage                   |     3   Car Garage                  |     4   Car Garage                |
|     5   + Car Garage                 |                                      |                                     |                                   |

|                Lot Size              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Under   1/2 Acre                 |     1/2   - 1 Acre                   |     1-2   Acres                     |     2-5   Acres                   |
|     5-10   Acres                     |     10-20   Acres                    |     20-50   Acres                   |     50-100   Acres                |
|     100+   Acres                     |                                      |                                     |                                   |

|                Sewer                 |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Aerobic   System                 |     Central                          |     Cesspool                        |     City                          |
|     Mound                            |     None                             |     Private                         |     Public                        |
|     Septic                           |                                      |                                     |                                   |

|                Water                 |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Central                          |     City   Water                     |     Lake   Water                    |     Municipal   Water             |
|     No   Water                       |     Other   Water Source             |     Spring                          |     Storage   Tank                |
|     Well                             |                                      |                                     |                                   |

|                Amenities             |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Agricultural   Easement(s)       |     Bay   / Beach Club               |     Caretaker   House               |     Cattle   Ranch                |
|     Conservation   Easement(s)       |     Direct   Elevator Access         |     Elk   Ranch                     |     Estate   Farm                 |
|     Estate   Ranch                   |     Fishing   Ranch                  |     Fitness   Center                |     Fly   Fishing                 |
|     Guest   Ranch                    |     Hobby   Farm                     |     Horse   facilities              |     Horse   Ranch                 |
|     Hunting   Ranch                  |     Investment   Ranch               |     Live   Water                    |     Modular   Sports Courts       |
|     Outdoor   Basketball Court       |     Playground                       |     Putting   Green                 |     Recreational   Area           |
|     Recreational   Ranch             |     Silo                             |     Ski   Resort                    |     Sporting   Ranch              |
|     Squash   Court                   |     Stables                          |     Station                         |     Tennis   Courts               |
|     Timberland                       |     Walk-to-ski                      |     Yacht   Club                    |     Yoga   Space                  |

|                Appliances            |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Dishwasher                       |     Double   Oven                    |     Dryer                           |     Garbage   Disposal            |
|     Microwave                        |     Range   / Oven                   |     Refrigerator                    |     Trash   Compactor             |
|     Washer                           |                                      |                                     |                                   |

|                Area Amenities        |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Aquatic   Activities             |     Area   Boat Dock                 |     Area   Boat Ramp                |     Area   Climbing               |
|     Area   Fishing                   |     Area   Hiking                    |     Area   Horse Riding/Stables     |     Area   Hunting                |
|     Area   Pool                      |     Area   Skiing                    |     Area   Snowmobiling             |     Area   Tennis                 |
|     Biking                           |     Boating                          |     Casino   / Gambling             |     Community   Slip              |
|     Deep   Water Mooring             |     Golf                             |     Jogging   / Biking Path         |     Outdoor   Activities          |

|                Area Description      |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Country   Living                 |     Cycling                          |     Desert   Living                 |     Equestrian   / Polo           |
|     Fishing                          |     Flood   Area                     |     Game   Farm/Safari              |     Green   Living                |
|     Historic   / Antique             |     Hunting                          |     Metropolitan                    |     Mountain                      |
|     Other   Beach                    |     Privacy                          |     Resort                          |     Rock   Beach                  |
|     Sand   Beach                     |     School   Zone                    |     Ski-In   / Ski-Out              |     Skiing                        |
|     Suburban                         |     Wine   Country                   |                                     |                                   |

|                Bath Features         |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Bidet                            |     Jacuzzi   Tub                    |     Jetted   Tub                    |     Stall   Shower                |
|     Stall   Shower and Tub           |     Steam   Room                     |     Steam   Shower                  |                                   |
|     Tub   and Shower                 |     Tub   Only                       |                                     |                                   |

|                Body of Water         |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Bay                              |     Canal                            |     Gulf                            |     Inlet                         |
|     Lagoon                           |     Lake                             |     Ocean                           |     Pond                          |
|     Reservoir                        |     River                            |     Sound                           |                                   |

|                Community Type        |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     55+   Community                  |     Adult                            |     Beach   Resort                  |     Co-Op                         |
|     Country   Club                   |     FHA   Compliant                  |     Fly-In                          |     Gated                         |
|     Golf   Course                    |     Tennis                           |                                     |                                   |

|     Cooling                          |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     A/C                              |                                      |                                     |                                   |
|     Central   A/C                    |     Central   A/C - Electric         |     Central   A/C - Gas             |     Humidifier                    |
|     No   A/C                         |     Other   A/C                      |     Split   Unit A/C                |     Wall   Unit A/C               |
|     Window   A/C                     |     Zoned   A/C                      |                                     |                                   |

|                Exterior              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Barn/Stable                      |     BBQ                              |     Boat   House                    |     Boat   Ramp                   |
|     Carriage   House                 |     Covered   Terraces               |     Dock                            |     Dock   Rights                 |
|     Carriage   House                 |     Covered   Terraces               |     Dock                            |     Dock   Rights                 |
|     Dog   Run                        |     Double   Pane / Storm Windows    |     Fire   Pit                      |     Gardens                       |
|     Guest   House                    |     Helipad                          |     Out   Building                  |     Porte-Cochere                 |
|     Sidewalk                         |     Sprinkler   System               |     Storage   Shed                  |     Storm   door                  |
|     Storm   window                   |     Thermal   Windows / Doors        |     Underground   Lawn Sprinkler    |     Water   Feature               |

|                Exterior Description  |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Aluminum   Siding                |     Brick                            |     Cedar   Siding                  |     Cement   Siding               |
|     Concrete   Block                 |     E.I.F.S                          |     Log                             |     Other                         |
|     Paraffin   Hardboard             |     Steel   Frame                    |     Stone                           |     Stucco                        |
|     Vinyl   Siding                   |     Wood   Frame                     |     Wood   Siding                   |                                   |

|                Exterior Living Space |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Balcony   / Lanai                |     Courtyard                        |     Deck                            |     Enclosed   Porch              |
|     Outdoor   Kitchen                |     Outdoor   Rooms                  |     Patio                           |     Porch                         |
|     Screened   Porch                 |     Terrace                          |                                     |                                   |

|                Fencing               |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Fenced   Yard                    |     Metal   Fence                    |     Partially   Fenced              |     Privacy   Fence               |
|     Vinyl   Fence                    |     Wood   Fence                     |                                     |                                   |

|                Fireplace Description |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     2-Sided                          |     Brick                            |     Fireplace                       |     Gas                           |
|     Stone                            |     Wood   Burning                   |     Wood   Burning Stove            |                                   |

|                Flooring              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Ceramic                          |     Concrete                         |     Hardwood                        |     Laminate                      |
|     Linoleum                         |     Marble                           |     Mixed                           |     Stone                         |
|     Tile                             |     Wall   to Wall Carpet            |                                     |                                   |

|                Garage Description    |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Attached   Garage                |     Carport                          |     Curb   Parking.                 |     Detached   Garage             |
|     Garage                           |     Golfcart   Garage                |     No   Garage                     |     RV   Parking                  |

|                General               |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Built-in   Vacuum                |     Ceiling   Fan(s)                 |     Clubhouse                       |     Concierge   Services          |
|     Doorman                          |     Elevator                         |     Energy-saving   Features        |     Escalator                     |
|     Fenced   Range Land              |     Fire   Alarms                    |     Guard   Gated                   |     Lake   Privileges             |
|     Laundry   Facilities             |     Private   Airport                |     Private   Elevator              |     Security   System             |
|     Skylight                         |     Smoke   Detector                 |     Stereo   System                 |     Storage   Area                |
|     Wheel   Chair Accessible         |     Window   Treatments              |     Workshop                        |                                   |

|                Heating - Fuel Type   |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Coal                             |     Electric                         |     Gas                             |     Geothermal                    |
|     Hydro   Heat                     |     None                             |     Oil                             |     Other                         |
|     Propane                          |     Solar                            |     Wood                            |                                   |

|                Interior              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Bay/Bow   Window                 |     Beam   -Ceilings                 |     Blinds                          |     Bowling   Alley               |
|     Cathedral   Ceilings             |     Cedar   Closets                  |     Dry   Bar                       |     Exercise   Area               |
|     Fireplace   in Master BR         |     High   Tech Cabling              |     Indoor   Basketball Court       |     Indoor   Racquetball Court    |
|     In-Home   Gym                    |     In-law   Suite                   |     Intercom   System               |     Laundry   Chute               |
|     Screen   Room                    |     Track   lighting                 |     Two-story   Family Room         |     Vaulted   Ceilings            |
|     Walk-in   Closet                 |     Wet   Bar                        |     Wine   Cellar                   |                                   |

|                Kitchen Features      |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Breakfast   Bar                  |     Butlers   Pantry                 |     Catering   kitchen              |     Center   Island               |
|     Convection   Steam Oven          |     Country   Kitchen                |     Designer   Kitchen              |     Eat-in   Kitchen              |
|     Galley   Kitchen                 |     Gourmet   Kitchen                |     Granite   Countertops           |     Kitchen   Facilities          |
|     Marble   Countertop              |     Wine   Bar                       |                                     |                                   |

|                Lifestyles            |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Aquatic   Activities             |     Bay   / Beach Club               |     Beach                           |     Boating                       |
|     Casino   / Gambling              |     Country   Club                   |     Country   Living                |     Cycling                       |
|     Eco-Friendly                     |     Equestrian                       |     Farm   & Ranch                  |     Fishing                       |
|     Fly-In                           |     Game   Farm / Safari             |     Golf                            |     Hiking                        |
|     Historic                         |     Hunting                          |     Lakefront                       |     Metropolitan                  |
|     Mountain                         |     Ocean   / Beach                  |     Outdoor   Activities            |     Privacy                       |
|     Private   Island                 |     Resort                           |     Retirement                      |     Riverfront                    |
|     Ski   (Snow)                     |     Ski   (Water)                    |     Suburban                        |     Tennis                        |
|     Univ   / College Community       |     Water   View                     |     Waterfront                      |     Wine   & Vineyard             |
|     Yacht   Club                     |                                      |                                     |                                   |

|                Location              |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Above   Shoppes                  |     Backs   to Golf Course           |     Backs   to Park Land            |     Bayside                       |
|     Beach   Front                    |     Canal   Front                    |     Channel   Front                 |     Cul-de-sac                    |
|     Emerging   Area                  |     Fairway   Frontage               |     Gulf                            |     Harbor                        |
|     In   Shopping Mall               |     Intercoastal   Waterway          |     Island                          |     Lagoon                        |
|     Lakefront                        |     Marina                           |     Ocean   / Beach                 |     Ocean   Block                 |
|     Ocean   Front                    |     Off   Water                      |     Riverfront                      |     Slope   Side                  |
|     Waterfront                       |                                      |                                     |                                   |

|                Pool Description      |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Above   Ground                   |     Hot   Tub                        |     Indoor                          |     Inground                      |
|     Outdoor                          |     Pool                             |     Resistance   / Spa              |                                   |

|                Pre-Wiring            |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Cable                            |     Entertainment   System           |     Garage   Door                   |     Generator                     |
|     Phone   Jacks                    |     Security   System                |                                     |                                   |

|                Property Description  |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Acreage                          |     Community   Living               |     Easement                        |     Eco-Friendly   (Green)        |
|     Farm   / Ranch                   |     Farm   / Ranch / Plantation      |     Farm   Assessment               |     Fenced   Farm Acreage         |
|     Ski   Property                   |     Vineyard                         |     Winery                          |                                   |

|                Roof                  |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Asphalt   / Fiberglass           |     Asphalt   Shingle Roof           |     Bermuda   Roof                  |     Cedar   Shake                 |
|     Cement   Tiles                   |     Composition   Shingle            |     Fiberglass                      |     Metal   Roof                  |
|     Rubber                           |     Slate   Roof                     |     Spanish   Tiles                 |     Tar   & Gravel                |
|     Wood   Shingles / Shakes         |                                      |                                     |                                   |

|                Rooms                 |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Artist   Studio                  |     Billiards   Room                 |     Casita                          |     Guest   Suite                 |
|     Library                          |     Media   Room / Home Theater      |     Staff   Quarters                |                                   |

|                Special Market        |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     College   / University           |     Hospitality                      |     International   Properties      |     Luxury   Properties           |
|     Military   Properties            |     NewHomes                         |     Resort   / Lake                 |     Vacation   / Second Home      |

|                Views                 |                                      |                                     |                                   |
|--------------------------------------|--------------------------------------|-------------------------------------|-----------------------------------|
|     Bay                              |     City   / Strip                   |     Garden                          |     Golf                          |
|     Lake   & Stream                  |     Marshfront                       |     Mountain                        |     Ocean                         |
|     Panoramic                        |     Park                             |     Pond                            |     Scenic                        |
|     Sound                            |     Water                            |                                     |                                   |
</details>

:::note
Custom feature additions may not be requested to Brokeage Engine.
:::

## Sale Details
- List Price
- List Date
- Expiration Date
- Anticipated Launch Date
  - Indicator to staff of the agent's preferred listing launch date.
- Agreement Date
  - By nature of the dashAPI, when a property is set to <Highlight color="#16D39A">ACTIVE</Highlight> status, the listing's `List Date` will automatically update to the current date. This ensures a property shows no days on market (DOM) when it becomes first available to the general public. For record keeping purposes, Brokerage Engine tracks the true `Agreement Date` stated on the listing agreement.
- MLS Name
- MLSID
- Additional MLS
  - MLS Name
  - MLSID
- Listing Agent
- Listing / Branch Office
- Property Name
- Property Description
- Do not show listing online
  - If selected, the listing will not be syndicated to any marketing websites.
- Do not show address online
  - If selected, the listing `Address` will not be shown on any syndication partner websites.
- Do not show list price online
  - If selected, the `List Price` will not be shown on any syndication partner websites.
- Price Upon Request
  - If selected, the phrase "Price Upon Request" will be shown in place of the `List Price` on syndication partner websites.