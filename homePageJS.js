$(document).ready ( function(){
   $("#emailDiv").hide();
	$("#passwordDiv").hide();
	$("#loginOptionsDiv").hide();
});

function loginClicked() {
	$("#loginDiv").hide("slide");
	$("#registerDiv").hide("slide");
	
	$("#emailDiv").show("slide");
	$("#passwordDiv").show("slide");
	$("#loginOptionsDiv").show("slide");
}

function loginBackClicked() {
	$("#emailDiv").hide('slide');
	$("#passwordDiv").hide("slide");
	$("#loginOptionsDiv").hide("slide");
	
	$("#loginDiv").show("slide");
	$("#registerDiv").show("slide");
}
