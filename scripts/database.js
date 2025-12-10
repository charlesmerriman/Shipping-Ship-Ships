export const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Misty Galleon", dockId: 1 },
    { id: 2, name: "Starry Barque", dockId: 3 },
    { id: 3, name: "Stellar Horizon", dockId: 2 },
    { id: 4, name: "Golden Schooner", dockId: 4 },
    { id: 5, name: "Swift Brigantine", dockId: 3 },
  ],
  shippingShips: [
    { id: 1, name: "Esso Atlantic", haulerId: 1 },
    { id: 2, name: "Prairial", haulerId: 2 },
    { id: 3, name: "Palais Royal", haulerId: 3 },
    { id: 4, name: "Rivoli", haulerId: 2 },
    { id: 5, name: "Champs Elysee", haulerId: 5 },
    { id: 6, name: "Ever Ace", haulerId: 4 },
    { id: 7, name: "Nissei Maru", haulerId: 3 },
    { id: 8, name: "MSC Gulsun", haulerId: 1 },
    { id: 9, name: "HMM Rotterdam", haulerId: 4 },
    { id: 10, name: "CMA CGM Trocadero", haulerId: 3 },
  ],
};

export const getDocks = () => {
  // You write the code for copying the array and returning it
  return structuredClone(database.docks);
};

export const getHaulingShips = () => {
  // You write the code for copying the array and returning it
  return structuredClone(database.haulers);
};

export const getShippingShips = () => {
  // You write the code for copying the array and returning it
  return structuredClone(database.shippingShips);
};
