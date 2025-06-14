import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 flex flex-col justify-center items-center px-6">
                <div className="w-full max-w-2xl text-center">
                    <h1 className="text-4xl font-bold mb-4">Selamat Datang di Aplikasi</h1>
                    <p className="text-lg mb-8">
                        Aplikasi ini dibuat menggunakan Laravel {laravelVersion} dan PHP {phpVersion}.
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
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
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </div>

                    <footer className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Aplikasi Laravel — Laravel v{laravelVersion}, PHP v{phpVersion}
                    </footer>
                </div>
            </div>
        </>
    );
}
