import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function List({ daftarPelaporanPembangunan }) {
    return (
        <DashboardLayout>
            <Head title="Pelaporan Pembangunan Diajukan" />

            <h2 className="text-xl font-bold mb-4">Daftar Pelaporan Pembangunan (Diajukan)</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-300 shadow">
                    <thead className="text-white">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Deskripsi</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarPelaporanPembangunan.length > 0 ? (
                            daftarPelaporanPembangunan.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.judul}</td>
                                    <td className="px-4 py-2 border">{item.deskripsi}</td>
                                    <td className="px-4 py-2 border">{item.wilayah?.nama || '-'}</td>
                                    <td className="px-4 py-2 border capitalize">{item.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Belum ada data pelaporan pembangunan dengan status diajukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
