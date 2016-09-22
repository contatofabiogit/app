<?php
  try {
      $conf = new PDO("mysql:host=localhost;dbname=app;charset=utf8","root","");
  } catch (Exception $e) {
    echo "erro".$e->getMessage;
  }

?>
