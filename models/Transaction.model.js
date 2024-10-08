const { Schema, model } = require('mongoose');

const transactionSchema = new Schema(
	{
		cart: [
			{
				serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
				quantity: Number,
				unitPrice: Number,
			},
		],
		total: Number,
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true,
	},
);

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
