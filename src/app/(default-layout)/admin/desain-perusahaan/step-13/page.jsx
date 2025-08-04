"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep12Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-14");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                13.
                <span>Job Repository - List</span>
            </h2>
            <div className="gap-10 mt-2 lg:grid-cols-1 md:col-span-full sm:col-span-1 grid col-span-1 md:grid-cols-1">
                <div className="col-span-1 max-w-screen p-0 overflow-x-auto">
                    <div className="grid-cols-7 space-x-1 grid min-w-[1000px]">
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">PERUSAHAAN</h3>
                            </div>
                            <div className="pl-1">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">NAMA POSISI</h3>
                            </div>
                            <div className="pl-1">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR UTAMA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR PRODUKSI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">KEPALA BAGIAN PRODUKSI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1"> DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1"> DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">MELAPOR KEPADA</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">DIREKTUR KEUANGAN, KEPALA BAGIAN KEUANGAN</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">UNIT KERJA</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">DEPARTEMEN</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">DEPARTEMEN</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">SUB-KEL JABATAN</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 h-[80px] text-sm pb-0">
                                    <span className="flex-1">PT KAMU ADA AJA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-12" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep12Page;
