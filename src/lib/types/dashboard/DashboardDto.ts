export default interface DashboardDto {
	balance: number;
	totalUsed: number;
	totalOrder: number;
	orderStatusCnt: OrderStatusCntDto[];
}

interface OrderStatusCntDto {
	status: {
		COMPLETED: "COMPLETED",
		CANCELED: "CANCELED",
		PROCESSING: "PROCESSING",
		INPROGRESS: "INPROGRESS",
		PARTIALS: "PARTIALS",
		PENDING: "PENDING"
	};
	count: number;
	date: string; // 형식: yyyy-MM-dd
	charge: number;
}