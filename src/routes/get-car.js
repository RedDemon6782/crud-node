const express = require('express')
const database = require('../database')
const route = express()

route.get('/car/:id', (req,res)=>{
  const idcarro = req.params.id
   
  const carroencontrado =database.find((carro) => {
    return carro.id=== Number(idcarro)
  })

  if(!carroencontrado){
    return res.status(404).json("Carro não existe")

}
    return res.status(200).json(carroencontrado)
})



module.exports = route 