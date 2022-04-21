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

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|eventDetails.checkoutStep|string|Describes a discrete step in the checkout flow. |Cart Review, Billing Info, Shipping Info, Order Review|||||||
|filmEvent.filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEvent.filmEventName|string|The name of the film or event||||||||
|filmEvent.filmEventType|string|The type of film or event||||||||
|product[n].price.sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|product[n].price.totalPrice|string|The total price of the product \(selling price \* quantity\)||||||||
|product[n].productInfo.productID|string|Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. |155, 65588, 987764448|||||||
|product[n].productInfo.productType|string|The type of product; tickets, concessions etc||||||||
|product[n].productInfo.sessionAttributes|string|The attributes of the session; over18s\/imax\/subtitled||||||||
|product[n].productInfo.sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|product[n].productInfo.sessionID|string|The ID of the session||||||||
|product[n].productInfo.sessionOccupancy|string|The percentage of seats currently booked for the session; less than or equal to 1\/4 \| 0.16||||||||
|product[n].productInfo.sessionPeriod|string|peak, off-peak||||||||
|product[n].productInfo.sessionScreenNumber|string|The screen number of the booking||||||||
|product[n].productInfo.ticketTier|string|Ticket tier; standard, premium etc||||||||




