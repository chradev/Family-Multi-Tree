<?php
  if ($handle = opendir('.')) {
    $files=array();
    while (false !== ($file = readdir($handle))) {
      if ($file != "." && $file != "..") {
        $files[] = $file;
      }
    }
    closedir($handle);
  }
  natsort($files); //sort
  foreach($files as $file) {
        $date = date(filemtime($file));
        $filelist .= '<li><a href="'.$file.'">'.$file.'</a></li>';
        $timelist .= '<li>'.date('M d Y H:i', $date).'</li>';
        clearstatcache();
  }
?>
<h1>List of files:</h1>
<table><tr><pre>
<td><ul style="list-style-type:none"><li><?php echo $filelist; ?></li><ul></td>
<td><ul style="list-style-type:none"><li><?php echo $timelist; ?></li><ul></td>
</pre></tr></table>

