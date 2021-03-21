"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const jsonschema_1 = require("jsonschema");
const versions_1 = require("./versions");
class Validator {
    constructor(version) {
        // require version <name>-<calver>
        versions_1.validateVersion(version);
        const [name, calVer] = version.split('-');
        this.name = name;
        this.calVer = calVer;
    }
    /**
     * Validates the passed json against the Validator's schema
     *
     * @param json
     */
    validate(json) {
        const jsonValidator = new jsonschema_1.Validator();
        const schema = require(`../schemas/${this.name}/${this.calVer}.json`);
        return jsonValidator.validate(json, schema).valid;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map