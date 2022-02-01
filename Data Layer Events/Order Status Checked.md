# Order Status Checked

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Order Status Checked",
    "order": {
        "status": "<status>"
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|status|string|Captures the status of the visitor's order.|Shipped, Completed, Cancelled, Refunded, Pending, Awaiting Pickip|||||||




