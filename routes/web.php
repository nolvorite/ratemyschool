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
Route::get('/schools/{school_name}', [App\Http\Controllers\HomeController::class, 'get_rating']);

Route::get('/school_data/{school_name}', [App\Http\Controllers\HomeController::class, 'get_rating_data']);
Route::get('/schools', [App\Http\Controllers\HomeController::class, 'home']);


Route::post('/submit_review', [App\Http\Controllers\HomeController::class, 'submit_review']);

Auth::routes();

Route::middleware('auth')->get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
