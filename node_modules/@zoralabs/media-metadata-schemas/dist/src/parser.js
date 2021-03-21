"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const versions_1 = require("./versions");
class Parser {
    constructor(version) {
        versions_1.validateVersion(version);
        const [name, calVer] = version.split('-');
        this.name = name;
        this.calVer = calVer;
    }
    /**
     * Parses the JSON string
     *
     * @param json
     */
    parse(json) {
        const parsed = JSON.parse(json);
        return parsed;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map