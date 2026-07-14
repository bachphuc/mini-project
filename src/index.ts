import colors from "colors";
import AppStart from "./core/app";

colors.enable();

require('dotenv').config()


console.log("Hello, World!".green);

AppStart();