function PublicService(options) {
    this.tarifs = options;
}

const tariff = {
    hotWater: 2,
    coldWater: 4,
    gas: 4.2,
    electricity: 5,
};

const service = new PublicService(tariff);

PublicService.prototype.addMeterReadings = function (value, key) {
    let reg = /^\d/;
    console.log(Object.keys(this.tarifs));
    if (Object.keys(this.tarifs).find((keys) => keys === key)) {
        if (this.tarifs[key]) {
            if (reg.test(value)) {
                this[key] = value;
            } else {
                throw new Error(`"${value}" is not correct value`)
            }
        } else {
            throw new Error(`Service "${key}" is already included`)
        }
    } else {
        throw new Error(`Service "${key}" is unavailable`)
    }
};
PublicService.prototype.deleteMeterReadings = function (key) {
    return delete this[key]
};
PublicService.prototype.getSum = function () {
    let result = 0;

    for (let key in this) {
        let value = this[key];
        if (value === Number(value)) {
            result += value * this.tarifs[key];
            console.log(value * this.tarifs[key])
        }
    }
    return result;
};

service.addMeterReadings(50, "hotWater");
service.addMeterReadings(100, "gas");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(200, "coldWater");

service.addMeterReadings(300, "electricity");

const res = service.getSum();
console.log(service);
console.log(res);
