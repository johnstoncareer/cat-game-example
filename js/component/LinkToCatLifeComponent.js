import { ALIGN_LEFT, VALIGN_TOP, TEXT_SIZE_LARGE } from "../../gamejs/configuration/GameConstants.js";
import { BaseComponent } from "./../../gamejs/base/BaseComponent.js";
import {
    CAT_GAME_TITLE,
    CAT_GAME_TEXT_SIZE,
    CAT_GAME_TEXT_COLOR,
    CAT_GAME_TEXT_PERCENT_X,
    CAT_GAME_TEXT_PERCENT_Y,
} from "./../configuration/GameChoiceConfiguration.js";

export class LinkToCatLifeComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            50,
            50,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            50
        );
        this.addRectangleSolidDrawing("blue")
            .addTextDrawing(
                CAT_GAME_TITLE,
                CAT_GAME_TEXT_SIZE,
                CAT_GAME_TEXT_COLOR,
                CAT_GAME_TEXT_PERCENT_X,
                CAT_GAME_TEXT_PERCENT_Y);
    }

    unclick() {
        window.location = "./catlife/";
    }
}