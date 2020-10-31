function slotWheels(history) {
  if (history === null || !history.length) return [];

  const historyMatrix = convertToSortedNumbers(history);

  let numberOfWheels = historyMatrix[0].length;
  let totalStops = 0;
  let spinPointer = 0;

  while (spinPointer < numberOfWheels) {
    const stops = [];
    for (let spin of historyMatrix) {
      stops.push(Math.max(...spin));
      spin.pop();
    }
    totalStops += Math.max(...stops);
    stops.pop();
    spinPointer++;
  }
  console.log({totalStops})
  return totalStops;
}

function convertToSortedNumbers(slots) {
  return slots.map((spin) => Array.from(spin, Number).sort((a, b) => a - b));
}

slotWheels(['712', '246', '365', '312']);
