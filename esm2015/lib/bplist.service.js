/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Buffer = require('buffer/').Buffer;
/** @type {?} */
const BigInt = window['BigInt'] || require('big-integer');
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
export class UID {
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
export class BplistService {
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
/** @nocollapse */ BplistService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BplistService_Factory() { return new BplistService(); }, token: BplistService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBsaXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL2JwbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O01BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNOztNQUNsQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSwyQkFBNEIsU0FBUSxLQUFLOzs7O0lBQzdDLFlBQVksT0FBTztRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsNkJBQTZCLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBQ0QsTUFBTSw0QkFBNkIsU0FBUSxLQUFLOzs7O0lBQzlDLFlBQVksT0FBTztRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBQ0QsTUFBTSw2QkFBOEIsU0FBUSxLQUFLOzs7O0lBQy9DLFlBQVksT0FBTztRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsK0JBQStCLENBQUM7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QWdCLENBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQ1YsTUFBTSxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFDMUUsTUFBTSxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUNqRjs7MEJBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOzswQkFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3JDO2dCQUVELE9BQU87b0JBQ0wsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2lCQUNkLENBQUM7YUFDSDtZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNQLDJIQUEySDtnQkFDM0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNqRztTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQWE7UUFDNUIsT0FBTyxtRkFBbUYsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7O1lBOWVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7O0lBS0MsOEJBQXNCOzs7Ozs7SUFJdEIsZ0NBQXFCOzs7Ozs7SUFLckIsc0NBQThCOzs7Ozs7SUFLOUIsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyLycpLkJ1ZmZlcjtcclxuY29uc3QgQmlnSW50ID0gd2luZG93WydCaWdJbnQnXSB8fCByZXF1aXJlKCdiaWctaW50ZWdlcicpO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbnR5cGUgQnVmZmVyRW5jb2RpbmcgPSAnaGV4JyB8ICd1dGY4JyB8ICd1dGYtOCcgfCAnYXNjaWknIHwgJ2xhdGluMScgfCAnYmluYXJ5JyB8ICdiYXNlNjQnIHwgJ3VjczInIHwgJ3Vjcy0yJyB8ICd1dGYxNmxlJyB8ICd1dGYtMTZsZSc7XHJcblxyXG5jbGFzcyBQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgdGhpcy5uYW1lID0gJ1Byb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxufVxyXG5jbGFzcyBVbnN1cHBvcnRlZEVuY29kaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIHRoaXMubmFtZSA9ICdVbnN1cHBvcnRlZEVuY29kaW5nRXhjZXB0aW9uJztcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcbmNsYXNzIFVuc3VwcG9ydGVkT3BlcmF0aW9uRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIHRoaXMubmFtZSA9ICdVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxufVxyXG5jbGFzcyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgdGhpcy5uYW1lID0gJ0lsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVUlEIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBudW1iZXIsIHByaXZhdGUgYnVmZmVyOiBCdWZmZXIsIHByaXZhdGUgc3RyaW5nOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbi8qXHJcblJlc291cmNlOiBodHRwczovL29wZW5zb3VyY2UuYXBwbGUuY29tL3NvdXJjZS9DRi9DRi01NTAvXHJcblxyXG5IRUFERVJcclxuXHRtYWdpYyBudW1iZXIgKFwiYnBsaXN0XCIpXHJcblx0ZmlsZSBmb3JtYXQgdmVyc2lvblxyXG5cclxuT0JKRUNUIFRBQkxFXHJcblx0dmFyaWFibGUtc2l6ZWQgb2JqZWN0c1xyXG5cclxuXHRPYmplY3QgRm9ybWF0cyAobWFya2VyIGJ5dGUgZm9sbG93ZWQgYnkgYWRkaXRpb25hbCBpbmZvIGluIHNvbWUgY2FzZXMpXHJcblx0bnVsbCAgICAwMDAwIDAwMDBcclxuXHRib29sICAgIDAwMDAgMTAwMFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gZmFsc2VcclxuXHRib29sICAgIDAwMDAgMTAwMVx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gdHJ1ZVxyXG5cdGZpbGwgICAgMDAwMCAxMTExXHRcdFx0ICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIGJ5dGVcclxuXHRpbnQgICAgIDAwMDEgbm5ublx0Li4uXHRcdCAgICAgICAgICAgICAgICAgIC8vICMgb2YgYnl0ZXMgaXMgMl5ubm5uLCBiaWctZW5kaWFuIGJ5dGVzXHJcblx0cmVhbCAgICAwMDEwIG5ubm5cdC4uLlx0XHQgICAgICAgICAgICAgICAgICAvLyAjIG9mIGJ5dGVzIGlzIDJebm5ubiwgYmlnLWVuZGlhbiBieXRlc1xyXG5cdGRhdGUgICAgMDAxMSAwMDExXHQuLi5cdFx0ICAgICAgICAgICAgICAgICAgLy8gOCBieXRlIGZsb2F0IGZvbGxvd3MsIGJpZy1lbmRpYW4gYnl0ZXNcclxuXHRkYXRhICAgIDAxMDAgbm5ublx0W2ludF1cdC4uLlx0ICAgICAgICAgICAgICAvLyBubm5uIGlzIG51bWJlciBvZiBieXRlcyB1bmxlc3MgMTExMSB0aGVuIGludCBjb3VudCBmb2xsb3dzLCBmb2xsb3dlZCBieSBieXRlc1xyXG5cdHN0cmluZyAgMDEwMSBubm5uXHRbaW50XVx0Li4uXHQgICAgICAgICAgICAgIC8vIEFTQ0lJIHN0cmluZywgbm5ubiBpcyAjIG9mIGNoYXJzLCBlbHNlIDExMTEgdGhlbiBpbnQgY291bnQsIHRoZW4gYnl0ZXNcclxuXHRzdHJpbmcgIDAxMTAgbm5ublx0W2ludF1cdC4uLlx0ICAgICAgICAgICAgICAvLyBVbmljb2RlIHN0cmluZywgbm5ubiBpcyAjIG9mIGNoYXJzLCBlbHNlIDExMTEgdGhlbiBpbnQgY291bnQsIHRoZW4gYmlnLWVuZGlhbiAyLWJ5dGUgdWludDE2X3RcclxuICAgICAgICAgIDAxMTEgeHh4eFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gdW51c2VkXHJcblx0dWlkICAgICAxMDAwIG5ubm5cdC4uLlx0XHQgICAgICAgICAgICAgICAgICAvLyBubm5uKzEgaXMgIyBvZiBieXRlc1xyXG4gICAgICAgICAgMTAwMSB4eHh4XHRcdFx0ICAgICAgICAgICAgICAgICAgICAvLyB1bnVzZWRcclxuXHRhcnJheSAgIDEwMTAgbm5ublx0W2ludF1cdG9ianJlZipcdCAgICAgICAgICAvLyBubm5uIGlzIGNvdW50LCB1bmxlc3MgJzExMTEnLCB0aGVuIGludCBjb3VudCBmb2xsb3dzXHJcbiAgICAgICAgICAxMDExIHh4eHhcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIHVudXNlZFxyXG5cdHNlciAgICAgMTEwMCBubm5uXHRbaW50XVx0b2JqcmVmKiAgICAgICAgICAgLy8gbm5ubiBpcyBjb3VudCwgdW5sZXNzICcxMTExJywgdGhlbiBpbnQgY291bnQgZm9sbG93c1xyXG5cdGRpY3QgICAgMTEwMSBubm5uXHRbaW50XVx0a2V5cmVmKiBvYmpyZWYqXHQgIC8vIG5ubm4gaXMgY291bnQsIHVubGVzcyAnMTExMScsIHRoZW4gaW50IGNvdW50IGZvbGxvd3NcclxuICAgICAgICAgIDExMTAgeHh4eFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gdW51c2VkXHJcbiAgICAgICAgICAxMTExIHh4eHhcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIHVudXNlZFxyXG5cclxuT0ZGU0VUIFRBQkxFXHJcblx0bGlzdCBvZiBpbnRzLCBieXRlIHNpemUgb2Ygd2hpY2ggaXMgZ2l2ZW4gaW4gdHJhaWxlclxyXG5cdC0tIHRoZXNlIGFyZSB0aGUgYnl0ZSBvZmZzZXRzIGludG8gdGhlIGZpbGVcclxuXHQtLSBudW1iZXIgb2YgdGhlc2UgaXMgaW4gdGhlIHRyYWlsZXJcclxuXHJcblRSQUlMRVJcclxuXHRieXRlIHNpemUgb2Ygb2Zmc2V0IGludHMgaW4gb2Zmc2V0IHRhYmxlXHJcblx0Ynl0ZSBzaXplIG9mIG9iamVjdCByZWZzIGluIGFycmF5cyBhbmQgZGljdHNcclxuXHRudW1iZXIgb2Ygb2Zmc2V0cyBpbiBvZmZzZXQgdGFibGUgKGFsc28gaXMgbnVtYmVyIG9mIG9iamVjdHMpXHJcblx0ZWxlbWVudCAjIGluIG9mZnNldCB0YWJsZSB3aGljaCBpcyB0b3AgbGV2ZWwgb2JqZWN0XHJcblx0b2Zmc2V0IHRhYmxlIG9mZnNldFxyXG5cclxuKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBsaXN0U2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHByb3BlcnR5IGxpc3QgZGF0YS5cclxuICAgKi9cclxuICBwcml2YXRlIGJ5dGVzOiBCdWZmZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnNlZCBjb250ZW50LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY29udGVudDogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBMZW5ndGggb2YgYW4gb2JqZWN0IHJlZmVyZW5jZSBpbiBieXRlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgb2JqZWN0UmVmU2l6ZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGFibGUgaG9sZGluZyB0aGUgaW5mb3JtYXRpb24gYXQgd2hpY2ggb2Zmc2V0IGVhY2ggb2JqZWN0IGlzIGZvdW5kXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvZmZzZXRUYWJsZTogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGEgYmluYXJ5IHByb3BlcnR5IGxpc3QgZnJvbSBhIGJpbmFyeSBiYXNlNjQgc3RyaW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGJpbmFyeSBwcm9wZXJ0eSBsaXN0J3MgZGF0YSBlbmNvZGVkIGFzIGJhc2U2NCBzdHJpbmcuXHJcbiAgICogQHJldHVybiBUaGUgcm9vdCBvYmplY3Qgb2YgdGhlIHByb3BlcnR5IGxpc3QuIFRoaXMgaXMgdXN1YWxseSBhIE5TRGljdGlvbmFyeSBidXQgY2FuIGFsc28gYmUgYSBOU0FycmF5LlxyXG4gICAqIEB0aHJvd3MgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uIFdoZW4gdGhlIHByb3BlcnR5IGxpc3QncyBmb3JtYXQgY291bGQgbm90IGJlIHBhcnNlZC5cclxuICAgKiBAdGhyb3dzIFVuc3VwcG9ydGVkRW5jb2RpbmdFeGNlcHRpb24gV2hlbiBhIE5TU3RyaW5nIG9iamVjdCBjb3VsZCBub3QgYmUgZGVjb2RlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFyc2U2NENvbnRlbnQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByYXcgPSBhdG9iKGRhdGEpO1xyXG4gICAgY29uc3QgcmF3TGVuZ3RoID0gcmF3Lmxlbmd0aDtcclxuICAgIGNvbnN0IGFycmF5OiBCdWZmZXIgPSBuZXcgQnVmZmVyKHJhd0xlbmd0aCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdMZW5ndGg7IGkrKykge1xyXG4gICAgICBhcnJheVtpXSA9IHJhdy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5kb1BhcnNlKGFycmF5KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGEgYmluYXJ5IHByb3BlcnR5IGxpc3QgZnJvbSBhIGJ1ZmZlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBiaW5hcnkgcHJvcGVydHkgbGlzdCdzIGRhdGEuXHJcbiAgICogQHJldHVybiBUaGUgcm9vdCBvYmplY3Qgb2YgdGhlIHByb3BlcnR5IGxpc3QuIFRoaXMgaXMgdXN1YWxseSBhIE5TRGljdGlvbmFyeSBidXQgY2FuIGFsc28gYmUgYSBOU0FycmF5LlxyXG4gICAqIEB0aHJvd3MgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uIFdoZW4gdGhlIHByb3BlcnR5IGxpc3QncyBmb3JtYXQgY291bGQgbm90IGJlIHBhcnNlZC5cclxuICAgKiBAdGhyb3dzIFVuc3VwcG9ydGVkRW5jb2RpbmdFeGNlcHRpb24gV2hlbiBhIE5TU3RyaW5nIG9iamVjdCBjb3VsZCBub3QgYmUgZGVjb2RlZC5cclxuICAgKi9cclxuICBwdWJsaWMgcGFyc2UoZGF0YTogQnVmZmVyKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmRvUGFyc2UoZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0pzb24obWFwID0gbmV3IE1hcDxhbnksIGFueT4oKSkge1xyXG4gICAgY29uc3Qgb3V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHRoaXMuY29udGVudC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIG91dFtrZXldID0gdGhpcy50b0pzb24odmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dFtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG91dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBhIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGZyb20gYSBieXRlIGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGJpbmFyeSBwcm9wZXJ0eSBsaXN0J3MgZGF0YS5cclxuICAgKiBAcmV0dXJuIFRoZSByb290IG9iamVjdCBvZiB0aGUgcHJvcGVydHkgbGlzdC4gVGhpcyBpcyB1c3VhbGx5IGEgTlNEaWN0aW9uYXJ5IGJ1dCBjYW4gYWxzbyBiZSBhIE5TQXJyYXkuXHJcbiAgICogQHRocm93cyBQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24gV2hlbiB0aGUgcHJvcGVydHkgbGlzdCdzIGZvcm1hdCBjb3VsZCBub3QgYmUgcGFyc2VkLlxyXG4gICAqIEB0aHJvd3MgVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbiBXaGVuIGEgTlNTdHJpbmcgb2JqZWN0IGNvdWxkIG5vdCBiZSBkZWNvZGVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZG9QYXJzZShkYXRhOiBCdWZmZXIpIHtcclxuICAgIHRoaXMuYnl0ZXMgPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IG1hZ2ljID0gdGhpcy5idWZmZXIyU3RyaW5nKGRhdGEsIDAsIDgpO1xyXG5cclxuICAgIGlmICghbWFnaWMuc3RhcnRzV2l0aCgnYnBsaXN0JykgJiYgIW1hZ2ljLnN0YXJ0c1dpdGgoJ3BsaXN0JykpIHtcclxuICAgICAgLy8gdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbihgJ1RoZSBnaXZlbiBkYXRhIGlzIG5vIGJpbmFyeSBwcm9wZXJ0eSBsaXN0LiBXcm9uZyBtYWdpYyBieXRlczogJHttYWdpY31gKTtcclxuICAgICAgY29uc29sZS5lcnJvcihgJ1RoZSBnaXZlbiBkYXRhIGlzIG5vIGJpbmFyeSBwcm9wZXJ0eSBsaXN0LiBXcm9uZyBtYWdpYyBieXRlczogJHttYWdpY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogSGFuZGxlIHRyYWlsZXIsIGxhc3QgMzIgYnl0ZXMgb2YgdGhlIGZpbGVcclxuICAgICAqL1xyXG4gICAgY29uc3QgdHJhaWxlcjogQnVmZmVyID0gdGhpcy5jb3B5T2ZSYW5nZSh0aGlzLmJ5dGVzLCB0aGlzLmJ5dGVzLmxlbmd0aCAtIDMyLCB0aGlzLmJ5dGVzLmxlbmd0aCk7XHJcblxyXG4gICAgLy8gNiBudWxsIGJ5dGVzIChpbmRleCAwIHRvIDUpXHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0U2l6ZTogbnVtYmVyID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KHRyYWlsZXIsIDYsIDcpO1xyXG4gICAgdGhpcy5vYmplY3RSZWZTaXplID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KHRyYWlsZXIsIDcsIDgpO1xyXG4gICAgY29uc3QgbnVtT2JqZWN0czogbnVtYmVyID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KHRyYWlsZXIsIDgsIDE2KTtcclxuICAgIGNvbnN0IHRvcE9iamVjdDogbnVtYmVyID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KHRyYWlsZXIsIDE2LCAyNCk7XHJcbiAgICBjb25zdCBvZmZzZXRUYWJsZU9mZnNldDogbnVtYmVyID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KHRyYWlsZXIsIDI0LCAzMik7XHJcblxyXG4gICAgLypcclxuICAgICAgICogSGFuZGxlIG9mZnNldCB0YWJsZVxyXG4gICAgICAgKi9cclxuICAgIHRoaXMub2Zmc2V0VGFibGUgPSBuZXcgQXJyYXkobnVtT2JqZWN0cyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PYmplY3RzOyBpKyspIHtcclxuICAgICAgdGhpcy5vZmZzZXRUYWJsZVtpXSA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0aGlzLmJ5dGVzLCBvZmZzZXRUYWJsZU9mZnNldCArIGkgKiBvZmZzZXRTaXplLCBvZmZzZXRUYWJsZU9mZnNldCArIChpICsgMSkgKiBvZmZzZXRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy52aXNpdCh0b3BPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWZmZXIyU3RyaW5nKGJ5dGVzOiBCdWZmZXIsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlciwgZW5jb2Rpbmc6IEJ1ZmZlckVuY29kaW5nID0gJ3V0Zi04Jykge1xyXG4gICAgcmV0dXJuIHRoaXMuY29weU9mUmFuZ2UoYnl0ZXMsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KS50b1N0cmluZyhlbmNvZGluZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3BpZXMgYSBwYXJ0IG9mIGEgYnl0ZSBhcnJheSBpbnRvIGEgbmV3IGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNyYyAgICAgICAgVGhlIHNvdXJjZSBhcnJheS5cclxuICAgKiBAcGFyYW0gc3RhcnRJbmRleCBUaGUgaW5kZXggZnJvbSB3aGljaCB0byBzdGFydCBjb3B5aW5nLlxyXG4gICAqIEBwYXJhbSBlbmRJbmRleCAgIFRoZSBpbmRleCB1bnRpbCB3aGljaCB0byBjb3B5LlxyXG4gICAqIEByZXR1cm4gVGhlIGNvcGllZCBhcnJheS5cclxuICAgKi9cclxuICBwcml2YXRlIGNvcHlPZlJhbmdlKHNyYzogQnVmZmVyLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGVuZEluZGV4IC0gc3RhcnRJbmRleDtcclxuICAgIGlmIChsZW5ndGggPCAwKSB7XHJcbiAgICAgIC8vIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oYHN0YXJ0SW5kZXggKCR7c3RhcnRJbmRleH0pXCIgKyBcIiA+IGVuZEluZGV4ICgke2VuZEluZGV4fSlgKTtcclxuICAgICAgY29uc29sZS5lcnJvcihgc3RhcnRJbmRleCAoJHtzdGFydEluZGV4fSlcIiArIFwiID4gZW5kSW5kZXggKCR7ZW5kSW5kZXh9KWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNyYy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgYW4gdW5zaWduZWQgaW50ZWdlciBmcm9tIGEgYnl0ZSBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBieXRlcyBUaGUgYnl0ZSBhcnJheSBjb250YWluaW5nIHRoZSB1bnNpZ25lZCBpbnRlZ2VyLlxyXG4gICAqIEBwYXJhbSBzdGFydEluZGV4IEJlZ2lubmluZyBvZiB0aGUgdW5zaWduZWQgaW50IGluIHRoZSBieXRlIGFycmF5LlxyXG4gICAqIEBwYXJhbSBlbmRJbmRleCBFbmQgb2YgdGhlIHVuc2lnbmVkIGludCBpbiB0aGUgYnl0ZSBhcnJheS5cclxuICAgKiBAcmV0dXJuIFRoZSB1bnNpZ25lZCBpbnRlZ2VyIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiBieXRlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHBhcnNlVW5zaWduZWRJbnQoYnl0ZXM6IEJ1ZmZlciwgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgbCA8PD0gODtcclxuICAgICAgbCB8PSBieXRlc1tpXSAmIDB4ZmY7XHJcbiAgICB9XHJcbiAgICAvLyBsICY9IDB4ZmZmZmZmZmZmZjtcclxuICAgIGwgJj0gMHhmZjtcclxuICAgIHJldHVybiBsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVVdGY4U3RyaW5nTGVuZ3RoKGJ5dGVzOiBCdWZmZXIsIG9mZnNldDogbnVtYmVyLCBudW1DaGFyYWN0ZXJzOiBudW1iZXIpIHtcclxuICAgIGxldCBsZW5ndGggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaGFyYWN0ZXJzOyBpKyspIHtcclxuICAgICAgY29uc3QgdGVtcE9mZnNldCA9IG9mZnNldCArIGxlbmd0aDtcclxuICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA8PSB0ZW1wT2Zmc2V0KSB7XHJcbiAgICAgICAgLy8gV0FSTklORzogSW52YWxpZCBVVEYtOCBzdHJpbmcsIGZhbGwgYmFjayB0byBsZW5ndGggPSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gICAgICAgIHJldHVybiBudW1DaGFyYWN0ZXJzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChieXRlc1t0ZW1wT2Zmc2V0XSA8IDB4ODApIHtcclxuICAgICAgICBsZW5ndGgrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnl0ZXNbdGVtcE9mZnNldF0gPCAweGMyKSB7XHJcbiAgICAgICAgLy8gSW52YWxpZCB2YWx1ZSAobWFya3MgY29udGludWF0aW9uIGJ5dGUpLCBmYWxsIGJhY2sgdG8gbGVuZ3RoID0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICAgICAgICByZXR1cm4gbnVtQ2hhcmFjdGVycztcclxuICAgICAgfSBlbHNlIGlmIChieXRlc1t0ZW1wT2Zmc2V0XSA8IDB4ZTApIHtcclxuICAgICAgICBpZiAoKGJ5dGVzW3RlbXBPZmZzZXQgKyAxXSAmIDB4YzApICE9PSAweDgwKSB7XHJcbiAgICAgICAgICAvLyBJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlLCBmYWxsIGJhY2sgdG8gbGVuZ3RoID0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICAgICAgICAgIHJldHVybiBudW1DaGFyYWN0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZW5ndGggKz0gMjtcclxuICAgICAgfSBlbHNlIGlmIChieXRlc1t0ZW1wT2Zmc2V0XSA8IDB4ZjApIHtcclxuICAgICAgICBpZiAoKGJ5dGVzW3RlbXBPZmZzZXQgKyAxXSAmIDB4YzApICE9PSAweDgwIHx8IChieXRlc1t0ZW1wT2Zmc2V0ICsgMl0gJiAweGMwKSAhPT0gMHg4MCkge1xyXG4gICAgICAgICAgLy8gSW52YWxpZCBjb250aW51YXRpb24gYnl0ZSwgZmFsbCBiYWNrIHRvIGxlbmd0aCA9IG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICByZXR1cm4gbnVtQ2hhcmFjdGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVuZ3RoICs9IDM7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZXNbdGVtcE9mZnNldF0gPCAweGY1KSB7XHJcbiAgICAgICAgaWYgKChieXRlc1t0ZW1wT2Zmc2V0ICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fCAoYnl0ZXNbdGVtcE9mZnNldCArIDJdICYgMHhjMCkgIT09IDB4ODAgfHwgKGJ5dGVzW3RlbXBPZmZzZXQgKyAzXSAmIDB4YzApICE9PSAweDgwKSB7XHJcbiAgICAgICAgICAvLyBJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlLCBmYWxsIGJhY2sgdG8gbGVuZ3RoID0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICAgICAgICAgIHJldHVybiBudW1DaGFyYWN0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZW5ndGggKz0gNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlbmd0aDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVhZHMgdGhlIGxlbmd0aCBmb3IgYXJyYXlzLCBzZXRzIGFuZCBkaWN0aW9uYXJpZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2JqSW5mbyBPYmplY3QgaW5mb3JtYXRpb24gYnl0ZS5cclxuICAgKiBAcGFyYW0gb2Zmc2V0ICBPZmZzZXQgaW4gdGhlIGJ5dGUgYXJyYXkgYXQgd2hpY2ggdGhlIG9iamVjdCBpcyBsb2NhdGVkLlxyXG4gICAqIEByZXR1cm4gQW4gYXJyYXkgd2l0aCB0aGUgbGVuZ3RoIHR3by4gRmlyc3QgZW50cnkgaXMgdGhlIGxlbmd0aCwgc2Vjb25kIGVudHJ5IHRoZSBvZmZzZXQgYXQgd2hpY2ggdGhlIGNvbnRlbnQgc3RhcnRzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZExlbmd0aEFuZE9mZnNldChvYmpJbmZvOiBudW1iZXIsIG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGVuZ3RoVmFsdWUgPSBvYmpJbmZvO1xyXG4gICAgbGV0IG9mZnNldFZhbHVlID0gMTtcclxuICAgIGlmIChvYmpJbmZvID09PSAweGYpIHtcclxuICAgICAgY29uc3QgaW50X3R5cGUgPSB0aGlzLmJ5dGVzW29mZnNldCArIDFdO1xyXG4gICAgICBjb25zdCBpbnRUeXBlID0gKGludF90eXBlICYgMHhmMCkgPj4gNDtcclxuICAgICAgaWYgKGludFR5cGUgIT09IDB4MSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgQmluYXJ5UHJvcGVydHlMaXN0UGFyc2VyOiBMZW5ndGggaW50ZWdlciBoYXMgYW4gdW5leHBlY3RlZCB0eXBlICR7aW50VHlwZX0uIEF0dGVtcHRpbmcgdG8gcGFyc2UgYW55d2F5Li4uYCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaW50SW5mbyA9IGludF90eXBlICYgMHgwZjtcclxuICAgICAgY29uc3QgaW50TGVuZ3RoID0gTWF0aC5wb3coMiwgaW50SW5mbyk7XHJcbiAgICAgIG9mZnNldFZhbHVlID0gMiArIGludExlbmd0aDtcclxuICAgICAgaWYgKGludExlbmd0aCA8IDMpIHtcclxuICAgICAgICBsZW5ndGhWYWx1ZSA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0aGlzLmJ5dGVzLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAyICsgaW50TGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZW5ndGhWYWx1ZSA9IG5ldyBCaWdJbnQodGhpcy5jb3B5T2ZSYW5nZSh0aGlzLmJ5dGVzLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAyICsgaW50TGVuZ3RoKSkuaW50VmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtsZW5ndGhWYWx1ZSwgb2Zmc2V0VmFsdWVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGFuIG9iamVjdCBpbnNpZGUgdGhlIGN1cnJlbnRseSBwYXJzZWQgYmluYXJ5IHByb3BlcnR5IGxpc3QuXHJcbiAgICogRm9yIHRoZSBmb3JtYXQgc3BlY2lmaWNhdGlvbiBjaGVja1xyXG4gICAqIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zb3VyY2UuYXBwbGUuY29tL3NvdXJjZS9DRi9DRi04NTUuMTcvQ0ZCaW5hcnlQTGlzdC5jXCI+XHJcbiAgICogQXBwbGUncyBiaW5hcnkgcHJvcGVydHkgbGlzdCBwYXJzZXIgaW1wbGVtZW50YXRpb248L2E+LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IElELlxyXG4gICAqIEByZXR1cm4gVGhlIHBhcnNlZCBvYmplY3QuXHJcbiAgICogQHRocm93cyBQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24gV2hlbiB0aGUgcHJvcGVydHkgbGlzdCdzIGZvcm1hdCBjb3VsZCBub3QgYmUgcGFyc2VkLlxyXG4gICAqIEB0aHJvd3MgVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbiBXaGVuIGEgTlNTdHJpbmcgb2JqZWN0IGNvdWxkIG5vdCBiZSBkZWNvZGVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmlzaXQob2JqOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0VGFibGVbb2JqXTtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmJ5dGVzW29mZnNldF07XHJcbiAgICBjb25zdCBvYmpUeXBlID0gKHR5cGUgJiAweGYwKSA+PiA0OyAvLyBGaXJzdCAgNCBiaXRzXHJcbiAgICBjb25zdCBvYmpJbmZvID0gdHlwZSAmIDB4MGY7IC8vIFNlY29uZCA0IGJpdHNcclxuXHJcbiAgICBzd2l0Y2ggKG9ialR5cGUpIHtcclxuICAgICAgY2FzZSAweDA6IHtcclxuICAgICAgICAvLyBTaW1wbGVcclxuICAgICAgICBzd2l0Y2ggKG9iakluZm8pIHtcclxuICAgICAgICAgIGNhc2UgMHgwOiB7XHJcbiAgICAgICAgICAgIC8vIG51bGwgb2JqZWN0ICh2MS4wIGFuZCBsYXRlcilcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAka2V5OiAnbnVsbCcsXHJcbiAgICAgICAgICAgICAgJHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIDB4ODoge1xyXG4gICAgICAgICAgICAvLyBmYWxzZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICRrZXk6ICdmYWxzZScsXHJcbiAgICAgICAgICAgICAgJHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAweDk6IHtcclxuICAgICAgICAgICAgLy8gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICRrZXk6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAkdmFsdWU6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgMHhjOiB7XHJcbiAgICAgICAgICAgIC8vIFVSTCB3aXRoIG5vIGJhc2UgVVJMICh2MS4wIGFuZCBsYXRlcilcclxuICAgICAgICAgICAgLy8gVE9ETyBJbXBsZW1lbnQgYmluYXJ5IFVSTCBwYXJzaW5nIChub3QgeWV0IGV2ZW4gaW1wbGVtZW50ZWQgaW4gQ29yZSBGb3VuZGF0aW9uIGFzIG9mIHJldmlzaW9uIDg1NS4xNylcclxuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IFVuc3VwcG9ydGVkT3BlcmF0aW9uRXhjZXB0aW9uKFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgZ2l2ZW4gYmluYXJ5IHByb3BlcnR5IGxpc3QgY29udGFpbnMgYSBVUkwgb2JqZWN0LiBQYXJzaW5nIG9mIHRoaXMgb2JqZWN0IHR5cGUgaXMgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIDB4ZDoge1xyXG4gICAgICAgICAgICAvLyBVUkwgd2l0aCBiYXNlIFVSTCAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgICAgIC8vIFRPRE8gSW1wbGVtZW50IGJpbmFyeSBVUkwgcGFyc2luZyAobm90IHlldCBldmVuIGltcGxlbWVudGVkIGluIENvcmUgRm91bmRhdGlvbiBhcyBvZiByZXZpc2lvbiA4NTUuMTcpXHJcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbihcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGEgVVJMIG9iamVjdC4gUGFyc2luZyBvZiB0aGlzIG9iamVjdCB0eXBlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAweGU6IHtcclxuICAgICAgICAgICAgLy8gMTYtYnl0ZSBVVUlEICh2MS4wIGFuZCBsYXRlcilcclxuICAgICAgICAgICAgLy8gVE9ETyBJbXBsZW1lbnQgYmluYXJ5IFVVSUQgcGFyc2luZyAobm90IHlldCBldmVuIGltcGxlbWVudGVkIGluIENvcmUgRm91bmRhdGlvbiBhcyBvZiByZXZpc2lvbiA4NTUuMTcpXHJcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbihcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGEgVVVJRCBvYmplY3QuIFBhcnNpbmcgb2YgdGhpcyBvYmplY3QgdHlwZSBpcyBub3QgeWV0IGltcGxlbWVudGVkLmApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IFByb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGFuIG9iamVjdCBvZiB1bmtub3duIHR5cGUgKCR7b2JqVHlwZX0pYCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhbiBvYmplY3Qgb2YgdW5rbm93biB0eXBlICgke29ialR5cGV9KWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4MToge1xyXG4gICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnBvdygyLCBvYmpJbmZvKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAxICsgbGVuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdpbnRlZ2VyJyxcclxuICAgICAgICAgICR2YWx1ZTogcGFyc2VJbnQodmFsdWUsIDEwKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDI6IHtcclxuICAgICAgICAvLyByZWFsXHJcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5wb3coMiwgb2JqSW5mbyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgMSwgb2Zmc2V0ICsgMSArIGxlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnZmxvYXQnLFxyXG4gICAgICAgICAgJHZhbHVlOiBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDM6IHtcclxuICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgaWYgKG9iakluZm8gIT09IDB4Mykge1xyXG4gICAgICAgICAgLy8gdGhyb3cgbmV3IFByb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGEgZGF0ZSBvYmplY3Qgb2YgYW4gdW5rbm93biB0eXBlICgke29iakluZm99KWApO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGEgZGF0ZSBvYmplY3Qgb2YgYW4gdW5rbm93biB0eXBlICgke29iakluZm99KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJGtleTogJ2RhdGUnLFxyXG4gICAgICAgICAgJHZhbHVlOiBuZXcgRGF0ZSh0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgMSwgb2Zmc2V0ICsgOSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NDoge1xyXG4gICAgICAgIC8vIERhdGE6IGludGVycHJldGVkIGFzIEJhc2UtNjQgZW5jb2RlZFxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3QgZGF0YU9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBvZmZzZXQgKyBkYXRhT2Zmc2V0LCBvZmZzZXQgKyBkYXRhT2Zmc2V0ICsgbGVuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdkYXRhJyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg1OiB7XHJcbiAgICAgICAgLy8gQVNDSUkgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoQW5kT2Zmc2V0OiBudW1iZXJbXSA9IHRoaXMucmVhZExlbmd0aEFuZE9mZnNldChvYmpJbmZvLCBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aEFuZE9mZnNldFswXTsgLy8gRWFjaCBjaGFyYWN0ZXIgaXMgMSBieXRlXHJcbiAgICAgICAgY29uc3Qgc3RyT2Zmc2V0ID0gbGVuZ3RoQW5kT2Zmc2V0WzFdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIG9mZnNldCArIHN0ck9mZnNldCwgb2Zmc2V0ICsgc3RyT2Zmc2V0ICsgbGVuLCAnYXNjaWknKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdhc2NpaScsXHJcbiAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Njoge1xyXG4gICAgICAgIC8vIFVURi0xNi1CRSBzdHJpbmdcclxuICAgICAgICBjb25zdCBsZW5ndGhBbmRPZmZzZXQ6IG51bWJlcltdID0gdGhpcy5yZWFkTGVuZ3RoQW5kT2Zmc2V0KG9iakluZm8sIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGxlbmd0aEFuZE9mZnNldFswXTtcclxuICAgICAgICBjb25zdCBzdHJPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcbiAgICAgICAgLy8gVVRGLTE2IGNoYXJhY3RlcnMgY2FuIGhhdmUgdmFyaWFibGUgbGVuZ3RoLCBidXQgdGhlIENvcmUgRm91bmRhdGlvbiByZWZlcmVuY2UgaW1wbGVtZW50YXRpb25cclxuICAgICAgICAvLyBhc3N1bWVzIDIgYnl0ZSBjaGFyYWN0ZXJzLCB0aHVzIG9ubHkgY292ZXJpbmcgdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZVxyXG5cclxuICAgICAgICBjb25zdCBsZW4gPSBjaGFyYWN0ZXJzICogMjtcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gc3RyT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gb2Zmc2V0ICsgc3RyT2Zmc2V0ICsgbGVuO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIHN0YXJ0SW5kZXgsIChzdGFydEluZGV4ICsgb2Zmc2V0KSAqIDIgKiogOCArIGVuZEluZGV4LCAnYmFzZTY0Jyk7XHJcbiAgICAgICAgLy8gY29uc3QgdmFsdWUgPSB0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgc3RyT2Zmc2V0LCBvZmZzZXQgKyBzdHJPZmZzZXQgKyBsZW5ndGgsICdiYXNlNjQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCYXNlNjQodmFsdWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZTY0Q29udGVudCh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICRrZXk6ICd1dGYtMTYnLFxyXG4gICAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4Nzoge1xyXG4gICAgICAgIC8vIFVURi04IHN0cmluZyAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoQW5kT2Zmc2V0OiBudW1iZXJbXSA9IHRoaXMucmVhZExlbmd0aEFuZE9mZnNldChvYmpJbmZvLCBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IHN0ck9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gbGVuZ3RoQW5kT2Zmc2V0WzBdO1xyXG4gICAgICAgIC8vIFVURi04IGNoYXJhY3RlcnMgY2FuIGhhdmUgdmFyaWFibGUgbGVuZ3RoLCBzbyB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgYnl0ZSBsZW5ndGggZHluYW1pY2FsbHlcclxuICAgICAgICAvLyBieSByZWFkaW5nIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcclxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmNhbGN1bGF0ZVV0ZjhTdHJpbmdMZW5ndGgodGhpcy5ieXRlcywgb2Zmc2V0ICsgc3RyT2Zmc2V0LCBjaGFyYWN0ZXJzKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBvZmZzZXQgKyBzdHJPZmZzZXQsIG9mZnNldCArIHN0ck9mZnNldCArIGxlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAndXRmLTgnLFxyXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDg6IHtcclxuICAgICAgICAvLyBVSUQgKHYxLjAgYW5kIGxhdGVyKVxyXG4gICAgICAgIGNvbnN0IGxlbiA9IG9iakluZm8gKyAxO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFVJRChcclxuICAgICAgICAgIG9iai52YWx1ZU9mKCksXHJcbiAgICAgICAgICB0aGlzLmNvcHlPZlJhbmdlKHRoaXMuYnl0ZXMsIG9mZnNldCArIDEsIG9mZnNldCArIDEgKyBsZW4pLFxyXG4gICAgICAgICAgdGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIG9mZnNldCArIDEsIG9mZnNldCArIDEgKyBsZW4pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICd1aWQnLFxyXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGE6IHtcclxuICAgICAgICAvLyBBcnJheVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3QgYXJyYXlPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IEFycmF5KGxlbik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgb2JqUmVmID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KFxyXG4gICAgICAgICAgICB0aGlzLmJ5dGVzLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBhcnJheU9mZnNldCArIGkgKiB0aGlzLm9iamVjdFJlZlNpemUsXHJcbiAgICAgICAgICAgIG9mZnNldCArIGFycmF5T2Zmc2V0ICsgKGkgKyAxKSAqIHRoaXMub2JqZWN0UmVmU2l6ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHZhbHVlLnB1c2godGhpcy52aXNpdChvYmpSZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnYXJyYXknLFxyXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGI6IHtcclxuICAgICAgICAvLyBPcmRlcmVkIHNldCAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoQW5kT2Zmc2V0OiBudW1iZXJbXSA9IHRoaXMucmVhZExlbmd0aEFuZE9mZnNldChvYmpJbmZvLCBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aEFuZE9mZnNldFswXTtcclxuICAgICAgICBjb25zdCBjb250ZW50T2Zmc2V0ID0gbGVuZ3RoQW5kT2Zmc2V0WzFdO1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBvYmpSZWYgPSB0aGlzLnBhcnNlVW5zaWduZWRJbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZXMsXHJcbiAgICAgICAgICAgIG9mZnNldCArIGNvbnRlbnRPZmZzZXQgKyBpICogdGhpcy5vYmplY3RSZWZTaXplLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgKGkgKyAxKSAqIHRoaXMub2JqZWN0UmVmU2l6ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHZhbHVlLmFkZCh0aGlzLnZpc2l0KG9ialJlZikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdvcmRlci1zZXQnLFxyXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweGM6IHtcclxuICAgICAgICAvLyBTZXQgKHYxLjAgYW5kIGxhdGVyKVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3QgY29udGVudE9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgb2JqUmVmID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KFxyXG4gICAgICAgICAgICB0aGlzLmJ5dGVzLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgaSAqIHRoaXMub2JqZWN0UmVmU2l6ZSxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIChpICsgMSkgKiB0aGlzLm9iamVjdFJlZlNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB2YWx1ZS5hZGQodGhpcy52aXNpdChvYmpSZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnc2V0JyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhkOiB7XHJcbiAgICAgICAgLy8gRGljdGlvbmFyeVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3QgY29udGVudE9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qga2V5UmVmID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KFxyXG4gICAgICAgICAgICB0aGlzLmJ5dGVzLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgaSAqIHRoaXMub2JqZWN0UmVmU2l6ZSxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIChpICsgMSkgKiB0aGlzLm9iamVjdFJlZlNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCB2YWxSZWYgPSB0aGlzLnBhcnNlVW5zaWduZWRJbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZXMsXHJcbiAgICAgICAgICAgIG9mZnNldCArIGNvbnRlbnRPZmZzZXQgKyBsZW4gKiB0aGlzLm9iamVjdFJlZlNpemUgKyBpICogdGhpcy5vYmplY3RSZWZTaXplLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgbGVuICogdGhpcy5vYmplY3RSZWZTaXplICsgKGkgKyAxKSAqIHRoaXMub2JqZWN0UmVmU2l6ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmlzaXQoa2V5UmVmKTtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMudmlzaXQodmFsUmVmKTtcclxuICAgICAgICAgIHZhbHVlLnNldChrZXkuJGtleS50b1N0cmluZygpLCB2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdkaWN0aW9uYXJ5JyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uKGBUaGUgZ2l2ZW4gYmluYXJ5IHByb3BlcnR5IGxpc3QgY29udGFpbnMgYW4gb2JqZWN0IG9mIHVua25vd24gdHlwZSAoJHtvYmpUeXBlfSlgKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgZ2l2ZW4gYmluYXJ5IHByb3BlcnR5IGxpc3QgY29udGFpbnMgYW4gb2JqZWN0IG9mIHVua25vd24gdHlwZSAoJHtvYmpUeXBlfSlgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Jhc2U2NCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gL14oW1xcK1xcLy05QS1aYS16XXs0fSkqKFtcXCtcXC8tOUEtWmEtel17NH18W1xcK1xcLy05QS1aYS16XXszfT18W1xcK1xcLy05QS1aYS16XXsyfT09KSQvdS50ZXN0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19