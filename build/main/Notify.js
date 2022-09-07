"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notify = void 0;
class Notify {
    static error(msg) {
        const log = {
            message: msg.toString(),
            timestamp: Date.now(),
            wallet: msg.address,
        };
        console.error(log);
    }
}
exports.Notify = Notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLE1BQU07SUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQU87UUFDaEIsTUFBTSxHQUFHLEdBQUc7WUFDUixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDdEIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztDQUNKO0FBVkQsd0JBVUMifQ==