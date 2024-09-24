var Pawn = function(config){
    this.type = 'pawn';
    this.constructor(config);
};

Pawn.prototype = new Piece({});
Pawn.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0].charCodeAt(0);
    const currentRow = parseInt(this.position[1]);
    const targetCol = targetPosition.col.charCodeAt(0);
    const targetRow = parseInt(targetPosition.row);

    const colDiff = Math.abs(currentCol - targetCol);
    const rowDiff = this.color === 'white' ? targetRow - currentRow : currentRow - targetRow;

    if (colDiff === 0 && rowDiff === 1) {
        // Normal move
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        return true;
    } else if (colDiff === 0 && rowDiff === 2 && 
               ((this.color === 'white' && currentRow === 2) || 
                (this.color === 'black' && currentRow === 7))) {
        // Initial two-square move
        if (window.chessBoard.isPathClear(this.position, targetPosition)) {
            this.position = targetPosition.col + targetPosition.row;
            this.render();
            return true;
        }
    }
    // TODO: Implement diagonal capture and en passant
    return false;
};