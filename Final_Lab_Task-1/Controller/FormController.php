<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $website = $_POST["website"];
    $comment = $_POST["comment"];
    $gender = isset($_POST["gender"]) ? $_POST["gender"] : "";

    if ($name === "" || $email === "" || $gender === "") {
        echo "Name, Email, Gender cannot be empty.<br>";
    } else {

        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            echo "Name must contain only letters and spaces.<br>";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid Email Format.<br>";
        } elseif ($website !== "" && !filter_var($website, FILTER_VALIDATE_URL)) {
            echo "Invalid Website URL.<br>";
        } else {
            $data = [
                "name" => $name,
                "email" => $email,
                "website" => $website,
                "comment" => $comment,
                "gender" => $gender
            ];

            $file = "../data.json";

            if (file_exists($file)) {
                $existingData = json_decode(file_get_contents($file), true);
            } else {
                $existingData = [];
            }

            $existingData[] = $data;

            file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT));
            setcookie("user_name", $name, time() + (86400 * 7));
            setcookie("user_email", $email, time() + (86400 * 7));

            echo "Data saved successfully & cookies set.";
        }
    }
}

?>