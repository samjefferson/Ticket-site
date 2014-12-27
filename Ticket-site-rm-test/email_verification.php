<?php 
	mysql_connect("localhost", "root", "");
	mysql_select_db("database");

	// Random confirmation code
	$code = md5(uniqid(rand())); 

	$username = $_POST['username'];
	$email = $_POST['email'];
	//whatever encryption required, blah blah blah
	$password = $_POST['password'];

	$strSQL = "INSERT INTO temporary_table(username, email, password, code) VALUES('" . $username . "' , '" . $email "' ,'" . $password . "','" . $code . "')";
	mysql_query($strSQL);
	mysql_close();
	//now send email ye
	
	//subject
	$subject = "Verify your e-mail for (ticket website name)";
	//message
	$body = "Thanks for registering with (ticket website name)";
	$body. = "You can activate your account by clicking the link below.";
	$body. = "(da fucking url where the confirmaiton page is at yo with key=code on the end bro)";

	//send it bruh
	$confirmsend = mail($email, $subject, $body);

	if($confirmsend){
		echo "Confirmation e-mail has been sent.";
	}
	else{
		echo "An error occurred";
	}

	?>
