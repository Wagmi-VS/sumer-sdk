export class Notify {

    static error(msg:any) {
        const log = {
            message: msg.toString(),
            timestamp: Date.now(),
            wallet: msg.address,
        }
        console.error(log)
    }
}