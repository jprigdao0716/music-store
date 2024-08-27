<?php
require 'vendor/autoload.php';

use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AWzA6dyaY2Iji7bVblUkl4ijRj_hIiivn57Rhseab0sxxe1Bsx3k-GPKxdKWPpiSLaCujsvnmVTby9Ae',     // Replace with your PayPal Client ID
        'ELnfaUN4t_pWSBilkPbW8D9eXu7g-vHTvVb2qFbl8zGbu3dAiBN_1jLl5551svhiD7SXz_JZEOu97BBq'  // Replace with your PayPal Client Secret
    )
);

if (isset($_GET['paymentId']) && isset($_GET['PayerID'])) {
    $paymentId = $_GET['paymentId'];
    $payerId = $_GET['PayerID'];

    $payment = Payment::get($paymentId, $apiContext);

    $execution = new PaymentExecution();
    $execution->setPayerId($payerId);

    try {
        $payment->execute($execution, $apiContext);
        echo "Payment successful!";
    } catch (Exception $ex) {
        echo "Payment failed: " . $ex->getMessage();
    }
}
