<?php

namespace App\Http\Requests\UsulanInovasi;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'kategori_id' => ['required', 'exists:kategori_usulan,id'],
            'wilayah_id' => ['required', 'exists:wilayah,id'],
            'judul' => ['required', 'string', 'max:255'],
            'deskripsi' => ['required', 'string'],
            'file' => ['nullable', 'file', 'mimes:pdf,doc,docx,png,jpg,jpeg', 'max:2048'],
        ];
    }

    public function messages(): array
    {
        return [
            'kategori_id.required' => 'Kategori harus dipilih.',
            'kategori_id.exists' => 'Kategori tidak ditemukan.',

            'wilayah_id.required' => 'Wilayah harus dipilih.',
            'wilayah_id.exists' => 'Wilayah tidak ditemukan.',

            'judul.required' => 'Judul tidak boleh kosong.',
            'judul.string' => 'Judul harus berupa teks.',
            'judul.max' => 'Judul maksimal 255 karakter.',

            'deskripsi.required' => 'Deskripsi harus diisi.',
            'deskripsi.string' => 'Deskripsi harus berupa teks.',

            'file.file' => 'File yang diunggah tidak valid.',
            'file.mimes' => 'Format file harus berupa PDF, DOC, DOCX, PNG, JPG, atau JPEG.',
            'file.max' => 'Ukuran file maksimal 2MB.',
        ];
    }
}
