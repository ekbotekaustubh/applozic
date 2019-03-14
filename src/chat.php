<?php
session_start();
if (!empty($_POST['userName']) && !empty($_POST['password'])):
    $_SESSION['userName'] = $_POST['userName'];
    ?>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.applozic.com/applozic/applozic.chat-5.3.min.js"></script>
    <script type="text/javascript" src="../public/plugin/js/app/modules/applozic.jquery.js"></script>
    <script type="text/javascript" src="../public/plugin/js/app/fullview/applozic.fullview.js"></script>
    <script type="text/javascript" src="js/events.js"></script>
    <script type="text/javascript" src="js/applozic-custom-ui.js"></script>
    <script type="text/javascript">
        customApp.login('<?php echo $_POST['userName'];?>', '<?php echo $_POST['password'];?>', '<?php echo $_POST['userName'];?>', "{'title': 'Mercedes AMG GTC Coupe Edition 50', 'subtitle': 'Keramic Limited', 'link': 'https://www.bastrucks.com/photos/1280/Used-Car-Mercedes-AMG-GTC-Coupe-Edition-50-2018_136144_1.jpg?04102017', 'truckId': '70092900', 'registration': '2018'}");
    </script>
<?php endif;?>
