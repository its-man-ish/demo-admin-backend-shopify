const express = require("express")
//const shopDB = require("./../database/models/shop")
const OrderDB = require("../database/models/orders")

const router = express.Router()

//orders

router.get('/orders',async (req,res)=>{

  try {  
    var orders= await OrderDB.find()
    res.status(200).json(orders)
    
  } catch (error) {
    res.status(500).json(error)
  }
});


//order by domain name

router.get('/orders/:domain',async (req,res)=>{
  const domain = req.params.domain
  console.log(domain)

  try {
    const update = await OrderDB.find({"domain":domain})
    res.status(200).json(update)
  } catch (error) {
      res.status(500).json(error)
  }
})





module.exports = router