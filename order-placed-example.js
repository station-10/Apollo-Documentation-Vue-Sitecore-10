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
                    "productID": "1234",
                    "name": "Regular Ticket",
                    "type": "ticket",
                    "ticket": {
                        "ticketTier": "vip", // what ticket tiers were purchased? (e.g. standard, VIP)
                        "ticketAdmits": 1, // how many people does a purchase ticket admit? (e.g. a family ticket would admit 4 people)
                    },
                },
                "price": {
                    "sellingPrice": "<sellingPrice>"
                },
                "voucherDiscount": {
                    "orderLevelDiscountCode": "<orderLevelDiscountCode>"
                }
            },
            {
                "quantity": 1,
                "productInfo": {
                    "productID": "abc123",
                    "name": "3D Glasses",
                    "type": "concession",
                    "ticket": { // do we still have to set these in the data layer? Would rather not
                        "ticketTier": "", // what ticket tiers were purchased? (e.g. standard, VIP)
                        "ticketAdmits": 0, // how many people does a purchase ticket admit? (e.g. a family ticket would admit 4 people)
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
