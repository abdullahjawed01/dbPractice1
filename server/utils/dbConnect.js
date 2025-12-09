import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

async function connect() {
    let URI = process.env.DBURI
    await mongoose.connect(URI)
    console.log("Server is connected");
}
// export default connect
connect()