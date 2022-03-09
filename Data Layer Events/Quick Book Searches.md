# Quick Book Searches

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Quick Book Searches",
    "filmEvent": {
        "filmEventId": "<filmEventId>",
        "filmEventName": "<filmEventName>",
        "filmEventType": "<filmEventType>"
    },
    "venue": {
        "venueCode": "<venueCode>",
        "venueName": "<venueName>"
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEventName|string|The name of the film or event||||||||
|filmEventType|string|The type of film or event||||||||
|venueCode|string|The code of the currently selected venue||||||||
|venueName|string|The name of the currently selected venue||||||||




