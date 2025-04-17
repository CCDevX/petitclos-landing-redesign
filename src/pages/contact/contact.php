<?php
// Check if the form is submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve and sanitize the form data
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Verify that all fields are correctly filled
    if ($name && $email && $message) {
        // Destination email address (already set to your address)
        $to = 'info@lepetitclos.be';
        // Email subject
        $subject = 'New contact message from Le Petit Clos';
        // Construct the email body with the submitted data
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        // Prepare email headers: setting the 'From' and 'Reply-To' headers, and including PHP version info for debugging
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Attempt to send the email using the native mail() function
        if (mail($to, $subject, $body, $headers)) {
            echo "Votre message a été envoyé avec succès.";
            header('Location: /'); // Le '/' indique la racine du domaine
            exit(); // Important d'arrêter l'exécution du script après la redirection
        } else {
           echo "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.";
        }
    } else {
        // One or more fields are not filled correctly
        echo "Veuillez remplir correctement tous les champs du formulaire.";
    }
} else {
    // If the form is not submitted via POST, display a message
    echo "Méthode non autorisée.";
}
?>