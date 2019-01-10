// add event handler
function submitComment() {
  // gather data
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textArea = document.getElementById("msg");
  const msg = textArea.value;

  // create the elements you need
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  // adjust the elements we created
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");

  // style the elements
  comment.style.border = "thin groove #000000";
  comment.style.marginTop = "20px";
  comment.style.marginRight = "80px";
  comment.style.marginLeft = "80px";
  comment.appendChild(h3);
  comment.appendChild(p);

  // display the elements on the page
  const commentSection = document.getElementById("comments");
  commentSection.appendChild(comment);

  // reset form values
  inputField.value = null;
  textArea.value = null;
}
