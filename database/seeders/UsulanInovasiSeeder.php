<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsulanInovasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('usulan_inovasi')->insert([
            [
                'kategori_id' => 1,
                'wilayah_id' => 1,
                'judul' => 'Peningkatan Jalan Desa',
                'deskripsi' => 'Usulan peningkatan kualitas jalan desa untuk mendukung aksesibilitas warga.',
                'status' => 'diajukan', // sebelumnya 'Menunggu Verifikasi'
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kategori_id' => 2,
                'wilayah_id' => 1,
                'judul' => 'Pembangunan Perpustakaan Digital',
                'deskripsi' => 'Inovasi membangun perpustakaan digital untuk meningkatkan minat baca pelajar.',
                'status' => 'diterima',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kategori_id' => 3,
                'wilayah_id' => 1,
                'judul' => 'Posyandu Pintar',
                'deskripsi' => 'Digitalisasi data kesehatan balita di Posyandu menggunakan aplikasi mobile.',
                'status' => 'ditolak',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
