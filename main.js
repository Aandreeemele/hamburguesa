import { pan } from "./pan.js";
import { queso } from "./queso.js";
import { tomate } from "./tomate.js";
import { queso2 } from "./queso2.js";
import { cebolla } from "./cebolla.js";
import { avondiga } from "./avondiga.js";
import { lechuga } from "./lechuga.js";
import { carne } from "./carne.js";
import { plato } from "./plato.js";

let root = document.querySelector("#root");
let estructura = document.createElement("div");
estructura.className = "estructura";

root.appendChild(estructura);

pan(estructura);
queso(estructura);
tomate(estructura);
queso2(estructura);
cebolla(estructura);
avondiga(estructura);
lechuga(estructura);
carne(estructura);
plato(estructura);