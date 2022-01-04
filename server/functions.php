<?php

include('./headers.php');

function handleJSONData() {
  $data = json_decode(file_get_contents("php://input"), true);
  return $data;
}

function handleServerResponse($result, $msg, $error) {
  $json = null;

  if($result === 'error') {
    $json = array('error' => true, 'msg' => $msg, 'errorArr' => $error);
  } else {
    $json = array('success' => true, 'msg' => $msg);
  }

  return $json;
}
