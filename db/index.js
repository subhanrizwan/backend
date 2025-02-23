import mongoose from "mongoose";

mongoose.connect(
  'mongodb://hadi:hadi@cluster0-shard-00-00.ogpty.mongodb.net:27017,cluster0-shard-00-01.ogpty.mongodb.net:27017,cluster0-shard-00-02.ogpty.mongodb.net:27017/hanbhai?ssl=true&replicaSet=atlas-qcg62n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
)

export default mongoose;
