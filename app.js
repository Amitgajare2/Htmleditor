// start Button
function start(){	
setTimeout(() => {
document.getElementById("home").style.display="none";
document.getElementById("main").style.display="block";
}, 1000);
};

// about button
function about(){	document.getElementById("main").style.display="none";
document.getElementById("about").style.display="block";
}

// chat room button
function chatr(){
	alert("Coming Soon..");
}


// about back button
function backf(){
	document.getElementById("about").style.display="none";
document.getElementById("main").style.display="block";
}



// run button
function run(){
	document.getElementById("main").style.display="none";
	document.getElementById("ifr").style.display="block";
	var code = document.querySelector("#code").value
document.querySelector("#out").srcdoc = code
}


// back button
function back(){	document.getElementById("ifr").style.display="none";
document.getElementById("main").style.display="block";
}


// help Button
function show(){
	alert("Main features of this code :\n1). Live output of codes. \n2). Download and Copy Code Buttons  \n3). Live Chat Room\n4). Share Code Button\n\nThere are many more thing you need to explore so now just go explore and enjoy");
}


// copy Button
function copy() {
  var copyText = document.getElementById("code");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("code");
  alert("Copied the text: " + copyText.value); 
}

//share button
function new_share() {
     var whatsapp_content = document.getElementById("code").value; if(whatsapp_content!=='') 
     { 
     
     var url = "https://api.whatsapp.com/send?text="+ whatsapp_content + whatsapp_link; document.getElementById('whatsapp_link').setAttribute("href",url); 
     } 
    } 
    

// Download button
  function saveTextAsFile() {   
        var textToSave = document.getElementById("code").value;     var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});     var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);     var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;       var downloadLink = document.createElement("a");     downloadLink.download = fileNameToSaveAs;     downloadLink.innerHTML = "Download File";     downloadLink.href = textToSaveAsURL;     downloadLink.onclick = destroyClickedElement;     downloadLink.style.display = "none";     document.body.appendChild(downloadLink);       downloadLink.click(); }   function destroyClickedElement(event) {     document.body.removeChild(event.target); }   function loadFileAsText() {     var fileToLoad = document.getElementById("fileToLoad").files[0];       var fileReader = new FileReader();     fileReader.onload = function(fileLoadedEvent)     {         var textFromFileLoaded = fileLoadedEvent.target.result;         document.getElementById("amit").value = textFromFileLoaded;     };     fileReader.readAsText(fileToLoad, "UTF-8"); }
        
        
