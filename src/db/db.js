const mongoose =  require("mongoose");

async function ConnectDB() {

    await mongoose.connect("mongodb+srv://backend-data-storage:0iKIIpyfunW8ud4P@yt-backend-complete.yvq9qpp.mongodb.net/halley")

   console.log("Connected to DB")

}

module.exports = ConnectDB;