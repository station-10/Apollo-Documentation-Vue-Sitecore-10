# Product Added to Cart

### 

## Javascript Code
```js
window.appEventData = window.appEventData || [];
appEventData.push({
  "event": "Product Added to Cart",
    "filmEvent": {
        "filmEventId": "<filmEventId>",
        "filmEventName": "<filmEventName>"
    },
    "product": [
        {
            "price": {
                "sellingPrice": "<sellingPrice>",
                "totalPrice": <totalPrice>
            },
            "productInfo": {
                "name": "<name>",
                "productID": "<productID>"
            },
            "quantity": <quantity>
        }
    ],
    "venue": {
        "venueCode": "<venueCode>",
        "venueName": "<venueName>"
    }
});
```

## Variable Definitions

|Field|Type|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|filmEventId|string|The ID of the film or event \(can identify films across all languages\)||||||||
|filmEventName|string|The name of the film or event||||||||
|productID|string|Unique Identifier of a product or offering.  Must match the format of back-end systems if used as a key for import of product meta data. Most often, one level above SKU for products with SKU variants. |155, 65588, 987764448|||||||
|quantity|integer|Integer number of products being acted upon \(added to a cart, removed from wishlist, purchased, reserved\)|1, 2, 3, 4, 5||||1|||
|sellingPrice|string|String representation of the price paid after coupons or discounts. Positive. Up to two decimal places for cents. No currency symbol.|200, 29.99, 50, 0|^[0-9]*(\.[0-9]{1,2})?$||||||
|totalPrice|number|The total price of the product \(selling price \* quantity\)||||||||
|venueCode|string|The code of the currently selected venue||||||||
|venueName|string|The name of the currently selected venue||||||||




