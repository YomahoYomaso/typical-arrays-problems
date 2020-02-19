
exports.min = function min (array) {
    if (typeof array !== 'undefined' && array.length > 0) {

        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        var max = array[0];
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        var sum = 0.00;
        var count = 0.00;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
            count++;
        }
        let avg = parseFloat( sum/count).toFixed(2);
        console.log(avg)
        return avg;
    } else {
        return 0;
    }
}

