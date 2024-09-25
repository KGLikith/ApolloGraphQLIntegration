import express from "express"
import cors from "cors"
import createApolloServer from "./graphql/index.js"
import { expressMiddleware } from "@apollo/server/express4";


const init = async ()=>{
    const app = express()
    const port = 3000;

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))

    const gqlServer=await createApolloServer()

    app.use('/graphql',expressMiddleware(gqlServer))

    app.get('/',(req,res)=>{
        res.json({message:"server is up and running"})
    })

    app.listen(port,()=>console.log(port,"running"))

}
init()