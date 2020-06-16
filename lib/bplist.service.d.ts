/// <reference types="node" />
export declare class UID {
    private value;
    private buffer;
    private string;
    constructor(value: number, buffer: Buffer, string: string);
}
export declare class BplistService {
    /**
     * The property list data.
     */
    private bytes;
    /**
     * The parsed content.
     */
    private content;
    /**
     * Length of an object reference in bytes
     */
    private objectRefSize;
    /**
     * The table holding the information at which offset each object is found
     */
    private offsetTable;
    /**
     * Parses a binary property list from a binary base64 string.
     *
     * @param data The binary property list's data encoded as base64 string.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    parse64Content(data: string): any;
    /**
     * Parses a binary property list from a buffer.
     *
     * @param data The binary property list's data.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    parse(data: Buffer): any;
    toJson(map?: Map<any, any>): any;
    /**
     * Parses a binary property list from a byte array.
     *
     * @param data The binary property list's data.
     * @return The root object of the property list. This is usually a NSDictionary but can also be a NSArray.
     * @throws PropertyListFormatException When the property list's format could not be parsed.
     * @throws UnsupportedEncodingException When a NSString object could not be decoded.
     */
    private doParse;
    private buffer2String;
    /**
     * Copies a part of a byte array into a new array.
     *
     * @param src        The source array.
     * @param startIndex The index from which to start copying.
     * @param endIndex   The index until which to copy.
     * @return The copied array.
     */
    private copyOfRange;
    /**
     * Parses an unsigned integer from a byte array.
     *
     * @param bytes The byte array containing the unsigned integer.
     * @param startIndex Beginning of the unsigned int in the byte array.
     * @param endIndex End of the unsigned int in the byte array.
     * @return The unsigned integer represented by the given bytes.
     */
    private parseUnsignedInt;
    private calculateUtf8StringLength;
    /**
     * Reads the length for arrays, sets and dictionaries.
     *
     * @param objInfo Object information byte.
     * @param offset  Offset in the byte array at which the object is located.
     * @return An array with the length two. First entry is the length, second entry the offset at which the content starts.
     */
    private readLengthAndOffset;
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
    private visit;
    private isBase64;
}
