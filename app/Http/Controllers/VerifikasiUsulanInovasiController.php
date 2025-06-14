<?php

namespace App\Http\Controllers;

use App\Models\VerifikasiUsulanInovasi;
use Illuminate\Http\Request;

class VerifikasiUsulanInovasiController extends Controller
{
    public function index()
    {
        $daftarVerifikasi = VerifikasiUsulanInovasi::with('usulanInovasi.kategori', 'usulanInovasi.wilayah')
            ->whereHas('usulanInovasi', function ($query) {
                $query->whereIn('status', ['diterima', 'ditolak']);
            })
            ->get();

        return inertia('VerifikasiUsulanInovasi/List', [
            'daftarVerifikasi' => $daftarVerifikasi,
        ]);
    }
}
