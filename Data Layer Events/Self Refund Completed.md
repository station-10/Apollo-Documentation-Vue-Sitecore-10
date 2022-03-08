# Self Refund Completed

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Self Refund Completed",
    "product": [
        {
            "productInfo": {
                "sessionDateTime": "<sessionDateTime>",
                "sessionID": "<sessionID>"
            }
        }
    ],
    "selfRefundReason": "<selfRefundReason>"
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|selfRefundReason|string|The reason for the self refund request||||||||
|sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|sessionID|string|The ID of the session||||||||




