import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import paramCase from 'param-case';
import pascalCase from 'pascal-case';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ FormatService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FormatService_Factory() { return new FormatService(); }, token: FormatService, providedIn: "root" });
    return FormatService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageService = /** @class */ (function () {
    function ImageService(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    ImageService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current._class))) === 'bitmap';
    };
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    ImageService.prototype.lookup = /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    function (current, data) {
        return this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref);
    };
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    ImageService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        return [
            {
                kind: 'png',
                value: this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref),
                language: 'base64',
                uri: options.assetDir + "/" + this.formatService.normalizeName(current.name) + ".png"
            }
        ];
    };
    /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    ImageService.prototype.getImageDataFromRef = /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    function (data, reference) {
        return ((/** @type {?} */ (data))).images[reference];
    };
    ImageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ImageService.ctorParameters = function () { return [
        { type: FormatService }
    ]; };
    /** @nocollapse */ ImageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ImageService_Factory() { return new ImageService(ɵɵinject(FormatService)); }, token: ImageService, providedIn: "root" });
    return ImageService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageService.prototype.formatService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayerService = /** @class */ (function () {
    function LayerService() {
    }
    /**
     * @param {?} current
     * @return {?}
     */
    LayerService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return current.layers && Array.isArray(current.layers);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    LayerService.prototype.lookup = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return (/** @type {?} */ (current.layers));
    };
    LayerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ LayerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayerService_Factory() { return new LayerService(); }, token: LayerService, providedIn: "root" });
    return LayerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SymbolService = /** @class */ (function () {
    function SymbolService() {
    }
    /**
     * @param {?} current
     * @return {?}
     */
    SymbolService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current._class))) === 'symbolInstance';
    };
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    SymbolService.prototype.lookup = /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    function (current, data) {
        /** @type {?} */
        var foreignSymbol = data.document.foreignSymbols.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.symbolMaster.symbolID === ((/** @type {?} */ (current))).symbolID; }));
        return foreignSymbol && foreignSymbol.symbolMaster;
    };
    SymbolService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SymbolService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SymbolService_Factory() { return new SymbolService(); }, token: SymbolService, providedIn: "root" });
    return SymbolService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Buffer = require('buffer/').Buffer;
