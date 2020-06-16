/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LayerService {
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return current.layers && Array.isArray(current.layers);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    lookup(current) {
        return (/** @type {?} */ (current.layers));
    }
}
LayerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ LayerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LayerService_Factory() { return new LayerService(); }, token: LayerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFFBQVEsQ0FBQyxPQUFzQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBc0I7UUFDM0IsT0FBTyxtQkFBQSxPQUFPLENBQUMsTUFBTSxFQUFPLENBQUM7SUFDL0IsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJTZXJ2aWNlIHtcclxuICBpZGVudGlmeShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gY3VycmVudC5sYXllcnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50LmxheWVycyk7XHJcbiAgfVxyXG5cclxuICBsb29rdXAoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQubGF5ZXJzIGFzIGFueTtcclxuICB9XHJcbn1cclxuIl19