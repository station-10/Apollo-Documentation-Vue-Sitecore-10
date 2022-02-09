window.appEventData = window.appEventData || [];
appEventData.push({
    "event": "Order Placed",
    "transaction": {
        "total": {
            "currency": "<currency>"
        },
        "purchaseID": "<purchaseID>",
        "tickets": [
            {
                "quantity": 1,
                "ticketInfo": {
                    "id": "1234",
                    "name": "Regular Ticket",
                    "type": "ticket",
                    "tier": "vip",
                    "admits": 1,
                },
                "price": {
                    "sellingPrice": "<sellingPrice>"
                },
            },
        ],
        "products": [
            {
                "quantity": 1,
                "productInfo": {
                    "id": "1234",
                    "name": "3d glasses",
                    "type": "concession",
                },
                "price": {
                    "sellingPrice": "<sellingPrice>"
                },
            },
        ],
        "payment": [
            {
                "paymentMethod": "<paymentMethod>"
            }
        ],
        "transactionID": "<transactionID>",
    },
});
