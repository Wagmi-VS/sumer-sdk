"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractError = void 0;
class ContractError extends Error {
    constructor(addressOrName, name, args) {
        super();
        this.args = args;
        this.name = name;
        this.addressOrName = addressOrName;
    }
    toString() {
        return `Error on Contract ${this.addressOrName} function "${this.name}" with args "${this.args.toString()}" `;
    }
}
exports.ContractError = ContractError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvQ29udHJhY3RFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBSXBDLFlBQVksYUFBcUIsRUFBRSxJQUFZLEVBQUUsSUFBUTtRQUNyRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3RDLENBQUM7SUFDRCxRQUFRO1FBQ0osT0FBTyxxQkFBcUIsSUFBSSxDQUFDLGFBQWEsY0FBYyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFBO0lBQ2pILENBQUM7Q0FDSjtBQWJELHNDQWFDIn0=