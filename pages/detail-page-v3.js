// add event handler
function submitComment() {

    // gather data
    const inputName = doc.getElementById("name").val;
    const inputMsg = doc.getElementById("msg").val;
  
    // create the elements you need
    const comment = doc.createElement("section");
    comment.classList.add("comment");
    const h3 = doc.createElement("h3");
    const p = doc.createElement("p");
  
    // adjust the elements we created
    comment.appendChild(h3).innerHTML = `${inputName} said:`;
    comment.appendChild(p).innerHTML = inputMsg;

    // style the elements we created
    comment.style.border = "thin groove #000000";
    comment.style.marginTop = "20px";
    comment.style.marginRight = "80px";
    comment.style.marginLeft = "80px"; 
  
    // display the elements on the page
    const commentSection = doc.getElementById("comments");
    commentSection.appendChild(comment);
  
    // reset form vals
    inputName.val = inputMsg.val = null;

  }