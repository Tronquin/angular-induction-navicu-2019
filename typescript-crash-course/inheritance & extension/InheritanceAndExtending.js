var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(options) {
        this.engine = options.engine;
        this.basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = 0.5;
        return this.basePrice + (taxRate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' +
                ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(options) {
        var _this = _super.call(this, options) || this;
        _this.bedLength = options.bedLength;
        _this.fourByFour = options.fourByFour;
        return _this;
    }
    Object.defineProperty(Truck.prototype, "bedLength", {
        get: function () {
            return this._bedLength;
        },
        set: function (value) {
            if (value == null || value == undefined || value == '') {
                this._bedLength = 'Short';
            }
            else {
                this._bedLength = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Truck;
}(Auto));
var truck = new Truck({
    engine: new Engine(250, 'V8'),
    basePrice: 45000,
    state: 'Arizona',
    make: 'Ford',
    model: 'F-150',
    year: 2013,
    bedLength: 'Short Bed',
    fourByFour: true
});
