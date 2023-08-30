<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('customers')->insert([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'type' => 'Regular',
            'user_id' => 1, // Assuming user_id 1 from the users seeder
        ]); //asuming user_id 1 from the users seeder
    }
}
