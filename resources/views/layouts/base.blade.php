<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Template V2</title>

    <link href="{{ asset('assets/img/empty.png') }}" rel="icon" type="image/png" />
    <!-- Scripts -->
    @yield('scripts')
    <!-- Load additional scripts before loading the app bundle-->
    @if (env('APP_ENV') === 'local')
        <!-- you are in development mode -->
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/resources/js/app.jsx"></script>
    @elseif(env('APP_ENV') === 'production')
        <!-- you are in production mode -->
        <link rel="stylesheet" href="{{ env('APP_URL') }}/build/{{ $manifest['resources/js/app.css']['file'] }}" />
        <script type="module" src="{{ env('APP_URL') }}/build/{{ $manifest['resources/js/app.jsx']['file'] }}"></script>
    @endif

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>

<body>

    @yield('content')
</body>

</html>
