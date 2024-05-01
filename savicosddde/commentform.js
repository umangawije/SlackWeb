
function validateForm() {
  var n = document.forms["myForm"]["name"].value;
  if (n == "") {
      alert("Please enter your name.");
      return false;
  }

  var email = document.forms["myForm"]["email"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
      alert("You have entered an invalid email address!");
      document.forms["myForm"]["email"].focus();
      return false;
  }

  // If the form is valid, display the "Thank you" message on the webpage
  var messageElement = document.getElementById("message");
  messageElement.innerHTML = "Thank you for taking the time to give us your feedback on your experience today";

  // Clear the form after submission (optional)
  document.getElementById("myForm").reset();

  // Return false to prevent the form from submitting (to keep the message displayed)
  return false;
}
/*script for select method*/

var x, i, j, l, ll, selElmnt, a, b, c; /*declaration of several variables: x, i, j, l, ll, selElmnt, a, b, and c*/
/*look for any elements with the class "custom-select":*/

x = document.getElementsByClassName("custom-select");/* looks for any HTML elements with the class "custom-select" using document.getElementsByClassName("custom-select")*/
l = x.length;/*loops through all elements with that class and obtains the first <select> element inside it using getElementsByTagName("select")[0] (for line 29 t0 31)*/
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");/*sets the class attribute of this new <div> to "select-selected" using a.setAttribute("class", "select-selected")*/
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;/*The text inside the selected item is set to the text of the currently selected option in the original select element, which is obtained using selElmnt.options[selElmnt.selectedIndex].innerHTML*/
  x[i].appendChild(a);/*The newly created <div> element is then appended to the original custom select element using x[i].appendChild(a)*/
  
  b = document.createElement("DIV");/*After creating the selected item, the script then creates a new <div> element that will contain the option list using document.createElement("DIV")*/
  b.setAttribute("class", "select-items select-hide");/*The class attribute of this new <div> is set to "select-items select-hide" using b.setAttribute("class", "select-items select-hide")*/
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;/*creates a new DIV element c and sets its innerHTML to the text content of the jth option in the selElmnt select element. This DIV element will serve as an option item in the custom dropdown menu*/
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];/*retrieves the <select> element associated with the clicked option in the dropdown menu. this refers to the clicked <div> element, and parentNode refers to the parent of the clicked element, which is the <div> element containing all the option elements. The parent of that <div> is the one containing both the <select> element and the newly created <div> elements, hence the double use of parentNode. Finally, getElementsByTagName("select")[0] retrieves the first <select> element within that parent element*/
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

