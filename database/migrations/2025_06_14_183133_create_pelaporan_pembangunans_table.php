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
        Schema::create('pelaporan_pembangunan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('wilayah_id');
            $table->string('judul');
            $table->text('deskripsi');
            $table->string('status');
            $table->timestamps();

            $table->foreign('wilayah_id')->references('id')->on('wilayah');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pelaporan_pembangunan');
    }
};
