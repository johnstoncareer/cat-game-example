import { context } from "./../../gamejs/main.js";
import { BaseScreen } from "./../../gamejs/base/BaseScreen.js";
import { LinkToCareerComponent } from "./../component/LinkToCareerComponent.js"
import { LinkToBrickBreakComponent } from "../component/LinkToBombBreakComponent.js";
import { LinkToCatLifeComponent } from "../component/LinkToCatLifeComponent.js";

window.addEventListener("load", function () {
    context.setScreen(new GameChoiceScreen());
});

export class GameChoiceScreen extends BaseScreen {
    constructor() {
        super("GameChoiceScreen");
        this.addChildComponent(new LinkToCareerComponent(this))
            .addChildComponent(new LinkToBrickBreakComponent(this))
            .addChildComponent(new LinkToCatLifeComponent(this))
            .addRectangleSolidDrawing("green")
            .show();
    }
}


/*
init() {
    try {
        this.validateAndSetScreen();
        this.cellW = this.getFullWidth() / this.numberOfColumns;
        this.cellH = this.getFullHeight() / this.numberOfRows;
        this.grid = new Grid(
            this.context,
            this.screen.getLeft(),
            this.screen.getTop(),
            [25, 25, 25, 25],
            [33.333333, 33.333333, 33.333333])
            .addGridBackgroundColor(0, 0, "aqua")
            .addGridText(0, 0, ["Adam", "Johnston's", "Resume"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(0, 1, "bisque")
            .addGridText(0, 1, ["Cat Life", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(0, 2, "blue")
            .addGridText(0, 2, ["Tower", "Defense", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(0, 3, "bisque")
            .addGridText(0, 3, ["Mine Game", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(1, 0, "chartreuse")
            .addGridText(1, 0, ["Breakout", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(1, 1, "chocolate")
            .addGridText(1, 1, ["Pong", "Breaker", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(1, 2, "deeppink")
            .addGridText(1, 2, ["NATHAN"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(1, 3, "firebrick")
            .addGridText(1, 3, ["RACHEL"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(2, 0, "purple")
            .addGridText(2, 0, ["MOM"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(2, 1, "chocolate")
            .addGridText(2, 1, ["DAD"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(2, 2, "deeppink")
            .addGridText(2, 2, ["Career Game", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
            .addGridBackgroundColor(2, 3, "firebrick")
            .addBorderForAll(2, "white");
        this.loaded = true;
        console.log("[GameChoice] has loaded.", this);
    } catch (e) {
        console.error("[FATAL] GAME LOOP HAS CRASHED ON [INIT]!", e, this);
        throw e;
    }
}
    */

