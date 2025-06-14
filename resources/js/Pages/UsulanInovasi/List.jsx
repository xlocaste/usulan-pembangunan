import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { FiCheck, FiEdit, FiPlus, FiTrash2, FiX } from 'react-icons/fi';

export default function List({ daftarUsulanInovasi }) {
    const { auth } = usePage().props;

    const handleApprove = (id) => {
        if (confirm('Setujui usulan ini?')) {
            router.put(route('usulan-inovasi.approve', id));
        }
    };

    const handleReject = (id) => {
        if (confirm('Tolak usulan ini?')) {
            router.put(route('usulan-inovasi.reject', id));
        }
    };

    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus usulan ini?')) {
            router.delete(route('usulan-inovasi.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout user={auth?.user} header="Daftar Usulan Inovasi">
            <Head title="Usulan Inovasi" />

            <div className="mb-4 flex justify-end">
                <Link href={route('usulan-inovasi.create')}>
                    <PrimaryButton className="flex items-center gap-2">
                        <FiPlus />Tambah Usulan Inovasi
                    </PrimaryButton>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-200">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Kategori</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border text-center">Aksi</th>
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
                                    <td className="px-4 py-2 border text-center">
                                        <div className="flex justify-center items-center gap-2">
                                            {auth.user?.roles?.some(role => role.name === 'admin') && (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(item.id)}
                                                        className="text-green-600 hover:text-green-800 text-lg font-bold"
                                                    >
                                                        <FiCheck />
                                                    </button>
                                                    <button
                                                        onClick={() => handleReject(item.id)}
                                                        className="text-red-600 hover:text-red-800 text-lg font-bold"
                                                    >
                                                        <FiX />
                                                    </button>
                                                </>
                                            )}
                                            {auth.user?.roles?.some(role => role.name === 'user') && (
                                                <>
                                                <Link
                                                    href={route('usulan-inovasi.edit', item.id)}
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
