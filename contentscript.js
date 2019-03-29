// var greeting = "hola, ";
// var button = document.getElementById("mybutton");
// button.person_name = "Roberto";
// button.addEventListener("click", function() {
//   alert(greeting + button.person_name + ".");
// }, false);

console.log('test')

setTimeout(function() {
  var dom_arr = window.frames["iframeResult"].document.querySelectorAll('.GridTableContent .briefDl_D');
  
  // dom_arr.map(function(dom) {
  //   console.log(dom.href)
  // })
  dom_arr.forEach(element => {
    const href = element.href;

    console.log(href + '&dflag=pdfdown')
  });
}, 5000)

