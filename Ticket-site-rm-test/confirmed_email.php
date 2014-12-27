<?php
	mysql_connect("localhost", "root", "");
	mysql_select_db("database");
	$key = $_GET['key'];
	//select rows with key same as confirmed key
	$strSQL = "SELECT FROM temporary_table WHERE code = '$key'";
	$accounts = mysql_query($strSQL);
	//check unique and used!
	$rownumber = mysql_num_rows($accounts);

	if($rownumber == 1){
		$rows = mysql_fetch_array($accounts);
		$username = $rows['username'];
		$email = $rows['email'];
		//again some encryption shit prolly
		$password = $['password'];

		$strSQL = "INSERT INTO accounts_table(name, email, password) VALUES('" . $name . "','" . $email . "', '" . $password . "')";
		$verified = mysql_query($strSQL);

	}

	else{
		echo "Confirmation code not recognised.";
	}

	if($verified){
		echo "Account activated.";

		$strSQL = "DELETE FROM temporary_table WHERE code = '$key'";
		mysql_query($strSQL);
	}

	else{
		echo "Activation failed";
	}

	mysql_close();

	?>


