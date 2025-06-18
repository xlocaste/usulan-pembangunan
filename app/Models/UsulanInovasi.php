<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsulanInovasi extends Model
{
    use HasFactory;

    protected $table = 'usulan_inovasi';

    protected $fillable = [
        'kategori_id',
        'wilayah_id',
        'user_id',
        'judul',
        'file',
        'deskripsi',
        'status',
    ];

    public function kategori()
    {
        return $this->belongsTo(KategoriUsulan::class, 'kategori_id');
    }

    public function wilayah()
    {
        return $this->belongsTo(Wilayah::class, 'wilayah_id');
    }

    public function verifikasi()
    {
        return $this->hasOne(VerifikasiUsulanInovasi::class);
    }

    protected static function booted()
    {
        static::created(function ($usulanInovasi) {
            $usulanInovasi->verifikasi()->create();
        });
    }
}
