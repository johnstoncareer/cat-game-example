import { ALIGN_CENTER, VALIGN_CENTER } from "../configuration/GameConstants.js";
import { BaseTableComponent } from "./BaseTableComponent.js";

export class BaseSquareTableComponent extends BaseTableComponent {
    constructor(parent, percentWH, offsetPercentX, cellPercents) {
        super(parent, percentWH, percentWH, ALIGN_CENTER, VALIGN_CENTER, cellPercents, cellPercents);
    }
}