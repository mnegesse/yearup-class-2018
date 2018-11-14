// let newElement = document.createElement('img');
// // newElement.src = https:"upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";
// //
// newElement.className = "pictures";
// let parent = document.getElementById('div')
// // parent.appendChild(newElement);


// class Art {
//   constructor(url, frame){
//     this.frame = frame;
//     this.url = url;
//
//     this.container = document.getElementById('images');
//     this.element = document.createElement('img');
//
//   }
//
//   render(){
//     this.element.src = this.url;
//     this.element.className = this.frame;
//     this.container.appendChild(this.element);
//     //do things to the DOM here
//   }
// }
//
// let pic = new Art("imagess.jpg", "class");
//
//
// pic.render();
//
// console.log(pic);
//
// class Classical extends Art {
//   constructor(color, url, frame){
//     super(url, frame);
//     this.color = color;
//     this.element = document.createElement('img');
//     this.container.appendChild(this.element);
//     this.image.src = url;
//   }
// }
// let pics = new Art("imagess.jpg", "color");
// pics.render();

// let input = document.getElementById('text');
// let warning = document.getElementById('warn');
//
// function email(event){
//  if (input.value.includes("@") && input.value.includes(".com")){
//    console.log(input.value);
//     warning.innerHTML = "";
//   } else {
//     warning.innerHTML = "Please Enter a Valid Email.";
//   }
// }
//
// console.log(input)
// input.addEventListener('keypress', email);



let button = document.getElementById('button');
function changebackground(event){
  // if(event.type === 'keyup' && event.key === 'Enter')
  let body = document.getElementById('body');
  let input = document.getElementById('input');
  body.className = input.value;
}
button.addEventListener("click",changebackground);
// input.addEventListener("keyup", changebackground);
