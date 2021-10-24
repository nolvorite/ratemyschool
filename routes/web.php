<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\HomeController::class, 'home']);
Route::get('/about', [App\Http\Controllers\HomeController::class, 'home']);
Route::get('/review', [App\Http\Controllers\HomeController::class, 'home']);

Route::post('/submit_review', [App\Http\Controllers\HomeController::class, 'submit_review']);

Route::get('/review/{school_name}', [App\Http\Controllers\HomeController::class, 'home2']);

Auth::routes();

Route::middleware('auth')->get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
