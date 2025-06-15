<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PelaporanPembangunanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pelaporan_pembangunan')->insert([
            [
                'wilayah_id' => 1,
                'user_id' => 1,
                'judul' => 'Jalan Berlubang di RT 05',
                'deskripsi' => 'Jalan utama di RT 05 rusak parah dan membahayakan pengendara.',
                'status' => 'diajukan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'wilayah_id' => 1,
                'user_id' => 2,
                'judul' => 'Saluran Drainase Tersumbat',
                'deskripsi' => 'Saluran air di RW 02 tersumbat, menyebabkan genangan air saat hujan.',
                'status' => 'diterima',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'wilayah_id' => 1,
                'user_id' => 2,
                'judul' => 'Lampu Jalan Mati',
                'deskripsi' => 'Beberapa lampu jalan di sepanjang Jalan Melati tidak berfungsi.',
                'status' => 'ditolak',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
