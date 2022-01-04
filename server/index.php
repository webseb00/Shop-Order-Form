<?php

include('./Database.php');
include('./Validation.php');
include('./Order.php');
include('./functions.php');

$db = new Database();
$db->connect();

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = handleJSONData();

  $validate = new Validation();
  $validate->validateInput($data['client']);

  if(!empty($validate->getErrors())) { 
    $errorData = $validate->getErrors();
    handleServerResponse('error', 'Validation data error', $errorData);
    // when the errors occurs inside validation data, close the connection
    $db->closeConnection();
  } else {
    $validated_data = $validate->getValidatedData();
    // insert validated data into database
    $order = new Order();
    $customer_result = $order->insertCustomerData($db, $validated_data);
    // get last customer id and insert into order details table
    $lastCustomerID = $db->getLastInsertID();

    $order_data = array(
      "delivery" => [
        "method" => $data['delivery']['method'],
        "price" => $data['delivery']['price']
      ],
      "payment_method" => $data['method'],
      "product" => [
        'price' => $data['product']['price'],
        'quantity' => $data['product']['quantity']
      ]
    );
    $order_result = $order->insertOrderData($db, $lastCustomerID, $order_data);

    // return order details to the front end
    $orderDetails = $order->selectOrderDetails($db);

    if(!$customer_result || !$order_result) { 
      $err = $db->getErrorInfo();
      handleServerResponse('error', 'Server error', $err);
    } else {
      $result = handleServerResponse('success', 'Order submitted successfully!', '');
      echo json_encode(["result" => $result, "order" => $orderDetails]);
    }
  }
}

$db->closeConnection();