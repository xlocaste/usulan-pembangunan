import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props?.auth?.user;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="fixed h-screen w-64 bg-white shadow-md">
                <div className="p-4 border-b font-bold text-lg">
                    Inovasi Bappeda
                </div>
                <nav className="p-4 space-y-2">
                    <Link
                        href={route('dashboard')}
                        className="block px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route('usulan-inovasi.index')}
                        className="block px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Usulan Inovasi
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className="block px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Pelaporan Pembangunan
                    </Link>
                    <Link
                        href={route('dashboard')}
                        className="block px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Kategori Usulan
                    </Link>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="block w-full text-left px-4 py-2 rounded hover:bg-red-100 text-red-600"
                    >
                        Logout
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 ml-64">
                {header && (
                    <div className="mb-6 text-xl font-semibold text-black bg-white px-4 py-4 shadow">
                        {header}
                    </div>
                )}

                <div className='mx-6 mb-6 bg-white p-6 rounded'>{children}</div>
            </main>
        </div>
    );
}
