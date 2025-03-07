import { Schema, model } from 'mongoose';

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
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
  ]
}, {
  versionKey: false,
  timestamps: true
});

export default model('Cart', CartSchema);