document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      let input = parseInt(document.getElementById('input').value);
      let result = document.getElementById('result');
  
      let pattern = '';
      for (let i = input; i > 0; i--) {
        pattern += '*'.repeat(i) + '<br>';
      }
  
      result.innerHTML = pattern;
    });
  });
  