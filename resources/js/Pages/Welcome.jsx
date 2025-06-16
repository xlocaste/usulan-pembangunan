import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-center items-center px-6">
                <div className="w-full max-w-2xl text-center">
                    <h1 className="text-4xl font-bold mb-4">Selamat Datang di Aplikasi</h1>
                    <p className="text-lg mb-8">
                        Aplikasi ini dibuat menggunakan Laravel {laravelVersion} dan PHP {phpVersion}.
                    </p>

                    <div className="flex justify-center gap-4 mb-4">
                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                            >
                                Masuk ke Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <Link
                            href={route('form.usulan-inovasi.list')}
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-gray-800 font-bold hover:bg-white/30 hover:ring-2 hover:ring-gray-300 transition duration-200"
                        >
                            Usulan Inovasi
                        </Link>

                        <Link
                            href={route('form.verifikasi-usulan-inovasi.list')}
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-gray-800 font-bold hover:bg-white/30 hover:ring-2 hover:ring-gray-300 transition duration-200"
                        >
                            Verifikasi Usulan Inovasi
                        </Link>

                        <Link
                            href={route('form.pelaporan-pembangunan.list')}
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-gray-800 font-bold hover:bg-white/30 hover:ring-2 hover:ring-gray-300 transition duration-200"
                        >
                            Pelaporan Pembangunan
                        </Link>

                        <Link
                            href={route('form.verifikasi-pelaporan-pembangunan.list')}
                            className="inline-flex items-center justify-center bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-md text-gray-800 font-bold hover:bg-white/30 hover:ring-2 hover:ring-gray-300 transition duration-200"
                        >
                            Verifikasi Pelaporan Pembangunan
                        </Link>
                    </div>

                    <footer className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Aplikasi Laravel — Laravel v{laravelVersion}, PHP v{phpVersion}
                    </footer>
                </div>
            </div>
        </>
    );
}
