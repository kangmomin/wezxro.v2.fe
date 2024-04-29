export default interface ApiService {
    serviceId: number
    service: number
    clientId: string|null
    providerId: number
    categoryId: number
    apiServiceId: number|null
    name: string
    type: string
    rate: number
    min: number
    max: number
    description: string
    status: string
    originalRate: number
    dripfeed: boolean
    refill: boolean
    cancel: boolean
}
