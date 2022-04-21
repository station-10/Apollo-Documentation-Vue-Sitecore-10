# Self Refund Started

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Self Refund Started",
    "product": [
        {
            "productInfo": {
                "sessionDateTime": "<sessionDateTime>",
                "sessionID": "<sessionID>"
            }
        }
    ]
});
```

## Variable Definitions

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|product[n].productInfo.sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|product[n].productInfo.sessionID|string|The ID of the session||||||||




