import numeral from "numeral"

export async function load() {
    let totalCharge = formatter(10000);
    let money = formatter(1000);
    let totalOrder = 100
    let orderStatusCnt = {
        completed: 10,
        processing: 10,
        inprogress: 10,
        pending: 10,
        partials: 10,
        canceled: 10
    }
    let dailyOrderCount = [
        {
            status: "inprogress",
            daily: "2024-02-29",
            count: 2
        },{
            status: "partials",
            daily: "2024-02-29",
            count: 2
        }, {
            status: "canceled",
            daily: "2024-02-29",
            count: 2
        }
    ]

    return {
        totalCharge: totalCharge,
        money: money,
        totalOrder: totalOrder,
        orderStatusCnt: orderStatusCnt,
        dailyOrderCount: dailyOrderCount
    }
}
const formatter = (num) => numeral(num).format("0,0[.]00 \\");
