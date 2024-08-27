<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allows requests from any origin. Modify to restrict to specific origins if needed
header('Access-Control-Allow-Methods: POST'); // Allow POST requests
header('Access-Control-Allow-Headers: Content-Type'); // Allow Content-Type header

require 'vendor/autoload.php';

use PayPal\Api\Amount;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;
use PayPal\Exception\PayPalException;

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AWzA6dyaY2Iji7bVblUkl4ijRj_hIiivn57Rhseab0sxxe1Bsx3k-GPKxdKWPpiSLaCujsvnmVTby9Ae', // Replace with your PayPal Client ID
        'ELnfaUN4t_pWSBilkPbW8D9eXu7g-vHTvVb2qFbl8zGbu3dAiBN_1jLl5551svhiD7SXz_JZEOu97BBq' // Replace with your PayPal Client Secret
    )
);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = file_get_contents('php://input');
    $data = json_decode($body);

    $amount = $data->amount ?? null;

    if (!$amount) {
        echo json_encode(['error' => 'Amount is required']);
        exit;
    }

    $payer = new Payer();
    $payer->setPaymentMethod('paypal');

    $amountObj = new Amount();
    $amountObj->setTotal($amount);
    $amountObj->setCurrency('USD');

    $transaction = new Transaction();
    $transaction->setAmount($amountObj)
                ->setDescription('Purchase from your eCommerce store');

    $redirectUrls = new RedirectUrls();
    $redirectUrls->setReturnUrl("http://localhost/Quasar/ecommerce/return") // Replace with your return URL for testing
                 ->setCancelUrl("http://localhost/Quasar/ecommerce/cancel"); // Replace with your cancel URL for testing

    $payment = new Payment();
    $payment->setIntent('sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirectUrls)
            ->setTransactions([$transaction]);

    try {
        $payment->create($apiContext);
        echo json_encode(['approval_url' => $payment->getApprovalLink()]);
    } catch (PayPalException $ex) {
        echo json_encode(['error' => $ex->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>
