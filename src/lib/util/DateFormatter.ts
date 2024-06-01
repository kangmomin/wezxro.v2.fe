export const dateFormat = (dateTime: Date) => {
    return new Date(dateTime).toLocaleTimeString("ko-KR", {
        year: "2-digit", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hourCycle: "h24",
    })
}