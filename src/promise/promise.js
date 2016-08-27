var promise = ideogram.promise = function(fn) {
  this.fulfill = function(data) {
    if(data != null && (typeof this.fnData != undefined))
      this.fnData(data);
  }.bind(this)
  this.reject = function(error) {
    if(error != null && (typeof this.fnError != undefined))
      this.fnError(error);
  }.bind(this)
  if (typeof fn === "function") {
    fn(this.fulfill, this.reject);
  }
};
promise.prototype.then = function(dataCallback, errorCallback) {
  this.fnData = dataCallback;
  this.fnError = errorCallback;
};
promise.prototype.onSuccess = function(fnData) {
  this.fnData = fnData;
};
promise.prototype.onError = function(fnData) {
  this.fnError = fnError;
};
