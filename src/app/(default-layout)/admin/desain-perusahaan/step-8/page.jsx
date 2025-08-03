"use client";
import TransitionLink, { navigateTo } from "@/components/TransitionLink";

function DesainPerusahaanStep8Page() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo("step-8");
    };
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="pr-8 py-4 pl-14 w-full gap-x-3 gap-y-2 grid grid-cols-[auto_1fr] max-md:grid-cols-1 fade-in-up fade-out-up">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <h2 className="flex gap-2 text-2xl col-span-full -ml-6">
                8.
                <span>Atur Jam Kerja</span>
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
            <div className="gap-10 mt-2 lg:grid-cols-1 md:col-span-full sm:col-span-1 grid col-span-1 md:grid-cols-1">
                <div className="col-span-1 max-w-screen p-0 overflow-x-auto">
                    <div className="grid-cols-10 space-x-1 grid min-w-[1000px]">
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">TIPE JADWAL</h3>
                            </div>
                            <div className="pl-1">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SHIFT</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">NON SHIFT</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">KATEGORI</h3>
                            </div>
                            <div className="pl-1">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">PAGI</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SIANG</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">SORE</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">MALAM</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">MALAM</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">MALAM</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">MALAM</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">SKEMA</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">6-1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">5-2</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">5-2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">DURASI</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">7</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">8</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">8</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">DURASI ISTIRAHAT</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">JAM MASUK</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">05.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">06.30</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">07.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">08.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">09.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">10.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">JAM KELUAR</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">13.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">15.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">16.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">17.00</span>
                                </div>
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">18.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">ISTIRAHAT MULAI</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">09.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">ISTIRAHAT SELESAI</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <span className="flex-1">10.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-primary text-base-100 h-10 flex items-center justify-center rounded-sm">
                                <h3 className="text-sm text-center font-semibold">KODE SHIFT</h3>
                            </div>
                            <div className="pl-1 text-center">
                                <div className="flex items-center gap-4 mb-0 text-sm pb-0">
                                    <input defaultValue={"PG05"} className="flex-1 w-full" />
                                </div>
                            </div>
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

export default DesainPerusahaanStep8Page;
