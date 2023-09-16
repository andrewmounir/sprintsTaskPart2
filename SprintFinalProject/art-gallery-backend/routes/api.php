<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;


Route::post('login', [UserController::class, 'login']);
Route::get('getProducts',[ProductController::class,'index']);
Route::post('register', [UserController::class, 'register']);
Route::get('product/image/{productId}', 'ProductController@getImage');
Route::get('products/{id}', [ProductController::class,'show']);

Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::post('products',[ProductController::class,'store']);
Route::middleware('auth:api')->group(function () {
    Route::post('logout', [UserController::class, 'logout']);
    Route::get('user', [UserController::class, 'getAuthenticatedUser']);
    Route::get('orders', [OrderController::class,'orders.index']);

});
