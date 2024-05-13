export interface ServiceListDto {
    serviceId: number
    name: string
    providerId: number
    categoryId: number,
    originalRate: number,
    apiServiceId: number
    type: string
    rate: number
    min: number
    max: number
    description: string
    status: number
}