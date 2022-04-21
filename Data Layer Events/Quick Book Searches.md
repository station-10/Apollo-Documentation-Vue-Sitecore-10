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

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|filmEvent.filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEvent.filmEventName|string|The name of the film or event||||||||
|filmEvent.filmEventType|string|The type of film or event||||||||
|venue.venueCode|string|The code of the currently selected venue||||||||
|venue.venueName|string|The name of the currently selected venue||||||||




