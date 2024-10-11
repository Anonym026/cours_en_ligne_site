<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $pdf = $_FILES['pdf'];

    $uploadDir = 'pdfs/';
    $uploadFile = $uploadDir . basename($pdf['name']);

    if (move_uploaded_file($pdf['tmp_name'], $uploadFile)) {
        echo "Le fichier a été téléversé avec succès.";
    } else {
        echo "Erreur lors du téléversement.";
    }
}
?>

