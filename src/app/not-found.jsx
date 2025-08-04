'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Halaman tidak ditemukan</p>
      <Link href="/" className="btn btn-primary">Kembali ke Beranda</Link>
    </div>
  );
}