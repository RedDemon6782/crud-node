const express = require('express')
const database = require('../database')
const route =express()

route.post('/car', (req,res)=>{
 //obtem os dados do body da reposição
 const car = req.body
 //adciona o carro no array do database
 database.push(car)
//
 return res.status(201).json(car)
})

module.exports = route 