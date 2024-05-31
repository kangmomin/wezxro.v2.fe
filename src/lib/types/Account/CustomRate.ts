import type {Account} from "$lib/types/Account/Account";

export interface CustomRate {
    id: number,
    serviceId: number,
    user: Account,
    rate: number
}