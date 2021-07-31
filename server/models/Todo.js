const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
