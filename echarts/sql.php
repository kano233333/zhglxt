<?php
    include "db.inc.php";
    $result = mysql_query("select * from bar");
    $data="";
    $array= array();
    class User{
      public $id;
      public $clothes;
      public $sales;
    }
    while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
      $user=new User();
      $user->id = $row['id'];
      $user->clothes = $row['clothes'];
      $user->sales = $row['sales'];
      $array[]=$user;
    }
    $data=json_encode($array);
    // echo "{".'"user"'.":".$data."}";
    echo $data;
    ?>