const { json } = require('body-parser');
const  {orderId}= require('./createOrder');



function viewOrder(req,res){
    let orderID = orderId;
let price= orderID.price;
    let quant = orderID.quantity;
     let total = price*quant;
     let orderRev={
        Product_ID: orderId.PID,
        Vendor_ID: orderId.VID,
        total_price: total,
        quantity: orderId.quantity
    }
    orderRev = JSON.stringify(orderRev);
    return JSON.parse(orderRev);
}

let orderReview = viewOrder();


module.exports = {orderReview,viewOrder};
