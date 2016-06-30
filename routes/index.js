var path = require("path");

module.exports = function(req,res){
  var htmlPath = path.join(process.cwd(), 'src/index.html');
  res.sendFile(htmlPath);
}
