const express= require('express')
const app = express();

// req => middleware => res
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    res.send('Home')


app.listen(5000, () => {
    console.log('server is listening on port 5000...')
  })
