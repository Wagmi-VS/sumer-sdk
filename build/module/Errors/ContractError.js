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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9FcnJvcnMvQ29udHJhY3RFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFDcEMsYUFBYSxDQUFRO0lBQ3JCLElBQUksQ0FBUTtJQUNaLE9BQU8sQ0FBUTtJQUNmLElBQUksQ0FBWTtJQUVoQixZQUFZLGFBQXFCLEVBQUUsSUFBWSxFQUFFLElBQWdCLEVBQUUsT0FBZTtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxxQkFBcUIsSUFBSSxDQUFDLGFBQWEsY0FBYyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFBO0lBQ2hILENBQUM7Q0FDSiJ9