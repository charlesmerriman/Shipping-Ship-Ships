import { shippingShipsList } from "./shippingShipList.js";
import { docksList } from "./dockList.js";
import { haulersList } from "./haulerList.js";

const container = document.querySelector("#container");

const shippingShipHTML = `
<h1>Shipping Ship List</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Haulers</h2>
        ${haulersList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${docksList()}
    </section>
</article>`;

container.innerHTML = shippingShipHTML;
