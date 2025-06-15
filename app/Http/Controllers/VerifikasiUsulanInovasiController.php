<?php

namespace App\Http\Controllers;

use App\Models\VerifikasiUsulanInovasi;
use Illuminate\Http\Request;

class VerifikasiUsulanInovasiController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = VerifikasiUsulanInovasi::with('usulanInovasi.kategori', 'usulanInovasi.wilayah')
            ->whereHas('usulanInovasi', function ($q) use ($user) {
                $q->whereIn('status', ['diterima', 'ditolak']);

                if ($user->hasRole('user')) {
                    $q->where('user_id', $user->id);
                }
            });

        $daftarVerifikasi = $query->get();

        return inertia('VerifikasiUsulanInovasi/List', [
            'daftarVerifikasi' => $daftarVerifikasi,
        ]);
    }

    public function list()
    {
        $daftarVerifikasiUI = VerifikasiUsulanInovasi::with('usulanInovasi.kategori', 'usulanInovasi.wilayah')
            ->whereHas('usulanInovasi', function ($query) {
                $query->whereIn('status', ['diterima', 'ditolak']);
            })
            ->get();

        return inertia('Form/VerifikasiUsulanInovasi/List', [
            'daftarVerifikasiUI' => $daftarVerifikasiUI,
        ]);
    }
}
