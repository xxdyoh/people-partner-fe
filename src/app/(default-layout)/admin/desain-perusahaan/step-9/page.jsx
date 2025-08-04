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
                10.
                <span>Security Group</span>
            </h2>
            <div className="gap-10 mt-2 col-span-1 min-w-[400px] flex">
                {/* Jumlah di baris di kolom kiri harus sama dengan jumlah baris di kolom kanan */}
                <div className="col-span-1">
                    <div className="bg-info w-[200px] text-info-content py-0 rounded-md">
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
                        <div className="">
                            <label htmlFor="" className="">-</label>
                        </div>
                    </div>
                    <div className="bg-info w-[200px] text-info-content py-0 rounded-md">
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

                <div className="max-w-screen overflow-x-auto">
                    <div className="lg:grid-cols-10 grid grid-cols-10 min-w-[1000px] space-x-5">
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">DIREKTUR UTAMA</h3>
                            </div>
                            {/* Baris Atas */}
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">DIREKSI</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">GRUP DIVISI</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">DIVISI</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">GRUP DEPARTEMEN</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">DEPARTEMEN</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px] flex-wrap">
                                <h3 className="text-xs text-center font-normal">GRUP UNIT KERJA</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">UNIT KERJA</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">TEAM</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[100px] h-[30px]">
                                <h3 className="text-xs text-center font-normal">INDIVIDU</h3>
                            </div>
                            <div className="menu-pertama">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            {/* Baris Bawah */}
                            <div className="mt-[35px]">
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
                                </div>
                                <div className="text-center">
                                    <input type="checkbox" />
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
