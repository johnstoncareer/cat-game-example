import { ALIGN_LEFT, VALIGN_TOP } from "../../gamejs/configuration/GameConstants.js";
import { BaseComponent } from "./../../gamejs/base/BaseComponent.js";
import {
    CAREER_GAME_TITLE,
    CAREER_GAME_TEXT_SIZE,
    CAREER_GAME_TEXT_COLOR,
    CAREER_GAME_TEXT_PERCENT_X,
    CAREER_GAME_TEXT_PERCENT_Y,
} from "./../configuration/GameChoiceConfiguration.js";

export class LinkToCareerComponent extends BaseComponent {
    constructor(parent) {
        super(
            parent,
            50,
            50,
            ALIGN_LEFT,
            VALIGN_TOP,
            0,
            0
        );
        this.addRectangleSolidDrawing("purple")
            .addTextDrawing(
                CAREER_GAME_TITLE,
                CAREER_GAME_TEXT_SIZE,
                CAREER_GAME_TEXT_COLOR,
                CAREER_GAME_TEXT_PERCENT_X,
                CAREER_GAME_TEXT_PERCENT_Y);
    }

    unclick() {
        window.location = "./career/";
    }
}