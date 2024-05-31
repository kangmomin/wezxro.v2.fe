export interface AddCustomRateRequest {
    userId: number;
    customRates: AddCustomRateList[];
}

export interface AddCustomRateList {
    crId?: number;
    serviceId: number;
    rate?: number;
}
