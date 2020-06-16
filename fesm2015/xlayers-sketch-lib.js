import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import paramCase from 'param-case';
import pascalCase from 'pascal-case';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatService {
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
/** @nocollapse */ FormatService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FormatService_Factory() { return new FormatService(); }, token: FormatService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageService {
    /**
     * @param {?} formatService
     */
    constructor(formatService) {
        this.formatService = formatService;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ((/** @type {?} */ (current._class))) === 'bitmap';
    }
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    lookup(current, data) {
        return this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref);
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        return [
            {
                kind: 'png',
                value: this.getImageDataFromRef(data, ((/** @type {?} */ (current))).image._ref),
                language: 'base64',
                uri: `${options.assetDir}/${this.formatService.normalizeName(current.name)}.png`
            }
        ];
    }
    /**
     * @private
     * @param {?} data
     * @param {?} reference
     * @return {?}
     */
    getImageDataFromRef(data, reference) {
        return ((/** @type {?} */ (data))).images[reference];
    }
}
ImageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ImageService.ctorParameters = () => [
    { type: FormatService }
];
/** @nocollapse */ ImageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ImageService_Factory() { return new ImageService(ɵɵinject(FormatService)); }, token: ImageService, providedIn: "root" });
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
class LayerService {
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return current.layers && Array.isArray(current.layers);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    lookup(current) {
        return (/** @type {?} */ (current.layers));
    }
}
LayerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ LayerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayerService_Factory() { return new LayerService(); }, token: LayerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SymbolService {
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return ((/** @type {?} */ (current._class))) === 'symbolInstance';
    }
    /**
     * @param {?} current
     * @param {?} data
     * @return {?}
     */
    lookup(current, data) {
        /** @type {?} */
        const foreignSymbol = data.document.foreignSymbols.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.symbolMaster.symbolID === ((/** @type {?} */ (current))).symbolID));
        return foreignSymbol && foreignSymbol.symbolMaster;
    }
}
SymbolService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SymbolService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SymbolService_Factory() { return new SymbolService(); }, token: SymbolService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Buffer = require('buffer/').Buffer;
/** @type {?} */
const BigInt = window['BigInt'] || require('big-integer');
class PropertyListFormatException extends Error {
    /**
     * @param {?} message
     */
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'PropertyListFormatException';
        this.message = message;
    }
}
class UnsupportedEncodingException extends Error {
    /**
     * @param {?} message
     */
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'UnsupportedEncodingException';
        this.message = message;
    }
}
class UnsupportedOperationException extends Error {
    /**
     * @param {?} message
     */
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'UnsupportedOperationException';
        this.message = message;
    }
}
class IllegalArgumentException extends Error {
    /**
     * @param {?} message
     */
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'IllegalArgumentException';
        this.message = message;
    }
}
class UID {
    /**
     * @param {?} value
     * @param {?} buffer
     * @param {?} string
     */
    constructor(value, buffer, string) {
        this.value = value;
        this.buffer = buffer;
        this.string = string;
    }
}
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
class BplistService {
    /**
     * Parses a binary property list from a binary base64 string.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data encoded as base64 string.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    parse64Content(data) {
        /** @type {?} */
        const raw = atob(data);
        /** @type {?} */
        const rawLength = raw.length;
        /** @type {?} */
        const array = new Buffer(rawLength);
        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        this.content = this.doParse(array);
        return this.content;
    }
    /**
     * Parses a binary property list from a buffer.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    parse(data) {
        this.content = this.doParse(data);
        return this.content;
    }
    /**
     * @param {?=} map
     * @return {?}
     */
    toJson(map = new Map()) {
        /** @type {?} */
        const out = Object.create(null);
        this.content.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            if (value instanceof Map) {
                out[key] = this.toJson(value);
            }
            else {
                out[key] = value;
            }
        }));
        return out;
    }
    /**
     * Parses a binary property list from a byte array.
     *
     * @throws PropertyListFormatException When the property list's format could not be parsed. / UnsupportedEncodingException When a NSString object could not be decoded.
     * @private
     * @param {?} data The binary property list's data.
     * @return {?} The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     */
    doParse(data) {
        this.bytes = data;
        /** @type {?} */
        const magic = this.buffer2String(data, 0, 8);
        if (!magic.startsWith('bplist') && !magic.startsWith('plist')) {
            // throw new IllegalArgumentException(`'The given data is no binary property list. Wrong magic bytes: ${magic}`);
            console.error(`'The given data is no binary property list. Wrong magic bytes: ${magic}`);
        }
        /*
             * Handle trailer, last 32 bytes of the file
             */
        /** @type {?} */
        const trailer = this.copyOfRange(this.bytes, this.bytes.length - 32, this.bytes.length);
        // 6 null bytes (index 0 to 5)
        /** @type {?} */
        const offsetSize = this.parseUnsignedInt(trailer, 6, 7);
        this.objectRefSize = this.parseUnsignedInt(trailer, 7, 8);
        /** @type {?} */
        const numObjects = this.parseUnsignedInt(trailer, 8, 16);
        /** @type {?} */
        const topObject = this.parseUnsignedInt(trailer, 16, 24);
        /** @type {?} */
        const offsetTableOffset = this.parseUnsignedInt(trailer, 24, 32);
        /*
           * Handle offset table
           */
        this.offsetTable = new Array(numObjects);
        for (let i = 0; i < numObjects; i++) {
            this.offsetTable[i] = this.parseUnsignedInt(this.bytes, offsetTableOffset + i * offsetSize, offsetTableOffset + (i + 1) * offsetSize);
        }
        return this.visit(topObject);
    }
    /**
     * @private
     * @param {?} bytes
     * @param {?} startIndex
     * @param {?} endIndex
     * @param {?=} encoding
     * @return {?}
     */
    buffer2String(bytes, startIndex, endIndex, encoding = 'utf-8') {
        return this.copyOfRange(bytes, startIndex, endIndex).toString(encoding);
    }
    /**
     * Copies a part of a byte array into a new array.
     *
     * @private
     * @param {?} src        The source array.
     * @param {?} startIndex The index from which to start copying.
     * @param {?} endIndex   The index until which to copy.
     * @return {?} The copied array.
     */
    copyOfRange(src, startIndex, endIndex) {
        /** @type {?} */
        const length = endIndex - startIndex;
        if (length < 0) {
            // throw new IllegalArgumentException(`startIndex (${startIndex})" + " > endIndex (${endIndex})`);
            console.error(`startIndex (${startIndex})" + " > endIndex (${endIndex})`);
        }
        return src.slice(startIndex, endIndex);
    }
    /**
     * Parses an unsigned integer from a byte array.
     *
     * @private
     * @param {?} bytes The byte array containing the unsigned integer.
     * @param {?} startIndex Beginning of the unsigned int in the byte array.
     * @param {?} endIndex End of the unsigned int in the byte array.
     * @return {?} The unsigned integer represented by the given bytes.
     */
    parseUnsignedInt(bytes, startIndex, endIndex) {
        /** @type {?} */
        let l = 0;
        for (let i = startIndex; i < endIndex; i++) {
            l <<= 8;
            l |= bytes[i] & 0xff;
        }
        // l &= 0xffffffffff;
        l &= 0xff;
        return l;
    }
    /**
     * @private
     * @param {?} bytes
     * @param {?} offset
     * @param {?} numCharacters
     * @return {?}
     */
    calculateUtf8StringLength(bytes, offset, numCharacters) {
        /** @type {?} */
        let length = 0;
        for (let i = 0; i < numCharacters; i++) {
            /** @type {?} */
            const tempOffset = offset + length;
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
    }
    /**
     * Reads the length for arrays, sets and dictionaries.
     *
     * @private
     * @param {?} objInfo Object information byte.
     * @param {?} offset  Offset in the byte array at which the object is located.
     * @return {?} An array with the length two. First entry is the length, second entry the offset at which the content starts.
     */
    readLengthAndOffset(objInfo, offset) {
        /** @type {?} */
        let lengthValue = objInfo;
        /** @type {?} */
        let offsetValue = 1;
        if (objInfo === 0xf) {
            /** @type {?} */
            const int_type = this.bytes[offset + 1];
            /** @type {?} */
            const intType = (int_type & 0xf0) >> 4;
            if (intType !== 0x1) {
                console.warn(`BinaryPropertyListParser: Length integer has an unexpected type ${intType}. Attempting to parse anyway...`);
            }
            /** @type {?} */
            const intInfo = int_type & 0x0f;
            /** @type {?} */
            const intLength = Math.pow(2, intInfo);
            offsetValue = 2 + intLength;
            if (intLength < 3) {
                lengthValue = this.parseUnsignedInt(this.bytes, offset + 2, offset + 2 + intLength);
            }
            else {
                lengthValue = new BigInt(this.copyOfRange(this.bytes, offset + 2, offset + 2 + intLength)).intValue();
            }
        }
        return [lengthValue, offsetValue];
    }
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
    visit(obj) {
        /** @type {?} */
        const offset = this.offsetTable[obj];
        /** @type {?} */
        const type = this.bytes[offset];
        /** @type {?} */
        const objType = (type & 0xf0) >> 4;
        // First  4 bits
        /** @type {?} */
        const objInfo = type & 0x0f;
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
                        console.error(`The given binary property list contains a URL object. Parsing of this object type is not yet implemented.`);
                        break;
                    }
                    case 0xd: {
                        // URL with base URL (v1.0 and later)
                        // TODO Implement binary URL parsing (not yet even implemented in Core Foundation as of revision 855.17)
                        // throw new UnsupportedOperationException(
                        console.error(`The given binary property list contains a URL object. Parsing of this object type is not yet implemented.`);
                        break;
                    }
                    case 0xe: {
                        // 16-byte UUID (v1.0 and later)
                        // TODO Implement binary UUID parsing (not yet even implemented in Core Foundation as of revision 855.17)
                        // throw new UnsupportedOperationException(
                        console.error(`The given binary property list contains a UUID object. Parsing of this object type is not yet implemented.`);
                        break;
                    }
                    default: {
                        // throw new PropertyListFormatException(`The given binary property list contains an object of unknown type (${objType})`);
                        console.error(`The given binary property list contains an object of unknown type (${objType})`);
                    }
                }
                break;
            }
            case 0x1: {
                // integer
                /** @type {?} */
                const len = Math.pow(2, objInfo);
                /** @type {?} */
                const value = this.buffer2String(this.bytes, offset + 1, offset + 1 + len);
                return {
                    $key: 'integer',
                    $value: parseInt(value, 10)
                };
            }
            case 0x2: {
                // real
                /** @type {?} */
                const len = Math.pow(2, objInfo);
                /** @type {?} */
                const value = this.buffer2String(this.bytes, offset + 1, offset + 1 + len);
                return {
                    $key: 'float',
                    $value: parseFloat(value)
                };
            }
            case 0x3: {
                // Date
                if (objInfo !== 0x3) {
                    // throw new PropertyListFormatException(`The given binary property list contains a date object of an unknown type (${objInfo})`);
                    console.error(`The given binary property list contains a date object of an unknown type (${objInfo})`);
                }
                return {
                    $key: 'date',
                    $value: new Date(this.buffer2String(this.bytes, offset + 1, offset + 9))
                };
            }
            case 0x4: {
                // Data: interpreted as Base-64 encoded
                /** @type {?} */
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                /** @type {?} */
                const dataOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = this.buffer2String(this.bytes, offset + dataOffset, offset + dataOffset + len);
                return {
                    $key: 'data',
                    $value: value
                };
            }
            case 0x5: {
                // ASCII string
                /** @type {?} */
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                // Each character is 1 byte
                /** @type {?} */
                const strOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = this.buffer2String(this.bytes, offset + strOffset, offset + strOffset + len, 'ascii');
                return {
                    $key: 'ascii',
                    $value: value
                };
            }
            case 0x6: {
                // UTF-16-BE string
                /** @type {?} */
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const characters = lengthAndOffset[0];
                /** @type {?} */
                const strOffset = lengthAndOffset[1];
                // UTF-16 characters can have variable length, but the Core Foundation reference implementation
                // assumes 2 byte characters, thus only covering the Basic Multilingual Plane
                /** @type {?} */
                const len = characters * 2;
                /** @type {?} */
                const startIndex = strOffset;
                /** @type {?} */
                const endIndex = offset + strOffset + len;
                /** @type {?} */
                const value = this.buffer2String(this.bytes, startIndex, (startIndex + offset) * Math.pow(2, 8) + endIndex, 'base64');
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
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const strOffset = lengthAndOffset[1];
                /** @type {?} */
                const characters = lengthAndOffset[0];
                // UTF-8 characters can have variable length, so we need to calculate the byte length dynamically
                // by reading the UTF-8 characters one by one
                /** @type {?} */
                const len = this.calculateUtf8StringLength(this.bytes, offset + strOffset, characters);
                /** @type {?} */
                const value = this.buffer2String(this.bytes, offset + strOffset, offset + strOffset + len);
                return {
                    $key: 'utf-8',
                    $value: value
                };
            }
            case 0x8: {
                // UID (v1.0 and later)
                /** @type {?} */
                const len = objInfo + 1;
                /** @type {?} */
                const value = new UID(obj.valueOf(), this.copyOfRange(this.bytes, offset + 1, offset + 1 + len), this.buffer2String(this.bytes, offset + 1, offset + 1 + len));
                return {
                    $key: 'uid',
                    $value: value
                };
            }
            case 0xa: {
                // Array
                /** @type {?} */
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                /** @type {?} */
                const arrayOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = new Array(len);
                for (let i = 0; i < len; i++) {
                    /** @type {?} */
                    const objRef = this.parseUnsignedInt(this.bytes, offset + arrayOffset + i * this.objectRefSize, offset + arrayOffset + (i + 1) * this.objectRefSize);
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
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                /** @type {?} */
                const contentOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = new Set();
                for (let i = 0; i < len; i++) {
                    /** @type {?} */
                    const objRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
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
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                /** @type {?} */
                const contentOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = new Set();
                for (let i = 0; i < len; i++) {
                    /** @type {?} */
                    const objRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
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
                const lengthAndOffset = this.readLengthAndOffset(objInfo, offset);
                /** @type {?} */
                const len = lengthAndOffset[0];
                /** @type {?} */
                const contentOffset = lengthAndOffset[1];
                /** @type {?} */
                const value = new Map();
                for (let i = 0; i < len; i++) {
                    /** @type {?} */
                    const keyRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + i * this.objectRefSize, offset + contentOffset + (i + 1) * this.objectRefSize);
                    /** @type {?} */
                    const valRef = this.parseUnsignedInt(this.bytes, offset + contentOffset + len * this.objectRefSize + i * this.objectRefSize, offset + contentOffset + len * this.objectRefSize + (i + 1) * this.objectRefSize);
                    /** @type {?} */
                    const key = this.visit(keyRef);
                    /** @type {?} */
                    const val = this.visit(valRef);
                    value.set(key.$key.toString(), val);
                }
                return {
                    $key: 'dictionary',
                    $value: value
                };
            }
            default: {
                // throw new PropertyListFormatException(`The given binary property list contains an object of unknown type (${objType})`);
                console.error(`The given binary property list contains an object of unknown type (${objType})`);
            }
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isBase64(value) {
        return /^([\+\/-9A-Za-z]{4})*([\+\/-9A-Za-z]{4}|[\+\/-9A-Za-z]{3}=|[\+\/-9A-Za-z]{2}==)$/u.test(value);
    }
}
BplistService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ BplistService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BplistService_Factory() { return new BplistService(); }, token: BplistService, providedIn: "root" });
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
class TextService {
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
/** @nocollapse */ TextService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TextService_Factory() { return new TextService(ɵɵinject(BplistService)); }, token: TextService, providedIn: "root" });
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
class ShapeService {
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
/** @nocollapse */ ShapeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ShapeService_Factory() { return new ShapeService(); }, token: ShapeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleService {
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
/** @nocollapse */ StyleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(); }, token: StyleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SketchLibModule {
}
SketchLibModule.decorators = [
    { type: NgModule, args: [{
                providers: [BplistService, FormatService, ShapeService, StyleService]
            },] }
];

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
