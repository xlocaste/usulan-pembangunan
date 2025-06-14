import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function List({ daftarUsulanInovasi }) {
    const { auth } = usePage().props;
    console.log("auth",auth)
    return (
        <AuthenticatedLayout
            user={auth?.user}
            header="Daftar Usulan Inovasi"
        >
            <Head title="Usulan Inovasi" />

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Kategori</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarUsulanInovasi.length > 0 ? (
                            daftarUsulanInovasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.judul}</td>
                                    <td className="px-4 py-2 border">{item.kategori?.nama}</td>
                                    <td className="px-4 py-2 border">{item.wilayah?.nama}</td>
                                    <td className="px-4 py-2 border">{item.status}</td>
                                    <td className="px-4 py-2 border"></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-500">
                                    Belum ada usulan inovasi.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
