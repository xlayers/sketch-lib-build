/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StyleService {
    /**
     * @param {?} color
     * @return {?}
     */
    parseColor(color) {
        return {
            red: this.percentToRgba(color.red),
            green: this.percentToRgba(color.green),
            blue: this.percentToRgba(color.blue),
            alpha: color.alpha
        };
    }
    /**
     * @param {?} color
     * @return {?}
     */
    parseColorAsRgba(color) {
        /** @type {?} */
        const c = this.parseColor(color);
        /** @type {?} */
        const colorString = [c.red, c.green, c.blue, c.alpha.toFixed(2)].join(',');
        return `rgba(${colorString})`;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    parseColorAsHex(color) {
        /** @type {?} */
        const c = this.parseColor(color);
        return ('#' +
            ((256 + c.red).toString(16).substr(1) +
                (((1 << 24) + (c.green << 16)) |
                    (c.blue << 8) |
                    this.percentToRgba(c.alpha))
                    .toString(16)
                    .substr(1)));
    }
    /**
     * @private
     * @param {?} v
     * @return {?}
     */
    percentToRgba(v) {
        /** @type {?} */
        const color = Math.round(v * 255);
        return color > 0 ? color : 0;
    }
}
StyleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StyleService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(); }, token: StyleService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQW9COztjQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7O2NBQzFCLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxRSxPQUFPLFFBQVEsV0FBVyxHQUFHLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBb0I7O2NBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUVoQyxPQUFPLENBQ0wsR0FBRztZQUNILENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUNFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUM1QjtxQkFDRSxRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLENBQVM7O2NBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUF0Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3R5bGVTZXJ2aWNlIHtcclxuICBwYXJzZUNvbG9yKGNvbG9yOiBTa2V0Y2hNU0NvbG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWQ6IHRoaXMucGVyY2VudFRvUmdiYShjb2xvci5yZWQpLFxyXG4gICAgICBncmVlbjogdGhpcy5wZXJjZW50VG9SZ2JhKGNvbG9yLmdyZWVuKSxcclxuICAgICAgYmx1ZTogdGhpcy5wZXJjZW50VG9SZ2JhKGNvbG9yLmJsdWUpLFxyXG4gICAgICBhbHBoYTogY29sb3IuYWxwaGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYXJzZUNvbG9yQXNSZ2JhKGNvbG9yOiBTa2V0Y2hNU0NvbG9yKSB7XHJcbiAgICBjb25zdCBjID0gdGhpcy5wYXJzZUNvbG9yKGNvbG9yKTtcclxuICAgIGNvbnN0IGNvbG9yU3RyaW5nID0gW2MucmVkLCBjLmdyZWVuLCBjLmJsdWUsIGMuYWxwaGEudG9GaXhlZCgyKV0uam9pbignLCcpO1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7Y29sb3JTdHJpbmd9KWA7XHJcbiAgfVxyXG5cclxuICBwYXJzZUNvbG9yQXNIZXgoY29sb3I6IFNrZXRjaE1TQ29sb3IpIHtcclxuICAgIGNvbnN0IGMgPSB0aGlzLnBhcnNlQ29sb3IoY29sb3IpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICcjJyArXHJcbiAgICAgICgoMjU2ICsgYy5yZWQpLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkgK1xyXG4gICAgICAgIChcclxuICAgICAgICAgICgoMSA8PCAyNCkgKyAoYy5ncmVlbiA8PCAxNikpIHxcclxuICAgICAgICAgIChjLmJsdWUgPDwgOCkgfFxyXG4gICAgICAgICAgdGhpcy5wZXJjZW50VG9SZ2JhKGMuYWxwaGEpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgLnN1YnN0cigxKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBlcmNlbnRUb1JnYmEodjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb2xvciA9IE1hdGgucm91bmQodiAqIDI1NSk7XHJcbiAgICByZXR1cm4gY29sb3IgPiAwID8gY29sb3IgOiAwO1xyXG4gIH1cclxufVxyXG4iXX0=