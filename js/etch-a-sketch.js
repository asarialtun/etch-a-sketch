var size = 16;
$(document).ready(function() {
	var boxSize=getBoxSize(size);
  var box = defineBox(boxSize);
  createGrid(box,boxSize);
  startDrawing();
  
  function defineBox(boxSize){
  	var box = document.createElement('div');
    box.style.height=boxSize+"px";
    box.style.width=boxSize+"px";
    box.className="box";    
    return box;
  }
  
  function getBoxSize(size) {
  	var boxSize=640/size;
    return boxSize;
  }
  
  $("button#btn_setSize").on("click", function() {
    
    do{
  	   size=prompt("Enter a number up to 64");
      }while(size<=0||size>64||isNaN(size))

    boxSize=getBoxSize(size);
    box=defineBox(boxSize);
    createGrid(box,boxSize);
    startDrawing();
  });

  function createGrid(box,boxSize){
    $("#wrapper").empty();
    var lineBox=document.createElement('div');
    lineBox.className="lineBox";
    $('#wrapper').append(lineBox);
      for(var i=0; i<size; i++){
        $("#wrapper > .lineBox ").append(defineBox(boxSize));
      }

      for(var i=1; i<size;i++){
        $('#wrapper').append($('.lineBox').clone().removeClass('lineBox').addClass('lineBoxed'));
      }
      $('.lineBox').removeClass('lineBox').addClass('lineBoxed');
      $('.lineBoxed').css("height", boxSize+1); 
    }

  function startDrawing()
  { 
    $('.box').mouseenter(function(){
    $(this).removeClass('box').addClass('redbox');
    console.log("Mouse enter a div");
  }
    );

  $('.box').mouseleave(function(){
    console.log("Mouse leave a div");
  }
    );
}


  }
);
