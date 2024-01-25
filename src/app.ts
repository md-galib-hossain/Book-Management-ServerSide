import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app : Application = express()
import ModuleRoutes from './routes/index'

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1',ModuleRoutes)

app.get('/', (req : Request, res : Response) => {
  res.status(200).json({
    status : "success",
    message : "Welcome to project root"
  })
})
export default app
