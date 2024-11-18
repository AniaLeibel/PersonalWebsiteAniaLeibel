function handleCostKeydown(event) {
  if(event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value); //when you add Number in front of the (inputElement.value) it converts the string to a number//

  if(cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost')
  .innerHTML = `$${cost}`;
}