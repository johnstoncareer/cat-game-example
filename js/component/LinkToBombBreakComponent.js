import { ALIGN_LEFT, VALIGN_TOP } from "../../gamejs/configuration/GameConstants.js";
import { BaseComponent } from "./../../gamejs/base/BaseComponent.js";
import {
    BOMB_BREAK_GAME_TITLE,
    BOMB_BREAK_GAME_TEXT_SIZE,
    BOMB_BREAK_GAME_TEXT_COLOR,
    BOMB_BREAK_GAME_TEXT_PERCENT_X,
    BOMB_BREAK_GAME_TEXT_PERCENT_Y,
} from "./../configuration/GameChoiceConfiguration.js";

export class LinkToBrickBreakComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            50,
            50,
            ALIGN_LEFT,
            VALIGN_TOP,
            50,
            0
        );
        this.addRectangleSolidDrawing("yellow")
            .addTextDrawing(
                BOMB_BREAK_GAME_TITLE,
                BOMB_BREAK_GAME_TEXT_SIZE,
                BOMB_BREAK_GAME_TEXT_COLOR,
                BOMB_BREAK_GAME_TEXT_PERCENT_X,
                BOMB_BREAK_GAME_TEXT_PERCENT_Y);
    }

    unclick() {
        window.location = "./bombbreak/";
    }
}