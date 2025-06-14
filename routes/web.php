<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsulanInovasiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/usulan-inovasi')->name('usulan-inovasi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [UsulanInovasiController::class, 'index'])->name('index');
        Route::get('/create', [UsulanInovasiController::class, 'create'])->name('create');
        Route::post('/', [UsulanInovasiController::class, 'store'])->name('store');
        Route::put('/{usulanInovasi}', [UsulanInovasiController::class, 'update'])->name('update');
        Route::delete('/{usulanInovasi}', [UsulanInovasiController::class, 'destroy'])->name('destroy');
        Route::get('/{usulanInovasi}/edit', [UsulanInovasiController::class, 'edit'])->name('edit');
        Route::get('/{usulanInovasi}/detail', [UsulanInovasiController::class, 'show'])->name('show');
        Route::get('/search', [UsulanInovasiController::class, 'search'])->name('search');
    });
});

require __DIR__.'/auth.php';
