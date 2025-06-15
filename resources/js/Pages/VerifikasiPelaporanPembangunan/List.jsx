import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router, Link } from '@inertiajs/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export default function List({ daftarVerifikasi }) {
    console.log(daftarVerifikasi)
    const { auth } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus data verifikasi ini?')) {
            router.delete(route('verifikasi-pelaporan-pembangunan.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Verifikasi Pelaporan Pembangunan">
            <Head title="Verifikasi Pelaporan Pembangunan" />

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Deskripsi</th>
                            <th className="px-4 py-2 border text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarVerifikasi.length > 0 ? (
                            daftarVerifikasi.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.judul}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.wilayah?.nama}</td>
                                    <td className="px-4 py-2 border capitalize">{item.pelaporan_pembangunan?.status}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.deskripsi}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <Link
                                                href={route('verifikasi-pelaporan-pembangunan.edit', item.id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FiEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Belum ada data verifikasi.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
