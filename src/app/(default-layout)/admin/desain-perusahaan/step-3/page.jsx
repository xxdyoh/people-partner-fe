"use client";
import TransitionLink from "@/components/TransitionLink";
import { useState } from "react";

function Step3Page() {
  const [hasHolding, setHasHolding] = useState("");
  const [isRelevant, setIsRelevant] = useState("");

  return (
    <div data-transition-page data-animate="enter" className="w-full px-8 py-4 fade-in-up fade-out-pop-up">
      <div className="w-full mx-auto p-4">
        <div className="card bg-slate-100 shadow-xl">
          <div className="card-body overflow-x-auto">
            <h2 className="card-title text-2xl">3. Masukkan informasi sebagai berikut</h2>
            <ul className="w-full space-y-4 mt-5">
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Nama Legal Perusahaan</label>
                <select className="select select-bordered py-3  flex-1">
                  <option>Ya</option>
                  <option>Tidak</option>
                </select>
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Terdaftar di Negara</label>
                <input type="text" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Nama Brand/Komersial</label>
                <input type="text" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Tipe Entitas Hukum</label>
                <input type="text" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Tipe Entitas Hukum</label>
                <input type="text" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Nomor Induk Berusaha</label>
                <input type="number" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">NPWP Perusahaan</label>
                <input type="number" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Alamat Kantor Pusat</label>
                <input type="number" placeholder="Masukkan nama perusahaan" className="input py-3 input-bordered flex-1" />
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                {/* Label kiri dengan lebar tetap */}
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Perusahaan & Negara</label>

                {/* Dua input sejajar di kanan, dengan wrapper konsisten */}
                <div className="flex flex-1 gap-4">
                  <input type="text" placeholder="Nama Perusahaan" className="input py-3 input-bordered w-full" />
                  <input type="text" placeholder="Negara" className="input py-3 input-bordered w-full" />
                </div>
              </li>

              <li className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                {/* Label kiri dengan lebar tetap */}
                <label className="w-full md:w-56 text-sm font-medium text-gray-700">Logo</label>

                {/* Input file di kanan */}
                <input type="file" className="file-input file-input-bordered flex-1" />
              </li>
            </ul>

            <div className="card-actions justify-end">
              <TransitionLink href={"step-5"} className={"btn btn-success"}>
                Simpan & Lanjut
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3Page;
