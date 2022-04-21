# CTA Link Clicked

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "CTA Link Clicked",
    "linkInfo": {
        "linkId": "<linkId>",
        "linkPage": "<linkPage>"
    }
});
```

## Variable Definitions

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|linkInfo.linkId|string|Identifier of the link clicked|act now, cancel, ok, 3456, 8765|||||||
|linkInfo.linkPage|string|Indicates the page a link was clicked from|Home Page, Order Confirmation|||||||




