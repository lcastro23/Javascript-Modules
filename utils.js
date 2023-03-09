import {volume, surface_area, is_cube} from "./module_demo_functions.js";
import {length, width, height} from "./module_demo_functions.js";

let volume_result = volume(length, width, height);
let surface_area_result = surface_area(length, width, height);
let is_cube_result = is_cube(length, width, height);

let vp = document.createElement("p");
let sp = document.createElement("p");
let cp = document.createElement("p");

let vn = document.createTextNode("The volume is " + volume_result);
let sn = document.createTextNode("The surface area is " + surface_area_result);
let cn = document.createTextNode("The cube status is " + is_cube_result);

vp.appendChild(vn);
sp.appendChild(sn);
cp.appendChild(cn);

document.body.appendChild(vp);
document.body.appendChild(sp);
document.body.appendChild(cp);
