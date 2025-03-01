import mongoose from "mongoose";

mongoose.connect(
  'mongodb+srv://subhan:subhan@cluster0.8fftb.mongodb.net/FirstDb?retryWrites=true&w=majority&appName=Cluster0'
)

export default mongoose;
