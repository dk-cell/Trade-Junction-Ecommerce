const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    sender: {
      type: Array,
    },
    text: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Messages", messagesSchema);
