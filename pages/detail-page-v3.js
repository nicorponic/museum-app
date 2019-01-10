// add event handler
function submitComment() {
    // gather data
    let inputName = document.getElementById("name").value;
    let inputMsg = document.getElementById("msg").value;
  
    // create the elements you need
    let comment = document.createElement("section");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
  
    // adjust the elements we created
    comment.classList.add("comment");
    comment.appendChild(h3).innerHTML = `${inputName} said:`;
    comment.appendChild(p).innerHTML = inputMsg;
  
    // style the elements
    comment.style.border = "thin groove #000000";
    comment.style.marginTop = "20px";
    comment.style.marginRight = "80px";
    comment.style.marginLeft = "80px";
  
    // display the elements on the page
    let commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
  
    // reset form values
    inputName = null;
    inputMsg = null;
  }
  