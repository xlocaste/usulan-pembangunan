import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router, Link } from '@inertiajs/react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import PrimaryButton from '@/Components/PrimaryButton';

export default function List({ daftarUsulanInovasi }) {
    const { auth } = usePage().props;

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
                        <FaPlus />
                        Tambah Usulan Inovasi
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
                                            <Link
                                                href={route('usulan-inovasi.edit', item.id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <FaTrash />
                                            </button>
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
