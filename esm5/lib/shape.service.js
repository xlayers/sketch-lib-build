/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ShapeService = /** @class */ (function () {
    function ShapeService() {
    }
    /**
     * @param {?} point
     * @param {?} offset
     * @param {?} current
     * @return {?}
     */
    ShapeService.prototype.parsePoint = /**
     * @param {?} point
     * @param {?} offset
     * @param {?} current
     * @return {?}
     */
    function (point, offset, current) {
        /** @type {?} */
        var parsedPoint = point.slice(1, -1).split(', ');
        return {
            x: Number.parseFloat((current.frame.width * Number.parseFloat(parsedPoint[0]) +
                offset).toFixed(3)),
            y: Number.parseFloat((current.frame.height * Number.parseFloat(parsedPoint[1]) +
                offset).toFixed(3))
        };
    };
    ShapeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ShapeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ShapeService_Factory() { return new ShapeService(); }, token: ShapeService, providedIn: "root" });
    return ShapeService;
}());
export { ShapeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTtLQXFCQzs7Ozs7OztJQWpCQyxpQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQXNCOztZQUN4RCxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xELE9BQU87WUFDTCxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FDbEIsQ0FDRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUNQLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNiO1lBQ0QsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQ2xCLENBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FDUCxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDYjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3VCQUpEO0NBdUJDLEFBckJELElBcUJDO1NBbEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFwZVNlcnZpY2Uge1xyXG4gIHBhcnNlUG9pbnQocG9pbnQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IHBhcnNlZFBvaW50ID0gcG9pbnQuc2xpY2UoMSwgLTEpLnNwbGl0KCcsICcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogTnVtYmVyLnBhcnNlRmxvYXQoXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgY3VycmVudC5mcmFtZS53aWR0aCAqIE51bWJlci5wYXJzZUZsb2F0KHBhcnNlZFBvaW50WzBdKSArXHJcbiAgICAgICAgICBvZmZzZXRcclxuICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgKSxcclxuICAgICAgeTogTnVtYmVyLnBhcnNlRmxvYXQoXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgY3VycmVudC5mcmFtZS5oZWlnaHQgKiBOdW1iZXIucGFyc2VGbG9hdChwYXJzZWRQb2ludFsxXSkgK1xyXG4gICAgICAgICAgb2Zmc2V0XHJcbiAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==