/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from './format.service';
import * as i0 from "@angular/core";
import * as i1 from "./format.service";
export class ImageService {
    /**
     * @param {?} formatService
     */
    constructor(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ((/** @type {?} */ (current._class))) === 'bitmap';
    }
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    lookup(current, data) {
        return this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref);
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        return [
            {
                kind: 'png',
                value: this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref),
                language: 'base64',
                uri: `${options.assetDir}/${this.formatService.normalizeName(current.name)}.png`
            }
        ];
    }
    /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    getImageDataFromRef(data, reference) {
        return ((/** @type {?} */ (data))).images[reference];
    }
}
ImageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ImageService.ctorParameters = () => [
    { type: FormatService }
];
/** @nocollapse */ ImageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ImageService_Factory() { return new ImageService(i0.ɵɵinject(i1.FormatService)); }, token: ImageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageService.prototype.formatService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixZQUE2QixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRTdELFFBQVEsQ0FBQyxPQUFzQjtRQUM3QixPQUFPLENBQUMsbUJBQUEsT0FBTyxDQUFDLE1BQU0sRUFBVSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxPQUFzQixFQUFFLElBQWtCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBc0IsRUFBRSxJQUFrQixFQUFFLE9BQVk7UUFDaEUsT0FBTztZQUNMO2dCQUNFLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNsRSxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDMUQsT0FBTyxDQUFDLElBQUksQ0FDYixNQUFNO2FBQ1I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLG1CQUFtQixDQUFDLElBQWtCLEVBQUUsU0FBaUI7UUFDL0QsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxhQUFhOzs7Ozs7OztJQU1SLHFDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJy4vZm9ybWF0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UpIHt9XHJcblxyXG4gIGlkZW50aWZ5KGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIHJldHVybiAoY3VycmVudC5fY2xhc3MgYXMgc3RyaW5nKSA9PT0gJ2JpdG1hcCc7XHJcbiAgfVxyXG5cclxuICBsb29rdXAoY3VycmVudDogU2tldGNoTVNMYXllciwgZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURhdGFGcm9tUmVmKGRhdGEsIChjdXJyZW50IGFzIGFueSkuaW1hZ2UuX3JlZik7XHJcbiAgfVxyXG5cclxuICBhZ2dyZWdhdGUoY3VycmVudDogU2tldGNoTVNMYXllciwgZGF0YTogU2tldGNoTVNEYXRhLCBvcHRpb25zOiBhbnkpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAncG5nJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRJbWFnZURhdGFGcm9tUmVmKGRhdGEsIChjdXJyZW50IGFzIGFueSkuaW1hZ2UuX3JlZiksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdiYXNlNjQnLFxyXG4gICAgICAgIHVyaTogYCR7b3B0aW9ucy5hc3NldERpcn0vJHt0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShcclxuICAgICAgICAgIGN1cnJlbnQubmFtZVxyXG4gICAgICAgICl9LnBuZ2BcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW1hZ2VEYXRhRnJvbVJlZihkYXRhOiBTa2V0Y2hNU0RhdGEsIHJlZmVyZW5jZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGRhdGEgYXMgYW55KS5pbWFnZXNbcmVmZXJlbmNlXTtcclxuICB9XHJcbn1cclxuIl19