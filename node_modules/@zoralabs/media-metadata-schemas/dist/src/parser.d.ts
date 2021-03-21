import { MetadataLike } from '../types/types';
export declare class Parser {
    name: string;
    calVer: string;
    constructor(version: string);
    /**
     * Parses the JSON string
     *
     * @param json
     */
    parse(json: string): MetadataLike;
}
