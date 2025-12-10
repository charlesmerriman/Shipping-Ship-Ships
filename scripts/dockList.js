import { getDocks, getHaulingShips } from "./database.js"

const docks = getDocks()
const haulingShips = getHaulingShips()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target
	if (itemClicked.dataset.type === "dock") {
		const dockId = itemClicked.dataset.id
		let ships = []
		for (const haulingShip of haulingShips) {
			if (haulingShip.dockId === parseInt(dockId)) {
				ships.push(haulingShip.name)
			}
		}
		if (ships.length === 0) {
			window.alert(`${itemClicked.innerHTML} is currently unloading nothing`)
		} else {
			window.alert(
				`${itemClicked.innerHTML} is currently unloading ${ships.join(", ")}`
			)
		}
	}
})

// When dock is clicked, present a message to the user that follows:
//  The Shanghai, China dock is currently unloading Boaty McBoatface

// If no hauler is at the dock:
// The Shanghai, China dock is currently unloading nothing

// If there is more than one hauler at the dock:
// The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant

export const docksList = () => {
	let docksHTML = "<ul>"

	for (const dock of docks) {
		// Convert each dock object to an <li> and append to the docksHTML string
		docksHTML += `<li data-id="${dock.id}" data-dockVolume="${dock.volume}" data-type="dock">${dock.location}</li>`
	}

	docksHTML += "</ul>"

	return docksHTML
}

// test change
