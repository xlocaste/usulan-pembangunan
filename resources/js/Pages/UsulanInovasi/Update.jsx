import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ usulanInovasi, kategoriList = [], wilayahList = [] }) {
    const { auth } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        kategori_id: usulanInovasi.kategori_id || '',
        wilayah_id: usulanInovasi.wilayah_id || '',
        judul: usulanInovasi.judul || '',
        deskripsi: usulanInovasi.deskripsi || '',
        file: null,
        _method: 'put',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('usulan-inovasi.update', usulanInovasi.id), {
            preserveScroll: true,
            forceFormData: true,
            onError: () => window.scrollTo(0, 0),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Usulan Inovasi">
            <Head title="Edit Usulan Inovasi" />

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-semibold">Kategori</label>
                        <select
                            value={data.kategori_id}
                            onChange={(e) => setData('kategori_id', e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        >
                            <option value="">Pilih Kategori</option>
                            {kategoriList.map((kategori) => (
                                <option key={kategori.id} value={kategori.id}>
                                    {kategori.nama}
                                </option>
                            ))}
                        </select>
                        {errors.kategori_id && <p className="text-red-500 text-sm">{errors.kategori_id}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Wilayah</label>
                        <select
                            value={data.wilayah_id}
                            onChange={(e) => setData('wilayah_id', e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        >
                            <option value="">Pilih Wilayah</option>
                            {wilayahList.map((wilayah) => (
                                <option key={wilayah.id} value={wilayah.id}>
                                    {wilayah.nama}
                                </option>
                            ))}
                        </select>
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
                        <label className="block mb-1 font-semibold">Ganti File Lampiran</label>
                        <input
                            type="file"
                            onChange={(e) => setData('file', e.target.files[0])}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
                    </div>

                    {usulanInovasi.file && (
                        <div className="col-span-2 text-sm text-gray-700">
                            File saat ini:{' '}
                            <a
                                href={`/storage/${usulanInovasi.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Lihat File
                            </a>
                        </div>
                    )}
                </div>

                <div className="text-right mt-4">
                    <PrimaryButton type="submit" disabled={processing}>
                        Perbarui
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
