<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

$apiKey = "f2ae69e21923e6f5b6bacaa4b9e6df57";

if(isset($_GET["q"])) {
    $apiURL = "https://food2fork.com/api/search?";
    $incQ = urlencode($_GET["q"]);

    $requestAddress = $apiURL."key=".$apiKey."&q=".$incQ;
}
elseif(isset($_GET["r"])) {
    $apiURL = "https://food2fork.com/api/get?";
    $incR = urlencode($_GET["r"]);

    $requestAddress = $apiURL."key=".$apiKey."&rId=".$incR;
    echo $requestAddress;
}
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