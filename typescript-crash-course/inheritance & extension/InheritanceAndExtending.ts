interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
    engine: IEngine;
    basePrice: number;
    state: string;
    make: string;
    model: string;
    year: number;
}

class Auto {

    private _basePrice: number;

    engine: IEngine;

    state: string;

    make: string;

    model: string;

    year: number;

    accessoryList: string;

    constructor(options: IAutoOptions) {

        this.engine = options.engine;

        this.basePrice = options.basePrice;

        this.state = options.state;

        this.make = options.make;

        this.model = options.model;

        this.year = options.year;

    }

    calculateTotal(): number {

        var taxRate = 0.5;
        return this.basePrice + (taxRate * this.basePrice);

    }

    addAccessories(...accessories) {

        this.accessoryList = '';

        for (var i = 0; i < accessories.length; i++) {

            var ac = accessories[i];

            this.accessoryList += ac.accessoryNumber + ' ' +

                ac.title + '<br />';

        }

    }

    getAccessoryList(): string {

        return this.accessoryList;

    }

    get basePrice(): number {

        return this._basePrice;

    }

    set basePrice(value: number) {

        if (value <= 0) throw 'price must be >= 0';

        this._basePrice = value;

    }

}

class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
}

class Truck extends Auto {
    private _bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }

    get bedLength(): string {
        return this._bedLength;
    }

    set bedLength(value: string) {
        if (value == null || value == undefined || value == '') {
            this._bedLength = 'Short';
        }
        else {
            this._bedLength = value;
        }
    }
}

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