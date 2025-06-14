import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Add() {
    const { auth } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        kategori_id: '',
        wilayah_id: '',
        judul: '',
        deskripsi: '',
        status: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('usulan-inovasi.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Tambah Usulan Inovasi">
            <Head title="Tambah Usulan Inovasi" />

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Kategori</label>
                    <input
                        type="text"
                        value={data.kategori_id}
                        onChange={(e) => setData('kategori_id', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                    {errors.kategori_id && <p className="text-red-500 text-sm">{errors.kategori_id}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Wilayah</label>
                    <input
                        type="text"
                        value={data.wilayah_id}
                        onChange={(e) => setData('wilayah_id', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                    {errors.wilayah_id && <p className="text-red-500 text-sm">{errors.wilayah_id}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Judul</label>
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData('judul', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                    {errors.judul && <p className="text-red-500 text-sm">{errors.judul}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Deskripsi</label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    ></textarea>
                    {errors.deskripsi && <p className="text-red-500 text-sm">{errors.deskripsi}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Status</label>
                    <input
                        type="text"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    />
                    {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
