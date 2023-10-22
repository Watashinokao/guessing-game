class GuessingGame {
    min = 0;
    max = 0;
    num = 0
    constructor() {
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.num = Math.ceil((this.max - this.min) / 2 + this.min)
        return this.num
    }

    lower() {
        this.max = this.num

    }

    greater() {
        this.min = this.num

    }
}

module.exports = GuessingGame;







