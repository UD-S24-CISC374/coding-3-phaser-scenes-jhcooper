import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, CONFIG } from "../config";

export default class MainScene extends Phaser.Scene {
    fpsText: FpsText;

    constructor() {
        super({ key: CONFIG.SCENES.MainScene });
    }
    preload() {
        this.load.image("background", "..../assets/img/mainbackground.png");
    }

    create() {
        const logo = new PhaserLogo(this, this.cameras.main.width / 2, 0);

        logo.on("pointerdown", () => {
            const logoState = {
                x: logo.x,
                y: logo.y,
                velocityX: logo.body?.velocity.x,
                velocityY: logo.body?.velocity.y,
            };
            this.scene.start(CONFIG.SCENES.SceneOne, { logoState: logoState });
        });
        this.fpsText = new FpsText(this);
        this.add.image(DEFAULT_WIDTH / 2, DEFAULT_HEIGHT / 2, "background");
        this.add.text(100, 100, "Main Scene", { color: "#D12D0A" });
        this.add.text(
            DEFAULT_WIDTH / 2 - 100,
            DEFAULT_HEIGHT / 2,
            "Click The Logo To Go To Scene One",
            {
                color: "#D12D0A",
                fontSize: "30px",
            }
        );

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
    }

    update() {
        this.fpsText.update();
    }
}
