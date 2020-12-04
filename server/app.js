const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

var port = process.env.PORT || 4000;

require("./Routes/mastery")(app);
require("./Routes/user")(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));
