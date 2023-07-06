let sentence = document.getElementById('sentence');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const words = sentence.value.split(" ");
    const map = new Map();

    for (let word of words){
        if (map.has(word)){
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    
    let result = document.createElement('h4');
    result.textContent = Array.from(map).map(([word, count]) => `${word}: ${count}`).join(', ');

    document.body.appendChild(result);
});
