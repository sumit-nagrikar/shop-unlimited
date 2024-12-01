import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// Allow requests from your frontend's URL
// const allowedOrigins = [
//     'https://shop-unlimited-git-main-sumit-nagrikars-projects.vercel.app', // Deployed frontend URL
//     'http://localhost:4000', // Local frontend for testing
//   ];
  
//   app.use(
//     cors({
//       origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl)
//         if (!origin || allowedOrigins.includes(origin)) {
//           callback(null, true);
//         } else {
//           callback(new Error('Not allowed by CORS'));
//         }
//       },
//       methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
//       credentials: true, // Allow cookies
//     })
//   );
app.use(cors());

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))