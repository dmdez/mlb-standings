var path = require("path");

module.exports = function(req,res){
  var htmlPath = path.join(process.cwd(), 'index.html');
  res.sendFile(htmlPath);
}
