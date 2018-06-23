<?php
$apiKey = "KEY";
$apiURL = "URL";

$incQ = $_GET["q"];

$requestAddress = $apiURL."key=".$apiKey."&q=".$incQ;

//FILTER_SANITIZE_URL
//

// create a new cURL resource
$request = curl_init();

// set URL and other appropriate options
curl_setopt($request, CURLOPT_URL, $requestAddress);
curl_setopt($request, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($request);

// close cURL resource, and free up system resources
curl_close($request);


?>