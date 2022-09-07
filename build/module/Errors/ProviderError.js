export class ProviderError extends Error {
    msg;
    code;
    constructor(msg, code) {
        super();
        this.msg = msg;
        this.code = code;
    }
    toString() {
        return `[${this.code}] ${this.msg}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdmlkZXJFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvUHJvdmlkZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFDcEMsR0FBRyxDQUFRO0lBQ1gsSUFBSSxDQUFRO0lBQ1osWUFBWSxHQUFXLEVBQUUsSUFBWTtRQUNqQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUNELFFBQVE7UUFDSixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDdkMsQ0FBQztDQUNKIn0=