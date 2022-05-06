# Self Refund Completed

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Self Refund Completed",
    "selfRefundReason": "<selfRefundReason>",
    "sessionInfo": {
        "sessionDateTime": "<sessionDateTime>",
        "sessionID": "<sessionID>"
    }
});
```

## Variable Definitions

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|selfRefundReason|string|The reason for the self refund request||||||||
|sessionInfo.sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|sessionInfo.sessionID|string|The ID of the session||||||||




