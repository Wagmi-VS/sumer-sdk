export class Notify {

    static error(msg:any) {
        if(process.env.NODE_ENV!=='test'){

            const log = {
                message: msg.toString(),
                timestamp: Date.now(),
                wallet: msg.address,
            }
            console.error(log)
        }
    }
}