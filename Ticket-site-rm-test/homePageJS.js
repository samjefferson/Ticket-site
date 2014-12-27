$(document).ready ( function(){
   $("#emailDiv").hide();
	$("#passwordDiv").hide();
});

function loginClicked() {
	$("#loginDiv").hide("slide");
	$("#registerDiv").hide("slide");
	
	$("#emailDiv").show("slide");
	$("#passwordDiv").show("slide");
}