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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLE1BQU07SUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQWtDO1FBQzNDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1lBRWpDLE1BQU0sR0FBRyxHQUFHO2dCQUNSLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDckIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3RCLENBQUE7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztDQUNKO0FBYkQsd0JBYUMifQ==