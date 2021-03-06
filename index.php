<?php
include './core/_bootstrap.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
    <title>The Thing</title>
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/assets/css/master.css">
</head>
<body>

<div style="height: 200px;"></div>

<div id="json-builder"></div>

<div style="height: 200px;"></div>

<div id="app-root"></div>

<div style="height: 200px;"></div>


<script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
<!--<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>-->
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<script src="<?php echo BASE_URL; ?>/assets/js/bundle.js" type="text/javascript"></script>

</body>
</html>