const fileInfos = require("./information.js")
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${fileInfos.infos.name} in the ${fileInfos.infos.campus} campus!!`,
    e : "oO",
    T : "U "
}));