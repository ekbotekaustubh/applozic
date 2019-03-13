<?php
session_start();
if (!empty($_POST['userName']) && !empty($_POST['password'])):
    $_SESSION['userName'] = $_POST['userName'];
    ?>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="../public/plugin/js/app/modules/applozic.chat.js"></script>
    <script type="text/javascript" src="../public/plugin/js/app/modules/applozic.jquery.js"></script>
    <script type="text/javascript" src="js/events.js"></script>
    <script type="text/javascript" src="js/applozic-custom-ui.js"></script>
    <script type="text/javascript">
        customApp.login('<?php echo $_POST['userName'];?>', '<?php echo $_POST['password'];?>', '<?php echo $_POST['userName'];?>');
    </script>
<?php endif;?>
