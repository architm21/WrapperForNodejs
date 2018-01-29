class ArrayWrapper {
    constructor(array) {
        this.array = new Array(array);
    }
    removeElement(element) {
        let index = this.array.indexOf(element);
        if (index > -1) {
            this.array.splice(index, 1);
            return this.array;
        }
        return this.array;
    }
}

module.exports = new ArrayHelpers()