/// <reference types="sketchapp" />
import { BplistService } from './bplist.service';
export declare class TextService {
    private binaryHelperService;
    constructor(binaryHelperService: BplistService);
    identify(current: SketchMSLayer): boolean;
    lookup(current: SketchMSLayer): any;
    private extractAttributedStringText;
    private decodeArchiveString;
}
