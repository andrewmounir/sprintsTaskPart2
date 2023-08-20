<?php


class Router
{
    public static function get($uri, $callBack)
    {
        if ($_SERVER['REQUEST_URI'] == $uri && $_SERVER['REQUEST_METHOD'] == 'GET') {
            $callBack();
            exit();
        }
      
    }
}


