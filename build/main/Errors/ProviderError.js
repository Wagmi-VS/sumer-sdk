"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderError = void 0;
class ProviderError extends Error {
    constructor(msg, code, address) {
        super(msg);
        this.msg = msg;
        this.code = code;
        this.address = address;
    }
    toString() {
        return `[${this.code}] ${this.msg}`;
    }
}
exports.ProviderError = ProviderError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBS3BDLFlBQVksR0FBVyxFQUFFLElBQVksRUFBRSxPQUFPO1FBQzFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUNELFFBQVE7UUFDSixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDdkMsQ0FBQztDQUNKO0FBZEQsc0NBY0MifQ==