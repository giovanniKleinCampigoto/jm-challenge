const jsonServer = require('json-server')
const jwtDecode = require("jwt-decode")
const server = jsonServer.create()
const router = jsonServer.router('src/db/db.json')
const middlewares = jsonServer.defaults()

function simpleAuth(req, res, next) {
  // BACKEND LOGIC
  if (req.headers["access-token"] === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBQ0NFU1MtVE9LRU4iOiIxMjM0NTY3ODkwIn0.8F79ruZH83zhV2_ZaPFt10bNqjfp0fRyW4o36Vg8JYE") {

    next();

  } else {
    res.status(401).send({error: 'unauthorized'})
  }
}

server.use(middlewares)
server.use(simpleAuth)
server.use(router)
server.listen(3004, () => {
  console.log('Backend server is running!')
})