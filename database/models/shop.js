const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  domain: { type: String, default: null, unique: true },
  storefrontAccessToken: {
    type: String,
    default: null,
    unique: true,
  },
  name: {
    type: String,
    default: null,
  },
  onboardingInfoCompleted: {
    type: Boolean,
    default: false,
  },
  termsAccepted: {
    type: Boolean,
    default: false,
  },
  onboardingCompleted: {
    type: Boolean,
    default: false,
  },
  meetsRequirements: {
    type: Boolean,
    default: false,
  },
  subscriptionId: {
    type: String,
    default: null,
  },
  subscriptionLineItemId: {
    type: String,
    default: null,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const ShopDB = mongoose.model("shops", shopSchema);

module.exports = ShopDB;
