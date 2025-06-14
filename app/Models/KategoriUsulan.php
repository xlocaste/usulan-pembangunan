<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriUsulan extends Model
{
    use HasFactory;

    protected $table = 'kategori_usulan';

    protected $fillable = [
        'nama'
    ];

    public function usulanInovasi()
    {
        return $this->hasMany(UsulanInovasi::class);
    }
}
