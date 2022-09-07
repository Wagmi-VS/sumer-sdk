"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractError = void 0;
class ContractError extends Error {
    constructor(addressOrName, name, args, address) {
        super();
        this.args = args;
        this.name = name;
        this.address = address;
        this.addressOrName = addressOrName;
    }
    toString() {
        return `Error on Contract ${this.addressOrName} function "${this.name}" with args "${this.args.toString()}"`;
    }
}
exports.ContractError = ContractError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvQ29udHJhY3RFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBTXBDLFlBQVksYUFBcUIsRUFBRSxJQUFZLEVBQUUsSUFBUSxFQUFFLE9BQWU7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8scUJBQXFCLElBQUksQ0FBQyxhQUFhLGNBQWMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQTtJQUNoSCxDQUFDO0NBQ0o7QUFqQkQsc0NBaUJDIn0=