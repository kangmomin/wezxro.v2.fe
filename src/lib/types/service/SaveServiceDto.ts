export interface SaveServiceDto {
    serviceId: number|null
    apiServiceId: number
    rate: number
    description: string
    max: number
    cancel: boolean
    categoryId: number
    name: string
    dripfeed: boolean
    min: number
    originalRate: number
    providerId: number
    refill: boolean
    status: string
    type: string
}