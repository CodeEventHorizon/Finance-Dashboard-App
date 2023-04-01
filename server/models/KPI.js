import mongoose from 'mongoose';
import accounting from 'accounting-js';

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    expenses: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    expenses: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    operationalExpenses: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    nonOperationalExpenses: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    totalRevenue: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    totalExpenses: {
      type: String,
      currency: 'USD',
      // get: (v) => v / 100,
      set: (v) => {
        const value = parseFloat(v.replace('$', ''));
        const formattedValue = accounting.formatMoney(value, {
          symbol: '$',
          precision: 2,
        });
        return formattedValue;
      },
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: String,
        currency: 'USD',
        // get: (v) => v / 100,
        set: (v) => {
          const value = parseFloat(v.replace('$', ''));
          const formattedValue = accounting.formatMoney(value, {
            symbol: '$',
            precision: 2,
          });
          return formattedValue;
        },
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;
