<?php

namespace App\Http\Controllers;

use App\Models\PelaporanPembangunan;
use Illuminate\Http\Request;

class PelaporanPembangunanController extends Controller
{
    public function index()
    {
        $daftarPelaporanPembangunan = PelaporanPembangunan::with('wilayah')->get();

        return inertia('PelaporanPembangunan/List', [
            'daftarPelaporanPembangunan' => $daftarPelaporanPembangunan,
        ]);
    }
}
