<?php
  include_once ('conf.php');

  try {
      $res = $conf->prepare('SELECT * FROM cliente');
      $res->execute();
      $res = $res->fetchAll(PDO::FETCH_OBJ);
      echo json_encode($res);
  } catch (Exception $e) {
    echo "erro";
  }

?>
