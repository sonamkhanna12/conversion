function convertion() {
    let inputValue = document.getElementById('firstValue').value;
    console.log(inputValue);
    let result = document.getElementById('secondValue');
    result.value = inputValue * 1000;
  }