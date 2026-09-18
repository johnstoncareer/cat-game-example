import { BOTTOM_BROWSER_BUFFER } from "./../configuration/GameConstants.js";
import { MouseEventListener } from "./../listener/MouseEventListener.js";
import { loaded } from "./../load/GameLoader.js";
import { images } from "./../load/GameLoader.js";

export class GameContext {
    constructor() {
        this.screens = new Map();
        this.tick = 0;
    }

    load() {
        this.mouseListener = new MouseEventListener(this);
    }

    update(tick) {
        if(!loaded) {
            return;
        }
        this.tick = tick;
        this.screen.update(this.tick);
    }

    draw() {
        if(!loaded) {
            return;
        }
        this.screen.draw();
    }

    clear() {
        let canvasW = this.canvas.width;
        let canvasH = this.canvas.height;
        let clientW = this.canvas.getBoundingClientRect().width;
        let clientH = this.canvas.getBoundingClientRect().height;

        if (canvasW != clientW || canvasH != clientH) {
            this.canvas.width = clientW;
            this.canvas.height = clientH;
            this.width = clientW;
            this.height = clientH * BOTTOM_BROWSER_BUFFER;
        }

        let ctx = this.getCtx();
        ctx.clearRect(0, 0, clientW, clientH);
    }

    percentHToPercentW(percentH) {
        return (this.getHeightPercent(percentH) / this.getWidth()) * 100;
    }

    pixelXToPercentX(pixelX) {
        return (pixelX / this.getWidth()) * 100;
    }

    getImage(imgSrc) {
        return images.get(imgSrc);
    }

    getScreens() {
        return this.screens;
    }

    getScreen() {
        return this.screen;
    }

    setScreen(screen) {
        this.screen = screen;
        return this;
    }

    addScreen(screen) {
        this.screens.set(screen.getId(), screen);
        return this;
    }

    getMouseListener() {
        return this.mouseListener;
    }

    getMouseX() {
        return this.mouseListener.mousePositionX;
    }

    getMouseY() {
        return this.mouseListener.mousePositionY;
    }

    isMouseClicked() {
        return this.mouseListener.clicked;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getWidthPercent(percent) {
        return this.getWidth() * (percent / 100);
    }

    getHeightPercent(percent) {
        return this.getHeight() * (percent / 100);
    }

    getBoundingClientRect() {
        return this.canvas ? this.canvas.getBoundingClientRect() : null;
    }

    setCtx(ctx) {
        this.ctx = ctx;
        this.clear();
        return this;
    }

    getCtx() {
        return this.ctx;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
        return this;
    }

    getCanvas() {
        return this.canvas;
    }

    isLoaded() {
        return loaded;
    }
}
