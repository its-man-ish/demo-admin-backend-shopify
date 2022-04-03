const express = require("express")
const shopDB = require("./../database/models/shop")

const router = express.Router()

router.get('/store',async (req,res)=>{

  try {  
    var stores= await shopDB.find()
    res.status(200).json(stores)
    
  } catch (error) {
    res.status(500).json(error)
  }
});


//Approve Store

router.put('/store/:id',async (req,res)=>{
  const id = req.params.id
  console.log(id)

  try {
    const update = await shopDB.findByIdAndUpdate(id,{
      isApproved:true
    })
    res.status(200).json(update)
  } catch (error) {
      res.status(500).json(error)
  }
})


//block store
router.put('/store/:id/block',async (req,res)=>{
  const id = req.params.id
  console.log(id)

  try {
    const update = await shopDB.findByIdAndUpdate(id,{
      isApproved:false
    })
    res.status(200).json(update)
  } catch (error) {
      res.status(500).json(error)
  }
})

// delete store
router.delete('/store/:id/delete',async (req,res)=>{
  const id = req.params.id
  console.log(id)
    
  try {
    const update = await shopDB.deleteOne({"_id":id})
    
  } catch (error) {
    res.status(500).json(error)
  }
  
   

})


module.exports = router