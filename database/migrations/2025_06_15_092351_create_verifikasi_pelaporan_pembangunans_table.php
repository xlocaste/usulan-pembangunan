<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('verifikasi_pelaporan_pembangunan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pelaporan_pembangunan_id');
            $table->timestamps();

            $table->foreign('pelaporan_pembangunan_id', 'fk_verifikasi_pembangunan')->references('id')->on('pelaporan_pembangunan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verifikasi_pelaporan_pembangunan');
    }
};
