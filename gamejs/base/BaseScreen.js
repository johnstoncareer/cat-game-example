import { BaseComponent } from "./BaseComponent.js";
import { context } from "./../../gamejs/main.js";

export class BaseScreen extends BaseComponent {
    constructor(id) {
        super(null, 100, 100, "left", "top", 0, 0);
        this.id = id;
        context.addScreen(this);
    }

    getId() {
        return this.id;
    }

    getParentPercentX() {
        return 0;
    }

    getParentPercentY() {
        return 0;
    }

    getParentPercentW() {
        return 100;
    }

    getParentPercentH() {
        return 100;
    }
}