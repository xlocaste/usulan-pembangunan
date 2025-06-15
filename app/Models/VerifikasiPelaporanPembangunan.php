<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifikasiPelaporanPembangunan extends Model
{
    use HasFactory;

    protected $table = 'verifikasi_pelaporan_pembangunan';

    protected $fillable = [
        'pelaporan_pembangunan_id',
    ];

    public function pelaporanPembangunan()
    {
        return $this->belongsTo(PelaporanPembangunan::class);
    }

    public function user()
{
    return $this->belongsTo(User::class);
}
}
