import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";

function MasterAdminPage() {
  return (
    <div data-transition-page data-animate="enter" className="fade-in-up fade-out-up">
      {/* Judul Besar */}
      <h1 className="mt-10 font-light text-2xl md:text-3xl text-center">Hello Good People! Selamat Datang di People Patner System...</h1>
      <h1 className="mb-10 font-light text-2xl md:text-3xl text-center">Sebelum dimulai, silahkan pilih menu dibawah ini : </h1>

      {/* Card Container */}
      <div className="gap-6 grid grid-cols-3 @max-lg/main:grid-cols-1 @max-3xl/main:grid-cols-2 p-5 w-full max-w-6xl">
        {/* Card 1 */}
        <TransitionLink href="/admin/desain-perusahaan" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card outline-3 hover:outline-secondary outline-transparent">
          <figure className="h-48">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=400&h=300&q=80" alt="Ikon 1" className="w-full h-full object-cover" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Desain Perusahaan</h2>
          </div>
        </TransitionLink>

        {/* Card 2 */}
        <TransitionLink href="/admin/managemen-pengguna" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card outline-3 hover:outline-secondary outline-transparent">
          <figure className="h-48">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&h=300&q=80z" alt="Ikon 2" className="w-full h-full object-cover" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Manajemen Pengguna</h2>
          </div>
        </TransitionLink>

        {/* Card 3 */}
        <TransitionLink href="/admin/desain-perusahaan" className="w-full bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card outline-3 hover:outline-secondary outline-transparent">
          <figure className="h-48">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=300&q=80" alt="Ikon 3" className="w-full h-full object-cover" />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="card-title">Dasar Kompensasi dan Benefit</h2>
          </div>
        </TransitionLink>
      </div>
    </div>
  );
}

export default MasterAdminPage;
