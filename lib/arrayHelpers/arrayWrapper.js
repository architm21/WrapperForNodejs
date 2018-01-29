class ArrayWrapper {
    constructor(array) {
        this.array = new Array(array);
    }
    /**
     * 
     * @param {any} value value you want to delete from array
     */
    delete(value) {
        let index = this.array.indexOf(value);
        if (index > -1) {
            this.array.splice(index, 1);
            return this.array;
        }
        return this.array;
    }
}

module.exports = new ArrayHelpers()