export class Notify {

    static error(msg) {
        const log = {
            msg: msg.toString(),
            timestamp: Date.now(),
            userAddr: msg.address,
        }
        console.error(log)

    }
}