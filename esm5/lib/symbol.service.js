/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SymbolService = /** @class */ (function () {
    function SymbolService() {
    }
    /**
     * @param {?} current
     * @return {?}
     */
    SymbolService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current._class))) === 'symbolInstance';
    };
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    SymbolService.prototype.lookup = /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    function (current, data) {
        /** @type {?} */
        var foreignSymbol = data.document.foreignSymbols.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.symbolMaster.symbolID === ((/** @type {?} */ (current))).symbolID; }));
        return foreignSymbol && foreignSymbol.symbolMaster;
    };
    SymbolService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SymbolService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SymbolService_Factory() { return new SymbolService(); }, token: SymbolService, providedIn: "root" });
    return SymbolService;
}());
export { SymbolService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9sLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL3N5bWJvbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBZUM7Ozs7O0lBWEMsZ0NBQVE7Ozs7SUFBUixVQUFTLE9BQXNCO1FBQzdCLE9BQU8sQ0FBQyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFVLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCw4QkFBTTs7Ozs7SUFBTixVQUFPLE9BQXNCLEVBQUUsSUFBa0I7O1lBQ3pDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O1FBQ3JELFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEtBQUssQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLFFBQVEsRUFBckQsQ0FBcUQsRUFDM0Q7UUFFRCxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3JELENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFKRDtDQWlCQyxBQWZELElBZUM7U0FaWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ltYm9sU2VydmljZSB7XHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIChjdXJyZW50Ll9jbGFzcyBhcyBzdHJpbmcpID09PSAnc3ltYm9sSW5zdGFuY2UnO1xyXG4gIH1cclxuXHJcbiAgbG9va3VwKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIGRhdGE6IFNrZXRjaE1TRGF0YSkge1xyXG4gICAgY29uc3QgZm9yZWlnblN5bWJvbCA9IGRhdGEuZG9jdW1lbnQuZm9yZWlnblN5bWJvbHMuZmluZChcclxuICAgICAgeCA9PiB4LnN5bWJvbE1hc3Rlci5zeW1ib2xJRCA9PT0gKGN1cnJlbnQgYXMgYW55KS5zeW1ib2xJRFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWlnblN5bWJvbCAmJiBmb3JlaWduU3ltYm9sLnN5bWJvbE1hc3RlcjtcclxuICB9XHJcbn1cclxuIl19