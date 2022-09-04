const express = require("express")
const app = express()

const PORT = process.env.PORT || 4001

app.set("view engine", "pug")

app.get("/", (request, response) => {
  
  response.render(
    "index", 
    { title: "Home", message: "This is the home page" 
  })
})

app.get("/contact-me", (request, response) => {
  response.render(
    "contact",
    { title: "Contact", message: "You can find the  contact details about me here. Thanks" 
  })
})

app.get("/about", (request, response) => {
  response.render("about",
  { title: "About Me", message: "This is the page you can find the details about me." })
})

app.get("*", (_, response) => {
  response.render("404")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
