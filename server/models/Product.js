import mongoose from 'mongoose';
import accounting from 'accounting-js';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: String,
      currency: 'USD',
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    expense: {
      type: String,
      currency: 'USD',
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
