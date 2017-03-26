// What do I want to do?
// Clicka a swatch to add that color to the header

var element = document.getElementById('triangle-container');

for(var i = 1; i <150; i++) {
  element.innerHTML = element.innerHTML + '<div class="pattern-element"><span class="letter">&nbsp;</span></div>'
};


document.addEventListener('DOMContentLoaded', function() {
  var patternElements = document.getElementsByClassName('pattern-element');

  for (var i = 0; i < patternElements.length; i++) {
    patternElements[i].addEventListener('click', function() {

      // Only one selected at a time
      // var currentSelection = document.querySelector('.selected');
      //
      // if(currentSelection != null) {
      //   currentSelection.className = 'pattern-element';
      // };
      if(this.className.includes('selected')) {
        var classes = this.className.replace('selected', '');
        this.className = classes;
        return;
      };

      this.className += ' selected';
    }, false)
  };
});
