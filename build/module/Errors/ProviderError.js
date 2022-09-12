import { BaseError } from "./BaseError";
import { findEipError } from "./eip";
export class ProviderError extends BaseError {
    address;
    eip;
    constructor(message, code, address) {
        super(message, code);
        this.address = address;
        this.eip = findEipError(code);
    }
    toString() {
        if (this.eip) {
            return `[${this.code}] ${this.eip.description}`;
        }
        return `[${this.code}] ${this.message}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBWSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFL0MsTUFBTSxPQUFPLGFBQWMsU0FBUSxTQUFTO0lBQ3hDLE9BQU8sQ0FBUTtJQUNmLEdBQUcsQ0FBVTtJQUNiLFlBQVksT0FBZSxFQUFFLElBQVMsRUFBRSxPQUFlO1FBQ25ELEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFakMsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ2xEO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzNDLENBQUM7Q0FDSiJ9