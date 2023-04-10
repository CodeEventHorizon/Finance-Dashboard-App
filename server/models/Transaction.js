import mongoose from 'mongoose';
import accounting from 'accounting-js';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
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
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
