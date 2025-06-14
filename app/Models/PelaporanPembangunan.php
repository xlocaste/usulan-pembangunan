<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PelaporanPembangunan extends Model
{
    use HasFactory;

    protected $table = 'pelaporan_pembangunan';

    protected $fillable = [
        'wilayah_id',
        'judul',
        'deskripsi',
        'status',
    ];

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class);
    }
}
