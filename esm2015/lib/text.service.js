/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BplistService } from './bplist.service';
import * as i0 from "@angular/core";
import * as i1 from "./bplist.service";
export class TextService {
    /**
     * @param {?} binaryHelperService
     */
    constructor(binaryHelperService) {
        this.binaryHelperService = binaryHelperService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ((/** @type {?} */ (current._class))) === 'text';
    }
    /**
     * @param {?} current
     * @return {?}
     */
    lookup(current) {
        return (current.attributedString.string ||
            this.extractAttributedStringText(current));
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    extractAttributedStringText(current) {
        /** @type {?} */
        const obj = current.attributedString;
        if (obj && obj.hasOwnProperty('archivedAttributedString')) {
            /** @type {?} */
            const archive = this.binaryHelperService.parse64Content(obj.archivedAttributedString._archive);
            if (archive) {
                return this.decodeArchiveString(archive);
            }
        }
        return '';
    }
    /**
     * @private
     * @param {?} archive
     * @return {?}
     */
    decodeArchiveString(archive) {
        switch (archive.$key) {
            case 'ascii':
                return archive.$value;
            default:
                return '';
        }
    }
}
TextService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TextService.ctorParameters = () => [
    { type: BplistService }
];
/** @nocollapse */ TextService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TextService_Factory() { return new TextService(i0.ɵɵinject(i1.BplistService)); }, token: TextService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TextService.prototype.binaryHelperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvc2tldGNoLWxpYi8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBb0IsbUJBQWtDO1FBQWxDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBZTtJQUFHLENBQUM7Ozs7O0lBRTFELFFBQVEsQ0FBQyxPQUFzQjtRQUM3QixPQUFPLENBQUMsbUJBQUEsT0FBTyxDQUFDLE1BQU0sRUFBVSxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXNCO1FBQzNCLE9BQU8sQ0FDTCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtZQUMvQixJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywyQkFBMkIsQ0FBQyxPQUFzQjs7Y0FDbEQsR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0I7UUFFcEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFOztrQkFDbkQsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQ3JELEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQ3RDO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUM7U0FDRjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsT0FBTztRQUNqQyxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN4QjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGFBQWE7Ozs7Ozs7O0lBTVIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcGxpc3RTZXJ2aWNlIH0gZnJvbSAnLi9icGxpc3Quc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiaW5hcnlIZWxwZXJTZXJ2aWNlOiBCcGxpc3RTZXJ2aWNlKSB7fVxyXG5cclxuICBpZGVudGlmeShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gKGN1cnJlbnQuX2NsYXNzIGFzIHN0cmluZykgPT09ICd0ZXh0JztcclxuICB9XHJcblxyXG4gIGxvb2t1cChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBjdXJyZW50LmF0dHJpYnV0ZWRTdHJpbmcuc3RyaW5nIHx8XHJcbiAgICAgIHRoaXMuZXh0cmFjdEF0dHJpYnV0ZWRTdHJpbmdUZXh0KGN1cnJlbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleHRyYWN0QXR0cmlidXRlZFN0cmluZ1RleHQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3Qgb2JqID0gY3VycmVudC5hdHRyaWJ1dGVkU3RyaW5nO1xyXG5cclxuICAgIGlmIChvYmogJiYgb2JqLmhhc093blByb3BlcnR5KCdhcmNoaXZlZEF0dHJpYnV0ZWRTdHJpbmcnKSkge1xyXG4gICAgICBjb25zdCBhcmNoaXZlID0gdGhpcy5iaW5hcnlIZWxwZXJTZXJ2aWNlLnBhcnNlNjRDb250ZW50KFxyXG4gICAgICAgIG9iai5hcmNoaXZlZEF0dHJpYnV0ZWRTdHJpbmcuX2FyY2hpdmVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChhcmNoaXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlQXJjaGl2ZVN0cmluZyhhcmNoaXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjb2RlQXJjaGl2ZVN0cmluZyhhcmNoaXZlKSB7XHJcbiAgICBzd2l0Y2ggKGFyY2hpdmUuJGtleSkge1xyXG4gICAgICBjYXNlICdhc2NpaSc6XHJcbiAgICAgICAgcmV0dXJuIGFyY2hpdmUuJHZhbHVlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19