<?php
    header("Content-type:text/html;charset=utf-8");
    $username=$_POST['username'];
    $userpass=$_POST['userpass'];

    $conn=mysql_connect("localhost","root","root");

    if(!$conn){
        echo "出错了.....";
    }else{
        mysql_select_db("my1912",$conn);
        //3）、传输数据（增删改查）SQL语句
        $sqlstr="insert into user values('$username','$userpass')";

        $result=mysql_query($sqlstr,$conn);
        mysql_close($conn);
        if($result=="1"){
            echo "1";
        }else{
            echo "0";
        }
    }
?>