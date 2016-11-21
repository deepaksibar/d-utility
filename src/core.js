var LoggerComponent = (function () {
    function LoggerComponent(loggerType) {
        this.loggerType = loggerType;
		console.log("Logger Type:" + loggerType);
    }
    LoggerComponent.prototype.log = function (msg) {
		switch(this.loggerType) {
			case 'log': console.log(msg);break;
			case 'error': console.error(msg);break;
			default: console.log(msg);
		}
    };
    return LoggerComponent;
}());
exports.LoggerComponent = LoggerComponent;
