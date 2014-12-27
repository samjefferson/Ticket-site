function passwordStrength(){
	//this function is run from html file on keypress in password field
	//tests password strength y'all
	var p = 0;
	var pass = (document.getElementById("pass").value);
	var number = false;
	if(pass.match(/\d+/)){
		number = true;
	}
	var len = false;
	if((pass.length < 16) && (pass.length > 7)){
		len = true;
	}

	if((pass.match(/[a-z]/))&&(pass.match(/[A-Z]/))){
		p++;
	}
	if(pass.length > 11){
		p++;
	}
	if(pass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){
		p++;
	}
	
	
	if((number === true)&&(len === true) && (p==0)){
		document.getElementById("indicator").innerHTML = "Weak" ;
	
	}

	if((number === true)&&(len === true) && (p==1)){
		document.getElementById('indicator').innerHTML = "Moderate";
	
	}

	if((number === true)&&(len === true) && (p==2)){
		document.getElementById('indicator').innerHTML = "Strong";
	
	}

	if((number === true)&&(len === true) && (p==3)){
		document.getElementById('indicator').innerHTML = "Very Strong";
	
	}
	
}

function submit(){
		//adds the sheffield domain to the email prefix given
		document.getElementById('email').value = (document.getElementById('email').value).concat('sheffield.ac.uk');
}
