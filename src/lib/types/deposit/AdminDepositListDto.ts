export interface AdminDepositListDto {
	depositId: string,
	amount: number,
	name: string,
	email: string,
	status: string,
	note: string,
	updatedAt: Date
}