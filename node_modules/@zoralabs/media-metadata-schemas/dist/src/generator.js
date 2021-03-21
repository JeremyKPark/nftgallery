"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const validator_1 = require("./validator");
const versions_1 = require("./versions");
class Generator {
    constructor(version) {
        versions_1.validateVersion(version);
        const [name, calVer] = version.split('-');
        this.name = name;
        this.calVer = calVer;
    }
    /**
     * Generates valid, minfied, and ordered (alphabetized keys) schema
     * Raises if the unordered json does not Validate against the Generator's schema
     *
     * @param unordered
     */
    generateJSON(unordered) {
        // validate the schema
        const version = this.name.concat('-').concat(this.calVer);
        const validator = new validator_1.Validator(version);
        const validated = validator.validate(unordered);
        if (!validated) {
            throw new Error(`JSON does not conform to the ${version} schema.`);
        }
        // alphabetize key
        const ordered = {};
        Object.keys(unordered)
            .sort()
            .forEach(key => {
            ordered[key] = unordered[key];
        });
        return JSON.stringify(ordered); // minify
    }
}
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map