const express = require('express')
const bodyparser = require('body-parser')
const day = require(__dirname+'/day');

const app = express()
app.set("view engine", "ejs")
const port = 3000
app.use(express.static("public"))
var items = ["buy food" , "eat food" , 'sleep' ]
workItems=[];

app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res) => {
 

  res.render("list", {listTitle: day, newListItem: items})
})

app.post('/', function (req, res) {
   var item = req.body.newItem;

  if(req.body.list === "Work"){
      workItems.push(item);
      redirect("/")
  }else{
 items.push(item);
  res.redirect("/");
  }
 

})


app.get('/work', (req, res) => {
  res.render('list', {listTitle: "Work List", newListItem:workItems})
})
app.get('/about', (req, res) => {
  res.render("about")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))