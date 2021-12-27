// variable declare
const num = document.getElementById('number');
const result = document.getElementById('result')
const submit = document.getElementById('submit');

// function
function decToBin(e){
  e.preventDefault();
  
  const input = num.value;
  if(input === ''){
    alert(`Please enter a number`);
  }else if(input < 0){
    alert(`Please enter a positive number`);
  }else{
    result.style.visibility = 'visible';
    result.innerHTML = Number(input).toString(2);
  }
}

submit.addEventListener('click', decToBin);
