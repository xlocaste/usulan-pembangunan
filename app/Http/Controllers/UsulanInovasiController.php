<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsulanInovasi\StoreRequest;
use App\Http\Requests\UsulanInovasi\UpdateRequest;
use App\Models\KategoriUsulan;
use App\Models\UsulanInovasi;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\CssSelector\Node\FunctionNode;

class UsulanInovasiController extends Controller
{
    public function index()
    {
        $daftarUsulanInovasi = UsulanInovasi::with('kategori', 'wilayah')->get();

        return inertia('UsulanInovasi/List', [
            'daftarUsulanInovasi' => $daftarUsulanInovasi,
        ]);
    }

    public function store(StoreRequest $request)
    {
        UsulanInovasi::create([
            'kategori_id' => $request->kategori_id,
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => 'diajukan'
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
        $usulanInovasi->update([
            'kategori_id' => $request->kategori_id,
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => 'diajukan'
        ]);

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
}
