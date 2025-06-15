<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            KategoriUsulanSeeder::class,
            WilayahSeeder::class,
            UsulanInovasiSeeder::class,
            PelaporanPembangunanSeeder::class,
            VerifikasiUsulanInovasiSeeder::class,
            VerifikasiPelaporanPembangunanSeeder::class,
        ]);
    }
}
