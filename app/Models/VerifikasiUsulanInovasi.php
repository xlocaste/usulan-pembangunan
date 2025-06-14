<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifikasiUsulanInovasi extends Model
{
    use HasFactory;

    protected $table = 'verifikasi_usulan_inovasi';

    protected $fillable = [
        'usulan_inovasi_id',
    ];

    public function usulanInovasi()
    {
        return $this->belongsTo(UsulanInovasi::class);
    }
}
