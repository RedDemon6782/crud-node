const express = require('express')

const app =express()

app.use(express.json())

app.get('/',(req,res)=>{
    return res.status(200).json('olá')
})

app.listen(3000, ()=>{
    console.log('servidor inicializado')
})




