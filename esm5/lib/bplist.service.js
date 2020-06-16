/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var Buffer = require('buffer/').Buffer;
/** @type {?} */
var BigInt = window['BigInt'] || require('big-integer');
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var PropertyListFormatException = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyListFormatException, _super);
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
    tslib_1.__extends(UnsupportedEncodingException, _super);
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
    tslib_1.__extends(UnsupportedOperationException, _super);
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
    tslib_1.__extends(IllegalArgumentException, _super);
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
export { UID };
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
    /** @nocollapse */ BplistService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BplistService_Factory() { return new BplistService(); }, token: BplistService, providedIn: "root" });
    return BplistService;
}());
export { BplistService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBsaXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9za2V0Y2gtbGliLyIsInNvdXJjZXMiOlsibGliL2JwbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTTs7SUFDbEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBQTBDLHVEQUFLO0lBQzdDLHFDQUFZLE9BQU87UUFBbkIsWUFDRSxpQkFBTyxTQUlSO1FBSEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLElBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDekIsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQVBELENBQTBDLEtBQUssR0FPOUM7QUFDRDtJQUEyQyx3REFBSztJQUM5QyxzQ0FBWSxPQUFPO1FBQW5CLFlBQ0UsaUJBQU8sU0FJUjtRQUhDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7UUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFQRCxDQUEyQyxLQUFLLEdBTy9DO0FBQ0Q7SUFBNEMseURBQUs7SUFDL0MsdUNBQVksT0FBTztRQUFuQixZQUNFLGlCQUFPLFNBSVI7UUFIQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENB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LE9BQU8sQ0FBQyxLQUFLLENBQUMsd0VBQXNFLE9BQU8sTUFBRyxDQUFDLENBQUM7YUFDakc7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLGdDQUFROzs7OztJQUFoQixVQUFpQixLQUFhO1FBQzVCLE9BQU8sbUZBQW1GLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pHLENBQUM7O2dCQTllRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0JBdkZEO0NBb2tCQyxBQS9lRCxJQStlQztTQTVlWSxhQUFhOzs7Ozs7O0lBSXhCLDhCQUFzQjs7Ozs7O0lBSXRCLGdDQUFxQjs7Ozs7O0lBS3JCLHNDQUE4Qjs7Ozs7O0lBSzlCLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXI7XHJcbmNvbnN0IEJpZ0ludCA9IHdpbmRvd1snQmlnSW50J10gfHwgcmVxdWlyZSgnYmlnLWludGVnZXInKTtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG50eXBlIEJ1ZmZlckVuY29kaW5nID0gJ2hleCcgfCAndXRmOCcgfCAndXRmLTgnIHwgJ2FzY2lpJyB8ICdsYXRpbjEnIHwgJ2JpbmFyeScgfCAnYmFzZTY0JyB8ICd1Y3MyJyB8ICd1Y3MtMicgfCAndXRmMTZsZScgfCAndXRmLTE2bGUnO1xyXG5cclxuY2xhc3MgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIHRoaXMubmFtZSA9ICdQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24nO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbn1cclxuY2xhc3MgVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICB0aGlzLm5hbWUgPSAnVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxufVxyXG5jbGFzcyBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICB0aGlzLm5hbWUgPSAnVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb24nO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbn1cclxuY2xhc3MgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIHRoaXMubmFtZSA9ICdJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24nO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVJRCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogbnVtYmVyLCBwcml2YXRlIGJ1ZmZlcjogQnVmZmVyLCBwcml2YXRlIHN0cmluZzogc3RyaW5nKSB7fVxyXG59XHJcblxyXG4vKlxyXG5SZXNvdXJjZTogaHR0cHM6Ly9vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvQ0YvQ0YtNTUwL1xyXG5cclxuSEVBREVSXHJcblx0bWFnaWMgbnVtYmVyIChcImJwbGlzdFwiKVxyXG5cdGZpbGUgZm9ybWF0IHZlcnNpb25cclxuXHJcbk9CSkVDVCBUQUJMRVxyXG5cdHZhcmlhYmxlLXNpemVkIG9iamVjdHNcclxuXHJcblx0T2JqZWN0IEZvcm1hdHMgKG1hcmtlciBieXRlIGZvbGxvd2VkIGJ5IGFkZGl0aW9uYWwgaW5mbyBpbiBzb21lIGNhc2VzKVxyXG5cdG51bGwgICAgMDAwMCAwMDAwXHJcblx0Ym9vbCAgICAwMDAwIDEwMDBcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIGZhbHNlXHJcblx0Ym9vbCAgICAwMDAwIDEwMDFcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIHRydWVcclxuXHRmaWxsICAgIDAwMDAgMTExMVx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gZmlsbCBieXRlXHJcblx0aW50ICAgICAwMDAxIG5ubm5cdC4uLlx0XHQgICAgICAgICAgICAgICAgICAvLyAjIG9mIGJ5dGVzIGlzIDJebm5ubiwgYmlnLWVuZGlhbiBieXRlc1xyXG5cdHJlYWwgICAgMDAxMCBubm5uXHQuLi5cdFx0ICAgICAgICAgICAgICAgICAgLy8gIyBvZiBieXRlcyBpcyAyXm5ubm4sIGJpZy1lbmRpYW4gYnl0ZXNcclxuXHRkYXRlICAgIDAwMTEgMDAxMVx0Li4uXHRcdCAgICAgICAgICAgICAgICAgIC8vIDggYnl0ZSBmbG9hdCBmb2xsb3dzLCBiaWctZW5kaWFuIGJ5dGVzXHJcblx0ZGF0YSAgICAwMTAwIG5ubm5cdFtpbnRdXHQuLi5cdCAgICAgICAgICAgICAgLy8gbm5ubiBpcyBudW1iZXIgb2YgYnl0ZXMgdW5sZXNzIDExMTEgdGhlbiBpbnQgY291bnQgZm9sbG93cywgZm9sbG93ZWQgYnkgYnl0ZXNcclxuXHRzdHJpbmcgIDAxMDEgbm5ublx0W2ludF1cdC4uLlx0ICAgICAgICAgICAgICAvLyBBU0NJSSBzdHJpbmcsIG5ubm4gaXMgIyBvZiBjaGFycywgZWxzZSAxMTExIHRoZW4gaW50IGNvdW50LCB0aGVuIGJ5dGVzXHJcblx0c3RyaW5nICAwMTEwIG5ubm5cdFtpbnRdXHQuLi5cdCAgICAgICAgICAgICAgLy8gVW5pY29kZSBzdHJpbmcsIG5ubm4gaXMgIyBvZiBjaGFycywgZWxzZSAxMTExIHRoZW4gaW50IGNvdW50LCB0aGVuIGJpZy1lbmRpYW4gMi1ieXRlIHVpbnQxNl90XHJcbiAgICAgICAgICAwMTExIHh4eHhcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIHVudXNlZFxyXG5cdHVpZCAgICAgMTAwMCBubm5uXHQuLi5cdFx0ICAgICAgICAgICAgICAgICAgLy8gbm5ubisxIGlzICMgb2YgYnl0ZXNcclxuICAgICAgICAgIDEwMDEgeHh4eFx0XHRcdCAgICAgICAgICAgICAgICAgICAgLy8gdW51c2VkXHJcblx0YXJyYXkgICAxMDEwIG5ubm5cdFtpbnRdXHRvYmpyZWYqXHQgICAgICAgICAgLy8gbm5ubiBpcyBjb3VudCwgdW5sZXNzICcxMTExJywgdGhlbiBpbnQgY291bnQgZm9sbG93c1xyXG4gICAgICAgICAgMTAxMSB4eHh4XHRcdFx0ICAgICAgICAgICAgICAgICAgICAvLyB1bnVzZWRcclxuXHRzZXIgICAgIDExMDAgbm5ublx0W2ludF1cdG9ianJlZiogICAgICAgICAgIC8vIG5ubm4gaXMgY291bnQsIHVubGVzcyAnMTExMScsIHRoZW4gaW50IGNvdW50IGZvbGxvd3NcclxuXHRkaWN0ICAgIDExMDEgbm5ublx0W2ludF1cdGtleXJlZiogb2JqcmVmKlx0ICAvLyBubm5uIGlzIGNvdW50LCB1bmxlc3MgJzExMTEnLCB0aGVuIGludCBjb3VudCBmb2xsb3dzXHJcbiAgICAgICAgICAxMTEwIHh4eHhcdFx0XHQgICAgICAgICAgICAgICAgICAgIC8vIHVudXNlZFxyXG4gICAgICAgICAgMTExMSB4eHh4XHRcdFx0ICAgICAgICAgICAgICAgICAgICAvLyB1bnVzZWRcclxuXHJcbk9GRlNFVCBUQUJMRVxyXG5cdGxpc3Qgb2YgaW50cywgYnl0ZSBzaXplIG9mIHdoaWNoIGlzIGdpdmVuIGluIHRyYWlsZXJcclxuXHQtLSB0aGVzZSBhcmUgdGhlIGJ5dGUgb2Zmc2V0cyBpbnRvIHRoZSBmaWxlXHJcblx0LS0gbnVtYmVyIG9mIHRoZXNlIGlzIGluIHRoZSB0cmFpbGVyXHJcblxyXG5UUkFJTEVSXHJcblx0Ynl0ZSBzaXplIG9mIG9mZnNldCBpbnRzIGluIG9mZnNldCB0YWJsZVxyXG5cdGJ5dGUgc2l6ZSBvZiBvYmplY3QgcmVmcyBpbiBhcnJheXMgYW5kIGRpY3RzXHJcblx0bnVtYmVyIG9mIG9mZnNldHMgaW4gb2Zmc2V0IHRhYmxlIChhbHNvIGlzIG51bWJlciBvZiBvYmplY3RzKVxyXG5cdGVsZW1lbnQgIyBpbiBvZmZzZXQgdGFibGUgd2hpY2ggaXMgdG9wIGxldmVsIG9iamVjdFxyXG5cdG9mZnNldCB0YWJsZSBvZmZzZXRcclxuXHJcbiovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwbGlzdFNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcm9wZXJ0eSBsaXN0IGRhdGEuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBieXRlczogQnVmZmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJzZWQgY29udGVudC5cclxuICAgKi9cclxuICBwcml2YXRlIGNvbnRlbnQ6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogTGVuZ3RoIG9mIGFuIG9iamVjdCByZWZlcmVuY2UgaW4gYnl0ZXNcclxuICAgKi9cclxuICBwcml2YXRlIG9iamVjdFJlZlNpemU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRhYmxlIGhvbGRpbmcgdGhlIGluZm9ybWF0aW9uIGF0IHdoaWNoIG9mZnNldCBlYWNoIG9iamVjdCBpcyBmb3VuZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgb2Zmc2V0VGFibGU6IEFycmF5PG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBhIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGZyb20gYSBiaW5hcnkgYmFzZTY0IHN0cmluZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBiaW5hcnkgcHJvcGVydHkgbGlzdCdzIGRhdGEgZW5jb2RlZCBhcyBiYXNlNjQgc3RyaW5nLlxyXG4gICAqIEByZXR1cm4gVGhlIHJvb3Qgb2JqZWN0IG9mIHRoZSBwcm9wZXJ0eSBsaXN0LiBUaGlzIGlzIHVzdWFsbHkgYSBOU0RpY3Rpb25hcnkgYnV0IGNhbiBhbHNvIGJlIGEgTlNBcnJheS5cclxuICAgKiBAdGhyb3dzIFByb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbiBXaGVuIHRoZSBwcm9wZXJ0eSBsaXN0J3MgZm9ybWF0IGNvdWxkIG5vdCBiZSBwYXJzZWQuXHJcbiAgICogQHRocm93cyBVbnN1cHBvcnRlZEVuY29kaW5nRXhjZXB0aW9uIFdoZW4gYSBOU1N0cmluZyBvYmplY3QgY291bGQgbm90IGJlIGRlY29kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnNlNjRDb250ZW50KGRhdGE6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmF3ID0gYXRvYihkYXRhKTtcclxuICAgIGNvbnN0IHJhd0xlbmd0aCA9IHJhdy5sZW5ndGg7XHJcbiAgICBjb25zdCBhcnJheTogQnVmZmVyID0gbmV3IEJ1ZmZlcihyYXdMZW5ndGgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJyYXlbaV0gPSByYXcuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuZG9QYXJzZShhcnJheSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBhIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGZyb20gYSBidWZmZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGF0YSBUaGUgYmluYXJ5IHByb3BlcnR5IGxpc3QncyBkYXRhLlxyXG4gICAqIEByZXR1cm4gVGhlIHJvb3Qgb2JqZWN0IG9mIHRoZSBwcm9wZXJ0eSBsaXN0LiBUaGlzIGlzIHVzdWFsbHkgYSBOU0RpY3Rpb25hcnkgYnV0IGNhbiBhbHNvIGJlIGEgTlNBcnJheS5cclxuICAgKiBAdGhyb3dzIFByb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbiBXaGVuIHRoZSBwcm9wZXJ0eSBsaXN0J3MgZm9ybWF0IGNvdWxkIG5vdCBiZSBwYXJzZWQuXHJcbiAgICogQHRocm93cyBVbnN1cHBvcnRlZEVuY29kaW5nRXhjZXB0aW9uIFdoZW4gYSBOU1N0cmluZyBvYmplY3QgY291bGQgbm90IGJlIGRlY29kZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnNlKGRhdGE6IEJ1ZmZlcikge1xyXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5kb1BhcnNlKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9Kc29uKG1hcCA9IG5ldyBNYXA8YW55LCBhbnk+KCkpIHtcclxuICAgIGNvbnN0IG91dCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB0aGlzLmNvbnRlbnQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApIHtcclxuICAgICAgICBvdXRba2V5XSA9IHRoaXMudG9Kc29uKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvdXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgYSBiaW5hcnkgcHJvcGVydHkgbGlzdCBmcm9tIGEgYnl0ZSBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBiaW5hcnkgcHJvcGVydHkgbGlzdCdzIGRhdGEuXHJcbiAgICogQHJldHVybiBUaGUgcm9vdCBvYmplY3Qgb2YgdGhlIHByb3BlcnR5IGxpc3QuIFRoaXMgaXMgdXN1YWxseSBhIE5TRGljdGlvbmFyeSBidXQgY2FuIGFsc28gYmUgYSBOU0FycmF5LlxyXG4gICAqIEB0aHJvd3MgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uIFdoZW4gdGhlIHByb3BlcnR5IGxpc3QncyBmb3JtYXQgY291bGQgbm90IGJlIHBhcnNlZC5cclxuICAgKiBAdGhyb3dzIFVuc3VwcG9ydGVkRW5jb2RpbmdFeGNlcHRpb24gV2hlbiBhIE5TU3RyaW5nIG9iamVjdCBjb3VsZCBub3QgYmUgZGVjb2RlZC5cclxuICAgKi9cclxuICBwcml2YXRlIGRvUGFyc2UoZGF0YTogQnVmZmVyKSB7XHJcbiAgICB0aGlzLmJ5dGVzID0gZGF0YTtcclxuXHJcbiAgICBjb25zdCBtYWdpYyA9IHRoaXMuYnVmZmVyMlN0cmluZyhkYXRhLCAwLCA4KTtcclxuXHJcbiAgICBpZiAoIW1hZ2ljLnN0YXJ0c1dpdGgoJ2JwbGlzdCcpICYmICFtYWdpYy5zdGFydHNXaXRoKCdwbGlzdCcpKSB7XHJcbiAgICAgIC8vIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oYCdUaGUgZ2l2ZW4gZGF0YSBpcyBubyBiaW5hcnkgcHJvcGVydHkgbGlzdC4gV3JvbmcgbWFnaWMgYnl0ZXM6ICR7bWFnaWN9YCk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCdUaGUgZ2l2ZW4gZGF0YSBpcyBubyBiaW5hcnkgcHJvcGVydHkgbGlzdC4gV3JvbmcgbWFnaWMgYnl0ZXM6ICR7bWFnaWN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEhhbmRsZSB0cmFpbGVyLCBsYXN0IDMyIGJ5dGVzIG9mIHRoZSBmaWxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHRyYWlsZXI6IEJ1ZmZlciA9IHRoaXMuY29weU9mUmFuZ2UodGhpcy5ieXRlcywgdGhpcy5ieXRlcy5sZW5ndGggLSAzMiwgdGhpcy5ieXRlcy5sZW5ndGgpO1xyXG5cclxuICAgIC8vIDYgbnVsbCBieXRlcyAoaW5kZXggMCB0byA1KVxyXG5cclxuICAgIGNvbnN0IG9mZnNldFNpemU6IG51bWJlciA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0cmFpbGVyLCA2LCA3KTtcclxuICAgIHRoaXMub2JqZWN0UmVmU2l6ZSA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0cmFpbGVyLCA3LCA4KTtcclxuICAgIGNvbnN0IG51bU9iamVjdHM6IG51bWJlciA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0cmFpbGVyLCA4LCAxNik7XHJcbiAgICBjb25zdCB0b3BPYmplY3Q6IG51bWJlciA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0cmFpbGVyLCAxNiwgMjQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VGFibGVPZmZzZXQ6IG51bWJlciA9IHRoaXMucGFyc2VVbnNpZ25lZEludCh0cmFpbGVyLCAyNCwgMzIpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAqIEhhbmRsZSBvZmZzZXQgdGFibGVcclxuICAgICAgICovXHJcbiAgICB0aGlzLm9mZnNldFRhYmxlID0gbmV3IEFycmF5KG51bU9iamVjdHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2JqZWN0czsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2Zmc2V0VGFibGVbaV0gPSB0aGlzLnBhcnNlVW5zaWduZWRJbnQodGhpcy5ieXRlcywgb2Zmc2V0VGFibGVPZmZzZXQgKyBpICogb2Zmc2V0U2l6ZSwgb2Zmc2V0VGFibGVPZmZzZXQgKyAoaSArIDEpICogb2Zmc2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudmlzaXQodG9wT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVmZmVyMlN0cmluZyhieXRlczogQnVmZmVyLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIsIGVuY29kaW5nOiBCdWZmZXJFbmNvZGluZyA9ICd1dGYtOCcpIHtcclxuICAgIHJldHVybiB0aGlzLmNvcHlPZlJhbmdlKGJ5dGVzLCBzdGFydEluZGV4LCBlbmRJbmRleCkudG9TdHJpbmcoZW5jb2RpbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29waWVzIGEgcGFydCBvZiBhIGJ5dGUgYXJyYXkgaW50byBhIG5ldyBhcnJheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzcmMgICAgICAgIFRoZSBzb3VyY2UgYXJyYXkuXHJcbiAgICogQHBhcmFtIHN0YXJ0SW5kZXggVGhlIGluZGV4IGZyb20gd2hpY2ggdG8gc3RhcnQgY29weWluZy5cclxuICAgKiBAcGFyYW0gZW5kSW5kZXggICBUaGUgaW5kZXggdW50aWwgd2hpY2ggdG8gY29weS5cclxuICAgKiBAcmV0dXJuIFRoZSBjb3BpZWQgYXJyYXkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjb3B5T2ZSYW5nZShzcmM6IEJ1ZmZlciwgc3RhcnRJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBlbmRJbmRleCAtIHN0YXJ0SW5kZXg7XHJcbiAgICBpZiAobGVuZ3RoIDwgMCkge1xyXG4gICAgICAvLyB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKGBzdGFydEluZGV4ICgke3N0YXJ0SW5kZXh9KVwiICsgXCIgPiBlbmRJbmRleCAoJHtlbmRJbmRleH0pYCk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHN0YXJ0SW5kZXggKCR7c3RhcnRJbmRleH0pXCIgKyBcIiA+IGVuZEluZGV4ICgke2VuZEluZGV4fSlgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzcmMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGFuIHVuc2lnbmVkIGludGVnZXIgZnJvbSBhIGJ5dGUgYXJyYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYnl0ZXMgVGhlIGJ5dGUgYXJyYXkgY29udGFpbmluZyB0aGUgdW5zaWduZWQgaW50ZWdlci5cclxuICAgKiBAcGFyYW0gc3RhcnRJbmRleCBCZWdpbm5pbmcgb2YgdGhlIHVuc2lnbmVkIGludCBpbiB0aGUgYnl0ZSBhcnJheS5cclxuICAgKiBAcGFyYW0gZW5kSW5kZXggRW5kIG9mIHRoZSB1bnNpZ25lZCBpbnQgaW4gdGhlIGJ5dGUgYXJyYXkuXHJcbiAgICogQHJldHVybiBUaGUgdW5zaWduZWQgaW50ZWdlciByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gYnl0ZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXJzZVVuc2lnbmVkSW50KGJ5dGVzOiBCdWZmZXIsIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IGwgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XHJcbiAgICAgIGwgPDw9IDg7XHJcbiAgICAgIGwgfD0gYnl0ZXNbaV0gJiAweGZmO1xyXG4gICAgfVxyXG4gICAgLy8gbCAmPSAweGZmZmZmZmZmZmY7XHJcbiAgICBsICY9IDB4ZmY7XHJcbiAgICByZXR1cm4gbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVXRmOFN0cmluZ0xlbmd0aChieXRlczogQnVmZmVyLCBvZmZzZXQ6IG51bWJlciwgbnVtQ2hhcmFjdGVyczogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGVuZ3RoID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2hhcmFjdGVyczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBPZmZzZXQgPSBvZmZzZXQgKyBsZW5ndGg7XHJcbiAgICAgIGlmIChieXRlcy5sZW5ndGggPD0gdGVtcE9mZnNldCkge1xyXG4gICAgICAgIC8vIFdBUk5JTkc6IEludmFsaWQgVVRGLTggc3RyaW5nLCBmYWxsIGJhY2sgdG8gbGVuZ3RoID0gbnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICAgICAgICByZXR1cm4gbnVtQ2hhcmFjdGVycztcclxuICAgICAgfVxyXG4gICAgICBpZiAoYnl0ZXNbdGVtcE9mZnNldF0gPCAweDgwKSB7XHJcbiAgICAgICAgbGVuZ3RoKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJ5dGVzW3RlbXBPZmZzZXRdIDwgMHhjMikge1xyXG4gICAgICAgIC8vIEludmFsaWQgdmFsdWUgKG1hcmtzIGNvbnRpbnVhdGlvbiBieXRlKSwgZmFsbCBiYWNrIHRvIGxlbmd0aCA9IG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAgICAgICAgcmV0dXJuIG51bUNoYXJhY3RlcnM7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZXNbdGVtcE9mZnNldF0gPCAweGUwKSB7XHJcbiAgICAgICAgaWYgKChieXRlc1t0ZW1wT2Zmc2V0ICsgMV0gJiAweGMwKSAhPT0gMHg4MCkge1xyXG4gICAgICAgICAgLy8gSW52YWxpZCBjb250aW51YXRpb24gYnl0ZSwgZmFsbCBiYWNrIHRvIGxlbmd0aCA9IG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICByZXR1cm4gbnVtQ2hhcmFjdGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVuZ3RoICs9IDI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZXNbdGVtcE9mZnNldF0gPCAweGYwKSB7XHJcbiAgICAgICAgaWYgKChieXRlc1t0ZW1wT2Zmc2V0ICsgMV0gJiAweGMwKSAhPT0gMHg4MCB8fCAoYnl0ZXNbdGVtcE9mZnNldCArIDJdICYgMHhjMCkgIT09IDB4ODApIHtcclxuICAgICAgICAgIC8vIEludmFsaWQgY29udGludWF0aW9uIGJ5dGUsIGZhbGwgYmFjayB0byBsZW5ndGggPSBudW1iZXIgb2YgY2hhcmFjdGVyc1xyXG4gICAgICAgICAgcmV0dXJuIG51bUNoYXJhY3RlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxlbmd0aCArPSAzO1xyXG4gICAgICB9IGVsc2UgaWYgKGJ5dGVzW3RlbXBPZmZzZXRdIDwgMHhmNSkge1xyXG4gICAgICAgIGlmICgoYnl0ZXNbdGVtcE9mZnNldCArIDFdICYgMHhjMCkgIT09IDB4ODAgfHwgKGJ5dGVzW3RlbXBPZmZzZXQgKyAyXSAmIDB4YzApICE9PSAweDgwIHx8IChieXRlc1t0ZW1wT2Zmc2V0ICsgM10gJiAweGMwKSAhPT0gMHg4MCkge1xyXG4gICAgICAgICAgLy8gSW52YWxpZCBjb250aW51YXRpb24gYnl0ZSwgZmFsbCBiYWNrIHRvIGxlbmd0aCA9IG51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICByZXR1cm4gbnVtQ2hhcmFjdGVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVuZ3RoICs9IDQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlYWRzIHRoZSBsZW5ndGggZm9yIGFycmF5cywgc2V0cyBhbmQgZGljdGlvbmFyaWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9iakluZm8gT2JqZWN0IGluZm9ybWF0aW9uIGJ5dGUuXHJcbiAgICogQHBhcmFtIG9mZnNldCAgT2Zmc2V0IGluIHRoZSBieXRlIGFycmF5IGF0IHdoaWNoIHRoZSBvYmplY3QgaXMgbG9jYXRlZC5cclxuICAgKiBAcmV0dXJuIEFuIGFycmF5IHdpdGggdGhlIGxlbmd0aCB0d28uIEZpcnN0IGVudHJ5IGlzIHRoZSBsZW5ndGgsIHNlY29uZCBlbnRyeSB0aGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBjb250ZW50IHN0YXJ0cy5cclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbzogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgbGV0IGxlbmd0aFZhbHVlID0gb2JqSW5mbztcclxuICAgIGxldCBvZmZzZXRWYWx1ZSA9IDE7XHJcbiAgICBpZiAob2JqSW5mbyA9PT0gMHhmKSB7XHJcbiAgICAgIGNvbnN0IGludF90eXBlID0gdGhpcy5ieXRlc1tvZmZzZXQgKyAxXTtcclxuICAgICAgY29uc3QgaW50VHlwZSA9IChpbnRfdHlwZSAmIDB4ZjApID4+IDQ7XHJcbiAgICAgIGlmIChpbnRUeXBlICE9PSAweDEpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEJpbmFyeVByb3BlcnR5TGlzdFBhcnNlcjogTGVuZ3RoIGludGVnZXIgaGFzIGFuIHVuZXhwZWN0ZWQgdHlwZSAke2ludFR5cGV9LiBBdHRlbXB0aW5nIHRvIHBhcnNlIGFueXdheS4uLmApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGludEluZm8gPSBpbnRfdHlwZSAmIDB4MGY7XHJcbiAgICAgIGNvbnN0IGludExlbmd0aCA9IE1hdGgucG93KDIsIGludEluZm8pO1xyXG4gICAgICBvZmZzZXRWYWx1ZSA9IDIgKyBpbnRMZW5ndGg7XHJcbiAgICAgIGlmIChpbnRMZW5ndGggPCAzKSB7XHJcbiAgICAgICAgbGVuZ3RoVmFsdWUgPSB0aGlzLnBhcnNlVW5zaWduZWRJbnQodGhpcy5ieXRlcywgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMiArIGludExlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGVuZ3RoVmFsdWUgPSBuZXcgQmlnSW50KHRoaXMuY29weU9mUmFuZ2UodGhpcy5ieXRlcywgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMiArIGludExlbmd0aCkpLmludFZhbHVlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbbGVuZ3RoVmFsdWUsIG9mZnNldFZhbHVlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBhbiBvYmplY3QgaW5zaWRlIHRoZSBjdXJyZW50bHkgcGFyc2VkIGJpbmFyeSBwcm9wZXJ0eSBsaXN0LlxyXG4gICAqIEZvciB0aGUgZm9ybWF0IHNwZWNpZmljYXRpb24gY2hlY2tcclxuICAgKiA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvQ0YvQ0YtODU1LjE3L0NGQmluYXJ5UExpc3QuY1wiPlxyXG4gICAqIEFwcGxlJ3MgYmluYXJ5IHByb3BlcnR5IGxpc3QgcGFyc2VyIGltcGxlbWVudGF0aW9uPC9hPi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCBJRC5cclxuICAgKiBAcmV0dXJuIFRoZSBwYXJzZWQgb2JqZWN0LlxyXG4gICAqIEB0aHJvd3MgUHJvcGVydHlMaXN0Rm9ybWF0RXhjZXB0aW9uIFdoZW4gdGhlIHByb3BlcnR5IGxpc3QncyBmb3JtYXQgY291bGQgbm90IGJlIHBhcnNlZC5cclxuICAgKiBAdGhyb3dzIFVuc3VwcG9ydGVkRW5jb2RpbmdFeGNlcHRpb24gV2hlbiBhIE5TU3RyaW5nIG9iamVjdCBjb3VsZCBub3QgYmUgZGVjb2RlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHZpc2l0KG9iajogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9mZnNldFRhYmxlW29ial07XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy5ieXRlc1tvZmZzZXRdO1xyXG4gICAgY29uc3Qgb2JqVHlwZSA9ICh0eXBlICYgMHhmMCkgPj4gNDsgLy8gRmlyc3QgIDQgYml0c1xyXG4gICAgY29uc3Qgb2JqSW5mbyA9IHR5cGUgJiAweDBmOyAvLyBTZWNvbmQgNCBiaXRzXHJcblxyXG4gICAgc3dpdGNoIChvYmpUeXBlKSB7XHJcbiAgICAgIGNhc2UgMHgwOiB7XHJcbiAgICAgICAgLy8gU2ltcGxlXHJcbiAgICAgICAgc3dpdGNoIChvYmpJbmZvKSB7XHJcbiAgICAgICAgICBjYXNlIDB4MDoge1xyXG4gICAgICAgICAgICAvLyBudWxsIG9iamVjdCAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgJGtleTogJ251bGwnLFxyXG4gICAgICAgICAgICAgICR2YWx1ZTogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAweDg6IHtcclxuICAgICAgICAgICAgLy8gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAka2V5OiAnZmFsc2UnLFxyXG4gICAgICAgICAgICAgICR2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgMHg5OiB7XHJcbiAgICAgICAgICAgIC8vIHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAka2V5OiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgJHZhbHVlOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIDB4Yzoge1xyXG4gICAgICAgICAgICAvLyBVUkwgd2l0aCBubyBiYXNlIFVSTCAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgICAgIC8vIFRPRE8gSW1wbGVtZW50IGJpbmFyeSBVUkwgcGFyc2luZyAobm90IHlldCBldmVuIGltcGxlbWVudGVkIGluIENvcmUgRm91bmRhdGlvbiBhcyBvZiByZXZpc2lvbiA4NTUuMTcpXHJcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbihcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGEgVVJMIG9iamVjdC4gUGFyc2luZyBvZiB0aGlzIG9iamVjdCB0eXBlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQuYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAweGQ6IHtcclxuICAgICAgICAgICAgLy8gVVJMIHdpdGggYmFzZSBVUkwgKHYxLjAgYW5kIGxhdGVyKVxyXG4gICAgICAgICAgICAvLyBUT0RPIEltcGxlbWVudCBiaW5hcnkgVVJMIHBhcnNpbmcgKG5vdCB5ZXQgZXZlbiBpbXBsZW1lbnRlZCBpbiBDb3JlIEZvdW5kYXRpb24gYXMgb2YgcmV2aXNpb24gODU1LjE3KVxyXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb24oXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhIFVSTCBvYmplY3QuIFBhcnNpbmcgb2YgdGhpcyBvYmplY3QgdHlwZSBpcyBub3QgeWV0IGltcGxlbWVudGVkLmApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgMHhlOiB7XHJcbiAgICAgICAgICAgIC8vIDE2LWJ5dGUgVVVJRCAodjEuMCBhbmQgbGF0ZXIpXHJcbiAgICAgICAgICAgIC8vIFRPRE8gSW1wbGVtZW50IGJpbmFyeSBVVUlEIHBhcnNpbmcgKG5vdCB5ZXQgZXZlbiBpbXBsZW1lbnRlZCBpbiBDb3JlIEZvdW5kYXRpb24gYXMgb2YgcmV2aXNpb24gODU1LjE3KVxyXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb24oXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhIFVVSUQgb2JqZWN0LiBQYXJzaW5nIG9mIHRoaXMgb2JqZWN0IHR5cGUgaXMgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIC8vIHRocm93IG5ldyBQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24oYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhbiBvYmplY3Qgb2YgdW5rbm93biB0eXBlICgke29ialR5cGV9KWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgZ2l2ZW4gYmluYXJ5IHByb3BlcnR5IGxpc3QgY29udGFpbnMgYW4gb2JqZWN0IG9mIHVua25vd24gdHlwZSAoJHtvYmpUeXBlfSlgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDE6IHtcclxuICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5wb3coMiwgb2JqSW5mbyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgMSwgb2Zmc2V0ICsgMSArIGxlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnaW50ZWdlcicsXHJcbiAgICAgICAgICAkdmFsdWU6IHBhcnNlSW50KHZhbHVlLCAxMClcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgyOiB7XHJcbiAgICAgICAgLy8gcmVhbFxyXG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGgucG93KDIsIG9iakluZm8pO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIG9mZnNldCArIDEsIG9mZnNldCArIDEgKyBsZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJGtleTogJ2Zsb2F0JyxcclxuICAgICAgICAgICR2YWx1ZTogcGFyc2VGbG9hdCh2YWx1ZSlcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHgzOiB7XHJcbiAgICAgICAgLy8gRGF0ZVxyXG4gICAgICAgIGlmIChvYmpJbmZvICE9PSAweDMpIHtcclxuICAgICAgICAgIC8vIHRocm93IG5ldyBQcm9wZXJ0eUxpc3RGb3JtYXRFeGNlcHRpb24oYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhIGRhdGUgb2JqZWN0IG9mIGFuIHVua25vd24gdHlwZSAoJHtvYmpJbmZvfSlgKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBnaXZlbiBiaW5hcnkgcHJvcGVydHkgbGlzdCBjb250YWlucyBhIGRhdGUgb2JqZWN0IG9mIGFuIHVua25vd24gdHlwZSAoJHtvYmpJbmZvfSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICRrZXk6ICdkYXRlJyxcclxuICAgICAgICAgICR2YWx1ZTogbmV3IERhdGUodGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIG9mZnNldCArIDEsIG9mZnNldCArIDkpKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDQ6IHtcclxuICAgICAgICAvLyBEYXRhOiBpbnRlcnByZXRlZCBhcyBCYXNlLTY0IGVuY29kZWRcclxuICAgICAgICBjb25zdCBsZW5ndGhBbmRPZmZzZXQ6IG51bWJlcltdID0gdGhpcy5yZWFkTGVuZ3RoQW5kT2Zmc2V0KG9iakluZm8sIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoQW5kT2Zmc2V0WzBdO1xyXG4gICAgICAgIGNvbnN0IGRhdGFPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgZGF0YU9mZnNldCwgb2Zmc2V0ICsgZGF0YU9mZnNldCArIGxlbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnZGF0YScsXHJcbiAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4NToge1xyXG4gICAgICAgIC8vIEFTQ0lJIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07IC8vIEVhY2ggY2hhcmFjdGVyIGlzIDEgYnl0ZVxyXG4gICAgICAgIGNvbnN0IHN0ck9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBvZmZzZXQgKyBzdHJPZmZzZXQsIG9mZnNldCArIHN0ck9mZnNldCArIGxlbiwgJ2FzY2lpJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnYXNjaWknLFxyXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDY6IHtcclxuICAgICAgICAvLyBVVEYtMTYtQkUgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoQW5kT2Zmc2V0OiBudW1iZXJbXSA9IHRoaXMucmVhZExlbmd0aEFuZE9mZnNldChvYmpJbmZvLCBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3Qgc3RyT2Zmc2V0ID0gbGVuZ3RoQW5kT2Zmc2V0WzFdO1xyXG4gICAgICAgIC8vIFVURi0xNiBjaGFyYWN0ZXJzIGNhbiBoYXZlIHZhcmlhYmxlIGxlbmd0aCwgYnV0IHRoZSBDb3JlIEZvdW5kYXRpb24gcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgLy8gYXNzdW1lcyAyIGJ5dGUgY2hhcmFjdGVycywgdGh1cyBvbmx5IGNvdmVyaW5nIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmVcclxuXHJcbiAgICAgICAgY29uc3QgbGVuID0gY2hhcmFjdGVycyAqIDI7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHN0ck9mZnNldDtcclxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IG9mZnNldCArIHN0ck9mZnNldCArIGxlbjtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBzdGFydEluZGV4LCAoc3RhcnRJbmRleCArIG9mZnNldCkgKiAyICoqIDggKyBlbmRJbmRleCwgJ2Jhc2U2NCcpO1xyXG4gICAgICAgIC8vIGNvbnN0IHZhbHVlID0gdGhpcy5idWZmZXIyU3RyaW5nKHRoaXMuYnl0ZXMsIG9mZnNldCArIHN0ck9mZnNldCwgb2Zmc2V0ICsgc3RyT2Zmc2V0ICsgbGVuZ3RoLCAnYmFzZTY0Jyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQmFzZTY0KHZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2U2NENvbnRlbnQodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAka2V5OiAndXRmLTE2JyxcclxuICAgICAgICAgICAgJHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAweDc6IHtcclxuICAgICAgICAvLyBVVEYtOCBzdHJpbmcgKHYxLjAgYW5kIGxhdGVyKVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBzdHJPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGxlbmd0aEFuZE9mZnNldFswXTtcclxuICAgICAgICAvLyBVVEYtOCBjaGFyYWN0ZXJzIGNhbiBoYXZlIHZhcmlhYmxlIGxlbmd0aCwgc28gd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlIGJ5dGUgbGVuZ3RoIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgLy8gYnkgcmVhZGluZyB0aGUgVVRGLTggY2hhcmFjdGVycyBvbmUgYnkgb25lXHJcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5jYWxjdWxhdGVVdGY4U3RyaW5nTGVuZ3RoKHRoaXMuYnl0ZXMsIG9mZnNldCArIHN0ck9mZnNldCwgY2hhcmFjdGVycyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmJ1ZmZlcjJTdHJpbmcodGhpcy5ieXRlcywgb2Zmc2V0ICsgc3RyT2Zmc2V0LCBvZmZzZXQgKyBzdHJPZmZzZXQgKyBsZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJGtleTogJ3V0Zi04JyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHg4OiB7XHJcbiAgICAgICAgLy8gVUlEICh2MS4wIGFuZCBsYXRlcilcclxuICAgICAgICBjb25zdCBsZW4gPSBvYmpJbmZvICsgMTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBVSUQoXHJcbiAgICAgICAgICBvYmoudmFsdWVPZigpLFxyXG4gICAgICAgICAgdGhpcy5jb3B5T2ZSYW5nZSh0aGlzLmJ5dGVzLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAxICsgbGVuKSxcclxuICAgICAgICAgIHRoaXMuYnVmZmVyMlN0cmluZyh0aGlzLmJ5dGVzLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAxICsgbGVuKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAndWlkJyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhhOiB7XHJcbiAgICAgICAgLy8gQXJyYXlcclxuICAgICAgICBjb25zdCBsZW5ndGhBbmRPZmZzZXQ6IG51bWJlcltdID0gdGhpcy5yZWFkTGVuZ3RoQW5kT2Zmc2V0KG9iakluZm8sIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoQW5kT2Zmc2V0WzBdO1xyXG4gICAgICAgIGNvbnN0IGFycmF5T2Zmc2V0ID0gbGVuZ3RoQW5kT2Zmc2V0WzFdO1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheShsZW4pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG9ialJlZiA9IHRoaXMucGFyc2VVbnNpZ25lZEludChcclxuICAgICAgICAgICAgdGhpcy5ieXRlcyxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgYXJyYXlPZmZzZXQgKyBpICogdGhpcy5vYmplY3RSZWZTaXplLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBhcnJheU9mZnNldCArIChpICsgMSkgKiB0aGlzLm9iamVjdFJlZlNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB2YWx1ZS5wdXNoKHRoaXMudmlzaXQob2JqUmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJGtleTogJ2FycmF5JyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhiOiB7XHJcbiAgICAgICAgLy8gT3JkZXJlZCBzZXQgKHYxLjAgYW5kIGxhdGVyKVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aEFuZE9mZnNldDogbnVtYmVyW10gPSB0aGlzLnJlYWRMZW5ndGhBbmRPZmZzZXQob2JqSW5mbywgb2Zmc2V0KTtcclxuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGhBbmRPZmZzZXRbMF07XHJcbiAgICAgICAgY29uc3QgY29udGVudE9mZnNldCA9IGxlbmd0aEFuZE9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgb2JqUmVmID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KFxyXG4gICAgICAgICAgICB0aGlzLmJ5dGVzLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgaSAqIHRoaXMub2JqZWN0UmVmU2l6ZSxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIChpICsgMSkgKiB0aGlzLm9iamVjdFJlZlNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB2YWx1ZS5hZGQodGhpcy52aXNpdChvYmpSZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnb3JkZXItc2V0JyxcclxuICAgICAgICAgICR2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMHhjOiB7XHJcbiAgICAgICAgLy8gU2V0ICh2MS4wIGFuZCBsYXRlcilcclxuICAgICAgICBjb25zdCBsZW5ndGhBbmRPZmZzZXQ6IG51bWJlcltdID0gdGhpcy5yZWFkTGVuZ3RoQW5kT2Zmc2V0KG9iakluZm8sIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoQW5kT2Zmc2V0WzBdO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG9ialJlZiA9IHRoaXMucGFyc2VVbnNpZ25lZEludChcclxuICAgICAgICAgICAgdGhpcy5ieXRlcyxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIGkgKiB0aGlzLm9iamVjdFJlZlNpemUsXHJcbiAgICAgICAgICAgIG9mZnNldCArIGNvbnRlbnRPZmZzZXQgKyAoaSArIDEpICogdGhpcy5vYmplY3RSZWZTaXplXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdmFsdWUuYWRkKHRoaXMudmlzaXQob2JqUmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJGtleTogJ3NldCcsXHJcbiAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDB4ZDoge1xyXG4gICAgICAgIC8vIERpY3Rpb25hcnlcclxuICAgICAgICBjb25zdCBsZW5ndGhBbmRPZmZzZXQ6IG51bWJlcltdID0gdGhpcy5yZWFkTGVuZ3RoQW5kT2Zmc2V0KG9iakluZm8sIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoQW5kT2Zmc2V0WzBdO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSBsZW5ndGhBbmRPZmZzZXRbMV07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGtleVJlZiA9IHRoaXMucGFyc2VVbnNpZ25lZEludChcclxuICAgICAgICAgICAgdGhpcy5ieXRlcyxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIGkgKiB0aGlzLm9iamVjdFJlZlNpemUsXHJcbiAgICAgICAgICAgIG9mZnNldCArIGNvbnRlbnRPZmZzZXQgKyAoaSArIDEpICogdGhpcy5vYmplY3RSZWZTaXplXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgdmFsUmVmID0gdGhpcy5wYXJzZVVuc2lnbmVkSW50KFxyXG4gICAgICAgICAgICB0aGlzLmJ5dGVzLFxyXG4gICAgICAgICAgICBvZmZzZXQgKyBjb250ZW50T2Zmc2V0ICsgbGVuICogdGhpcy5vYmplY3RSZWZTaXplICsgaSAqIHRoaXMub2JqZWN0UmVmU2l6ZSxcclxuICAgICAgICAgICAgb2Zmc2V0ICsgY29udGVudE9mZnNldCArIGxlbiAqIHRoaXMub2JqZWN0UmVmU2l6ZSArIChpICsgMSkgKiB0aGlzLm9iamVjdFJlZlNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZpc2l0KGtleVJlZik7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZpc2l0KHZhbFJlZik7XHJcbiAgICAgICAgICB2YWx1ZS5zZXQoa2V5LiRrZXkudG9TdHJpbmcoKSwgdmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAka2V5OiAnZGljdGlvbmFyeScsXHJcbiAgICAgICAgICAkdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IFByb3BlcnR5TGlzdEZvcm1hdEV4Y2VwdGlvbihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGFuIG9iamVjdCBvZiB1bmtub3duIHR5cGUgKCR7b2JqVHlwZX0pYCk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGdpdmVuIGJpbmFyeSBwcm9wZXJ0eSBsaXN0IGNvbnRhaW5zIGFuIG9iamVjdCBvZiB1bmtub3duIHR5cGUgKCR7b2JqVHlwZX0pYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNCYXNlNjQodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIC9eKFtcXCtcXC8tOUEtWmEtel17NH0pKihbXFwrXFwvLTlBLVphLXpdezR9fFtcXCtcXC8tOUEtWmEtel17M309fFtcXCtcXC8tOUEtWmEtel17Mn09PSkkL3UudGVzdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==