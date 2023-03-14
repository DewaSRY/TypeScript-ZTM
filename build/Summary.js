"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, OutputTarget) {
        this.analyzer = analyzer;
        this.OutputTarget = OutputTarget;
    }
    buildAndReport(matches) {
        const output = this.analyzer.run(matches);
        this.OutputTarget.print(output);
    }
}
exports.Summary = Summary;
