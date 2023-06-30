var paragraph = document.getElementById('myParagraph');
var words = paragraph.textContent.split(' ');

for (var i = 0; i < words.length; i++) {
  var word = words[i];

  if (word.length > 8) {
    var span = document.createElement('span');
    
    span.classList.add('highlight');

    span.textContent = word;

    words[i] = span.outerHTML;
  }
}

paragraph.innerHTML = words.join(' ');
