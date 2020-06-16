/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from './format.service';
import * as i0 from "@angular/core";
import * as i1 from "./format.service";
var ImageService = /** @class */ (function () {
    function ImageService(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    ImageService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current._class))) === 'bitmap';
    };
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    ImageService.prototype.lookup = /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    function (current, data) {
        return this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref);
    };
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ImageService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        return [
            {
                kind: 'png',
                value: this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref),
                language: 'base64',
                uri: options.assetDir + "/" + this.formatService.normalizeName(current.name) + ".png"
            }
        ];
    };
    /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    ImageService.prototype.getImageDataFromRef = /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    function (data, reference) {
        return ((/** @type {?} */ (data))).images[reference];
    };
    ImageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ImageService.ctorParameters = function () { return [
        { type: FormatService }
    ]; };
    /** @nocollapse */ ImageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ImageService_Factory() { return new ImageService(i0.ɵɵinject(i1.FormatService)); }, token: ImageService, providedIn: "root" });
    return ImageService;
}());
export { ImageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageService.prototype.formatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVqRDtJQUlFLHNCQUE2QixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRTdELCtCQUFROzs7O0lBQVIsVUFBUyxPQUFzQjtRQUM3QixPQUFPLENBQUMsbUJBQUEsT0FBTyxDQUFDLE1BQU0sRUFBVSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELDZCQUFNOzs7OztJQUFOLFVBQU8sT0FBc0IsRUFBRSxJQUFrQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7O0lBRUQsZ0NBQVM7Ozs7OztJQUFULFVBQVUsT0FBc0IsRUFBRSxJQUFrQixFQUFFLE9BQVk7UUFDaEUsT0FBTztZQUNMO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNsRSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsR0FBRyxFQUFLLE9BQU8sQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzFELE9BQU8sQ0FBQyxJQUFJLENBQ2IsU0FBTTthQUNSO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTywwQ0FBbUI7Ozs7OztJQUEzQixVQUE0QixJQUFrQixFQUFFLFNBQWlCO1FBQy9ELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkE3QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxhQUFhOzs7dUJBRHRCO0NBaUNDLEFBOUJELElBOEJDO1NBM0JZLFlBQVk7Ozs7OztJQUNYLHFDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJy4vZm9ybWF0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UpIHt9XHJcblxyXG4gIGlkZW50aWZ5KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiAoY3VycmVudC5fY2xhc3MgYXMgc3RyaW5nKSA9PT0gJ2JpdG1hcCc7XHJcbiAgfVxyXG5cclxuICBsb29rdXAoY3VycmVudDogU2tldGNoTVNMYXllciwgZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURhdGFGcm9tUmVmKGRhdGEsIChjdXJyZW50IGFzIGFueSkuaW1hZ2UuX3JlZik7XHJcbiAgfVxyXG5cclxuICBhZ2dyZWdhdGUoY3VycmVudDogU2tldGNoTVNMYXllciwgZGF0YTogU2tldGNoTVNEYXRhLCBvcHRpb25zOiBhbnkpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAncG5nJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRJbWFnZURhdGFGcm9tUmVmKGRhdGEsIChjdXJyZW50IGFzIGFueSkuaW1hZ2UuX3JlZiksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdiYXNlNjQnLFxyXG4gICAgICAgIHVyaTogYCR7b3B0aW9ucy5hc3NldERpcn0vJHt0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShcclxuICAgICAgICAgIGN1cnJlbnQubmFtZVxyXG4gICAgICAgICl9LnBuZ2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW1hZ2VEYXRhRnJvbVJlZihkYXRhOiBTa2V0Y2hNU0RhdGEsIHJlZmVyZW5jZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGRhdGEgYXMgYW55KS5pbWFnZXNbcmVmZXJlbmNlXTtcclxuICB9XHJcbn1cclxuIl19