const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config
const stripe=require("strip")(process.env.secreatekey)


const app=express()

app.use(cors({
    origin:true
}))

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"sucess"
    })
})

app.post("/pament/create",async(req,res)=>{
    const total=req.query.total;
    if(total>0){
        const paymentIntent=await stripe.paymentIntent.create({
            amount:total,
            currency:"usd"
        })

        res.status(201).json({
            clientSecrt:paymentIntent.client_secret
        })
    }else{
        res.status(401).json({
            message:"total must be greater than 0"
        })

    }
       
   

})

app.listen(2000,((error)=>{
    if(error){
        console.log(error)
    }
    console.log("server is running on port 2000")
}))