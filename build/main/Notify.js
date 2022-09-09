"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notify = void 0;
class Notify {
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
exports.Notify = Notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLE1BQU07SUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQU87UUFDaEIsSUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBRyxNQUFNLEVBQUM7WUFFN0IsTUFBTSxHQUFHLEdBQUc7Z0JBQ1IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU87YUFDdEIsQ0FBQTtZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0o7QUFiRCx3QkFhQyJ9