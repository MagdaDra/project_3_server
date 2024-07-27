const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required.'],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required.'],
			minLength: 8,
		},
		name: {
			type: String,
		},
		img: { type: String },
		typeOfUser: { type: String, required: true, enum: ['Customer', 'Seller'] },
		servicesBought: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
		servicesOffered: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	},
);

const User = model('User', userSchema);

module.exports = User;
