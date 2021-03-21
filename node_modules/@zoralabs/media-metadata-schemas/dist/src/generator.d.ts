export declare class Generator {
    name: string;
    calVer: string;
    constructor(version: string);
    /**
     * Generates valid, minfied, and ordered (alphabetized keys) schema
     * Raises if the unordered json does not Validate against the Generator's schema
     *
     * @param unordered
     */
    generateJSON(unordered: {
        [key: string]: any;
    }): string;
}
