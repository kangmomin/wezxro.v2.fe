import type {OrderStatusCnt} from "$lib/types/OrderStatusCnt";

export default interface AdminOrderListDto {
    orderId: number,
    serviceId: number,
    serviceName: string,
    providerName: string,
    email: string,
    apiOrderId: number,
    link: string,
    count: number,
    charge: number,
    startCount: number,
    remain: number,
    createdAt: Date,
    status: OrderStatusCnt,
}