<?php
require_once MODELS . 'User.php';


class HomeController
{

    public function index()
    {




        require_once  VIEW . 'Home.php';
    }

    public function showMyProfile()

    {
        header('Content-Type: text/css');
        require_once  VIEW . 'Home.php';
    }

    public function profile()
    {


        $csvFilePath = 'data.csv';
        $csvData = file($csvFilePath, FILE_IGNORE_NEW_LINES);

        foreach ($csvData as $line) {
            $fields = explode(',', $line);
            $name = $fields[0];
            $profession = $fields[1];
            $hobbies = array_slice($fields, 2);

            echo '<div class="profile">';
            echo "<h2>$name - $profession</h2>";

            echo '</div>';
        }

        require_once  VIEW . 'profile.php';
    }
    public function mySkills()
    {

        $csvFilePath = 'skills.csv';
        $csvData = file($csvFilePath, FILE_IGNORE_NEW_LINES);

        foreach ($csvData as $line) {
            $fields = explode(',', $line);
            $category = $fields[0];
            $skills = array_slice($fields, 1);

            echo '<div class="profile">';
            echo "<h2>$category :</h2>";
            echo '<div class="skills">';
           
            echo '<ul>';
            foreach ($skills as $skill) {
                echo "<li>$skill</li>";
            }
            echo '</ul>';
            echo '</div>';
            echo '</div>';
        }






        require_once  VIEW . 'MySkills.php';
    }
}
