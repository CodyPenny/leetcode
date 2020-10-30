function maximumContainers(arr) {
  if (arr === null || !arr.length) return;
  arr.forEach((customer) =>
    console.log(calculateSummation(splitIntoBudgetCostEmpty(customer)))
  );
  return;
}

function splitIntoBudgetCostEmpty(container) {
  return container.split('   ');
}

function buyContainers(budget, costPerContainer) {
  return Math.floor(+budget / +costPerContainer);
}

function calculateSummation([
  budget,
  costPerContainer,
  freeContainerRequirement
]) {
  const purchasedContainers = buyContainers(budget, costPerContainer);
  let receivedContainers = 0;
  let index = 0;
  while (freeContainerRequirement ** index <= purchasedContainers) {
    receivedContainers += Math.ceil(
      purchasedContainers / (+freeContainerRequirement) ** index
    );
    index++;
  }
  return receivedContainers;
}

let test = ['10   2   5', '12   4   4', '6   2   2', '8   4   2', '7   2   3'];
maximumContainers(test);
