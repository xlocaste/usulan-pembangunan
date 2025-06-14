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
        Schema::create('verifikasi_usulan_inovasi', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('usulan_inovasi_id');
            $table->timestamps();

            $table->foreign('usulan_inovasi_id')->references('id')->on('usulan_inovasi');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verifikasi_usulan_inovasi');
    }
};
