# User Registered

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "User Registered",
    "user": {
        "custKey": "<custKey>",
        "registrationType": "<registrationType>",
        "system": "<system>"
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|custKey|string|Unique identifier of a customer.  Any id's considered PII must be hashed. ||||||||
|registrationType|string|Describes the thing that was registered for |account, loyalty program, event, sweepstakes, warranty|||||||
|system|string|Describes the system that the user is logged into.  \(rarely used\). |admin, shop, member|||||||




