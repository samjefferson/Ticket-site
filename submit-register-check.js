function passwordStrength(){
	//this function is run from html file on keypress in password field
	//tests password strength y'all
	var valid = false
	var p = 0;
	var pass = $('password').value;
	var number = Boolean(pass.match(/\d+/));
	var len = Boolean((pass.length < 16) && (pass.length > 7));
	if((pass.match(/[a-z]/))&&(pass.match(/[A-Z]/)){
		p++;
	}
	var number = Boolean(pass.match(/\d+/));
	var len = Boolean((pass.length < 16) && (pass.length > 7));
	if(pass.length > 11){
		p++;
	}
	if(pass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){
		p++;
	}
	
	
	if((number = true)&&(len = true) && (p==0)){
		$('indicator').innerHTML('Weak');
		valid = true;
	}

	if((number = true)&&(len = true) && (p==1)){
		$('indicator').innerHTML('Moderate');
		valid = true;
	}

	if((number = true)&&(len = true) && (p==2)){
		$('indicator').innerHTML('Strong');
		valid = true;
	}

	if((number = true)&&(len = true) && (p==3)){
		$('indicator').innerHTML('Very Strong');
		valid = true;
	}
	if((number = false) || (len = false)){
		$('indicator').innerHTML('Invalid Password');
	}
	return valid;
}

function register(){
	valid = passwordStrength();

	if(valid = true){
		//adds the sheffield domain to the email prefix given
		$('email').value = ($('email').value).concat('sheffield.ac.uk');
		$('submit').submit;
	}
}
