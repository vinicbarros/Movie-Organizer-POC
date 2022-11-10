import app from "./src/app.js";
import "dotenv/config";
app.listen(process.env.PORT, function () {
    console.log("Server is running on ".concat(process.env.PORT, "..."));
});
