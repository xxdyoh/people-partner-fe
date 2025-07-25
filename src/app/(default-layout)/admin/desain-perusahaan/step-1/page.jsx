"use client";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";
// import InputLists from "@/components/InputLists";
import { useState } from "react";

function InputLists({ entries, setEntries }) {
  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const addEntry = () => {
    setEntries([...entries, { name: "", address: "" }]);
  };

  return (
    <div className="space-y-4 w-full">
      {entries.map((entry, index) => (
        <div key={index} className="flex gap-4">
          <input type="text" value={entry.name} onChange={(e) => handleChange(index, "name", e.target.value)} placeholder="Nama" className="input input-bordered w-1/2" />
          <input type="text" value={entry.address} onChange={(e) => handleChange(index, "address", e.target.value)} placeholder="Alamat" className="input input-bordered w-1/2" />
        </div>
      ))}
      <div className="text-center mt-4">
        <button type="button" onClick={addEntry} className="btn btn-primary">
          Tambah
        </button>
      </div>
    </div>
  );
}

function Step1Page() {
  const [entries, setEntries] = useState([{ name: "", address: "" }]);

  const handleSubmit = () => {
    console.log(entries); // Semua inputan kamu ada di sini
  };
  return (
    <div data-transition-page data-animate="enter" className="fade-in-up fade-out-up">
      <form action="">
        <div className="w-full max-w-7xl px-4 mx-auto mt-10">
          <h3 className="font-medium text-2xl">Informasi Perusahaan</h3>
          <h3 className="font-medium text-2xl">1. Sebutkan nama perusahaan dan negara tempat beroperasi</h3>
          <div className="flex justify-center mt-5">
            {/* <button type="button" className="bg-blue-800 hover:bg-blue-700 items-center rounded-3xl p-2 text-white w-24">
              Tambah
            </button> */}
            <InputLists entries={entries} setEntries={setEntries} />
          </div>
        </div>
        <div className="float-end" onClick={handleSubmit}>
          <TransitionLink href={"step-2"} className={"btn btn-success"}>
            Simpan & Lanjut
          </TransitionLink>
        </div>
      </form>
    </div>
  );
}

export default Step1Page;
