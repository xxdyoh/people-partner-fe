"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep7Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-7");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                8.
                <span>Hari Libur Nasional</span>
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
            <div className="gap-10 mt-2 lg:grid-cols-2 md:col-span-full sm:col-span-1 grid col-span-1 md:grid-cols-1">
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">MASUKKAN TANGGAL</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4 -mx-4">
                        <input type="date" className="input input-bordered w-full my-2 font-medium" name="" id="" />

                        <div className="my-2">
                            <label htmlFor="" className="font-medium">Keterangan</label>
                            <input type="text" name="" className="input w-full" id="" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="" className="font-medium">Berapa Hari</label>
                            <input type="text" defaultValue={0} name="" className="input w-full" id="" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="" className="font-medium">Potong Cuti Tahunan</label>
                            <select name="" className="select w-full" id="">
                                <option value="">YA</option>
                                <option value="">TIDAK</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" className="btn btn-md btn-success mx-0">Tambah</button>
                </div>
                <div className="col-span-1">
                    <div className="bg-primary text-primary-content py-2 rounded-md">
                        <h3 className="text-lg text-center font-semibold">DAFTAR HARI LIBUR 2025</h3>
                    </div>
                    <div className="mt-1 rounded-lg flex-1 px-4 pb-4">
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                        <div className="flex items-center gap-4 border-b border-gray-200 mb-2 pb-1">
                            <span defaultValue="Jenis Izin" className="flex-1">HARI LIBUR</span>
                            <span className="px-2 cursor-pointer"><i className="ri-delete-bin-line text-error"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-end card-actions col-span-full">
                <TransitionLink href="step-5" className="btn btn-info">
                    Kembali
                </TransitionLink>
                <button className="btn btn-success">Simpan & Lanjut</button>
            </div>
        </form>
    );
}

export default DesainPerusahaanStep7Page;
