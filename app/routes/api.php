<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('add/product', [ProductController::class, 'store']);
Route::get('get/products', [ProductController::class, 'index']);
Route::put('update/product/{id}', [ProductController::class, 'update']);
Route::delete('delete/product/{id}', [ProductController::class, 'delete']);

Route::post('add/category', [CategoryController::class, 'store']);
Route::get('get/categories', [ProductController::class, 'index']);
Route::put('update/category/{id}', [ProductController::class, 'update']);
Route::delete('delete/category/{id}', [ProductController::class, 'delete']);
