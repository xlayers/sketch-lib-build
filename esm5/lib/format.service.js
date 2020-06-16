/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import paramCase from 'param-case';
import pascalCase from 'pascal-case';
import * as i0 from "@angular/core";
var FormatService = /** @class */ (function () {
    function FormatService() {
    }
    /**
     * @param {?} n
     * @param {?} content
     * @return {?}
     */
    FormatService.prototype.indent = /**
     * @param {?} n
     * @param {?} content
     * @return {?}
     */
    function (n, content) {
        /** @type {?} */
        var indentation = !!n ? '  '.repeat(n) : '';
        return indentation + content;
    };
    /**
     * @param {?} n
     * @param {?} contents
     * @return {?}
     */
    FormatService.prototype.indentFile = /**
     * @param {?} n
     * @param {?} contents
     * @return {?}
     */
    function (n, contents) {
        var _this = this;
        return contents.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) { return _this.indent(n, line); }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormatService.prototype.className = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return pascalCase(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormatService.prototype.normalizeName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return paramCase(name);
    };
    FormatService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FormatService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FormatService_Factory() { return new FormatService(); }, token: FormatService, providedIn: "root" });
    return FormatService;
}());
export { FormatService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7O0FBRXJDO0lBQUE7S0FvQkM7Ozs7OztJQWhCQyw4QkFBTTs7Ozs7SUFBTixVQUFPLENBQVMsRUFBRSxPQUFlOztZQUN6QixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3QyxPQUFPLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsa0NBQVU7Ozs7O0lBQVYsVUFBVyxDQUFTLEVBQUUsUUFBZ0I7UUFBdEMsaUJBRUM7UUFEQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELGlDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQscUNBQWE7Ozs7SUFBYixVQUFjLElBQVk7UUFDeEIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt3QkFORDtDQXdCQyxBQXBCRCxJQW9CQztTQWpCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgcGFyYW1DYXNlIGZyb20gJ3BhcmFtLWNhc2UnO1xyXG5pbXBvcnQgcGFzY2FsQ2FzZSBmcm9tICdwYXNjYWwtY2FzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtYXRTZXJ2aWNlIHtcclxuICBpbmRlbnQobjogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGluZGVudGF0aW9uID0gISFuID8gJyAgJy5yZXBlYXQobikgOiAnJztcclxuICAgIHJldHVybiBpbmRlbnRhdGlvbiArIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBpbmRlbnRGaWxlKG46IG51bWJlciwgY29udGVudHM6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnRzLnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiB0aGlzLmluZGVudChuLCBsaW5lKSk7XHJcbiAgfVxyXG5cclxuICBjbGFzc05hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcGFzY2FsQ2FzZShuYW1lKTtcclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZU5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcGFyYW1DYXNlKG5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=