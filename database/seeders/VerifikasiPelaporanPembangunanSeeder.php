<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VerifikasiPelaporanPembangunanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('verifikasi_pelaporan_pembangunan')->insert([
            [
                'pelaporan_pembangunan_id' => 1,
            ],
            [
                'pelaporan_pembangunan_id' => 2,
            ],
            [
                'pelaporan_pembangunan_id' => 3,
            ],
        ]);
    }
}
