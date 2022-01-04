<?php

class Database {

  private $db_host;
  private $db_name;
  private $db_user;
  private $db_password;

  private $dbh;
  private $stmt;

  public function __construct() {
    $this->db_host = 'localhost';
    $this->db_name = 'smartshop';
    $this->db_user = 'root';
    $this->db_password = '';
  }

  public function connect() {
    $dsn = 'mysql:host='.$this->db_host.';dbname='.$this->db_name;

    try {
      $this->dbh = new PDO($dsn, $this->db_user, $this->db_password);
      $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo 'Connection failed: '.$e->getMessage();
    }
  }

  public function query($sql) {
    $this->stmt = $this->dbh->prepare($sql);
  }

  public function bind($param, $value) {
    $this->stmt->bindParam($param, $value);
  }

  public function execute() {
    return $this->stmt->execute();
  }

  public function getResult() {
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getLastInsertID() {
    return $this->dbh->lastInsertId();
  }

  public function closeConnection() {
    $this->dbh = null;
  }

  public function getErrorInfo() {
    return $this->dbh->errorInfo();
  }
}

