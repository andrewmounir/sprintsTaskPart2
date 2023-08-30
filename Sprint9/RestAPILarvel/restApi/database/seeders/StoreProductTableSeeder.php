<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StoreProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('storeproduct')->insert([
            'store_id' => 1, // Assuming store_id 1 from the stores seeder
            'product_id' => 1, // Assuming product_id 1 from the products seeder
        ]);
    }
}
