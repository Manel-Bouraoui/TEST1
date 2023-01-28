import mongoose from "mongoose";
const usineSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
      },
  name: {
    type: String,
    required: true,
  },
  
  address: {
    type: String,
    required: true,
  },
  
  machines: {
    type: [String],
  },
  
});

export default mongoose.model("Usine", usineSchema)