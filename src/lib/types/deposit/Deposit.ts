export default interface Deposit {
	id: number
	userId: number
	amount: number
	name: string
	businessEmail: string
	businessPhone: string
	businessOwner: string
	businessName: string
	businessRegno: string
	personalPhone: string
	status: {
		CANCEL: "CANCEL",
		PENDING: "PENDING",
		DONE: "DONE"
	}
	type: string
	note: string
	clientId: string
}