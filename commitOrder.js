const  {orderReview}= require('./viewOrder');
function commitOrder(req,res){

    let clientAddress=req.body.clientAddress;
   let mobNum = req.body.mobNum;
   let  email = req.body.email;
   let postCode = req.body.postCode;
    
   let mobNum_str = mobNum.toString();
    if(mobNum_str.length!=10){
        res.send('wrong MObile number!');
    }
    else{
        let clientInfo={
            moblieNumber: mobNum,
            email: email,
            address: clientAddress,
            postCode: postCode
        }

        clientInfo = JSON.stringify(clientInfo);
        let orderRev={
            Product_ID: orderReview.Product_ID,
            Vendor_ID: orderReview.Vendor_ID,
            total_price: orderReview.total_price,
            quantity: orderReview.quantity
        }
       
        orderRev = JSON.stringify(orderRev);
        return clientInfo+orderRev;  
    }

}

module.exports = {commitOrder};
