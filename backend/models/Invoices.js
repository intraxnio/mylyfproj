const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Invoice_Schema = new Schema({

  invoice_number: {
    type: String,
  },

  buyer_name : {
    type : String
  },

  buyer_mobile_number : {
    type: String
  },

  buyer_email : {
    type: String
  },

  buyer_gst : {
    type: String
  },

  shortUrl : {
    type: String
  },

  route_enabled: {
    type: Boolean,
    default: false
},

route_settlement_status: {
  type: String,
  default: ''
},

route_source: {
  type: String,
  default: ''
},

is_route_done: {
  type: Boolean,
  default: false
},

  payment_link_id : {
    type: String
  },

  transfer_id : {
    type: String
  },

  linked_account_id: {
    type: String
    },

  brandUser_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brands",
  },

  payment_status: {
    type: String,
  },

  invoice_pdf_file: {
    type: String,
    default: ''
  },

  invoice_amount : {
    type: Number
  },

  captured_amount: {
    type: Number,
  },

  products_details: [  ],

  is_del: {
    type: Boolean,
    default: false,
  },

  is_active: {
    type: Boolean,
    default: false,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
  },
});

const Invoice_Schema_Model = mongoose.model("invoices", Invoice_Schema);
module.exports = Invoice_Schema_Model;
