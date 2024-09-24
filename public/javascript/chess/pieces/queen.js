var Queen = function(config){
    this.type = 'queen';
    this.constructor(config);
};

Queen.prototype = new Piece({});
Queen.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    const colDiff = Math.abs(currentCol - targetCol);
    const rowDiff = Math.abs(currentRow - targetRow);

    if ((colDiff === rowDiff) || (currentCol === targetCol) || (currentRow === targetRow)) {
        if (window.chessBoard.isPathClear(this.position, targetPosition)) {
            this.position = targetPosition.col + targetPosition.row;
            this.render();
            return true;
        }
    }
    return false;
};