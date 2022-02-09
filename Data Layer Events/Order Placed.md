# Order Placed

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Order Placed",
    "transaction": {
        "item": [
            {
                "price": {
                    "sellingPrice": "<sellingPrice>"
                },
                "productInfo": {
                    "name": "<name>",
                    "productID": "<productID>"
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
        "total": {
            "currency": "<currency>"
        }
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|currency|string|Currency of the transaction. ISO 4217 \(3 character alpha\), uppercase |USD, CAD, GBP, CHF|^[A-Z]{3}$|3|3||||
|name|string|Name of the product or offering.  Should be unique and 1:1 with productID|Oceana, Corsica, Flame Tech, Air Jordan 88|||||||
|orderLevelDiscountCode|string|Order Level Discount code applied at the item level of a transaction. |FRIENDSANDFAMILY20, EASTER10|||||||
|paymentAmount|string|String representation of the payment amount. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|paymentID|string|Unique identifier of a payment.  Typically an integration key from a back-end system.|ZPH-87698-098|||||||
|paymentMethod|string|Describes the method of payment for a transaction. |Credit Card, PayPal, Mastercard, Visa, Amex, Discover|||||||
|productID|string|Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. |155, 65588, 987764448|||||||
|purchaseID|string|Unique identifier of the purchase. Max Length 20. Used as Unique ID of the purchase or deduplication.|ABC-132456789, DEF-132456789, 0987654567|^[a-zA-Z0-9]{6,20}$|6|20||||
|quantity|integer|Integer number of products being acted upon \(added to a cart, removed from wishlist, purchased, reserved\)|1, 2, 3, 4, 5||||1|||
|sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||




