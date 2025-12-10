import { getShippingShips, getHaulingShips } from "./database.js";

const shippingShipList = getShippingShips();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shippingship") {
    // Get the haulerId value of the shipping ship clicked
    const haulerId = itemClicked.dataset.id;
    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };

    // Iterate the array of hauler objects
    const haulingShips = getHaulingShips();
    for (const ship of haulingShips) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (ship.id === parseInt(haulerId)) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = ship.name;
        // Show an alert to the user with this format...
        window.alert(
          `${itemClicked.innerHTML} is being hauled by ${haulingShip}`
        );
        // Palais Royal is being hauled by Seawise Giant
      }
    }
  }
});

export const shippingShipsList = () => {
  let shippingShipHTML = "<ul>";

  const sortedShips = structuredClone(shippingShipList).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  for (const shippingShip of sortedShips) {
    // Convert each dock object to an <li> and append to the docksHTML string
    shippingShipHTML += `<li 
            data-Id="${shippingShip.id}" 
            data-shippingShipHaulerId="${shippingShip.haulerId}" 
            data-type="shippingship"
        >${shippingShip.name}</li>`;
  }

  shippingShipHTML += "</ul>";

  return shippingShipHTML;
};
