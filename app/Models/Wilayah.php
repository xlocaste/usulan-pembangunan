<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayah extends Model
{
    use HasFactory;

    protected $table = 'wilayah';

    protected $fillable = [
        'nama',
    ];

    public function usulanInovasi()
    {
        return $this->hasMany(UsulanInovasi::class);
    }

    public function pelaporanPembangunan()
    {
        return $this->hasMany(PelaporanPembangunan::class);
    }
}
