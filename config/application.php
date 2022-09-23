<?php

return [
	//app settings	
	'base_url' => env('BASE_URL_'.env('APP_ENV')),

	'env_type' => env('APP_ENV'),

  'mix_url' => env('APP_MIX_URL' , 'http://localhost:8090/')

];