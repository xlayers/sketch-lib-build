/// <reference types="sketchapp" />
export declare class StyleService {
    parseColor(color: SketchMSColor): {
        red: number;
        green: number;
        blue: number;
        alpha: number;
    };
    parseColorAsRgba(color: SketchMSColor): string;
    parseColorAsHex(color: SketchMSColor): string;
    private percentToRgba;
}
