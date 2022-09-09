"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderError = void 0;
const BaseError_1 = require("./BaseError");
const eip_1 = require("./eip");
class ProviderError extends BaseError_1.BaseError {
    constructor(message, code, address) {
        super(message, code);
        this.address = address;
        this.eip = (0, eip_1.findEipError)(code);
    }
    toString() {
        if (this.eip) {
            return `[${this.code}] ${this.eip.description}`;
        }
        return `[${this.code}] ${this.message}`;
    }
}
exports.ProviderError = ProviderError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0M7QUFDeEMsK0JBQStDO0FBRS9DLE1BQWEsYUFBYyxTQUFRLHFCQUFTO0lBR3hDLFlBQVksT0FBZSxFQUFFLElBQVksRUFBRSxPQUFlO1FBQ3RELEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGtCQUFZLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFFakMsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ2xEO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzNDLENBQUM7Q0FDSjtBQWZELHNDQWVDIn0=