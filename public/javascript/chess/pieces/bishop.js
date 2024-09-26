var Bishop = function (config) {
  this.pieceType = "bishop";
  this.initialize(config);
};

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

Bishop.prototype.move = function (destination) {
  if (!this.isMoveValid(destination)) {
    console.log("Invalid move: This move is not allowed for a bishop.");

    return;
  }
  console.log("Executing move for the bishop.");
  var newPosition = destination.col + destination.row;
  this.position = newPosition;
  this.display();
  console.log("Move completed.");
};

Bishop.prototype.isMoveValid = function (destination) {
  var currentRow = parseInt(this.position[1], 10);
  var destinationRow = parseInt(destination.row, 10);
  var currentCol = this.position[0].toUpperCase();
  var destinationCol = destination.col.toUpperCase();

  console.log("Current Row: ", currentRow + " " + typeof currentRow);
  console.log(
    "Destination Row: ",
    destinationRow + " " + typeof destinationRow
  );
  console.log("Current Col: ", currentCol + " " + typeof currentCol);
  console.log(
    "Destination Col: ",
    destinationCol + " " + typeof destinationCol
  );

  // Check diagonal move
  if (
    Math.abs(currentRow - destinationRow) !==
    Math.abs(currentCol.charCodeAt(0) - destinationCol.charCodeAt(0))
  ) {
    console.log("Invalid move: Bishop can only move diagonally.");
    return false;
  }

  var rowDirection = destinationRow > currentRow ? 1 : -1;
  var colDirection =
    destinationCol.charCodeAt(0) > currentCol.charCodeAt(0) ? 1 : -1;

  var nextRow = currentRow + rowDirection;
  var nextCol = currentCol.charCodeAt(0) + colDirection;

  // Check if path is clear
  while (
    nextRow !== destinationRow &&
    nextCol !== destinationCol.charCodeAt(0)
  ) {
    var intermediateSpot = {
      row: nextRow.toString(),
      col: String.fromCharCode(nextCol),
    };

    if (this.Board.getPieceAt(intermediateSpot)) {
      console.log("Invalid move: Another piece blocks the path.");
      return false;
    }

    nextRow += rowDirection;
    nextCol += colDirection;
  }

  return true;
};

function limitExecution(fn, limit) {
  return function () {
    return fn(limit);
  };
}
