import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
            <nav className="bg-slate-900 shadow px-6 py-4">
                <h1 className="text-lg font-bold">Dashboard Form</h1>
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
                <Link
                    href={route('welcome')}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-white font-bold hover:bg-white/30 hover:ring-2 hover:ring-white transition duration-200"
                >
                    Landing Page
                </Link>
                <Link
                    href={route('form.usulan-inovasi.list')}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-white font-bold hover:bg-white/30 hover:ring-2 hover:ring-white transition duration-200"
                >
                    Usulan Inovasi
                </Link>
                <Link
                    href={route('form.verifikasi-usulan-inovasi.list')}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-white font-bold hover:bg-white/30 hover:ring-2 hover:ring-white transition duration-200"
                >
                    Verifikasi Usulan Inovasi
                </Link>
                <Link
                    href={route('form.pelaporan-pembangunan.list')}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-white font-bold hover:bg-white/30 hover:ring-2 hover:ring-white transition duration-200"
                >
                    Pelaporan Pembangunan
                </Link>
                <Link
                    href={route('form.verifikasi-pelaporan-pembangunan.list')}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-white font-bold hover:bg-white/30 hover:ring-2 hover:ring-white transition duration-200"
                >
                    Verifikasi Pelaporan Pembangunan
                </Link>
            </div>

            <main className="p-6">{children}</main>
        </div>
    );
}
