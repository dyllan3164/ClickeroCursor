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
    this.cursors.setInteractive();

    // Add a click event listener to the shoot button

    this.cursors.on("pointerdown", this.handleCursorClick, this);

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

  handleCursorClick() {
    if (this.score >= 18446744073709551615) {
      this.score += 18446744073709551615; //this is 18qn
    } else if (this.score >= 2340957817349859) {
      this.score += 349958729486717853; // this is +349qd and needs 2qd
    } else if (this.score >= 32497168917456) {
      this.score += 298394581968348; // this is +298T and needs 32T
    } else if (this.score >= 67298756827) {
      this.score += 554747835983; // this is +554B and needs 67B
    } else if (this.score >= 29572795) {
      this.score += 239573948; // this is +239M and needs 29M
    } else if (this.score >= 1958204) {
      this.score += 500000;
    } else if (this.score >= 100000) {
      this.score += 100000;
    } else if (this.score >= 15000) {
      this.score += 5000;
    } else if (this.score >= 1000) {
      this.score += 250;
    } else if (this.score >= 100) {
      this.score += 25;
    } else {
      this.score += 1;
    }

    // Update the score when the shoot button is clicked
    this.scoreLabel.setScore(this.score); // Update the ScoreLabel
  }
}
