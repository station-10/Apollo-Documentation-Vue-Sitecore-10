# Checkout Step Encountered

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Checkout Step Encountered",
    "eventDetails": {
        "checkoutStep": "<checkoutStep>"
    },
    "filmEvent": {
        "filmEventId": "<filmEventId>",
        "filmEventName": "<filmEventName>",
        "filmEventType": "<filmEventType>"
    },
    "product": [
        {
            "price": {
                "sellingPrice": "<sellingPrice>",
                "totalPrice": "<totalPrice>"
            },
            "productInfo": {
                "productID": "<productID>",
                "productType": "<productType>",
                "sessionAttributes": "<sessionAttributes>",
                "sessionDateTime": "<sessionDateTime>",
                "sessionID": "<sessionID>",
                "sessionOccupancy": "<sessionOccupancy>",
                "sessionPeriod": "<sessionPeriod>",
                "sessionScreenNumber": "<sessionScreenNumber>",
                "ticketTier": "<ticketTier>"
            }
        }
    ]
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|checkoutStep|string|Describes a discrete step in the checkout flow. |Cart Review, Billing Info, Shipping Info, Order Review|||||||
|filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEventName|string|The name of the film or event||||||||
|filmEventType|string|The type of film or event||||||||
|productID|string|Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. |155, 65588, 987764448|||||||
|productType|string|The type of product; tickets, concessions etc||||||||
|sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|sessionAttributes|string|The attributes of the session; over18s\/imax\/subtitled||||||||
|sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|sessionID|string|The ID of the session||||||||
|sessionOccupancy|string|The percentage of seats currently booked for the session; less than or equal to 1\/4 \| 0.16||||||||
|sessionPeriod|string|peak, off-peak||||||||
|sessionScreenNumber|string|The screen number of the booking||||||||
|ticketTier|string|Ticket tier; standard, premium etc||||||||
|totalPrice|string|The total price of the product \(selling price \* quantity\)||||||||




