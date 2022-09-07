export class ContractError extends Error {
    addressOrName;
    name;
    address;
    args;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvQ29udHJhY3RFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFDcEMsYUFBYSxDQUFRO0lBQ3JCLElBQUksQ0FBUTtJQUNaLE9BQU8sQ0FBUTtJQUNmLElBQUksQ0FBSTtJQUVSLFlBQVksYUFBcUIsRUFBRSxJQUFZLEVBQUUsSUFBUSxFQUFFLE9BQWU7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8scUJBQXFCLElBQUksQ0FBQyxhQUFhLGNBQWMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQTtJQUNoSCxDQUFDO0NBQ0oifQ==