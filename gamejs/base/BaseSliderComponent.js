import { BaseComponent } from "./BaseComponent.js";

export const RANGE_SLIDER_PERCENT_X = 70;
export const RANGE_SLIDER_PERCENT_Y = 49;
export const RANGE_SLIDER_PERCENT_W = 15;
export const RANGE_SLIDER_PERCENT_H = 0.5;
export const RANGE_SLIDER_COLOR = "white";
export const RANGE_SLIDER_UNITS_PERCENT_X = 70;
export const RANGE_SLIDER_UNITS_PERCENT_Y = 55;
export const RANGE_SLIDER_UNITS_COLOR = "white";
export const RANGE_SLIDER_UNITS_FONT = "16pt Helvetica";
export const RANGE_SLIDER_DEFAULT_BACKGROUND_COLOR = "orange";
export const RANGE_SLIDER_ON_CLICK_BACKGROUND_COLOR = "green";
export const RANGE_SLIDER_ON_MOUSE_OVER_BACKGROUND_COLOR = "cyan";
export const RANGE_SLIDER_POSITION_PERCENT_Y = 47.75;
export const RANGE_SLIDER_POSITION_PERCENT_W = 1;
export const RANGE_SLIDER_POSITION_PERCENT_H = 3;

export class BaseSliderComponent extends BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY) {
        super(
            parent,
            percentW,
            percentH,
            align,
            valign,
            offsetPercentX,
            offsetPercentY
        );
        this.addRectangleSolidDrawing(
            this.context,
            RANGE_SLIDER_PERCENT_X,
            RANGE_SLIDER_PERCENT_Y,
            RANGE_SLIDER_PERCENT_W + RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_PERCENT_H,
            RANGE_SLIDER_COLOR
        ).addRectangleSolidDrawing(
            this.context,
            0,
            RANGE_SLIDER_POSITION_PERCENT_Y,
            RANGE_SLIDER_POSITION_PERCENT_W,
            RANGE_SLIDER_POSITION_PERCENT_H,
            RANGE_SLIDER_COLOR
        );
    }
}