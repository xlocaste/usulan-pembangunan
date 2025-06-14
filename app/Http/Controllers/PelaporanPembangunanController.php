<?php

namespace App\Http\Controllers;

use App\Http\Requests\PelaporanPembangunan\StoreRequest;
use App\Models\PelaporanPembangunan;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PelaporanPembangunanController extends Controller
{
    public function index()
    {
        $daftarPelaporanPembangunan = PelaporanPembangunan::with('wilayah')->get();

        return inertia('PelaporanPembangunan/List', [
            'daftarPelaporanPembangunan' => $daftarPelaporanPembangunan,
        ]);
    }

    public function store(StoreRequest $request)
    {
        PelaporanPembangunan::create([
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => 'diajukan'
        ]);

        return redirect()->route('pelaporan-pembangunan.index');
    }

    public function create()
    {
        return Inertia::render('PelaporanPembangunan/Add', [
            'wilayahList' => Wilayah::all(),
        ]);
    }
}
