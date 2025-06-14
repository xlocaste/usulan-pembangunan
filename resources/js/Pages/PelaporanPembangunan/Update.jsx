import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Update({ pelaporanPembangunan, wilayahList = [] }) {
    const { auth } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        wilayah_id: pelaporanPembangunan.wilayah_id || '',
        judul: pelaporanPembangunan.judul || '',
        deskripsi: pelaporanPembangunan.deskripsi || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('pelaporan-pembangunan.update', pelaporanPembangunan.id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Pelaporan Pembangunan">
            <Head title="Edit Pelaporan Pembangunan" />

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Deskripsi</label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        rows={5}
                    ></textarea>
                    {errors.deskripsi && <p className="text-red-500 text-sm">{errors.deskripsi}</p>}
                </div>

                <div className="text-right">
                    <PrimaryButton type="submit" disabled={processing}>
                        Perbarui
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
