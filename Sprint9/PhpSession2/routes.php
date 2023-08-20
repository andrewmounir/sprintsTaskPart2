<?php
require_once UTILS . 'routers.php';
require_once CONTROLLERS . 'HOMECONTROLLERS.php';

$Home = new HomeController();

Router::get('/', function () use ($Home) {


    $Home->index();
});


Router::get('/about', function () {


    echo "we are still starting";
});


Router::get('/contactus', function () {

    echo "call us on 54445";
});
Router::get('/profile', function () use ($Home) {

    $Home->profile();
});

Router::get('/myskills', function () use ($Home) {

    $Home->mySkills();
});
