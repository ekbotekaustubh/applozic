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
    <script type="text/javascript" src="js/bas-applozic.js"></script>
    <script type="text/javascript">
        customApp.login('<?php echo $_POST['userName'];?>', '<?php echo $_POST['password'];?>', '<?php echo $_POST['userName'];?>', "{'title': 'Mercedes AMG GTC Coupe Edition 50', 'subtitle': 'Keramic Limited', 'link': 'https://www.bastrucks.com/photos/1280/Used-Car-Mercedes-AMG-GTC-Coupe-Edition-50-2018_136144_1.jpg?04102017', 'truckId': '70092900', 'registration': '2018'}");
    </script>
    <input type="file" name="file" id="file">
<!--    <a id="mck-btn-loc" href="#" target="_self" class="menu-item"-->
<!--       title="Location"> <img-->
<!--            src="../public/plugin/images/mck-icon-marker.png" class="menu-icon"-->
<!--            alt="Location" onclick="$applozic('#gMap').show();"> <span>Location</span>-->
<!--    </a>-->
<!--    <div id="gMap" style="width: 200px;height: 200px; ">-->
<!--        --><?php //include 'map.html'; ?>
<!--    </div>-->
<?php endif;?>

