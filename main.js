
// Handling the Enter keypress
function handleEnterKey(input, button) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      button.click();  // Triggers the button click when Enter is pressed
    }
  });
}

// Exercise 1: Filtering an Array
const input1 = document.getElementById('input1');
const result1 = document.getElementById('result1');
const output1 = document.getElementById('output1');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
  const arr = input1.value.split(',').map(Number);
  output1.innerHTML = arr.filter(num => num % 2 === 0).join(', ');
  result1.classList.remove('hidden');
});

// Call the function to handle "Enter" key for Exercise 1
handleEnterKey(input1, btn1);

// Exercise 2: Find the Largest Number
const input2 = document.getElementById('input2');
const result2 = document.getElementById('result2');
const output2 = document.getElementById('output2');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
  const arr = input2.value.split(',').map(Number);
  output2.innerHTML = Math.max(...arr).toString();
  result2.classList.remove('hidden');
});

handleEnterKey(input2, btn2);

// Exercise 3: Reverse a String
const input3 = document.getElementById('input3');
const result3 = document.getElementById('result3');
const output3 = document.getElementById('output3');
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
  output3.innerHTML = input3.value.split('').reverse().join('');
  result3.classList.remove('hidden');
});

handleEnterKey(input3, btn3);

// Exercise 4: Remove Duplicates
const input4 = document.getElementById('input4');
const result4 = document.getElementById('result4');
const output4 = document.getElementById('output4');
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
  const arr = input4.value.split(',').map(Number);
  output4.innerHTML = [...new Set(arr)].join(', ');
  result4.classList.remove('hidden');
});

handleEnterKey(input4, btn4);
