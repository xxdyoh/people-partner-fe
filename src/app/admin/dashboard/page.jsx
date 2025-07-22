import TransitionLink from "@/components/TransitionLink";

function AdminDashPage() {
    return (
        <div data-transition-page data-animate="enter" className="gap-4 grid grid-cols-4 @max-lg/main:grid-cols-1 @max-3xl/main:grid-cols-2 @max-5xl/main:grid-cols-3 px-8 py-4 fade-in-up fade-out-pop-up">
            <TransitionLink href="/admin/dashboard" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Desain Organisasi</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Layanan Mandiri</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Rekrutmen</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Assesmen</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Kompetisi dan Benefit</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hubungan Industrial</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Master Admin</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
            <TransitionLink href="" className="bg-base-100 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer card">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Manajemen Kinerja</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </TransitionLink>
        </div>
    );
}

export default AdminDashPage;