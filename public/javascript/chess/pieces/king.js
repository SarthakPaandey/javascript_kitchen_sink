var King = function(config){
    this.type = 'king';
    this.constructor(config);
};

King.prototype = new Piece({});
King.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    const colDiff = Math.abs(currentCol - targetCol);
    const rowDiff = Math.abs(currentRow - targetRow);

    if ((colDiff <= 1 && rowDiff <= 1) && (colDiff > 0 || rowDiff > 0)) {
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        return true;
    }
    return false;
};