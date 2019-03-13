<?php
session_start();
if (empty($_SESSION['userName'])) {
    header('location: login.php');
    exit;
}