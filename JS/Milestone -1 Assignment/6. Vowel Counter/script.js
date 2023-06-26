function countVowels(name) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  function handleClick() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    const name = input.value;
    const numVowels = countVowels(name);
    result.textContent = `Number of vowels: ${numVowels}`;
  }
  
  const btn = document.getElementById('btn');
  btn.addEventListener('click', handleClick);
  