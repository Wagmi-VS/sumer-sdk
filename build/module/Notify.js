export class Notify {
    static error(msg) {
        const log = {
            message: msg.toString(),
            timestamp: Date.now(),
            wallet: msg.address,
        };
        console.error(log);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBTztRQUNoQixNQUFNLEdBQUcsR0FBRztZQUNSLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTztTQUN0QixDQUFBO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0NBQ0oifQ==