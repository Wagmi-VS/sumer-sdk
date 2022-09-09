"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderError = void 0;
const eip_1 = require("./eip");
class ProviderError extends Error {
    constructor(message, code, address) {
        super(message);
        this.message = message;
        this.code = code;
        this.address = address;
        this.eip = (0, eip_1.findEipError)(code);
    }
    toString() {
        console.log('caca');
        if (this.eip) {
            return `[${this.code}] ${this.eip.description}`;
        }
        return `[${this.code}] ${this.message}`;
    }
}
exports.ProviderError = ProviderError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0M7QUFFL0MsTUFBYSxhQUFjLFNBQVEsS0FBSztJQUtwQyxZQUFZLE9BQWUsRUFBRSxJQUFZLEVBQUUsT0FBZTtRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsa0JBQVksRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUVqQyxDQUFDO0lBQ0QsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUNsRDtRQUNELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0NBQ0o7QUFwQkQsc0NBb0JDIn0=