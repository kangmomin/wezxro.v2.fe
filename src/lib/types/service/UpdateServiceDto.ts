export interface UpdateServiceDto {
    serviceId: number
    description: string
    providerId: number
    apiServiceId: number
    categoryId: number
    max: number
    min: number
    rate: number
    status: number
    originalRate: number
    name: string
    type: string
}