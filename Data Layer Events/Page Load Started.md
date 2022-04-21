# Page Load Started

### Page Load Started is part of the page load sequence, including virtual page loads in the case of single page apps, and must be the first event pushed in the page load event sequence.

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Page Load Started",
    "filmEvent": {
        "filmEventId": "<filmEventId>",
        "filmEventName": "<filmEventName>"
    },
    "page": {
        "pageName": "<pageName>",
        "pageType": "<pageType>",
        "platform": "<platform>",
        "siteCountry": "<siteCountry>",
        "siteCurrency": "<siteCurrency>",
        "siteLanguage": "<siteLanguage>",
        "siteName": "<siteName>"
    },
    "venue": {
        "venueCode": "<venueCode>",
        "venueName": "<venueName>"
    }
});
```

## Variable Definitions

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|filmEvent.filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEvent.filmEventName|string|The name of the film or event||||||||
|page.pageName|string|Describes the page and its content specifically. |product - XYZ123, Mens - Tops - Sweaters, Order Confirmation|||||||
|page.pageType|string|Describes what purpose the page serves. Often aligns with the CMS template.|Home, Event Detail, Property Detail, Product Listing, Blog Post, Shopping Cart|||||||
|page.platform|string|The technology platform version of the site that the user is experiencing.||||||||
|page.siteCountry|string|Indicates the primary country served by the site. ISO 3166 \(alpha-2\) Uppercase.|US, CA, FR, UK|^[A-Z]{2}$||||||
|page.siteCurrency|string|Currency in which prices are displayed.  ISO 4217 \(3 character alpha\), uppercase|USD, CAD, EUR, GBP, CHF|^[A-Z]{3}$||||||
|page.siteLanguage|string|Language in which the site is presented ISO 639-1 code. |en-us, en-gb, ch-cn, fr-ca, fr-fr, da|^[a-z]{2}([-]{1}[a-z]{2}){0,1}$||||||
|page.siteName|string|Common language used within the business to refer to the website. May be specific County Sites.|Prospecting-EU, Prospecting-US, Member Portal, Shop-CA, Shop-US, Shop-EU|||||||
|venue.venueCode|string|The code of the currently selected venue||||||||
|venue.venueName|string|The name of the currently selected venue||||||||




