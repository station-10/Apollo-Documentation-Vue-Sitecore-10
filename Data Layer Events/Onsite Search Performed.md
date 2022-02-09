# Onsite Search Performed

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Onsite Search Performed",
    "onsiteSearch": {
        "keyword": {
            "searchTerm": "<searchTerm>",
            "searchTermCorrected": "<searchTermCorrected>",
            "searchType": "<searchType>"
        }
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|searchTerm|string|Describes the search keyword used after auto-correct, auto-complete, or keyword suggestion. |bluth, blue, red lobster|||||||
|searchTermCorrected|string|Describes the search keyword exactly as entered by the user before any auto-correct or auto complete actions take place.  This is the search term that was corrected. |bluth:blu, blue:blu, red lobster:rd lbstr|||||||
|searchType|string|Describes the domain of the search. |products, properties, articles, authors, coupons, publications|||||||




