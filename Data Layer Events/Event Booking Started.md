# Event Booking Started

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Event Booking Started",
    "booking": {
        "ticketList": [
            {
                "event": {
                    "eventName": "<eventName>",
                    "fakeProductId": "<fakeProductId>"
                }
            }
        ]
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|eventName|string|The friendly name of the event.|Max your 401K, Structured JavaScript, Mid Day Yoga, Frosty 5K Fun Run, Whiskey Wednesday|||||||
|fakeProductId|string|Helper node used by AA Product String Builder to set product to location. This field gets a static value of "event".  With updates to the AA PS extension, this will soon go away.|event|event||||||




