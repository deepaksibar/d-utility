log = function(msg) {
  var d = new Date();
  var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  if (typeof copy != "undefined") {
    copy(msg);
  }
  if (typeof console != "undefined") {
    console.log("log: " + time + " - " + msg);
  }
}
