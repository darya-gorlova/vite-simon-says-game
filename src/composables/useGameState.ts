import { ref } from "vue";
interface Tile {
  id: number;
  color: string;
  bgcolor: string;
  isActivated: boolean;
  src: string;
}
const gameState = {
  tiles: ref<Tile[]>([
    {
      id: 0,
      color: "red",
      bgcolor: "bg-red-500",
      isActivated: false,
      src: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    },
    {
      id: 1,
      color: "green",
      bgcolor: "bg-green-500",
      isActivated: false,
      src: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    },
    {
      id: 2,
      color: "blue",
      bgcolor: "bg-blue-500",
      isActivated: false,
      src: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    },
    {
      id: 3,
      color: "yellow",
      bgcolor: "bg-yellow-500",
      isActivated: false,
      src: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
    },
  ]),
  computerSequence: ref<Tile[]>([]),
  humanSequence: ref<Tile[]>([]),
  level: ref(1),
  msg: ref("Simon Says..."),
  isDisabledBtn: ref(false),
  isDisabledTileContainer: ref(true),

  startGame() {
    gameState.isDisabledBtn.value = true;
    gameState.isDisabledTileContainer.value = true;
    gameState.computerPlays();
  },
  async computerPlays() {
    gameState.msg.value = "Computer plays...";
    gameState.saveComputerMove();
    await gameState.computerPlaysRound();
    await gameState.delay(1000);
    gameState.msg.value = "Your turn...";
    gameState.isDisabledTileContainer.value = false;
  },
  saveComputerMove() {
    const tile = gameState.getRandomTile();
    gameState.computerSequence.value.push(tile);
    let colors = "";
    for (let i = 0; i < gameState.level.value; i++) {
      colors += "[" + gameState.computerSequence.value[i].color + "]";
    }
    console.log("computer: " + colors);
  },
  getRandomTile(): Tile {
    const random =
      gameState.tiles.value[
        Math.floor(Math.random() * gameState.tiles.value.length)
      ];
    return random;
  },
  async computerPlaysRound() {
    for (let i = 0; i < gameState.level.value; i++) {
      const tile = gameState.computerSequence.value[i];
      const sound = new Audio(tile.src);
      await gameState.delay(400);
      sound.play();
      tile.isActivated = true;
      await gameState.delay(500);
      tile.isActivated = false;
    }
  },
  async humanPlays(tile: Tile) {
    const atIndex = gameState.saveHumanMove(tile);
    const sound = new Audio(tile.src);
    sound.play();
    tile.isActivated = true;
    await gameState.delay(300);
    tile.isActivated = false;
    gameState.evaluateMove(atIndex);
  },
  // return index of saved tile
  saveHumanMove(tile: Tile): number {
    const length = gameState.humanSequence.value.push(tile);
    let colors = "";
    for (let i = 0; i < length; i++) {
      colors += "[" + this.humanSequence.value[i].color + "]";
    }
    console.log("human: " + colors);
    return length - 1;
  },

  evaluateMove(atIndex: number) {
    while (gameState.wrongTile(atIndex)) {
      gameState.resetGame("You pressed wrong tile, game is over");
      gameState.isDisabledTileContainer.value = true;
      gameState.delay(300);
      return;
    }
    while (gameState.humanSequenceHasCorrectLength()) {
      gameState.moveToNextLevel(
        "Congratulations! You passed");
      gameState.isDisabledTileContainer.value = true;
      return;
    }
  },
  wrongTile(index: number): boolean {
    while (
      gameState.humanSequence.value[index].color !==
      gameState.computerSequence.value[index].color
    ) {
      return true;
    }
    return false;
  },
  humanSequenceHasCorrectLength(): boolean {
    while (
      gameState.humanSequence.value.length ===
      gameState.computerSequence.value.length
    ) {
      return true;
    }
    return false;
  },
  resetGame(text: string) {
    gameState.humanSequence.value = [];
    gameState.computerSequence.value = [];
    gameState.level.value = 1;
    gameState.msg.value = text;
    gameState.isDisabledBtn.value = false;
  },

  async moveToNextLevel(text: string) {
    gameState.level.value = ++this.level.value;
    gameState.humanSequence.value = [];
    gameState.msg.value = text;
    await gameState.delay(2000);
    gameState.startGame();
  },

  //function for improving of ux
  async delay(time: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, time));
  },
};

export function useGameState() {
  return gameState;
}
