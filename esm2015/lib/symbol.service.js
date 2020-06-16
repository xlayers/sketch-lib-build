/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SymbolService {
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ((/** @type {?} */ (current._class))) === 'symbolInstance';
    }
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    lookup(current, data) {
        /** @type {?} */
        const foreignSymbol = data.document.foreignSymbols.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.symbolMaster.symbolID === ((/** @type {?} */ (current))).symbolID));
        return foreignSymbol && foreignSymbol.symbolMaster;
    }
}
SymbolService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SymbolService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SymbolService_Factory() { return new SymbolService(); }, token: SymbolService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9sLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL3N5bWJvbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsUUFBUSxDQUFDLE9BQXNCO1FBQzdCLE9BQU8sQ0FBQyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFVLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBc0IsRUFBRSxJQUFrQjs7Y0FDekMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUk7Ozs7UUFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsUUFBUSxFQUMzRDtRQUVELE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDckQsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ltYm9sU2VydmljZSB7XHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIChjdXJyZW50Ll9jbGFzcyBhcyBzdHJpbmcpID09PSAnc3ltYm9sSW5zdGFuY2UnO1xyXG4gIH1cclxuXHJcbiAgbG9va3VwKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIGRhdGE6IFNrZXRjaE1TRGF0YSkge1xyXG4gICAgY29uc3QgZm9yZWlnblN5bWJvbCA9IGRhdGEuZG9jdW1lbnQuZm9yZWlnblN5bWJvbHMuZmluZChcclxuICAgICAgeCA9PiB4LnN5bWJvbE1hc3Rlci5zeW1ib2xJRCA9PT0gKGN1cnJlbnQgYXMgYW55KS5zeW1ib2xJRFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWlnblN5bWJvbCAmJiBmb3JlaWduU3ltYm9sLnN5bWJvbE1hc3RlcjtcclxuICB9XHJcbn1cclxuIl19