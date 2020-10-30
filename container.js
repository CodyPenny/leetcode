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

function calculateSummation([
  budget,
  costPerContainer,
  freeContainerRequirement
]) {
  const purchasedContainers = Math.floor(+budget / +costPerContainer);
  let receivedContainerSum = 0;
  let index = 0;

  while (freeContainerRequirement ** index <= purchasedContainers) {
    receivedContainerSum += Math.ceil(
      purchasedContainers / (+freeContainerRequirement) ** index
    );
    index++;
  }
  return receivedContainerSum;
}

let test = ['10   2   5', '12   4   4', '6   2   2', '8   4   2', '7   2   3'];
maximumContainers(test);
