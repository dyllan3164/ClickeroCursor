import Phaser from "phaser";
import ScoreLabel from "../ui/ScoreLabel.js";

export default class CoronaBusterScenes extends Phaser.Scene {
  constructor() {
    super("Cursero-Clicker-scene");
    this.score = 0; // Add this property to keep track of the score
  }

  init() {
    this.scoreLabel = undefined;
    this.lifeLabel = undefined;
  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("cursor", "images/Cursor2.png");
  }

  create() {
    const gameWidth = this.scale.width * 0.5;
    const gameHeight = this.scale.height * 0.5;
    this.add.image(gameWidth, gameHeight, "background");

    // Create a reference to the shoot button
    this.cursors = this.createCursor(200, 310, "cursor", {
      width: 100,
      height: 100,
    });

    // Add a click event listener to the shoot button
    // cursor.setInteractive();
    // cursor.on("pointerdown", this.handleShoot, this);

    this.cursor = this.input.keyboard.createCursorKeys();
    this.scoreLabel = this.createScoreLabel(16, 16, 0);
  }

  createCursor(x, y, textureKey, size) {
    const cursor = this.physics.add.image(x, y, textureKey);
    cursor.setCollideWorldBounds(true);

    if (size && size.width && size.height) {
      cursor.displayWidth = size.width;
      cursor.displayHeight = size.height;
    }

    return cursor;
  }

  update(time) {}

  createScoreLabel(x, y, score) {
    const style = { fontSize: "32px", fill: "#000" };
    const label = new ScoreLabel(this, x, y, score, style).setDepth(10);
    this.add.existing(label);
    return label;
  }

  handleShoot() {
    // Update the score when the shoot button is clicked
    this.score += 1;
    this.scoreLabel.setScore(this.score); // Update the ScoreLabel
    if (this.scoreLabel.getScore(100) % 100 == 0) {
      this.score += 24;
    }
  }
}
