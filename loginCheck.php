<?php
    header("Content-type:text/html;charset=utf-8");
    $username=$_GET['username'];
    $userpass=$_GET['userpass'];
    // 连接
    $conn=mysql_connect("localhost","root","root");
    if(!$conn){
        echo "出错了.....";
    }else{
        // echo "ok";
        mysql_select_db("my1912",$conn);
        $sqlstr="select * from user where username='$username' and userpass='$userpass'";
        $result= mysql_query($sqlstr,$conn);

        mysql_close($conn);
        if(mysql_num_rows($result)==0){
            echo "0";
        }else{
            echo "1";
        }
    }
?>