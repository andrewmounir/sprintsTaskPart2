<?php

class user
{
    public $name;
    public $email;
    public $city;

    public function __construct($user)
    {
        foreach ($user as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public function __toString()
    {
        return "Name: " . $this->name . "<br>Email: " . $this->email . "<br>City: " . $this->city;
    }
}
