import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { FiHome, FiFileText, FiCheckCircle, FiBarChart2, FiLogOut, FiClipboard } from 'react-icons/fi';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props?.auth?.user;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="fixed h-screen w-64 bg-white shadow-md">
                <div className='flex items-center justify-center w-full mt-4'>
                    <ApplicationLogo className="h-20 w-auto"/>
                </div>
                <nav className="p-4 pl-0 space-y-2">
                    <Link
                        href={route('dashboard')}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        <FiHome /> Dashboard
                    </Link>
                    <Link
                        href={route('usulan-inovasi.index')}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        <FiFileText /> Usulan Inovasi
                    </Link>
                    <Link
                        href={route('verifikasi-usulan-inovasi.index')}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        <FiCheckCircle /> Verifikasi Usulan Inovasi
                    </Link>
                    <Link
                        href={route('pelaporan-pembangunan.index')}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        <FiBarChart2 /> Pelaporan Pembangunan
                    </Link>
                    <Link
                        href={route('verifikasi-pelaporan-pembangunan.index')}
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        <FiClipboard /> Verifikasi Pelaporan
                    </Link>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-red-100 text-red-600"
                    >
                        <FiLogOut /> Logout
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 ml-64">
                {header && (
                    <div className="mb-6 text-xl font-semibold text-black bg-white px-4 py-4 shadow">
                        {header}
                    </div>
                )}

                <div className="mx-6 mb-6 bg-white p-6 rounded">
                    {children}
                </div>
            </main>
        </div>
    );
}
