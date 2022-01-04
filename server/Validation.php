<?php

class Validation {
  private $errors = array();
  private $validated_data = array();

  private $regex = array(
    "email_address" => "/^[\w\.]+\@[\w]+\.[\w]+$/",
    "string" => "/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/",
    "home_address" => "/^[\wzżźćńółęąśŻŹĆĄŚĘŁÓŃ]+\s\d+$/",
    "zip_code" => "/^\d+\-\d+$/",
    "phone" => "/(\d{9})|(\d{3}\s\d{3}\s\d{3})/"
  );

  public function validateInput($input) {
    foreach($input as $fieldName => $fieldValue) {
      switch($fieldName) {
        case "email_address":
          $this->validate_email([$fieldName, $fieldValue]);
          break;
        case "home_address":
          $this->validate_home_address([$fieldName, $fieldValue]);
          break;
        case "phone":
          $this->validate_phone_number([$fieldName, $fieldValue]);
          break;
        case "zip_code":
          $this->validate_zip_code([$fieldName, $fieldValue]);
          break;
        default:
          $this->validate_string([$fieldName, $fieldValue]);
      }
    }
  }

  private function validate_email($field) {
    $fieldName = $field[0];
    $fieldValue = $field[1];

    $filter_field = filter_var($fieldValue, FILTER_VALIDATE_EMAIL);
    
    if(!$filter_field) {
      array_push($this->errors, [ "fieldName" => $fieldName ]);
    } else {
      $this->validated_data[$fieldName] = $filter_field;
    }
  }

  private function validate_home_address($field) {
    $fieldName = $field[0];
    $fieldValue = $field[1];

    $filter_field = filter_var($fieldValue, FILTER_SANITIZE_STRING);
    $match = preg_match($this->regex[$fieldName], $filter_field);

    if(!$match) {
      array_push($this->errors, [ "fieldName" => $fieldName ]);
    } else {
      $this->validated_data[$fieldName] = $filter_field;
    }
  }

  private function validate_phone_number($field) {
    $fieldName = $field[0];
    $fieldValue = $field[1];

    $filter_field = filter_var($fieldValue, FILTER_SANITIZE_STRING);
    $match = preg_match($this->regex[$fieldName], $fieldValue);

    if(!$match || strlen($filter_field) !== 9) {
      array_push($this->errors, [ "fieldName" => $fieldName ]);
    } else {
      $this->validated_data[$fieldName] = $filter_field;
    }
  }

  private function validate_zip_code($field) {
    $fieldName = $field[0];
    $fieldValue = $field[1];

    $filter_field = filter_var($fieldValue, FILTER_SANITIZE_STRING);
    $match = preg_match($this->regex[$fieldName], $filter_field);

    if(!$match || strlen($filter_field) !== 6) {
      array_push($this->errors, [ "fieldName" => $fieldName ]);
    } else {
      $this->validated_data[$fieldName] = $filter_field;
    }
  }

  private function validate_string($field) {
    $fieldName = $field[0];
    $fieldValue = $field[1];

    if($fieldName === 'order_comment' && empty($fieldValue)) { 
      $this->validated_data[$fieldName] = "No order comment";
      return false;
     }

    $filter_field = filter_var($fieldValue, FILTER_SANITIZE_STRING);
    $match = preg_match($this->regex["string"], $filter_field);
   
    if(!$match) {
      array_push($this->errors, [ "fieldName" => $fieldName ]);
    } else {
      $this->validated_data[$fieldName] = $filter_field;
    }
  }

  public function checkOrderMethods($methods) {
    print_r($methods);
  }

  public function getValidatedData() {
    return $this->validated_data;
  }

  public function getErrors() {
    return $this->errors;
  }

}