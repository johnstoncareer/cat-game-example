import { RectangleSolidDrawing } from "../drawing/rectangle/RectangleSolidDrawing.js";
import { BaseComponent } from "./BaseComponent.js";
import { context } from "./../main.js";

export class BaseButtonComponent extends BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY,
        defaultColor, onMouseOverColor, onMouseClickButton) {
        super(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY);
        this.defaultColor = defaultColor;
        this.onMouseOverColor = onMouseOverColor;
        this.onMouseClickButton = onMouseClickButton;
    }

    update(tick) {
        this.tick = tick;
        if (!this.inside(context.getMouseX(), context.getMouseY())) {
            this.drawings.forEach(e => {
                if (e instanceof RectangleSolidDrawing) {
                    e.setColor(this.defaultColor);
                }
            });
        }
        super.update(tick);
    }

    move() {
        this.drawings.forEach(e => {
            if (e instanceof RectangleSolidDrawing) {
                e.setColor(this.onMouseOverColor);
            }
        });
    }

    click() {
        this.drawings.forEach(e => {
            if (e instanceof RectangleSolidDrawing) {
                e.setColor(this.onMouseClickButton);
            }
        });
    }

    unclick() {
        this.drawings.forEach(e => {
            if (e instanceof RectangleSolidDrawing) {
                e.setColor(this.defaultColor);
            }
        });
    }
}