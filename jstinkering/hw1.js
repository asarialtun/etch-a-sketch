var sizeValue=0;
var wrapperSize = 640;
var borderWidth=2;
var clickCountArray;
function initialize(){

	document.getElementById("wrapper").innerHTML="";

	sizeValue = parseInt(document.getElementById("size").value);

	clickCountArray= new Array(sizeValue*sizeValue);


	var wrapper = document.getElementById("wrapper");
	wrapper.style.width=wrapperSize+"px";
	wrapper.style.height=wrapperSize+"px";

	for(var i=0; i<sizeValue; i++){
		for(var j=0; j<sizeValue; j++){
			var myDiv = document.createElement('div');
			myDiv.className="cell";
			myDiv.style.width=wrapperSize/sizeValue-2*borderWidth+"px"
			myDiv.style.height=wrapperSize/sizeValue-2*borderWidth+"px"
			myDiv.style.borderWidth=borderWidth+"px";
			myDiv.style.borderStyle="solid";
			myDiv.id=i*sizeValue+j;
			clickCountArray[myDiv.id]=0;
			myDiv.addEventListener("mouseover",
					function(){
						this.style.backgroundColor=(document.getElementById("colorPicker").value);
					}
				);

			myDiv.addEventListener("mouseleave",
					function(){
						this.style.backgroundColor="grey";
					}
				);

			myDiv.addEventListener("click",
					function(){
						clickCountArray[parseInt(this.id)]++;
						this.innerHTML="<label class='numberText'>"+clickCountArray[parseInt(this.id)]+"</label>";
					}
				);			
			wrapper.appendChild(myDiv);
		}
	}

}

