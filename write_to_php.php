<?php
// from: https://stackoverflow.com/questions/17029917/how-to-write-php-code-to-a-file-with-php

$filename = "output_php.php";
$ourFileName =$filename;
$ourFileHandle = fopen($ourFileName, 'w');

$written = "<?php
  \$testVar = 2222;
?>
<html>
  <body>
<?php
  echo \"This is a number: \".\$testVar.\" !\";
?>
  </body>
</html>
";

echo "Add some sort of 'yep, this worked' error checking...";
echo "could rewrite tables php file to add new tables and rewrite the arrays";

fwrite($ourFileHandle,$written);
fclose($ourFileHandle);