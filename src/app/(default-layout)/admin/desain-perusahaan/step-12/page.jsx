"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep11Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-13");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                12.
                <span>Kelompok Jabatan (Job Family)</span>
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
            <div className="gap-10 mt-2 lg:grid-cols-3 md:col-span-full sm:col-span-1 grid col-span-1 grid-cols-1">
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">FORM</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4 -mx-4">
                        <div className="my-2">
                            <label htmlFor="" className="font-medium">KELOMPOK JABATAN</label>
                            <input type="text" onInput={(e) => {
                                e.target.value = e.target.value.toUpperCase()
                            }} defaultValue={"PRODUKSI"} className="input w-full" name="" id="" />
                        </div>

                        <div className="my-2">
                            <label htmlFor="" className="font-medium">SUB-KELOMPOK JABATAN</label>
                            <input type="text" onInput={(e) => {
                                e.target.value = e.target.value.toUpperCase()
                            }} defaultValue={"MANAJEMEN PRODUKSI"} name="" className="input w-full" id="" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-md btn-success mx-0">Tambah</button>
                </div>
                <div className="col-span-2">
                    <div className="max-w-screen overflow-x-auto">
                        <div className="lg:grid-cols-4 grid grid-cols-4 min-w-[600px] space-x-1">
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-sm text-center font-normal h-15 flex items-center justify-center">KELOMPOK JABATAN (JOB FAMILY)</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">Manajemen Ekslusif</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">PRODUKSI</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1"></span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-sm text-center font-normal h-15 flex items-center justify-center">KODE JOB FAMILY</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JFC001</span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JC002</span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JC002</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-sm text-center font-normal h-15 flex items-center justify-center">SUB-KELOMPOK JABATAN (SUB JOB FAMILY)</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">-</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">Manajemen Produksi</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">Pengawasan Produksi</span>
                                    <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-info text-base-100 py-0 rounded-sm">
                                    <h3 className="text-sm text-center font-normal h-15 flex items-center justify-center">KODE JABATAN</h3>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JC001</span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JC002</span>
                                </div>
                                <div className="flex items-center gap-4 mb-1 pb-0">
                                    <span defaultValue="Jenis Izin" className="flex-1">JC003</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-11" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep11Page;
