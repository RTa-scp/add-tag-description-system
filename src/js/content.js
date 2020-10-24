
var json;
var json_trans;
const DATA_URL = 'https://script.google.com/macros/s/AKfycbwJCGLDJtZeBQ9pmnFfb8xwiLbIA2Wd_8vB4WPiEXAyx214SbM/exec';

function a(){
  fetch(DATA_URL).then(function(response) {
      return response.json();
  }).then(function(jsonData) {
    json = jsonData;
  });
}
function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //値が存在しなかったとき
}


    a();
  var obj = document.querySelectorAll("div.page-tags  span > a");
  var length = obj.length;
  for(var i = 0; i < length;i++) {
   obj.item(i).onmouseover = function () {
 var element = document.createElement("div");
 var index = getIndex(this.textContent,json, "tag");
 if(index!==-1){
   element.innerHTML =json[index].tag+'<br><span style="font-size:0.8em;max-width: unset;"><em>'+json[index].trans+"</em> ("+json[index].category+")</span><br>"+json[index].discription;
   element.className = "tooltip";
   element.style = 'position: absolute; border: 1px solid black; background:white; white-space: break-spaces; padding: 1em; color: #333; font-size: 1.1em;margin:0.5em;';
   this.appendChild(element);
 }else{
   element.innerHTML ="該当のタグは存在しません。";
   element.className = "tooltip";
   element.style = "position: absolute; border: 1px solid black; background:white; white-space: break-spaces; padding: 1em; color: #333; font-size: 1.1em;margin:0.5em;";
   this.appendChild(element);
 }
   }
   obj.item(i).onmouseout = function () {
 this.removeChild(this.childNodes.item(this.childNodes.length - 1)); 
   }
  }