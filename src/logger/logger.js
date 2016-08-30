var logger = module.exports = function(options) {
  this.debug = true;
  this.title = "";
}

logger.prototype.log = function(msg) {
  if (this.debug) {
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    if (typeof copy != "undefined") {
      copy(msg);
    }
    if (typeof console != "undefined") {
      console.log(this.title + time + " " + msg);
    }
  }
}
//https://github.com/jonschlinkert/utils
