import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function List({ daftarVerifikasiPP }) {
    return (
        <DashboardLayout>
            <Head title="Verifikasi Pelaporan Pembangunan" />

            <h2 className="text-xl font-bold mb-4">Daftar Verifikasi Pelaporan Pembangunan</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-300 shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Judul</th>
                            <th className="px-4 py-2 border">Deskripsi</th>
                            <th className="px-4 py-2 border">Wilayah</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Pengirim</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarVerifikasiPP.length > 0 ? (
                            daftarVerifikasiPP.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.judul}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.deskripsi}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.wilayah?.nama || '-'}</td>
                                    <td className="px-4 py-2 border capitalize">{item.pelaporan_pembangunan?.status}</td>
                                    <td className="px-4 py-2 border">{item.pelaporan_pembangunan?.user?.name || '-'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">
                                    Belum ada data pelaporan pembangunan yang diverifikasi.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
