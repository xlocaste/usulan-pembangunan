import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Add({ kategoriList = [], wilayahList = [] }) {
    const { auth } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        kategori_id: '',
        wilayah_id: '',
        judul: '',
        deskripsi: '',
        status: 'diajukan',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('usulan-inovasi.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Tambah Usulan Inovasi">
            <Head title="Tambah Usulan Inovasi" />

            <form onSubmit={handleSubmit}>
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
                </div>


                <div className="text-right">
                    <PrimaryButton
                        type="submit"
                        disabled={processing}
                    >
                        Simpan
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
