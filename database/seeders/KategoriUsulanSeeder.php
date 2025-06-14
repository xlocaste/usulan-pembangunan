<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KategoriUsulanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategori_usulan')->insert([
            ['nama' => 'Infrastruktur'],
            ['nama' => 'Pendidikan'],
            ['nama' => 'Kesehatan'],
            ['nama' => 'Ekonomi'],
            ['nama' => 'Lingkungan'],
        ]);
    }
}
