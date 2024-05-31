import type {Account} from "$lib/types/Account/Account";

export interface CustomRateList {
    id: number,
    serviceId: number,
    serviceName: string
    originalRate: number,
    customRate: number
}