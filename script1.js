var table = document.getElementById('displayTable');
var cells = table.getElementsByTagName('td');
// var cell = document.getElementsById("inputQty")


for (var i = 1; i <cells.length; i++) {
  cells[i].onclick = function () {
     if (this.hasAttribute('data-clicked')) {
      return;
    }
    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-number', this.innerHTML);

    var input = document.createElement('input');
    input.setAttribute('data-number', 'number');
    input.value = this.innerHTML;
    input.style.width = this.offsetWidth - (this.clientLeft * 1) + "px";
    input.style.height = this.offsetHeight - (this.clientTop * 1) + "px";
    input.style.border = "0px";
    input.style.fontFamily = "inherit";
    input.style.fontSize = "inherit";
    input.style.textAlign = "inherit";
    input.style.backgroundColor = "#fff"
    input.style.maxWidth = "150px"
    
    input.onblur = function() {

      var td = input.parentElement;
      var orig_text = input.parentElement.getAttribute('data-number');
      var current_text = this.value

      if (orig_text != current_text) {
        //there are changes in cell's text
        // we can save the new database using ajax or api
        td.removeAttribute('data-clicked');
        td.removeAttribute('data-number');
        td.innerText = current_text;
      } else {
        td.removeAttribute('data-clicked');
        td.removeAttribute('data-number');
        td.innerText = orig_text;
      }
      
    }

    this.innerHTML = '';
    this.style.cssText = 'padding: 0px 0px';
    this.append(input);
  }
}


