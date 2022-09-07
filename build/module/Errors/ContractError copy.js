export class ContractError extends Error {
    addressOrName;
    name;
    args;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvciBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0Vycm9ycy9Db250cmFjdEVycm9yIGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLO0lBQ3BDLGFBQWEsQ0FBUTtJQUNyQixJQUFJLENBQVE7SUFDWixJQUFJLENBQUk7SUFDUixZQUFZLGFBQXFCLEVBQUUsSUFBWSxFQUFFLElBQVE7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUN0QyxDQUFDO0lBQ0QsUUFBUTtRQUNKLE9BQU8scUJBQXFCLElBQUksQ0FBQyxhQUFhLGNBQWMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQTtJQUNqSCxDQUFDO0NBQ0oifQ==