const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  domain: {
    type: String,
    default: null,
  },
  orderId: {
    type: Number,
    unique: true,
  },
  orderStatusUrl: {
    type: String,
    unique: true,
  },
  lineItems:{
    type: JSON,

  },

  status: { type: String },
  fulfilled_at: { type: String },
  fulfillment_id: { type: String },
  company: { type: String },
  tracking_number: { type: String },
});

const OrderDB = mongoose.model("Orders", orderSchema);

module.exports = OrderDB;