/*
export class GameChoice extends Gameable {
    constructor(context) {
        super(context);
        console.log("New instance of [GameChoice] object.", this);
    }

    init() {
        try {
            this.validateAndSetScreen();
            this.cellW = this.getFullWidth() / this.numberOfColumns;
            this.cellH = this.getFullHeight() / this.numberOfRows;
            this.grid = new Grid(
                this.context,
                this.screen.getLeft(),
                this.screen.getTop(),
                [25, 25, 25, 25],
                [33.333333, 33.333333, 33.333333])
                .addGridBackgroundColor(0, 0, "aqua")
                .addGridText(0, 0, ["Adam", "Johnston's", "Resume"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(0, 1, "bisque")
                .addGridText(0, 1, ["Cat Life", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(0, 2, "blue")
                .addGridText(0, 2, ["Tower", "Defense", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(0, 3, "bisque")
                .addGridText(0, 3, ["Mine Game", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(1, 0, "chartreuse")
                .addGridText(1, 0, ["Breakout", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(1, 1, "chocolate")
                .addGridText(1, 1, ["Pong", "Breaker", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(1, 2, "deeppink")
                .addGridText(1, 2, ["NATHAN"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(1, 3, "firebrick")
                .addGridText(1, 3, ["RACHEL"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(2, 0, "purple")
                .addGridText(2, 0, ["MOM"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(2, 1, "chocolate")
                .addGridText(2, 1, ["DAD"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(2, 2, "deeppink")
                .addGridText(2, 2, ["Career Game", "(DEV ONLY)"], 3, "Helvetica", "white", 1, 8, 4)
                .addGridBackgroundColor(2, 3, "firebrick")
                .addBorderForAll(2, "white");
            this.loaded = true;
            console.log("[GameChoice] has loaded.", this);
        } catch (e) {
            console.error("[FATAL] GAME LOOP HAS CRASHED ON [INIT]!", e, this);
            throw e;
        }
    }

    update(tick) {
        try {
            super.update(tick);
            this.grid.update(this.tick);
        } catch (e) {
            console.error("[FATAL] GAME LOOP HAS CRASHED ON [UPDATE]!", e, this);
            throw e;
        }
        /*
        this.tick = tick;
        if (!this.grid.loaded) {
            this.grid.load(3, 4);
            this.grid.setLayer14BorderForAll(5, "white");
            this.grid.setLayer2Color(
                // https://www.w3schools.com/tags/ref_colornames.asp
                [
                    [
                        new GridColor(this.context, 0, 0, "aqua"),
                        new GridColor(this.context, 0, 1, "bisque"),
                        new GridColor(this.context, 0, 2, "blue"),
                        new GridColor(this.context, 0, 3, "bisque")
                    ],
                    [
                        new GridColor(this.context, 1, 0, "chartreuse"),
                        new GridColor(this.context, 1, 1, "chocolate"),
                        new GridColor(this.context, 1, 2, "deeppink"),
                        new GridColor(this.context, 1, 3, "firebrick")
                    ],
                    [
                        new GridColor(this.context, 2, 0, "purple"),
                        new GridColor(this.context, 2, 1, "lawngreen"),
                        new GridColor(this.context, 2, 2, "darkblue"),
                        new GridColor(this.context, 2, 3, "silver")
                    ]
                ]
            );
            this.grid.setLayer5MultiLineText([
                [
                    new GridMultiLineText(this.context, 0, 0, ["Adam", "Johnston's", "Resume"]),
                    new GridMultiLineText(this.context, 0, 1, ["Cat Life", "(DEV ONLY)"]),
                    new GridMultiLineText(this.context, 0, 2, ["Tower", "Defense", "(DEV ONLY)"]),
                    new GridMultiLineText(this.context, 0, 3, ["Mine Game", "(DEV ONLY)"])
                ],
                [
                    new GridMultiLineText(this.context, 1, 0, ["Breakout", "(DEV ONLY)"]),
                    new GridMultiLineText(this.context, 1, 1, ["Pong", "Breaker", "(DEV ONLY)"]),
                    new GridSingleLineText(this.context, 1, 2, "NATHAN"),
                    new GridSingleLineText(this.context, 1, 3, "RACHEL")
                ],
                [
                    new GridSingleLineText(this.context, 2, 0, "MOM"),
                    new GridSingleLineText(this.context, 2, 1, "DAD"),
                    new GridMultiLineText(this.context, 2, 2, ["Career Game", "(DEV ONLY)"]),
                    new GridSingleLineText(this.context, 2, 3, "")
                ]
            ]
            );
        }
        this.grid.update(this.tick);
        
    }

    draw() {
        try {
            this.grid.draw();
        } catch (e) {
            console.error("[FATAL] GAME LOOP HAS CRASHED ON [DRAW]!", e, this);
            throw e;
        }
    }

    onClick(x, y) {
        try {
            let row = this.grid.getRowIndex(y);
            let column = this.grid.getColumnIndex(x);

            if (row == 0) {
                if (column == 0) {
                    window.location = "./resume";
                }
                if (column == 1) {
                    window.location = "./cat";
                }
                if (column == 2) {
                    window.location = "./tower";
                }
                if (column == 3) {
                    window.location = "./mine";
                }
            } else if (row == 1) {
                if (column == 0) {
                    window.location = "./bombbreak";
                }
                if (column == 1) {
                    window.location = "./pongbreaker";
                }
                if (column == 2) {
                    window.location = "./nathan";
                }
                if (column == 3) {
                    window.location = "./rachel";
                }
            } else if (row == 2) {
                if (column == 0) {
                    window.location = "./mom";
                }
                if (column == 1) {
                    window.location = "./dod";
                }
                if (column == 2) {
                    window.location = "./career";
                }
            }
        } catch (e) {
            console.error("[FATAL] GAME LOOP HAS CRASHED ON [ON-CLICK]!", e, this);
            throw e;
        }

        throw new GameException("Invalid " +
            "[row, column] combination [" + row + ", " + column + "] - Invalid " +
            "[x, y] click combination [" + x + ", " + y + "]", this);
    }
}
    */