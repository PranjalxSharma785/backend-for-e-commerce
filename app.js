const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const createOrder  = require('./createOrder');
const commit = require('./commitOrder');
const view = require('./viewOrder');


const app = express();

let orderId = {             //Creating Object for OrderID consisting of VendorID and Price
    PID: 0,
    VID: 0,
    price: Number.MAX_SAFE_INTEGER,
    quantity: 0,
};



app.use(bodyParser.urlencoded({extended: true}));

app.post('/createOrder',function(req,res){
    productId=req.body.productId;
    quantity=req.body.quantity;
  orderId = createOrder.createOrder(productId,quantity);
   res.status(302).send(orderId);
});

app.post('/viewOrder',function(req,res){
   
   orderId = view.viewOrder(req,res);
    res.send(orderId);
    
})

app.post('/commitOrder',function(req,res){

    let finalOrder=commit.commitOrder(req,res);   
    res.send(finalOrder); 

})


app.listen(3000,function(){
    console.log('Server started at port 3000 !');
})

