import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx';
import { auth } from 'hono/utils/basic-auth';

const app = new Hono()

async function authMiddleware(c:any,next:any) {
  //context of this request, request , respons
  if(c.req.header.("Authorization")){
    const initTime = new Date()
    await next()
    const totalTime = (new Date().getTime() - new )
  }
  else{
    return c.text("something wrong")
  }
}

// or also you can use app.use(authMiddleware)

app.post('/', authMiddleware,async(c) => {
  //body , headers , quer parameters , middleware , connectiing to a database
  // const body = await c.req.json()
  // console.log(body)
  // console.log(c.req.header("headers"))
  return c.json({"message" :"hii there"})
})

export default app
