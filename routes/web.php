<?php

use App\Http\Controllers\PelaporanPembangunanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsulanInovasiController;
use App\Http\Controllers\VerifikasiUsulanInovasiController;
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
        Route::put('/{usulanInovasi}/approve', [UsulanInovasiController::class, 'approve'])->name('approve');
        Route::put('/{usulanInovasi}/reject', [UsulanInovasiController::class, 'reject'])->name('reject');
        Route::delete('/{usulanInovasi}', [UsulanInovasiController::class, 'destroy'])->name('destroy');
        Route::get('/{usulanInovasi}/edit', [UsulanInovasiController::class, 'edit'])->name('edit');
        Route::get('/{usulanInovasi}/detail', [UsulanInovasiController::class, 'show'])->name('show');
        Route::get('/search', [UsulanInovasiController::class, 'search'])->name('search');
    });
});

Route::prefix('/verifikasi-usulan-inovasi')->name('verifikasi-usulan-inovasi.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [VerifikasiUsulanInovasiController::class, 'index'])->name('index');
        Route::get('/create', [VerifikasiUsulanInovasiController::class, 'create'])->name('create');
        Route::post('/', [VerifikasiUsulanInovasiController::class, 'store'])->name('store');
        Route::put('/{verifikasiUI}', [VerifikasiUsulanInovasiController::class, 'update'])->name('update');
        Route::delete('/{verifikasiUI}', [VerifikasiUsulanInovasiController::class, 'destroy'])->name('destroy');
        Route::get('/{verifikasiUI}/edit', [VerifikasiUsulanInovasiController::class, 'edit'])->name('edit');
        Route::get('/{verifikasiUI}/detail', [VerifikasiUsulanInovasiController::class, 'show'])->name('show');
        Route::get('/search', [VerifikasiUsulanInovasiController::class, 'search'])->name('search');
    });
});

Route::prefix('/pelaporan-pembangunan')->name('pelaporan-pembangunan.')->group(function() {
    Route::group(['middleware' => ['auth']], function() {
        Route::get('/', [PelaporanPembangunanController::class, 'index'])->name('index');
        Route::get('/create', [PelaporanPembangunanController::class, 'create'])->name('create');
        Route::post('/', [PelaporanPembangunanController::class, 'store'])->name('store');
        Route::put('/{pelaporanPembangunan}', [PelaporanPembangunanController::class, 'update'])->name('update');
        Route::put('/{pelaporanPembangunan}/approve', [PelaporanPembangunanController::class, 'approve'])->name('approve');
        Route::put('/{pelaporanPembangunan}/reject', [PelaporanPembangunanController::class, 'reject'])->name('reject');
        Route::delete('/{pelaporanPembangunan}', [PelaporanPembangunanController::class, 'destroy'])->name('destroy');
        Route::get('/{pelaporanPembangunan}/edit', [PelaporanPembangunanController::class, 'edit'])->name('edit');
        Route::get('/{pelaporanPembangunan}/detail', [PelaporanPembangunanController::class, 'show'])->name('show');
        Route::get('/search', [PelaporanPembangunanController::class, 'search'])->name('search');
    });
});

require __DIR__.'/auth.php';
