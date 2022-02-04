window.appEventData = window.appEventData || [];
appEventData.push({
    "event": "Order Placed",
    "transaction": {
        "total": {
            "currency": "<currency>"
        },
        "purchaseID": "<purchaseID>",
        "item": [
            {
                "quantity": 1,
                "productInfo": {
                    "productID": "<productID>",
                    "name": "<name>",
                    "ticket": {
                        "ticketTier": "<ticketTier>", // what ticket tiers were purchased? (e.g. standard, VIP)
                        "ticketAge": "<ticketAge>", // what ticket age was purchased (e.g. child, adult, senior)
                        "ticketAdmits": 1, // how many people does a purchase ticket admit? (e.g. a family ticket would admit 4 people)
                    },
                },
                "price": {
                    "sellingPrice": "<sellingPrice>"
                },
                "voucherDiscount": {
                    "orderLevelDiscountCode": "<orderLevelDiscountCode>"
                }
            }
        ],
        "payment": [
            {
                "paymentMethod": "<paymentMethod>"
            }
        ],
        "transactionID": "<transactionID>",
        "venue": {
            "venueCode": "<venueCode>", // At which cinema code were tickets placed? (e.g. 10036)
            "venueName": "<venueName>", // At which cinema name were tickets placed? (e.g. Vue Birmingham)
        },
    },
});
