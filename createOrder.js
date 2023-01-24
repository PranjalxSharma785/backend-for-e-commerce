const bodyParser = require('body-parser');
const { json } = require('body-parser');



let vendors = [{
    vendorId: 1,
    product:[{
        productId:1,
        price:100,
        quantity:7
    },{
        productId:2,
        price:200,
        quantity:3
    },{
        productId:4,
        price:300,
        quantity:5
    },{
        productId:5,
        price:300,
        quantity:5
    }]
},{
    vendorId: 2,
    product:[{
        productId:1,
        price:90,
        quantity:5
    },{
        productId:2,
        price:200,
        quantity:8
    },{
        productId:3,
        price:300,
        quantity:6
    }]
},{
    vendorId: 3,
    product:[{
        productId:1,
        price:110,
        quantity:10
    },{
        productId:3,
        price:290,
        quantity:6
    },{
        productId:4,
        price:400,
        quantity:5
    }]
}]

let orderId = {          //Creating Object for OrderID consisting of VendorID and Price
    PID: 0,
    VID: 0,
    price: Number.MAX_SAFE_INTEGER,
    quantity: 0
};

 
 function createOrder(req,res){

    let PID = req;            //Client request for product and quantity
    let quantity = res;           
    orderId.PID=PID;
    orderId.quantity=quantity;
    //Traversing vendors object
    
    for (let i in vendors){    
        
        //Traversing product object inside vendor's

        for(let j in vendors[i].product){

             // Searching for Product
        if(vendors[i].product[j].productId==orderId.PID){    
            
            
           //matching if item is in stock
            if(vendors[i].product[j].quantity>=orderId.quantity){
                
                //Getting the item at best price
                if(orderId.price>vendors[i].product[j].price){
                    orderId.VID = vendors[i].vendorId;
                    orderId.price = vendors[i].product[j].price;
                }
            }    
        }
        
        }
    }
        if(orderId.price==Number.MAX_SAFE_INTEGER){
            return ('Out of stock!');
        }
        else{
                    orderId = JSON.stringify(orderId);
                    orderId = JSON.parse(orderId);
                    return orderId;
        }
    }



module.exports = { 
    orderId,createOrder
 }

