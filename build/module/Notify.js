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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBTztRQUNoQixJQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFHLE1BQU0sRUFBQztZQUU3QixNQUFNLEdBQUcsR0FBRztnQkFDUixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTzthQUN0QixDQUFBO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNyQjtJQUNMLENBQUM7Q0FDSiJ9