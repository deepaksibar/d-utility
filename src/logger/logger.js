(function (jsutility) {
  var logger = jsutility.logger = function(options) {
    this.debug = true;
  }
  
  logger.prototype.log = function(msg) {
    if (this.debug) {
      var d = new Date();
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      if (typeof copy != "undefined") {
        copy(msg);
      }
      if (typeof console != "undefined") {
        console.log("igv-canvas: " + time + " " + msg);
      }
    }
  }
})(window.jsutility || (window.jsutility = {}));
