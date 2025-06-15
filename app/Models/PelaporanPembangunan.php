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
        'user_id',
    ];

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::created(function ($pelaporan) {
            VerifikasiPelaporanPembangunan::create([
                'pelaporan_pembangunan_id' => $pelaporan->id,
            ]);
        });
    }
}
