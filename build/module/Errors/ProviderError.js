export class ProviderError extends Error {
    msg;
    code;
    address;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFDcEMsR0FBRyxDQUFRO0lBQ1gsSUFBSSxDQUFRO0lBQ1osT0FBTyxDQUFRO0lBRWYsWUFBWSxHQUFXLEVBQUUsSUFBWSxFQUFFLE9BQU87UUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBQ0QsUUFBUTtRQUNKLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN2QyxDQUFDO0NBQ0oifQ==