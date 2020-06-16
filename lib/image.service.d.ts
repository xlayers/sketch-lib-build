/// <reference types="sketchapp" />
import { FormatService } from './format.service';
export declare class ImageService {
    private readonly formatService;
    constructor(formatService: FormatService);
    identify(current: SketchMSLayer): boolean;
    lookup(current: SketchMSLayer, data: SketchMSData): any;
    aggregate(current: SketchMSLayer, data: SketchMSData, options: any): {
        kind: string;
        value: any;
        language: string;
        uri: string;
    }[];
    private getImageDataFromRef;
}
