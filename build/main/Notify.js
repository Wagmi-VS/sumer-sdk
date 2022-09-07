"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notify = void 0;
class Notify {
    static error(msg) {
        const log = {
            msg: msg.toString(),
            timestamp: Date.now(),
            userAddr: msg.address,
        };
        console.error(log);
    }
}
exports.Notify = Notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLE1BQU07SUFFZixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDWixNQUFNLEdBQUcsR0FBRztZQUNSLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxHQUFHLENBQUMsT0FBTztTQUN4QixDQUFBO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUV0QixDQUFDO0NBQ0o7QUFYRCx3QkFXQyJ9