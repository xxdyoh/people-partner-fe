"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep9Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-10");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                9.
                <span>Security Group</span>
            </h2>
            {/* <div className="items-center justify-center col-span-1 p-4 pb-3">
                <div className="mb-0">
                    <h2 className="text-xl text-center font-medium mb-2 block">Pilih Perusahaan</h2>
                    <select className="select md:w-[300px] select-bordered w-full">
                        <option>PT A</option>
                        <option>PT B</option>
                        <option>PT C</option>
                    </select>
                </div>
            </div> */}
            <div className="gap-10 mt-2 lg:grid-cols-5 md:col-span-full sm:col-span-1 grid col-span-1 grid-cols-1">
                <div className="col-span-1">
                    <div className="bg-info text-info-content py-0 rounded-md">
                        <h3 className="text-sm text-center font-normal">MODUL MASTER ADMIN</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4 -mx-4">
                        <div className="">
                            <label htmlFor="" className="">MENU 1</label>
                        </div>
                        <div className="">
                            <label htmlFor="" className="">MENU 2</label>
                        </div>
                        <div className="">
                            <label htmlFor="" className="">MENU 3</label>
                        </div>
                    </div>
                    <div className="bg-info text-info-content py-0 rounded-md">
                        <h3 className="text-sm text-center font-normal">MODUL LAYANAN MANDIRI</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4 -mx-4">
                        <div className="">
                            <label htmlFor="" className="">MENU 1</label>
                        </div>
                        <div className="">
                            <label htmlFor="" className="">MENU 2</label>
                        </div>
                        <div className="">
                            <label htmlFor="" className="">MENU 3</label>
                        </div>
                    </div>
                </div>
                <div className="col-span-4  ">
                    <div className="max-w-screen overflow-x-auto">
                        <div className="lg:grid-cols-10 grid grid-cols-10 min-w-[600px] space-x-1">
                            <div className="col-span-1">
                                <div className="py-0">
                                    <h3 className="text-sm text-center font-normal">DIREKTUR UTAMA</h3>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-lg text-center font-semibold">DIREKTORAT</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-lg text-center font-semibold">DIREKTORAT</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-lg text-center font-semibold">DIREKTORAT</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-8" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep9Page;
