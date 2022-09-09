export class Notify {
    static error(msg) {
        if (process.env.NODE_ENV !== 'test') {
            const log = {
                message: msg.toString(),
                timestamp: Date.now(),
                wallet: msg.address,
            };
            console.error(log);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sTUFBTTtJQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBa0M7UUFDM0MsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFFakMsTUFBTSxHQUFHLEdBQUc7Z0JBQ1IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU87YUFDdEIsQ0FBQTtZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0oifQ==