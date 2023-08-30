<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/customers/{id}', 'CustomerController@show');
Route::post('/customers', 'CustomerController@store');
Route::get('/customers/create', 'CustomerController@create');
Route::get('/customers', 'CustomerController@index');
Route::resource('customers', 'CustomerController');


Route::get('/', function () {

    return view('index');
});
Route::get('/customers', 'CustomerController@index')->name('customers.index');
Route::get('/customers/{id}', 'CustomerController@show')->name('customers.show');
