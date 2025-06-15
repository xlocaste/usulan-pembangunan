<?php

namespace App\Http\Controllers;

use App\Http\Requests\PelaporanPembangunan\StoreRequest;
use App\Http\Requests\PelaporanPembangunan\UpdateRequest;
use App\Models\PelaporanPembangunan;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PelaporanPembangunanController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = PelaporanPembangunan::with('wilayah')
            ->where('status', 'diajukan');

        if (!$user->hasRole('admin')) {
            $query->where('user_id', $user->id);
        }

        $daftarPelaporanPembangunan = $query->get();

        return inertia('PelaporanPembangunan/List', [
            'daftarPelaporanPembangunan' => $daftarPelaporanPembangunan,
        ]);
    }

    public function list()
    {
        $daftarPP = PelaporanPembangunan::with('wilayah')
            ->where('status', 'diajukan')
            ->get();

        return inertia('Form/PelaporanPembangunan/List', [
            'daftarPelaporanPembangunan' => $daftarPP,
        ]);
    }

    public function store(StoreRequest $request)
    {
        PelaporanPembangunan::create([
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'user_id' => auth()->id(),
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

    public function update(UpdateRequest $request, PelaporanPembangunan $pelaporanPembangunan)
    {
        $pelaporanPembangunan->update([
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'user_id' => auth()->id(),
            'status' => 'diajukan'
        ]);

        return redirect()->route('pelaporan-pembangunan.index');
    }

    public function edit(PelaporanPembangunan $pelaporanPembangunan)
    {
        return Inertia::render('PelaporanPembangunan/Update', [
            'pelaporanPembangunan' => $pelaporanPembangunan,
            'wilayahList' => Wilayah::all(),
        ]);
    }

    public function destroy(PelaporanPembangunan $pelaporanPembangunan)
    {
        $pelaporanPembangunan->delete();

        return Redirect::route('pelaporan-pembangunan.index')->with('message', 'Data berhasil dihapus');
    }

    public function approve($pelaporanPembangunan)
    {
        $pelaporan = PelaporanPembangunan::findOrFail($pelaporanPembangunan);
        $pelaporan->update(['status' => 'diterima']);

        return redirect()->back()->with('success', 'Pelaporan disetujui.');
    }

    public function reject($pelaporanPembangunan)
    {
        $pelaporan = PelaporanPembangunan::findOrFail($pelaporanPembangunan);
        $pelaporan->update(['status' => 'ditolak']);

        return redirect()->back()->with('success', 'Pelaporan ditolak.');
    }
}
