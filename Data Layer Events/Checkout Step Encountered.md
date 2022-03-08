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
    "product": [
        {
            "price": {
                "sellingPrice": "<sellingPrice>",
                "totalPrice": <totalPrice>
            },
            "productInfo": {
                "sessionAttributes": "<sessionAttributes>",
                "sessionDateTime": "<sessionDateTime>",
                "sessionID": "<sessionID>",
                "sessionOccupancy": "<sessionOccupancy>",
                "sessionScreenNumber": "<sessionScreenNumber>"
            }
        }
    ]
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|checkoutStep|string|Describes a discrete step in the checkout flow. |Cart Review, Billing Info, Shipping Info, Order Review|||||||
|sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|sessionAttributes|string|The attributes of the session; over18s\/imax\/subtitled||||||||
|sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|sessionID|string|The ID of the session||||||||
|sessionOccupancy|string|The percentage of seats currently booked for the session; less than or equal to 1\/4 \| 0.16||||||||
|sessionScreenNumber|string|The screen number of the booking||||||||
|totalPrice|number|The total price of the product \(selling price \* quantity\)||||||||




