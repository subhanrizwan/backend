import mongoose from "mongoose";

mongoose.connect(
  'mongodb+srv://subhan:subhan@cluster.mongodb.net/?retryWrites=true&w=majority'
)

export default mongoose;
