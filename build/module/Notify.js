export class Notify {
    static error(msg) {
        const log = {
            msg: msg.toString(),
            timestamp: Date.now(),
            userAddr: msg.address,
        };
        console.error(log);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vdGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUVmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRztRQUNaLE1BQU0sR0FBRyxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3hCLENBQUE7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXRCLENBQUM7Q0FDSiJ9