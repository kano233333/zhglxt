
<?php
	//$Conn = @mysql_connect( "localhost", "root","1" );
	$Conn = @mysql_connect( "localhost", "root","root" );
	if( ! $Conn )
	{
		exit("mysql connect fail!");
	}
	if( !mysql_select_db( "testmanager", $Conn ) )
	{
		exit("can not find the database!");
	}
	mysql_query("set names 'utf8'");
	
?>
