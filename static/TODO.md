#General utils

randomInt(min, max): Generates a random integer between min and max.
shuffleArray(array): Shuffles the elements of an array.
deepClone(object): Creates a deep clone of an object.
debounce(func, delay): Implements debounce for event handling.
throttle(func, limit): Implements throttle for event handling.
convertToRoman(num): Converts number to Roman numerals.
convertFromRoman(roman): Converts Roman numerals to number.
timer(duration, callback): Simple countdown timer.
stopwatch(): Simple stopwatch functionality.
formatTime(time): Formats time into a readable string.
seededRandom(seed): Seeded random number generator.
lerp(start, end, amount): Linear interpolation.
distance(x1, y1, x2, y2): Calculates distance between two points.
clamp(value, min, max): Clamps a value between min and max.
range(start, end): Generates an array of numbers in a range.
sumArray(array): Sums the values of an array.
averageArray(array): Averages the values in an array.
findMedian(array): Finds the median of an array.
isPrime(num): Checks if a number is prime.
gcd(a, b): Computes the greatest common divisor.
lcm(a, b): Computes the least common multiple.
factorial(num): Calculates the factorial of a number.
permute(string): Generates permutations of a string.
combineArrays(arr1, arr2): Combines two arrays uniquely.
flattenArray(array): Flattens a nested array.
rotateArray(array, steps): Rotates an array by a number of steps.
uniqueArray(array): Returns unique elements from an array.
intersectArrays(arr1, arr2): Finds intersection of two arrays.
differenceArrays(arr1, arr2): Finds difference between two arrays.
chunkArray(array, size): Splits an array into chunks of given size.
binarySearch(array, item): Implements binary search.
quickSort(array): Implements quick sort.
mergeSort(array): Implements merge sort.
bubbleSort(array): Implements bubble sort.
insertionSort(array): Implements insertion sort.
selectionSort(array): Implements selection sort.
countSort(array): Implements count sort.
heapSort(array): Implements heap sort.
radixSort(array): Implements radix sort.
bucketSort(array): Implements bucket sort.
shellSort(array): Implements shell sort.
encodeBase64(string): Encodes a string to Base64.
decodeBase64(string): Decodes a Base64 string.
encryptString(string, key): Simple string encryption.
decryptString(string, key): Simple string decryption.
hashString(string): Hashes a string.
generateUUID(): Generates a universally unique identifier.
isValidEmail(email): Validates an email address.
isValidPhoneNumber(phone): Validates a phone number.
slugify(string): Converts a string to a URL slug.

#Game-Specific Functions

rollDice(sides): Simulates a dice roll.
dealCards(deck, count): Deals cards from a deck.
initializeDeck(): Creates and returns a new deck of cards.
drawCard(deck): Draws a card from a deck.
shuffleDeck(deck): Shuffles a deck of cards.
scoreYahtzee(dice): Scores a Yahtzee hand.
checkBingo(card): Checks for a bingo on a card.
generateBingoCard(): Generates a new bingo card.
checkWinningCondition(board, player): Checks for a win in games like tic-tac-toe.
makeMove(board, move, player): Makes a move on a game board.
aiMove(board, player): Basic AI move for simple games.
evaluateBoard(board, player): Evaluates a game board for scoring.
generateMaze(width, height): Generates a maze.
solveMaze(maze, start, end): Solves a given maze.
initializeChessBoard(): Sets up a chess board.
checkmateStatus(board, player): Checks for checkmate in chess.
simulatePhysics(object, deltaTime): Basic physics simulation.
detectCollision(object1, object2): Detects collision between two objects.
animateSprite(sprite): Handles sprite animation.
pathFinding(grid, start, end): Basic pathfinding algorithm.
scoreQuiz(answers, correctAnswers): Scores a quiz.
generateQuestionSet(): Generates a set of questions for a quiz.
trackHighScore(score, highScores): Tracks and updates high scores.
saveGameState(gameState): Saves the current game state.
loadGameState(): Loads a saved game state.
randomizePuzzle(puzzle): Randomizes a puzzle layout.
solvePuzzle(puzzle): Solves a given puzzle.
initializeTetrisGrid(): Sets up a Tetris grid.
handleTetrisInput(input): Handles input for Tetris.
updateTetrisState(state, action): Updates the state in a Tetris game.
generateRandomTetrisPiece(): Generates a random Tetris piece.
rotateTetrisPiece(piece): Rotates a Tetris piece.
checkLineCompletion(grid): Checks for completed lines in Tetris.
applyGravityToPieces(grid): Applies gravity to pieces in grid-based games.
createPlatformerCharacter(): Creates a character for a platformer game.
movePlatformerCharacter(character, direction): Moves a platformer character.
jumpPlatformerCharacter(character): Makes a platformer character jump.
detectPlatformCollision(character, platform): Detects collision in a platformer.
updatePlatformerPhysics(world): Updates physics for a platformer world.
generatePlatformerLevel(): Generates a level for a platformer game.
calculateMatch3Score(board): Calculates score for match-3 games.
swapMatch3Tiles(board, tile1, tile2): Swaps tiles in match-3 games.
findMatch3Matches(board): Finds matches in a match-3 game.
dropMatch3Tiles(board): Handles tile dropping in match-3 games.
refillMatch3Board(board): Refills the board in match-3 games.
initializeMemoryGame(): Sets up a memory game.
flipMemoryCard(card): Flips a card in a memory game.
checkMemoryMatch(card1, card2): Checks for a match in a memory game.
resetMemoryGame(game): Resets a memory game.
updateLeaderboard(scores): Updates the leaderboard.