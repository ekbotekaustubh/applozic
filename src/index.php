<?php
if (empty($_SESSION['userName'])) {
    echo '<a href="login.php">Login</a>';
} else {
    echo '<a href="logout.php">logout</a>';
}