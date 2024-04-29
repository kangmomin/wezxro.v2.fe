export interface Service {
    serviceId: number
    clientId: string
    providerId: number
    categoryId: number
    apiServiceId: number
    name: string
    type: string
    rate: number
    min: number
    max: number
    description: string
    status: string
    originalRate: number
}