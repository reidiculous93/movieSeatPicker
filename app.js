const express = require("express"),
  app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/", function(req, res) {
//   res.render("landing.ejs");
// });

app.listen(process.env.PORT || 5000, process.env.IP);

// app.listen(3000, function() {
// 	console.log('Server is running!');
// });
