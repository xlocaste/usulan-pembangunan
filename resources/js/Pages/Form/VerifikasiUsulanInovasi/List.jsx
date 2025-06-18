import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

export default function List({ daftarVerifikasiUI }) {
    return (
        <DashboardLayout>
            <Head title="Verifikasi Usulan Inovasi" />

            <h1 className="text-2xl font-bold mb-4">Daftar Verifikasi Usulan Inovasi</h1>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-300 shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Deskripsi</th>
                            <th className="px-4 py-2 border">File Lampiran</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Kategori</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarVerifikasiUI.length > 0 ? (
                            daftarVerifikasiUI.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.usulan_inovasi?.judul || '-'}</td>
                                    <td className="px-4 py-2 border">{item.usulan_inovasi?.deskripsi || '-'}</td>
                                    <td className="px-4 py-2 border">
                                        {item.usulan_inovasi?.file ? (
                                            <a
                                                href={`/storage/${item.usulan_inovasi.file}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Lihat File
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 italic">Tidak ada</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border capitalize">{item.usulan_inovasi?.status || '-'}</td>
                                    <td className="px-4 py-2 border">{item.usulan_inovasi?.wilayah?.nama || '-'}</td>
                                    <td className="px-4 py-2 border">{item.usulan_inovasi?.kategori?.nama || '-'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Belum ada data verifikasi usulan inovasi.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
