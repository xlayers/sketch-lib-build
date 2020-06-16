/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LayerService = /** @class */ (function () {
    function LayerService() {
    }
    /**
     * @param {?} current
     * @return {?}
     */
    LayerService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return current.layers && Array.isArray(current.layers);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    LayerService.prototype.lookup = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return (/** @type {?} */ (current.layers));
    };
    LayerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ LayerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LayerService_Factory() { return new LayerService(); }, token: LayerService, providedIn: "root" });
    return LayerService;
}());
export { LayerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTtLQVdDOzs7OztJQVBDLCtCQUFROzs7O0lBQVIsVUFBUyxPQUFzQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCw2QkFBTTs7OztJQUFOLFVBQU8sT0FBc0I7UUFDM0IsT0FBTyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFPLENBQUM7SUFDL0IsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3VCQUpEO0NBYUMsQUFYRCxJQVdDO1NBUlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExheWVyU2VydmljZSB7XHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQubGF5ZXJzICYmIEFycmF5LmlzQXJyYXkoY3VycmVudC5sYXllcnMpO1xyXG4gIH1cclxuXHJcbiAgbG9va3VwKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiBjdXJyZW50LmxheWVycyBhcyBhbnk7XHJcbiAgfVxyXG59XHJcbiJdfQ==