var Knight = function(config){
    this.type = 'knight';
    this.constructor(config);
};



Knight.prototype = new Piece({});
Knight.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    const colDiff = Math.abs(currentCol - targetCol);
    const rowDiff = Math.abs(currentRow - targetRow);

    if ((colDiff === 2 && rowDiff === 1) || (colDiff === 1 && rowDiff === 2)) {
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        return true;
    }
    return false;
};