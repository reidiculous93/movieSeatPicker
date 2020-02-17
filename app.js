const express = require("express"),
  app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 5000, process.env.IP);

// app.listen(3000, function() {
// 	console.log('Server is running!');
// });
