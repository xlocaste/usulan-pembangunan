<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsulanInovasi\StoreRequest;
use App\Http\Requests\UsulanInovasi\UpdateRequest;
use App\Models\KategoriUsulan;
use App\Models\UsulanInovasi;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UsulanInovasiController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $query = UsulanInovasi::with('kategori', 'wilayah')
            ->where('status', 'diajukan');

        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }

        $daftarUsulanInovasi = $query->get();

        return inertia('UsulanInovasi/List', [
            'daftarUsulanInovasi' => $daftarUsulanInovasi,
        ]);
    }

    public function list()
    {
        $daftarUsulanInovasi = UsulanInovasi::with('kategori', 'wilayah')
            ->where('status', 'diajukan')
            ->get();

        return inertia('Form/UsulanInovasi/List', [
            'daftarUsulanInovasi' => $daftarUsulanInovasi,
        ]);
    }

    public function store(StoreRequest $request)
    {
        $filePath = null;

        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('usulan-inovasi', 'public');
        }

        UsulanInovasi::create([
            'kategori_id' => $request->kategori_id,
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'file' => $filePath,
            'status' => 'diajukan',
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('usulan-inovasi.index');
    }

    public function create()
    {
        return Inertia::render('UsulanInovasi/Add', [
            'kategoriList' => KategoriUsulan::all(),
            'wilayahList' => Wilayah::all(),
        ]);
    }

    public function update(UpdateRequest $request, UsulanInovasi $usulanInovasi)
    {
        $data = [
            'kategori_id' => $request->kategori_id,
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => 'diajukan',
            'user_id' => auth()->id(),
        ];

        if ($request->hasFile('file')) {
            if ($usulanInovasi->file && Storage::disk('public')->exists($usulanInovasi->file)) {
                Storage::disk('public')->delete($usulanInovasi->file);
            }

            $data['file'] = $request->file('file')->store('usulan-inovasi', 'public');
        }

        $usulanInovasi->update($data);

        return redirect()->route('usulan-inovasi.index');
    }

    public function edit(UsulanInovasi $usulanInovasi)
    {
        return Inertia::render('UsulanInovasi/Update', [
            'usulanInovasi' => $usulanInovasi,
            'kategoriList' => KategoriUsulan::all(),
            'wilayahList' => Wilayah::all(),
        ]);
    }

    public function destroy(UsulanInovasi $usulanInovasi)
    {
        if ($usulanInovasi->file && Storage::disk('public')->exists($usulanInovasi->file)) {
            Storage::disk('public')->delete($usulanInovasi->file);
        }

        $usulanInovasi->delete();

        return Redirect::route('usulan-inovasi.index')->with('message', 'Data berhasil dihapus');
    }

    public function approve($usulanInovasi)
    {
        $usulan = UsulanInovasi::findOrFail($usulanInovasi);
        $usulan->update(['status' => 'diterima']);
        return redirect()->back()->with('success', 'Usulan telah disetujui.');
    }

    public function reject($usulanInovasi)
    {
        $usulan = UsulanInovasi::findOrFail($usulanInovasi);
        $usulan->update(['status' => 'ditolak']);
        return redirect()->back()->with('success', 'Usulan telah ditolak.');
    }
}
