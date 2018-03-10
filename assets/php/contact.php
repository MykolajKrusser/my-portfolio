<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'nicolaskrusser@gmail.com';
	$subject = 'From my portfolio';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = $name . ', Your message sent!';
    }
	else{
		$res['message'] = $name . ', mail has not being sent. Please mail me to nicolaskrusser@gmail.com';
	}
	
	
	echo json_encode($res);
}

?>