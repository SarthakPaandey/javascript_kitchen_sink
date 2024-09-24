var Rook = function(config){
    this.type = 'rook';
    this.constructor(config);
};

Rook.prototype = new Piece({});
Rook.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    if (currentCol === targetCol || currentRow === targetRow) {
        if (window.chessBoard.isPathClear(this.position, targetPosition)) {
            this.position = targetPosition.col + targetPosition.row;
            this.render();
            return true;
        }
    }
    return false;
};