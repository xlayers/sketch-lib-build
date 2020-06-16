/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ShapeService {
    /**
     * @param {?} point
     * @param {?} offset
     * @param {?} current
     * @return {?}
     */
    parsePoint(point, offset, current) {
        /** @type {?} */
        const parsedPoint = point.slice(1, -1).split(', ');
        return {
            x: Number.parseFloat((current.frame.width * Number.parseFloat(parsedPoint[0]) +
                offset).toFixed(3)),
            y: Number.parseFloat((current.frame.height * Number.parseFloat(parsedPoint[1]) +
                offset).toFixed(3))
        };
    }
}
ShapeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ShapeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ShapeService_Factory() { return new ShapeService(); }, token: ShapeService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3NrZXRjaC1saWIvIiwic291cmNlcyI6WyJsaWIvc2hhcGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7SUFDdkIsVUFBVSxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsT0FBc0I7O2NBQ3hELFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEQsT0FBTztZQUNMLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUNsQixDQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLENBQ1AsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2I7WUFDRCxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FDbEIsQ0FDRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUNQLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFwZVNlcnZpY2Uge1xyXG4gIHBhcnNlUG9pbnQocG9pbnQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IHBhcnNlZFBvaW50ID0gcG9pbnQuc2xpY2UoMSwgLTEpLnNwbGl0KCcsICcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogTnVtYmVyLnBhcnNlRmxvYXQoXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgY3VycmVudC5mcmFtZS53aWR0aCAqIE51bWJlci5wYXJzZUZsb2F0KHBhcnNlZFBvaW50WzBdKSArXHJcbiAgICAgICAgICBvZmZzZXRcclxuICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgKSxcclxuICAgICAgeTogTnVtYmVyLnBhcnNlRmxvYXQoXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgY3VycmVudC5mcmFtZS5oZWlnaHQgKiBOdW1iZXIucGFyc2VGbG9hdChwYXJzZWRQb2ludFsxXSkgK1xyXG4gICAgICAgICAgb2Zmc2V0XHJcbiAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==