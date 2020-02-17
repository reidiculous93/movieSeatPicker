const express = require("express"),
  app = express();

app.listen(process.env.PORT || 5000, process.env.IP);

// app.listen(3000, function() {
// 	console.log('Server is running!');
// });
