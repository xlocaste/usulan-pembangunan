import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <nav className="bg-white shadow px-6 py-4">
                <h1 className="text-lg font-bold">Dashboard Form</h1>
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
                <Link
                    href={route('welcome')}
                    className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow text-gray-800 font-bold hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 transition duration-200"
                >
                    Landing Page
                </Link>
                <Link
                    href={route('form.usulan-inovasi.list')}
                    className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow text-gray-800 font-bold hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 transition duration-200"
                >
                    Usulan Inovasi
                </Link>
                <Link
                    href={route('form.verifikasi-usulan-inovasi.list')}
                    className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow text-gray-800 font-bold hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 transition duration-200"
                >
                    Verifikasi Usulan Inovasi
                </Link>
                <Link
                    href={route('form.pelaporan-pembangunan.list')}
                    className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow text-gray-800 font-bold hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 transition duration-200"
                >
                    Pelaporan Pembangunan
                </Link>
                <Link
                    href={route('form.verifikasi-pelaporan-pembangunan.list')}
                    className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow text-gray-800 font-bold hover:bg-gray-100 hover:ring-2 hover:ring-gray-300 transition duration-200"
                >
                    Verifikasi Pelaporan Pembangunan
                </Link>
            </div>

            <main className="p-6 bg-white rounded shadow mx-6">{children}</main>
        </div>
    );
}
