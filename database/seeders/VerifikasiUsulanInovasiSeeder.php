<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VerifikasiUsulanInovasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('verifikasi_usulan_inovasi')->insert([
            [
                'usulan_inovasi_id' => 1,
            ],
            [
                'usulan_inovasi_id' => 2,
            ],
            [
                'usulan_inovasi_id' => 3,
            ],
        ]);
    }
}
