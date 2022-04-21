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

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|product[n].productInfo.sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|product[n].productInfo.sessionID|string|The ID of the session||||||||
|selfRefundReason|string|The reason for the self refund request||||||||




