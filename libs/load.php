<?php

function load_template($name)
{
  $currentScript = $_SERVER['SCRIPT_NAME'];
  $pathParts = explode('/', $currentScript);
  $projectName = $pathParts[1]."/".$pathParts[2];

  // print($projectName);
  // print($_SERVER['DOCUMENT_ROOT'] . "$projectName" . "_templates/$name.php");
  include $_SERVER['DOCUMENT_ROOT'] ."/$projectName" . "/_partials/_$name.php"; //not consistant.
}