<?php

class Order {

  public function insertCustomerData($db, $customer) {
    $firstName = $customer['first_name'];
    $lastName = $customer['last_name'];
    $email = $customer['email_address'];
    $country = $customer['country'];
    $city = $customer['city'];
    $street = $customer['home_address'];
    $phoneNumber = $customer['phone'];
    $zipCode = $customer['zip_code'];
    $orderComment = $customer['order_comment'];

    $db->query("INSERT INTO CUSTOMER (first_name, last_name, phone_number, city, street, zip_code, email, country) VALUES (:first_name, :last_name, :phone_number, :city, :street, :zip_code, :email, :country)");

    $db->bind(':first_name', $firstName);
    $db->bind(':last_name', $lastName);
    $db->bind(':phone_number', $phoneNumber);
    $db->bind(':city', $city);
    $db->bind(':street', $street);
    $db->bind(':zip_code', $zipCode);
    $db->bind(':email', $email);
    $db->bind(':country', $country);

    return $db->execute();
  }

  public function insertOrderData($db, $customerID, $order) {
    $product_value = $order['product']['price'];
    $product_quantity = $order['product']['quantity'];
    $delivery_cost = $order['delivery']['price'];
    // calculate total cost of the order
    $calculateTotalOrderCost = $delivery_cost + ($product_value * $product_quantity);
    
    $sql = "INSERT INTO ORDERS (customer_id, delivery_method, delivery_cost, payment_method, product_quantity, products_value, total_cost) VALUES (:customer_id, :delivery_method, :delivery_cost, :payment_method, :product_quantity, :products_value, :total_cost)";

    $db->query($sql);
    $db->bind(':customer_id', $customerID);
    $db->bind(':delivery_method', $order['delivery']['method']);
    $db->bind(':delivery_cost', $delivery_cost);
    $db->bind(':payment_method', $order['payment_method']);
    $db->bind(':product_quantity', $product_quantity);
    $db->bind(':products_value', $product_value);
    $db->bind(':total_cost', $calculateTotalOrderCost);

    return $db->execute();
  }

  public function selectOrderDetails($db) {
    $lastOrderId = $db->getLastInsertID();
    // fetch order data
    $sql = "SELECT * FROM orders WHERE order_id=$lastOrderId";
    $db->query($sql);
    $result = $db->getResult();
    $array = $result[0];

    $customer_id = $array['customer_id'];
    $delivery = $array['delivery_method'];
    $payment = $array['payment_method'];
    $total_cost = $array['total_cost'];
    // fetch client data
    $sql = "SELECT first_name, last_name, zip_code, country, street, city FROM customer WHERE customer_id=$customer_id";
    $db->query($sql);
    $result = $db->getResult();
    $array = $result[0];
    
    $first_name = $array['first_name'];
    $last_name = $array['last_name'];
    $zip_code = $array['zip_code'];
    $country = $array['country'];
    $street = $array['street'];
    $city = $array['city'];

    $obj = [
      'customer' => [
        'first_name' => $first_name,
        'last_name' => $last_name,
        'zip_code' => $zip_code,
        'country' => $country,
        'street' => $street,
        'city' => $city
      ],
      'details' => [
        'order_number' => $lastOrderId,
        'delivery_method' => $delivery,
        'payment_method' => $payment,
        'total_cost' => $total_cost
      ]
    ];

    return $obj;
  }

}