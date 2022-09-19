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

Route::get('/{path?}', function () {
    $manifest = [];
    if(env("APP_ENV") === "production"){
      try{
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
      }catch(Exception $e){
        throw new Error('you are in production mode and manifest.json is missing. you must have forgotten to run npm run build');
      }
    }
    return view('pages/main', [
      "manifest" => $manifest
    ]);
    // return view('pages/main');
})->where('path', '.*');


Route::get('/', function () {
    return view('welcome');
});
