class Citern {
    constructor (isGlobal, consumtion, id, maxCapactity) {
        this.maxCapacity = maxCapactity // the global citern as a maxCapacity greater than non global citern
        this.consumtion = consumtion
        this.id = id
        this.isGlobal = isGlobal
    }
}

module.exports = {
Citern
}
