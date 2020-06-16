/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import paramCase from 'param-case';
import pascalCase from 'pascal-case';
import * as i0 from "@angular/core";
export class FormatService {
    /**
     * @param {?} n
     * @param {?} content
     * @return {?}
     */
    indent(n, content) {
        /** @type {?} */
        const indentation = !!n ? '  '.repeat(n) : '';
        return indentation + content;
    }
    /**
     * @param {?} n
     * @param {?} contents
     * @return {?}
     */
    indentFile(n, contents) {
        return contents.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        line => this.indent(n, line)));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    className(name) {
        return pascalCase(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    normalizeName(name) {
        return paramCase(name);
    }
}
FormatService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FormatService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FormatService_Factory() { return new FormatService(); }, token: FormatService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7O0FBS3JDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDeEIsTUFBTSxDQUFDLENBQVMsRUFBRSxPQUFlOztjQUN6QixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3QyxPQUFPLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLENBQVMsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQVk7UUFDeEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHBhcmFtQ2FzZSBmcm9tICdwYXJhbS1jYXNlJztcclxuaW1wb3J0IHBhc2NhbENhc2UgZnJvbSAncGFzY2FsLWNhc2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWF0U2VydmljZSB7XHJcbiAgaW5kZW50KG46IG51bWJlciwgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpbmRlbnRhdGlvbiA9ICEhbiA/ICcgICcucmVwZWF0KG4pIDogJyc7XHJcbiAgICByZXR1cm4gaW5kZW50YXRpb24gKyBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaW5kZW50RmlsZShuOiBudW1iZXIsIGNvbnRlbnRzOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50cy5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4gdGhpcy5pbmRlbnQobiwgbGluZSkpO1xyXG4gIH1cclxuXHJcbiAgY2xhc3NOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHBhc2NhbENhc2UobmFtZSk7XHJcbiAgfVxyXG5cclxuICBub3JtYWxpemVOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHBhcmFtQ2FzZShuYW1lKTtcclxuICB9XHJcbn1cclxuIl19