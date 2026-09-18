import { context } from "./../main.js";
import { RectangleImageDrawing } from "./../drawing/rectangle/RectangleImageDrawing.js";
import { RectangleImageDrawingWithOffset } from "./../drawing/rectangle/RectangleImageDrawingWithOffset.js";
import { RectangleOutlineDrawing } from "./../drawing/rectangle/RectangleOutlineDrawing.js";
import { RectangleSolidDrawing } from "./../drawing/rectangle/RectangleSolidDrawing.js";
import { SquareImageDrawing } from "./../drawing/square/SquareImageDrawing.js";
import { SquareOutlineDrawing } from "./../drawing/square/SquareOutlineDrawing.js";
import { SquareSolidDrawing } from "./../drawing/square/SquareSolidDrawing.js";
import { CircleOutlineDrawing } from "./../drawing/circle/CircleOutlineDrawing.js";
import { CircleSolidDrawing } from "./../drawing/circle/CircleSolidDrawing.js";
import { TextDrawing } from "./../drawing/text/TextDrawing.js";
import { insideRectangle } from "./../function/MathFunctions.js";
import { getImageDrawing } from "./../load/GameLoader.js";

export class BaseComponent {
    constructor(parent, percentW, percentH, align, valign, offsetPercentX, offsetPercentY) {
        this.parent = parent;
        this.originalPercentW = percentW;
        this.originalPercentH = percentH;
        this.align = align;
        this.valign = valign;
        this.offsetPercentX = offsetPercentX;
        this.offsetPercentY = offsetPercentY;
        this.drawings = [];
        this.components = [];
        this.visible = false;
        this.clicked = false;
    }

    load() {
        this.components.forEach(e => e.load());
        this.drawings.forEach(e => e.load());
    }

    update(tick) {
        if (!this.visible) {
            return;
        }
        this.tick = tick;
        this.components.forEach(e => e.update(tick));
    }

    draw() {
        if (!this.visible) {
            return;
        }
        this.drawings.forEach(e => e.draw());
        this.components.forEach(e => e.draw());
    }

    inside(x, y) {
        if (insideRectangle(
            x,
            y,
            context.getWidthPercent(this.getPercentX()),
            context.getHeightPercent(this.getPercentY()),
            context.getWidthPercent(this.getPercentW()),
            context.getHeightPercent(this.getPercentH()))) {
            return true;
        }
        return false;
    }

    move() { }

    onMouseMove(x, y) {
        if (!this.visible) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseMove(x, y));
            this.move();
        }
    }

    click() { }

    onMouseClick(x, y) {
        if (!this.visible || this.clicked) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseClick(x, y));
            this.click();
        }
        this.clicked = true;
    }

    unclick() { }

    onMouseUnclick(x, y) {
        if (!this.visible || !this.clicked) {
            return;
        }
        if (this.inside(x, y)) {
            this.components.forEach(e => e.onMouseUnclick(x, y));
            this.unclick();
        }
        this.clicked = false;
    }

    addChildComponent(child) {
        this.components.push(child);
        return this;
    }

    addDrawing(drawing) {
        this.drawings.push(drawing);
        return this;
    }

    addRectangleImageDrawing(key) {
        let imageDrawing = getImageDrawing(key);
        this.drawings.push(
            new RectangleImageDrawing(
                this, 
                imageDrawing.src,
                imageDrawing.ix,
                imageDrawing.iy,
                imageDrawing.w,
                imageDrawing.h,
                imageDrawing.scale ? imageDrawing.scale : 1));
        return this;
    }

    addCellRectangleImageDrawingWithOffset(key, pixelOffsetX, pixelOffsetY) {
        let imageDrawing = getImageDrawing(key);
        this.drawings.push(
            new RectangleImageDrawingWithOffset(
                this, 
                imageDrawing.src,
                imageDrawing.ix,
                imageDrawing.iy,
                imageDrawing.w,
                imageDrawing.h,
                pixelOffsetX,
                pixelOffsetY));
        return this;
    }

    addRectangleOutlineDrawing(percentBorderSize, color) {
        this.drawings.push(new RectangleOutlineDrawing(this, percentBorderSize, color));
        return this;
    }

    addRectangleSolidDrawing(color) {
        this.drawings.push(new RectangleSolidDrawing(this, color));
        return this;
    }

    addSquareImageDrawing(key) {
        let imageDrawing = getImageDrawing(key);
        this.drawings.push(
            new SquareImageDrawing(
                this, 
                imageDrawing.src,
                imageDrawing.ix,
                imageDrawing.iy,
                imageDrawing.h,
                imageDrawing.scale ? imageDrawing.scale : 1));
        return this;
    }

    addSquareOutlineDrawing(percentBorderSize, color) {
        this.drawings.push(new SquareOutlineDrawing(this, percentBorderSize, color));
        return this;
    }

    addSquareSolidDrawing(color) {
        this.drawings.push(new SquareSolidDrawing(this, color));
        return this;
    }

    addCircleOutlineDrawing(percentBorderSize, color) {
        this.drawings.push(new CircleOutlineDrawing(this, percentBorderSize, color));
        return this;
    }

    addCircleSolidDrawing(color) {
        this.drawings.push(new CircleSolidDrawing(this, color));
        return this;
    }

    addTextDrawing(text, size, color, offsetPercentX, offsetPercentY) {
        this.drawings.push(new TextDrawing(this, text, size, color, offsetPercentX, offsetPercentY));
        return this;
    }

    clear() {
        this.clearDrawings();
        this.clearChildComponents();
    }

    clearDrawings() {
        this.drawings = [];
    }

    clearChildComponents() {
        this.components = [];
    }

    show() {
        this.visible = true;
        this.components.forEach(e => e.show());
        return this;
    }

    hide() {
        this.visible = false;
        this.components.forEach(e => e.hide());
        return this;
    }

    getParent() {
        return this.parent;
    }

    getPercentX() {
        return this.getParentPercentX() + (this.getParentPercentW() * (this.getOffsetPercentX() / 100));
    }

    getPercentY() {
        return this.getParentPercentY() + (this.getParentPercentH() * (this.getOffsetPercentY() / 100));
    }

    getPercentW() {
        return this.getParentPercentW() * (this.getOriginalPercentW() / 100);
    }

    getPercentH() {
        return this.getParentPercentH() * (this.getOriginalPercentH() / 100);
    }

    getOriginalPercentW() {
        return this.originalPercentW;
    }

    getOriginalPercentH() {
        return this.originalPercentH;
    }

    getAlign() {
        return this.align;
    }

    getValign() {
        return this.valign;
    }

    getOffsetPercentX() {
        return this.offsetPercentX;
    }

    setOffsetPercentX(offsetPercentX) {
        this.offsetPercentX = offsetPercentX;
        return this;
    }

    getOffsetPercentY() {
        return this.offsetPercentY;
    }

    getParentPercentX() {
        return this.parent.getPercentX();
    }

    getParentPercentY() {
        return this.parent.getPercentY();
    }

    getParentPercentW() {
        return this.parent.getPercentW();
    }

    getParentPercentH() {
        return this.parent.getPercentH();
    }

    getDrawings() {
        return this.drawings;
    }

    getChildComponents() {
        return this.components;
    }

    isVisible() {
        return this.visible;
    }
}