'use client';
import TransitionLink, { navigateTo } from "@/components/TransitionLink";
import { useEffect } from "react";

function InputNamaPerusahaan({ ...props }) {
    return (
        <select {...props} className="select w-full">
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
        </select>
    )
}

function InputBeroprasiDiNegara({ ...props }) {
    return (
        <input {...props} type="text" placeholder="Beroprasi di" className="input w-full" />
    )
}

function InputDesainPerusahaan({ ...props }) {
    return (
        <select {...props} className="select w-full">
            <option>Super Holding</option>
            <option>Holding</option>
            <option>Subsidiary</option>
            <option>Country Operation</option>
        </select>
    )
}

function InputMelaporKe({ ...props }) {
    return (
        <select {...props} className="select w-full">
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
        </select>
    )
}

function Step3Page({ ...props }) {
    // to make line in the tree graph
    function connectLine() {
        const rect1 = document.querySelector('#requireConnect>div:first-child>.line').getBoundingClientRect();
        const rect2 = document.querySelector('#requireConnect>div:last-child>.line').getBoundingClientRect();
        const containerRect = document.getElementById('wrapper').getBoundingClientRect();

        const x1 = rect1.left - containerRect.left + rect1.width / 2;
        const y1 = rect1.top - containerRect.top;
        const x2 = rect2.left - containerRect.left + rect2.width / 2;
        const y2 = rect2.top - containerRect.top;

        const line = document.getElementById('connector');
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
    }

    useEffect(() => {
        connectLine();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // handle submit here
        navigateTo('step-5');
    }
    return (
        <form onSubmit={handleFormSubmit} data-transition-page data-animate="enter" className="py-4 pr-4 pl-14 grid grid-cols-4 gap-x-4 gap-y-2 fade-in-up fade-out-up">
            <h2 className="text-2xl flex gap-2 mb-4 col-span-full -ml-6">
                4.
                <span>
                    Masukan informasi group perusahaan
                </span>
            </h2>
            <div>Nama Perusahaan</div>
            <div>Beroprasi di Negara</div>
            <div>Desain Perusahaan</div>
            <div>Melapor Ke</div>

            <InputNamaPerusahaan />
            <InputBeroprasiDiNegara />
            <InputDesainPerusahaan />
            <InputMelaporKe />

            <InputNamaPerusahaan />
            <InputBeroprasiDiNegara />
            <InputDesainPerusahaan />
            <InputMelaporKe />

            <InputNamaPerusahaan />
            <InputBeroprasiDiNegara />
            <InputDesainPerusahaan />
            <InputMelaporKe />

            <InputNamaPerusahaan />
            <InputBeroprasiDiNegara />
            <InputDesainPerusahaan />
            <InputMelaporKe />

            <div className="col-span-4 flex flex-col items-center mt-16">
                <div className="flex flex-col items-center">
                    <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Super Holding</div>
                    <div className="border-l-2 h-7"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Holding</div>
                    <div className="border-l-2 h-7"></div>
                </div>
                <div className="pb-3 w-full mx-8 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-white/0 scrollbar-thumb-accent">
                    <div id="wrapper" className="relative w-min mx-auto">
                        <svg className="top-0 left-0 absolute w-full">
                            <line id="connector" stroke="black" strokeWidth="3" />
                        </svg>
                        <div id="requireConnect" className="flex w-min gap-5">
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="border-l-2 h-7 line"></div>
                                <div className="px-8 py-1 rounded-field bg-base-200 shadow-sm border-base-200 def-border-w">Subsidiary</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 flex gap-2">
                <TransitionLink href="step-3" className="btn btn-info ml-auto">
                    Kembali
                </TransitionLink>
                <button type="submit" className="btn btn-success">
                    Simpan & Lanjut
                </button>
            </div>
        </form>
    );
}

export default Step3Page;