enum OrderStatus {
	COMPLETED = "completed",
	CANCELED = "canceled",
	PROCESSING = "processing",
	INPROGRESS = "inprogress",
	PARTIALS = "partials",
	PENDING = "pending"
}

export default interface OrderListDto {
	orderId: number,
	serviceId: number,
	serviceName: string,
	link: string,
	count: number,
	charge: number,
	startCount: number,
	remain: number,
	createdAt: Date,
	status: OrderStatus,
}