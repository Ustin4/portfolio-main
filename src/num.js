let AmIAfraid = function (day, num) {
    if (day === 'Monday' || num === 12) {
        return true;
    } else if (day === 'Sunday' || (num === 666 || num === -666)) {
        return true;
    } else if (day === 'Tuesday' || num > 95) {
        return true;
    } else if (day === 'Friday' || num % 2 === 0) {
        return true;
    } else {
        return false
    }
    // Здесь должна быть логика, если ни одно из условий не выполняется
};