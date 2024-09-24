var Bishop = function(config){
    this.type = 'bishop';
    this.constructor(config);
};



Bishop.prototype = new Piece({});
Bishop.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    const colDiff = Math.abs(currentCol - targetCol);
    const rowDiff = Math.abs(currentRow - targetRow);

    if (colDiff === rowDiff && colDiff > 0) {
        if (window.chessBoard.isPathClear(this.position, targetPosition)) {
            this.position = targetPosition.col + targetPosition.row;
            this.render();
            return true;
        }
    }
    return false;
};