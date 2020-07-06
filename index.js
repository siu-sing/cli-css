let args = process.argv;

//hex or rgb
let input = args[2];

let hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  let componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  let rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

let res = null;
switch(input){
    case "hex":
        let hex = args[3];
        res = hexToRgb(hex);
        break;
    case "rgb":
        res = rgbToHex(parseInt(args[3]),parseInt(args[4]),parseInt(args[5]))
        break;
}
console.log(res);