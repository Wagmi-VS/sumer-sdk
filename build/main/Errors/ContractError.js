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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvQ29udHJhY3RFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBTXBDLFlBQVksYUFBcUIsRUFBRSxJQUFZLEVBQUUsSUFBZ0IsRUFBRSxPQUFlO1FBQzlFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLHFCQUFxQixJQUFJLENBQUMsYUFBYSxjQUFjLElBQUksQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUE7SUFDaEgsQ0FBQztDQUNKO0FBakJELHNDQWlCQyJ9