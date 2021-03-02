
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = [
  { name: "Apple", calories: "95" , serving:'1 apple' },
  { name: "Banana", calories: "111" ,serving:'1 banana'},
  { name: "Avocado", calories: "320" ,serving:'1 avacado'},
  { name: "Blackberries", calories: "62" ,serving:'1 cup'},
  { name: "Cherries", calories: "4" ,serving:'1 cherry'},
  { name: "Jackfruit", calories: "143" ,serving:'1 cup'},
  { name: "Orange", calories: "62" ,serving:'1 orange'},
  { name: "Papaya", calories: "215" ,serving:'1 fruit'},
  { name: "Watermelon", calories: "86" ,serving:'1 wedge'},
  { name: "Mango", calories: "202" ,serving:'1 mango'},
]

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/fruits", (req, res) => {
    
  res.send(data);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
