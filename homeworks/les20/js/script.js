const tariff = {
    hotWater: 2,
    coldWater: 4,
    gas: 4.2,
    electricity: 5,
};

function PublicService(options) {
    this.tariff = options;
    this.meterReadings = {};
    console.log(this.tariff);
    console.log(this.meterReadings)
}

const service = new PublicService(tariff);

PublicService.prototype.addMeterReadings = function (value, key) {
    if(typeof value !== 'number'){
        throw new Error(`"${value}" is not correct value`)
    }
    // console.log(Object.keys(this));
    if (Object.keys(this.tariff).find((keys) => keys === key)) {
        if (!this.meterReadings[key]) {
            this.meterReadings[key] = value;
        } else {
            throw new Error(`Service "${key}" is already included`)
        }
    } else {
        throw new Error(`Service "${key}" is unavailable`)
    }
};
PublicService.prototype.deleteMeterReadings = function (key) {
    return delete this.meterReadings[key]
};
PublicService.prototype.getSum = function () {
    let result = 0;

    for (let key in this.meterReadings) {
        let value = this.meterReadings[key];
        result += value * this.tariff[key];
    }
    return result;
};

service.addMeterReadings(50, "hotWater");
service.addMeterReadings(100, "gas");
service.addMeterReadings(200, "coldWater");
// service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(200, "coldWater");
service.addMeterReadings(300, "electricity");

const res = service.getSum();
console.log(service);
console.log(res);
