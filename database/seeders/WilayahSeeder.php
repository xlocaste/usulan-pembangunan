<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WilayahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('wilayah')->insert([
            ['nama' => 'Singkawang Barat'],
            ['nama' => 'Singkawang Tengah'],
            ['nama' => 'Singkawang Timur'],
            ['nama' => 'Singkawang Utara'],
            ['nama' => 'Singkawang Selatan'],
        ]);
    }
}
