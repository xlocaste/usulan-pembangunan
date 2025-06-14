<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsulanInovasi\StoreRequest;
use App\Models\UsulanInovasi;
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
        UsulanInovasi::created([
            'kategori_id' => $request->kategori_id,
            'wilayah_id' => $request->wilayah_id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => $request->status,
        ]);

        return redirect()->route('usulan-inovasi.index');
    }

    public function create()
    {
        return Inertia::render('UsulanInovasi/Add');
    }
}
