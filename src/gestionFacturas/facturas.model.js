import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            producto: {
                type: Schema.Types.ObjectId,
                ref: 'Producto',
                required: true,
            },
            cantidad: {
                type: Number,
                required: true,
                min: 1
            },
        }
    ],
    total: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Order', OrderSchema);