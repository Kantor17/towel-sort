// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let res = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                for (let k = 0; k < matrix[i].length; k++) {
                    res.push(matrix[i][k]);
                }
            } else {
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    res.push(matrix[i][j]);
                }
            }
        }
        return res;
    } else return [];
}
