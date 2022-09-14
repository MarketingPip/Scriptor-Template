function getSelectionText() {
  if (window.getSelection) return window.getSelection().toString();
  if (document.selection && document.selection.type != 'Control') return document.selection.createRange().text;
  return '';
}

function addURL(){
 if (getSelectionText() != ""){
    var url = `[${getSelectionText()}]`
   var title = "(url)"
   
   console.log(`${url}${title}`)
 } else{
   var url = prompt("URL / Link")
   var title = prompt("Title For URL")
    console.log(`${url}${title}`)
 }
 
}
