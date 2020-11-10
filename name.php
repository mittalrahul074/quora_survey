<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (!empty($name)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "test";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT name From name Where ";
        $INSERT = "INSERT Into register (name) values(?)";
        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->execute();
        $stmt->store_result();
        $stmt->store_result();
        $stmt->fetch();
        $rnum = $stmt->num_rows;
        $stmt->close();
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ssssii", $name);
        $stmt->execute();
        echo "New record inserted sucessfully";
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}
?>