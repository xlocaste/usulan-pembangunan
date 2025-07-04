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
        Schema::create('usulan_inovasi', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kategori_id');
            $table->unsignedBigInteger('wilayah_id');
            $table->unsignedBigInteger('user_id');
            $table->string('judul');
            $table->string('file')->nullable();
            $table->text('deskripsi');
            $table->enum('status', ['diajukan', 'diterima', 'ditolak'])->default('diajukan');
            $table->timestamps();

            $table->foreign('kategori_id')->references('id')->on('kategori_usulan');
            $table->foreign('wilayah_id')->references('id')->on('wilayah');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usulan_inovasi');
    }
};
