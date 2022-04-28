const arr = [100, 80, 120, 130, 70, 60, 100, 125];

/**
 * 
 * @param {number[]} priceArr 
 */
function getMaxDiff(priceArr) {
    return priceArr.reduce((p, c, i) => {
        const arr = priceArr.slice(i + 1);
        arr.forEach(item => {
            p = Math.max(item - c, p);
        });
        return p;
    }, 0);
}