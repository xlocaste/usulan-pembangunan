import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { FiPlus, FiEdit, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import PrimaryButton from '@/Components/PrimaryButton';

export default function List({ daftarPelaporanPembangunan }) {
    const { auth } = usePage().props;

    const handleApprove = (id) => {
        router.put(route('pelaporan-pembangunan.approve', id));
    };

    const handleReject = (id) => {
        router.put(route('pelaporan-pembangunan.reject', id));
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus laporan ini?')) {
            router.delete(route('pelaporan-pembangunan.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Daftar Pelaporan Pembangunan">
            <Head title="Pelaporan Pembangunan" />

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
                        {daftarPelaporanPembangunan.length > 0 ? (
                            daftarPelaporanPembangunan.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.judul}</td>
                                    <td className="px-4 py-2 border">{item.wilayah?.nama}</td>
                                    <td className="px-4 py-2 border">{item.status}</td>
                                    <td className="px-4 py-2 border">{item.deskripsi}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {auth.user?.roles?.some(role => role.name === 'admin') && (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(item.id)}
                                                        className="text-green-600 hover:text-green-800 font-bold text-lg"
                                                        title="Setujui"
                                                    >
                                                        <FiCheck />
                                                    </button>
                                                    <button
                                                        onClick={() => handleReject(item.id)}
                                                        className="text-red-600 hover:text-red-800 font-bold text-lg"
                                                        title="Tolak"
                                                    >
                                                        <FiX />
                                                    </button>
                                                </>
                                            )}
                                            {auth.user?.roles?.some(role => role.name === 'user') && (
                                                <>
                                                    <Link
                                                        href={route('pelaporan-pembangunan.edit', item.id)}
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
                                                </>
                                            )}

                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Belum ada laporan pembangunan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