/** @type {?} */
var BigInt = window['BigInt'] || require('big-integer');
var PropertyListFormatException = /** @class */ (function (_super) {
    __extends(PropertyListFormatException, _super);
    function PropertyListFormatException(message) {
        var _this = _super.call(this) || this;
        Error.captureStackTrace(_this, _this.constructor);
        _this.name = 'PropertyListFormatException';
        _this.message = message;
        return _this;
    }
    return PropertyListFormatException;
}(Error));
var UnsupportedEncodingException = /** @class */ (function (_super) {
    __extends(UnsupportedEncodingException, _super);
    function UnsupportedEncodingException(message) {
        var _this = _super.call(this) || this;
        Error.captureStackTrace(_this, _this.constructor);
        _this.name = 'UnsupportedEncodingException';
        _this.message = message;
        return _this;
    }
    return UnsupportedEncodingException;
}(Error));
var UnsupportedOperationException = /** @class */ (function (_super) {
    __extends(UnsupportedOperationException, _super);
    function UnsupportedOperationException(message) {
        var _this = _super.call(this) || this;
        Error.captureStackTrace(_this, _this.constructor);
        _this.name = 'UnsupportedOperationException';
        _this.message = message;
        return _this;
    }
    return UnsupportedOperationException;
}(Error));
var IllegalArgumentException = /** @class */ (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException(message) {
        var _this = _super.call(this) || this;
        Error.captureStackTrace(_this, _this.constructor);
        _this.name = 'IllegalArgumentException';
        _this.message = message;
        return _this;
    }
    return IllegalArgumentException;
}(Error));
var UID = /** @class */ (function () {
    function UID(value, buffer, string) {
        this.value = value;
        this.buffer = buffer;
        this.string = string;
    }
    return UID;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    UID.prototype.value;
    /**
     * @type {?}
     * @private
     */
    UID.prototype.buffer;
    /**
     * @type {?}
     * @private
     */
    UID.prototype.string;
}
/*
Resource: https://opensource.apple.com/source/CF/CF-550/

HEADER
    magic number ("bplist")
    file format version

OBJECT TABLE
    variable-sized objects

    Object Formats (marker byte followed by additional info in some cases)
    null    0000 0000
    bool    0000 1000			                    // false
    bool    0000 1001			                    // true
    fill    0000 1111			                    // fill byte
    int     0001 nnnn	...		                  // # of bytes is 2^nnnn, big-endian bytes
    real    0010 nnnn	...		                  // # of bytes is 2^nnnn, big-endian bytes
    date    0011 0011	...		                  // 8 byte float follows, big-endian bytes
    data    0100 nnnn	[int]	...	              // nnnn is number of bytes unless 1111 then int count follows, followed by bytes
    string  0101 nnnn	[int]	...	              // ASCII string, nnnn is # of chars, else 1111 then int count, then bytes
    string  0110 nnnn	[int]	...	              // Unicode string, nnnn is # of chars, else 1111 then int count, then big-endian 2-byte uint16_t
          0111 xxxx			                    // unused
    uid     1000 nnnn	...		                  // nnnn+1 is # of bytes
          1001 xxxx			                    // unused
    array   1010 nnnn	[int]	objref*	          // nnnn is count, unless '1111', then int count follows
          1011 xxxx			                    // unused
    ser     1100 nnnn	[int]	objref*           // nnnn is count, unless '1111', then int count follows
    dict    1101 nnnn	[int]	keyref* objref*	  // nnnn is count, unless '1111', then int count follows
          1110 xxxx			                    // unused
          1111 xxxx			                    // unused

OFFSET TABLE
    list of ints, byte size of which is given in trailer
    -- these are the byte offsets into the file
    -- number of these is in the trailer

TRAILER
    byte size of offset ints in offset table
    byte size of object refs in arrays and dicts
    number of offsets in offset table (also is number of objects)
    element # in offset table which is top level object
    offset table offset

*/
var BplistService = /** @class */ (function () {
    function BplistService() {
    }
    /**
     * Parses a binary property list from a binary base64 string.
     *
     * @param data The binary property list's data encoded as base64 string.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    /**
     * Parses a binary property list from a binary base64 string.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data encoded as base64 string.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    BplistService.prototype.parse64Content = /**
     * Parses a binary property list from a binary base64 string.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data encoded as base64 string.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    function (data) {
        /** @type {?} */
        var raw = atob(data);
        /** @type {?} */
        var rawLength = raw.length;
        /** @type {?} */
        var array = new Buffer(rawLength);
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        this.content = this.doParse(array);
        return this.content;
    };
    /**
     * Parses a binary property list from a buffer.
     *
     * @param data The binary property list's data.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    /**
     * Parses a binary property list from a buffer.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    BplistService.prototype.parse = /**
     * Parses a binary property list from a buffer.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    function (data) {
        this.content = this.doParse(data);
        return this.content;
    };
    /**
     * @param {?=} map
     * @return {?}
     */
    BplistService.prototype.toJson = /**
     * @param {?=} map
     * @return {?}
     */
    function (map) {
        var _this = this;
        if (map === void 0) { map = new Map(); }
        /** @type {?} */
        var out = Object.create(null);
        this.content.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            if (value instanceof Map) {
                out[key] = _this.toJson(value);
            }
            else {
                out[key] = value;
            }
        }));
        return out;
    };
    /**
     * Parses a binary property list from a byte array.
     *
     * @param data The binary property list's data.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    /**
     * Parses a binary property list from a byte array.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @private
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    BplistService.prototype.doParse = /**
     * Parses a binary property list from a byte array.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @private
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    function (data) {
        this.bytes = data;
        /** @type {?} */
        var magic = this.buffer2String(data, 0, 8);
        if (!magic.startsWith('bplist') && !magic.startsWith('plist')) {
            // throw new IllegalArgumentException(`'The given data is no binary property list. Wrong magic bytes: ${magic}`);
            console.error("'The given data is no binary property list. Wrong magic bytes: " + magic);
        }
        /*
             * Handle trailer, last 32 bytes of the file
             */
        /** @type {?} */
        var trailer = this.copyOfRange(this.bytes, this.bytes.length - 32, this.bytes.length);
        // 6 null bytes (index 0 to 5)
        /** @type {?} */
        var offsetSize = this.parseUnsignedInt(trailer, 6, 7);
        this.objectRefSize = this.parseUnsignedInt(trailer, 7, 8);
        /** @type {?} */
        var numObjects = this.parseUnsignedInt(trailer, 8, 16);
        /** @type {?} */
        var topObject = this.parseUnsignedInt(trailer, 16, 24);
        /** @type {?} */
        var offsetTableOffset = this.parseUnsignedInt(trailer, 24, 32);
        /*
           * Handle offset table
           */
        this.offsetTable = new Array(numObjects);
        for (var i = 0; i < numObjects; i++) {
            this.offsetTable[i] = this.parseUnsignedInt(this.bytes, offsetTableOffset + i * offsetSize, offsetTableOffset + (i + 1) * offsetSize);
        }
        return this.visit(topObject);
    };
    /**
     * @private
     * @param {?} bytes
     * @param {?} startIndex
     * @param {?} endIndex
     * @param {?=} encoding
     * @return {?}
     */
    BplistService.prototype.buffer2String = /**
     * @private
     * @param {?} bytes
     * @param {?} startIndex
     * @param {?} endIndex
     * @param {?=} encoding
     * @return {?}
     */
    function (bytes, startIndex, endIndex, encoding) {
        if (encoding === void 0) { encoding = 'utf-8'; }
        return this.copyOfRange(bytes, startIndex, endIndex).toString(encoding);
    };
    /**
     * Copies a part of a byte array into a new array.
     *
     * @param src        The source array.
     * @param startIndex The index from which to start copying.
     * @param endIndex   The index until which to copy.
     * @return The copied array.
     */
    /**
     * Copies a part of a byte array into a new array.
     *
     * @private
     * @param {?} src        The source array.
     * @param {?} startIndex The index from which to start copying.
     * @param {?} endIndex   The index until which to copy.
     * @return {?} The copied array.
     */
    BplistService.prototype.copyOfRange = /**
     * Copies a part of a byte array into a new array.
     *
     * @private
     * @param {?} src        The source array.
     * @param {?} startIndex The index from which to start copying.
     * @param {?} endIndex   The index until which to copy.
     * @return {?} The copied array.
     */
    function (src, startIndex, endIndex) {
        /** @type {?} */
        var length = endIndex - startIndex;
        if (length < 0) {
            // throw new IllegalArgumentException(`startIndex (${startIndex})" + " > endIndex (${endIndex})`);
            console.error("startIndex (" + startIndex + ")\" + \" > endIndex (" + endIndex + ")");
        }
        return src.slice(startIndex, endIndex);
    };
    /**
     * Parses an unsigned integer from a byte array.
     *
     * @param bytes The byte array containing the unsigned integer.
     * @param startIndex Beginning of the unsigned int in the byte array.
     * @param endIndex End of the unsigned int in the byte array.
     * @return The unsigned integer represented by the given bytes.
     */
    /**
     * Parses an unsigned integer from a byte array.
     *
     * @private
     * @param {?} bytes The byte array containing the unsigned integer.
     * @param {?} startIndex Beginning of the unsigned int in the byte array.
     * @param {?} endIndex End of the unsigned int in the byte array.
     * @return {?} The unsigned integer represented by the given bytes.
     */
    BplistService.prototype.parseUnsignedInt = /**
     * Parses an unsigned integer from a byte array.
     *
     * @private
     * @param {?} bytes The byte array containing the unsigned integer.
     * @param {?} startIndex Beginning of the unsigned int in the byte array.
     * @param {?} endIndex End of the unsigned int in the byte array.
     * @return {?} The unsigned integer represented by the given bytes.
     */
    function (bytes, startIndex, endIndex) {
        /** @type {?} */
        var l = 0;
        for (var i = startIndex; i < endIndex; i++) {
            l <<= 8;
            l |= bytes[i] & 0xff;
        }
        // l &= 0xffffffffff;
        l &= 0xff;
        return l;
    };
    /**
     * @private
     * @param {?} bytes
     * @param {?} offset
     * @param {?} numCharacters
     * @return {?}
     */
    BplistService.prototype.calculateUtf8StringLength = /**
     * @private
     * @param {?} bytes
     * @param {?} offset
     * @param {?} numCharacters
     * @return {?}
     */
    function (bytes, offset, numCharacters) {
        /** @type {?} */
        var length = 0;
        for (var i = 0; i < numCharacters; i++) {
            /** @type {?} */
            var tempOffset = offset + length;
            if (bytes.length <= tempOffset) {
                // WARNING: Invalid UTF-8 string, fall back to length = number of characters
                return numCharacters;
            }
            if (bytes[tempOffset] < 0x80) {
                length++;
            }
            if (bytes[tempOffset] < 0xc2) {
                // Invalid value (marks continuation byte), fall back to length = number of characters
                return numCharacters;
            }
            else if (bytes[tempOffset] < 0xe0) {
                if ((bytes[tempOffset + 1] & 0xc0) !== 0x80) {
                    // Invalid continuation byte, fall back to length = number of characters
                    return numCharacters;
                }
                length += 2;
            }
            else if (bytes[tempOffset] < 0xf0) {
                if ((bytes[tempOffset + 1] & 0xc0) !== 0x80 || (bytes[tempOffset + 2] & 0xc0) !== 0x80) {
                    // Invalid continuation byte, fall back to length = number of characters
                    return numCharacters;
                }
                length += 3;
            }
            else if (bytes[tempOffset] < 0xf5) {
                if ((bytes[tempOffset + 1] & 0xc0) !== 0x80 || (bytes[tempOffset + 2] & 0xc0) !== 0x80 || (bytes[tempOffset + 3] & 0xc0) !== 0x80) {
                    // Invalid continuation byte, fall back to length = number of characters
                    return numCharacters;
                }
                length += 4;
            }
        }
        return length;
    };
    /**
     * Reads the length for arrays, sets and dictionaries.
     *
     * @param objInfo Object information byte.
     * @param offset  Offset in the byte array at which the object is located.
     * @return An array with the length two. First entry is the length, second entry the offset at which the content starts.
     */
    /**
     * Reads the length for arrays, sets and dictionaries.
     *
     * @private
     * @param {?} objInfo Object information byte.
     * @param {?} offset  Offset in the byte array at which the object is located.
     * @return {?} An array with the length two. First entry is the length, second entry the offset at which the content starts.
     */
    BplistService.prototype.readLengthAndOffset = /**
     * Reads the length for arrays, sets and dictionaries.
     *
     * @private
     * @param {?} objInfo Object information byte.
     * @param {?} offset  Offset in the byte array at which the object is located.
     * @return {?} An array with the length two. First entry is the length, second entry the offset at which the content starts.
     */
    function (objInfo, offset) {
        /** @type {?} */
        var lengthValue = objInfo;
        /** @type {?} */
        var offsetValue = 1;
        if (objInfo === 0xf) {
            /** @type {?} */
            var int_type = this.bytes[offset + 1];
            /** @type {?} */
            var intType = (int_type & 0xf0) >> 4;
            if (intType !== 0x1) {
                console.warn("BinaryPropertyListParser: Length integer has an unexpected type " + intType + ". Attempting to parse anyway...");
            }
            /** @type {?} */
            var intInfo = int_type & 0x0f;
            /** @type {?} */
            var intLength = Math.pow(2, intInfo);
            offsetValue = 2 + intLength;
            if (intLength < 3) {
                lengthValue = this.parseUnsignedInt(this.bytes, offset + 2, offset + 2 + intLength);
            }
            else {
                lengthValue = new BigInt(this.copyOfRange(this.bytes, offset + 2, offset + 2 + intLength)).intValue();
            }
        }
        return [lengthValue, offsetValue];
    };
    /**
     * Parses an object inside the currently parsed binary property list.
     * For the format specification check
     * <a href="http://www.opensource.apple.com/source/CF/CF-855.17/CFBinaryPList.c">
     * Apple's binary property list parser implementation</a>.
     *
     * @param obj The object ID.
     * @return The parsed object.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    /**
     * Parses an object inside the currently parsed binary property list.
     * For the format specification check
     * <a href="http://www.opensource.apple.com/source/CF/CF-855.17/CFBinaryPList.c">
     * Apple's binary property list parser implementation</a>.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @private
     * @param {?} obj The object ID.
     * @return {?} The parsed object.
     */
    BplistService.prototype.visit = /**
     * Parses an object inside the currently parsed binary property list.
     * For the format specification check
     * <a href="http://www.opensource.apple.com/source/CF/CF-855.17/CFBinaryPList.c">
     * Apple's binary property list parser implementation</a>.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @private
     * @param {?} obj The object ID.
     * @return {?} The parsed object.
     */
    function (obj) {
        /** @type {?} */
        var offset = this.offsetTable[obj];
        /** @type {?} */
        var type = this.bytes[offset];
        /** @type {?} */
        var objType = (type & 0xf0) >> 4;
        // First  4 bits
        /** @type {?} */
        var objInfo = type & 0x0f;
        switch (objType) {
            case 0x0: {
                // Simple
                switch (objInfo) {
                    case 0x0: {
                        // null object (v1.0 and later)
                        return {
                            $key: 'null',
                            $value: null
                        };
                    }
                    case 0x8: {
                        // false
                        return {
                            $key: 'false',
                            $value: false
                        };
                    }
                    case 0x9: {
                        // true
                        return {
                            $key: 'true',
                            $value: true
                        };
                    }
                    case 0xc: {
                        // URL with no base URL (v1.0 and later)
                        // TODO Implement binary URL parsing (not yet even implemented in Core Foundation as of revision 855.17)
                        // throw new UnsupportedOperationException(
                        console.error("The given binary property list contains a URL object. Parsing of this object type is not yet implemented.");
                        break;
                    }
                    case 0xd: {
                        // URL with base URL (v1.0 and later)
                        // TODO Implement binary URL parsing (not yet even implemented in Core Foundation as of revision 855.17)
                        // throw new UnsupportedOperationException(
                        console.error("The given binary property list contains a URL object. Parsing of this object type is not yet implemented.");
                        break;
                    }
                    case 0xe: {
                        // 16-byte UUID (v1.0 and later)
                        // TODO Implement binary UUID parsing (not yet even implemented in Core Foundation as of revision 855.17)
                        // throw new UnsupportedOperationException(
                        console.error("The given binary property list contains a UUID object. Parsing of this object type is not yet implemented.");
                        break;
                    }
                    default: {
                        // throw new PropertyListFormatException(`The given binary property list contains an object of unknown type (${objType})`);
                        console.error("The given binary property list contains an object of unknown type (" + objType + ")");
                    }
                }
                break;
            }
            case 0x1: {
                // integer
                /** @type {?} */
                var len = Math.pow(2, objInfo);
                /** @type {?} */
                var value = this.buffer2String(this.bytes, offset + 1, offset + 1 + len);
                return {
                    $key: 'integer',
                    $value: parseInt(value, 10)
                };
            }
            case 0x2: {
                // real
                /** @type {?} */
                var len = Math.pow(2, objInfo);
                /** @type {?} */
                var value = this.buffer2String(this.bytes, offset + 1, offset + 1 + len);
                return {
                    $key: 'float',
                    $value: parseFloat(value)
                };
            }
            case 0x3: {
                // Date
                if (objInfo !== 0x3) {
                    // throw new PropertyListFormatException(`The given binary property list contains a date object of an unknown type (${objInfo})`);
                    console.error("The given binary property list contains a date object of an unknown type (" + objInfo + ")");
                }
                return {
                    $key: 'date',
                    $value: new Date(this.buffer2String(this.bytes, offset + 1, offset + 9))
                };
            }
            case 0x4: {
                // Data: interpreted as Base-64 encoded
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                /** @type {?} */
                var dataOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = this.buffer2String(this.bytes, offset + dataOffset, offset + dataOffset + len);
                return {
                    $key: 'data',
                    $value: value
                };
            }
            case 0x5: {
                // ASCII string
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                // Each character is 1 byte
                /** @type {?} */
                var strOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = this.buffer2String(this.bytes, offset + strOffset, offset + strOffset + len, 'ascii');
                return {
                    $key: 'ascii',
                    $value: value
                };
            }
            case 0x6: {
                // UTF-16-BE string
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var characters = lengthAndOffset[0];
                /** @type {?} */
                var strOffset = lengthAndOffset[1];
                // UTF-16 characters can have variable length, but the Core Foundation reference implementation
                // assumes 2 byte characters, thus only covering the Basic Multilingual Plane
                /** @type {?} */
                var len = characters * 2;
                /** @type {?} */
                var startIndex = strOffset;
                /** @type {?} */
                var endIndex = offset + strOffset + len;
                /** @type {?} */
                var value = this.buffer2String(this.bytes, startIndex, (startIndex + offset) * Math.pow(2, 8) + endIndex, 'base64');
                // const value = this.buffer2String(this.bytes, offset + strOffset, offset + strOffset + length, 'base64');
                if (this.isBase64(value)) {
                    return this.parse64Content(value);
                }
                else {
                    return {
                        $key: 'utf-16',
                        $value: value
                    };
                }
            }
            case 0x7: {
                // UTF-8 string (v1.0 and later)
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var strOffset = lengthAndOffset[1];
                /** @type {?} */
                var characters = lengthAndOffset[0];
                // UTF-8 characters can have variable length, so we need to calculate the byte length dynamically
                // by reading the UTF-8 characters one by one
                /** @type {?} */
                var len = this.calculateUtf8StringLength(this.bytes, offset + strOffset, characters);
                /** @type {?} */
                var value = this.buffer2String(this.bytes, offset + strOffset, offset + strOffset + len);
                return {
                    $key: 'utf-8',
                    $value: value
                };
            }
            case 0x8: {
                // UID (v1.0 and later)
                /** @type {?} */
                var len = objInfo + 1;
                /** @type {?} */
                var value = new UID(obj.valueOf(), this.copyOfRange(this.bytes, offset + 1, offset + 1 + len), this.buffer2String(this.bytes, offset + 1, offset + 1 + len));
                return {
                    $key: 'uid',
                    $value: value
                };
            }
            case 0xa: {
                // Array
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                /** @type {?} */
                var arrayOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = new Array(len);
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var objRef = this.parseUnsignedInt(this.bytes, offset + arrayOffset + i * this.objectRefSize, offset + arrayOffset + (i + 1) * this.objectRefSize);
                    value.push(this.visit(objRef));
                }
                return {
                    $key: 'array',
                    $value: value
                };
            }
            case 0xb: {
                // Ordered set (v1.0 and later)
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                /** @type {?} */
                var contentOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = new Set();
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var objRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
                    value.add(this.visit(objRef));
                }
                return {
                    $key: 'order-set',
                    $value: value
                };
            }
            case 0xc: {
                // Set (v1.0 and later)
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                /** @type {?} */
                var contentOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = new Set();
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var objRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
                    value.add(this.visit(objRef));
                }
                return {
                    $key: 'set',
                    $value: value
                };
            }
            case 0xd: {
                // Dictionary
                /** @type {?} */
                var lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                var len = lengthAndOffset[0];
                /** @type {?} */
                var contentOffset = lengthAndOffset[1];
                /** @type {?} */
                var value = new Map();
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var keyRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
                    /** @type {?} */
                    var valRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + len * this.objectRefSize + i * this.objectRefSize, offset + contentOffset + len * this.objectRefSize + (i + 1) * this.objectRefSize);
                    /** @type {?} */
                    var key = this.visit(keyRef);
                    /** @type {?} */
                    var val = this.visit(valRef);
                    value.set(key.$key.toString(), val);
                }
                return {
                    $key: 'dictionary',
                    $value: value
                };
            }
            default: {
                // throw new PropertyListFormatException(`The given binary property list contains an object of unknown type (${objType})`);
                console.error("The given binary property list contains an object of unknown type (" + objType + ")");
            }
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    BplistService.prototype.isBase64 = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return /^([\+\/-9A-Za-z]{4})*([\+\/-9A-Za-z]{4}|[\+\/-9A-Za-z]{3}=|[\+\/-9A-Za-z]{2}==)$/u.test(value);
    };
    BplistService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ BplistService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BplistService_Factory() { return new BplistService(); }, token: BplistService, providedIn: "root" });
    return BplistService;
}());
if (false) {
    /**
     * The property list data.
     * @type {?}
     * @private
     */
    BplistService.prototype.bytes;
    /**
     * The parsed content.
     * @type {?}
     * @private
     */
    BplistService.prototype.content;
    /**
     * Length of an object reference in bytes
     * @type {?}
     * @private
     */
    BplistService.prototype.objectRefSize;
    /**
     * The table holding the information at which offset each object is found
     * @type {?}
     * @private
     */
    BplistService.prototype.offsetTable;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextService = /** @class */ (function () {
    function TextService(binaryHelperService) {
        this.binaryHelperService = binaryHelperService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    TextService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return ((/** @type {?} */ (current._class))) === 'text';
    };
    /**
     * @param {?} current
     * @return {?}
     */
    TextService.prototype.lookup = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return (current.attributedString.string ||
            this.extractAttributedStringText(current));
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    TextService.prototype.extractAttributedStringText = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var obj = current.attributedString;
        if (obj && obj.hasOwnProperty('archivedAttributedString')) {
            /** @type {?} */
            var archive = this.binaryHelperService.parse64Content(obj.archivedAttributedString._archive);
            if (archive) {
                return this.decodeArchiveString(archive);
            }
        }
        return '';
    };
    /**
     * @private
     * @param {?} archive
     * @return {?}
     */
    TextService.prototype.decodeArchiveString = /**
     * @private
     * @param {?} archive
     * @return {?}
     */
    function (archive) {
        switch (archive.$key) {
            case 'ascii':
                return archive.$value;
            default:
                return '';
        }
    };
    TextService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TextService.ctorParameters = function () { return [
        { type: BplistService }
    ]; };
    /** @nocollapse */ TextService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TextService_Factory() { return new TextService(ɵɵinject(BplistService)); }, token: TextService, providedIn: "root" });
    return TextService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TextService.prototype.binaryHelperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ ShapeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ShapeService_Factory() { return new ShapeService(); }, token: ShapeService, providedIn: "root" });
    return ShapeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StyleService = /** @class */ (function () {
    function StyleService() {
    }
    /**
     * @param {?} color
     * @return {?}
     */
    StyleService.prototype.parseColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return {
            red: this.percentToRgba(color.red),
            green: this.percentToRgba(color.green),
            blue: this.percentToRgba(color.blue),
            alpha: color.alpha
        };
    };
    /**
     * @param {?} color
     * @return {?}
     */
    StyleService.prototype.parseColorAsRgba = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var c = this.parseColor(color);
        /** @type {?} */
        var colorString = [c.red, c.green, c.blue, c.alpha.toFixed(2)].join(',');
        return "rgba(" + colorString + ")";
    };
    /**
     * @param {?} color
     * @return {?}
     */
    StyleService.prototype.parseColorAsHex = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var c = this.parseColor(color);
        return ('#' +
            ((256 + c.red).toString(16).substr(1) +
                (((1 << 24) + (c.green << 16)) |
                    (c.blue << 8) |
                    this.percentToRgba(c.alpha))
                    .toString(16)
                    .substr(1)));
    };
    /**
     * @private
     * @param {?} v
     * @return {?}
     */
    StyleService.prototype.percentToRgba = /**
     * @private
     * @param {?} v
     * @return {?}
     */
    function (v) {
        /** @type {?} */
        var color = Math.round(v * 255);
        return color > 0 ? color : 0;
    };
    StyleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StyleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(); }, token: StyleService, providedIn: "root" });
    return StyleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SketchLibModule = /** @class */ (function () {
    function SketchLibModule() {
    }
    SketchLibModule.decorators = [
        { type: NgModule, args: [{
                    providers: [BplistService, FormatService, ShapeService, StyleService]
                },] }
    ];
    return SketchLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BplistService, FormatService, ImageService, LayerService, ShapeService, SketchLibModule, StyleService, SymbolService, TextService, UID };
//# sourceMappingURL=xlayers-sketch-lib.js.map
