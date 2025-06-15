<?php

namespace App\Http\Controllers;

use App\Models\VerifikasiPelaporanPembangunan;
use Illuminate\Http\Request;

class VerifikasiPelaporanPembangunanController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = VerifikasiPelaporanPembangunan::with('pelaporanPembangunan.wilayah', 'pelaporanPembangunan.user')
            ->whereHas('pelaporanPembangunan', function ($q) use ($user) {
                $q->whereIn('status', ['diterima', 'ditolak']);

                if (!$user->hasRole('admin')) {
                    $q->where('user_id', $user->id);
                }
            });

        $daftarVerifikasi = $query->get();

        return inertia('VerifikasiPelaporanPembangunan/List', [
            'daftarVerifikasi' => $daftarVerifikasi,
        ]);
    }

    public function list()
    {
        $daftarVerifikasiPP = VerifikasiPelaporanPembangunan::with(['pelaporanPembangunan.wilayah', 'pelaporanPembangunan.user'])
            ->whereHas('pelaporanPembangunan', function ($query) {
                $query->whereIn('status', ['diterima', 'ditolak']);
            })
            ->get();

        return inertia('Form/VerifikasiPelaporanPembangunan/List', [
            'daftarVerifikasiPP' => $daftarVerifikasiPP,
        ]);
    }
}
