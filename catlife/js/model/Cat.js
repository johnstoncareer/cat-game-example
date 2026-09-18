import { BaseComponent } from "../../../gamejs/base/BaseComponent.js";
import { RectangleImageDrawing } from "../../../gamejs/drawing/rectangle/RectangleImageDrawing.js";
import { getImageDrawing } from "../../../gamejs/load/GameLoader.js";

export const BANDIT_PIXEL_KEY = "a001";
export const BREEZY_PIXEL_KEY = "a011";
export const COCOA_PIXEL_KEY = "a021";
export const COWIE_PIXEL_KEY = "a031";
export const DOTTIE_PIXEL_KEY = "a041";
export const EVE_PIXEL_KEY = "a051";
export const FROSTY_PIXEL_KEY = "a061";
export const GANACHE_PIXEL_KEY = "a071";
export const GINGER_PIXEL_KEY = "a081";
export const GOZER_PIXEL_KEY = "a0091";
export const KITKAT_PIXEL_KEY = "a101";
export const MARSHMELLOW_PIXEL_KEY = "a111";
export const MISTY_PIXEL_KEY = "a121";
export const PEACHES_PIXEL_KEY = "a131";
export const PEPPER_PIXEL_KEY = "a141";
export const SOCKS_PIXEL_KEY = "a151";
export const SPOOKY_PIXEL_KEY = "a161";
export const SPREE_PIXEL_KEY = "a171";
export const WHISKERS_PIXEL_KEY = "a181";

export class Cat extends BaseComponent {
    constructor(parent) {
        super(parent, 4, 6, "left", "top", 47.2, 48);
        this.changeCat(BANDIT_PIXEL_KEY);
    }

    load() {
        this.addRectangleOutlineDrawing(.5, "white");
    }

    changeCat(newKey) {
        this.key = newKey;
        switch (newKey) {
            case BANDIT_PIXEL_KEY:
                this.catName = "Bandit";
                this.keyS = "a001";
                this.keyN = "a003";
                this.keyW = "a004";
                this.keyE = "a002";
                break;
            case BREEZY_PIXEL_KEY:
                this.catName = "Breezy";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case COCOA_PIXEL_KEY:
                this.catName = "Cocoa";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case COWIE_PIXEL_KEY:
                this.catName = "Cowie";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case DOTTIE_PIXEL_KEY:
                this.catName = "Dottie";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case EVE_PIXEL_KEY:
                this.catName = "Eve";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case FROSTY_PIXEL_KEY:
                this.catName = "Frosty";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case GANACHE_PIXEL_KEY:
                this.catName = "Ganache";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case GINGER_PIXEL_KEY:
                this.catName = "Ginger";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case GOZER_PIXEL_KEY:
                this.catName = "Gozer";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case KITKAT_PIXEL_KEY:
                this.catName = "KitKat";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case MARSHMELLOW_PIXEL_KEY:
                this.catName = "Marshmallow";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case MISTY_PIXEL_KEY:
                this.catName = "Misty";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case PEACHES_PIXEL_KEY:
                this.catName = "Peaches";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case PEPPER_PIXEL_KEY:
                this.catName = "Pepper";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case SOCKS_PIXEL_KEY:
                this.catName = "Socks";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case SPOOKY_PIXEL_KEY:
                this.catName = "Spooky";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case SPREE_PIXEL_KEY:
                this.catName = "Spree";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            case WHISKERS_PIXEL_KEY:
                this.catName = "Whiskers";
                this.keyS = "a001";
                this.keyN = "a002";
                this.keyW = "a003";
                this.keyE = "a004";
                break;
            default:
                this.catName = "Unknown";
                this.keyS = "Unknown";
                this.keyN = "Unknown";
                this.keyW = "Unknown";
                this.keyE = "Unknown";
                break;
        }
    }

    update(tick) {
        super.update(tick);
    }

    draw() {
        let imageDrawing = getImageDrawing(this.key);
        new RectangleImageDrawing(
            this.parent, 
            imageDrawing.src,
            imageDrawing.ix,
            imageDrawing.iy,
            imageDrawing.w,
            imageDrawing.h,
            imageDrawing.scale ? imageDrawing.scale : 1)
        .draw();
        this.drawings.forEach(e => e.draw());
    }

    getKey() {
        return this.key;
    }

    getCatName() {
        return this.catName;
    }

    getCatKeyN() {
        return this.keyN;
    }

    getCatKeyS() {
        return this.keyS;
    }

    getCatKeyW() {
        return this.keyW;
    }

    getCatKeyE() {
        return this.keyE;
    }

    setDirection(direction) {
        switch (direction) {
            case "S":
                this.key = this.keyS;
                break;
            case "N":
                this.key = this.keyN;
                break;
            case "E":
                this.key = this.keyE;
                break;
            case "W":
                this.key = this.keyW;
                break;
            default:
                throw new Error("Invalid direction");
        }
    }

    hitbox(x, y) {
        return this.inside(x, y);
    }
}