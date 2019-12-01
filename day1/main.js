window.onload = function(){
    document.getElementById('answer1').innerHTML = part1.countTotal(list);
    document.getElementById('answer2').innerHTML = part2.countTotal(list);
};

const list = input.split("\n");

var part1 = {
    total: 0,
    countFuel: function (mass) {
        return Math.floor(mass/3)-2;
    },
    countTotal: function(modules) {
        modules.forEach((module) => {
            this.total = this.total + this.countFuel(module);
        });
        return this.total;
    }
}

var part2 = {
    total: 0,
    countFuel: function (mass) {
        var fuel = Math.floor(mass / 3) - 2;
        if (fuel > 0) {
            var additional = this.countFuel(fuel);
            if (additional > 0) {
                fuel = fuel + additional;
            }
        }
        return fuel;
    },
    countTotal: function(modules) {
        modules.forEach((module) => {
            this.total = this.total + this.countFuel(module);
        });
        return this.total;
    }
}