<?php

namespace App\Http\Controllers;

use App\Models\UsulanInovasi;
use Illuminate\Http\Request;
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
}
