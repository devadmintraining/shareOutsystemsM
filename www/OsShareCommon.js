var exec = require('cordova/exec');


module.exports = function(text,title,mimetype,success,error){
    if(typeof text !== "string") {
      text = "";
    }
    if(typeof title !== "string") {
      title = "Share";
    }
    if(typeof mimetype !== "string") {
      mimetype = "text/plain";
    }
    exec(success,error,"OsShareCommon","share",[text,title,mimetype]);
    return true;
  };