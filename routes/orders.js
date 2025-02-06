import express from 'express';
const router = express.Router();

let Orders = [
    {
        orderId: 101,
        customerName: "Ali Khan",
        product: {
            id: 1,
            title: "Wireless Mouse",
            price: 25.99,
            quantity: 1
        },
        totalAmount: 25.99,
        status: "Shipped"
    },
    {
        orderId: 102,
        customerName: "Sara Ahmed",
        product: {
            id: 2,
            title: "Mechanical Keyboard",
            price: 79.99,
            quantity: 1
        },
        totalAmount: 79.99,
        status: "Processing"
    },
    {
        orderId: 103,
        customerName: "Usman Ali",
        product: {
            id: 3,
            title: "Gaming Headset",
            price: 59.99,
            quantity: 2
        },
        totalAmount: 119.98,
        status: "Delivered"
    },
    {
        orderId: 104,
        customerName: "Ayesha Noor",
        product: {
            id: 4,
            title: "Smartwatch",
            price: 199.99,
            quantity: 1
        },
        totalAmount: 199.99,
        status: "Cancelled"
    },
    {
        orderId: 105,
        customerName: "Hamza Sheikh",
        product: {
            id: 5,
            title: "Bluetooth Speaker",
            price: 49.99,
            quantity: 1
        },
        totalAmount: 49.99,
        status: "Processing"
    },
    {
        orderId: 106,
        customerName: "Nida Malik",
        product: {
            id: 6,
            title: "LED Monitor",
            price: 129.99,
            quantity: 1
        },
        totalAmount: 129.99,
        status: "Delivered"
    },
    {
        orderId: 107,
        customerName: "Bilal Raza",
        product: {
            id: 7,
            title: "External Hard Drive",
            price: 89.99,
            quantity: 1
        },
        totalAmount: 89.99,
        status: "Shipped"
    },
    {
        orderId: 108,
        customerName: "Marium Fatima",
        product: {
            id: 8,
            title: "Power Bank",
            price: 34.99,
            quantity: 1
        },
        totalAmount: 34.99,
        status: "Pending"
    },
    {
        orderId: 109,
        customerName: "Raza Karim",
        product: {
            id: 9,
            title: "USB Flash Drive",
            price: 15.99,
            quantity: 3
        },
        totalAmount: 47.97,
        status: "Processing"
    },
    {
        orderId: 110,
        customerName: "Hina Bashir",
        product: {
            id: 10,
            title: "Smartphone Case",
            price: 9.99,
            quantity: 2
        },
        totalAmount: 19.98,
        status: "Delivered"
    }
];


router.get('/', (req,res)=>{
    res.status(201).send({status : 201 , orders : Orders})
})

export default router