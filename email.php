<?php
if(isset($_POST['submit'])){
    $to = "vladcancode@gmail.com"; // this is your Email address
    $from = $_POST['contact']; // this is the sender's Email address
    $subject = "Form submission";
    $message = $from . " wrote the following:" . "\n\n" . $_POST['request'];
    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
