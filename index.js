
const rgbInput = require("./rgbInput");
const hexInput = require("./hexInput");
let args = process.argv;

//hex or rgb
let input = args[2];


let res = null;
switch(input){
    case "hex":
        let hex = args[3];
        res = hexInput.hexToRgb(hex);
        break;
    case "rgb":
        res = rgbInput.rgbToHex(parseInt(args[3]),parseInt(args[4]),parseInt(args[5]))
        break;
}
console.log(res);