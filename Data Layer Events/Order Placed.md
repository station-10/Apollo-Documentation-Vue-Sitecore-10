# Order Placed

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Order Placed",
    "filmEvent": {
        "filmEventId": "<filmEventId>",
        "filmEventName": "<filmEventName>"
    },
    "transaction": {
        "item": [
            {
                "price": {
                    "sellingPrice": "<sellingPrice>",
                    "totalPrice": "<totalPrice>"
                },
                "productInfo": {
                    "name": "<name>",
                    "productID": "<productID>",
                    "productType": "<productType>",
                    "ticketTier": "<ticketTier>"
                },
                "quantity": <quantity>,
                "voucherDiscount": {
                    "orderLevelDiscountCode": "<orderLevelDiscountCode>"
                }
            }
        ],
        "payment": [
            {
                "paymentAmount": "<paymentAmount>",
                "paymentID": "<paymentID>",
                "paymentMethod": "<paymentMethod>"
            }
        ],
        "purchaseID": "<purchaseID>",
        "sessionInfo": {
            "sessionAttributes": "<sessionAttributes>",
            "sessionDateTime": "<sessionDateTime>",
            "sessionID": "<sessionID>",
            "sessionOccupancy": "<sessionOccupancy>",
            "sessionScreenNumber": "<sessionScreenNumber>"
        },
        "total": {
            "currency": "<currency>"
        }
    },
    "venue": {
        "venueCode": "<venueCode>",
        "venueName": "<venueName>"
    }
});
```

## Variable Definitions

|Path|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|filmEvent.filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEvent.filmEventName|string|The name of the film or event||||||||
|transaction.item[n].price.sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|transaction.item[n].price.totalPrice|string|The total price of the product \(selling price \* quantity\)||||||||
|transaction.item[n].productInfo.name|string|Name of the product or offering.  Should be unique and 1:1 with productID|Oceana, Corsica, Flame Tech, Air Jordan 88|||||||
|transaction.item[n].productInfo.productID|string|Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. |155, 65588, 987764448|||||||
|transaction.item[n].productInfo.productType|string|The type of product; tickets, concessions etc||||||||
|transaction.item[n].productInfo.ticketTier|string|Ticket tier; standard, premium etc||||||||
|transaction.item[n].quantity|integer|Integer number of products being acted upon \(added to a cart, removed from wishlist, purchased, reserved\)|1, 2, 3, 4, 5||||1|||
|transaction.item[n].voucherDiscount.orderLevelDiscountCode|string|Order Level Discount code applied at the item level of a transaction. |FRIENDSANDFAMILY20, EASTER10|||||||
|transaction.payment[n].paymentAmount|string|String representation of the payment amount. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|transaction.payment[n].paymentID|string|Unique identifier of a payment.  Typically an integration key from a back-end system.|ZPH-87698-098|||||||
|transaction.payment[n].paymentMethod|string|Describes the method of payment for a transaction. |Credit Card, PayPal, Mastercard, Visa, Amex, Discover|||||||
|transaction.purchaseID|string|Unique identifier of the purchase. Max Length 20. Used as Unique ID of the purchase or deduplication.|ABC-132456789, DEF-132456789, 0987654567|^[a-zA-Z0-9]{6,20}$|6|20||||
|transaction.sessionInfo.sessionAttributes|string|The attributes of the session; over18s\/imax\/subtitled||||||||
|transaction.sessionInfo.sessionDateTime|string|The date and time of the session. In standard ISO date time format||||||||
|transaction.sessionInfo.sessionID|string|The ID of the session||||||||
|transaction.sessionInfo.sessionOccupancy|string|The percentage of seats currently booked for the session; less than or equal to 1\/4 \| 0.16||||||||
|transaction.sessionInfo.sessionScreenNumber|string|The screen number of the booking||||||||
|transaction.total.currency|string|Currency of the transaction. ISO 4217 \(3 character alpha\), uppercase |USD, CAD, GBP, CHF|^[A-Z]{3}$|3|3||||
|venue.venueCode|string|The code of the currently selected venue||||||||
|venue.venueName|string|The name of the currently selected venue||||||||




