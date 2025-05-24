// src/components/FilterSidebar.jsx
import React from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDown, Check } from 'lucide-react';

// Opsi kategori bisa dipindahkan ke sini atau di-props dari Article.jsx
// Untuk contoh ini, kita akan asumsikan di-props.

const FilterSidebar = ({
  kategoriOptions,
  selectedKategori,
  onKategoriChange,
  // Anda bisa menambahkan props lain untuk filter tambahan di sini
  // Misalnya: brandOptions, selectedBrand, onBrandChange, dll.
}) => {
  return (
    <div className="w-72 bg-[#1f2937] text-white shadow-lg p-4 border-r-2 border-r-gray-200">
      {/* Kategori Filter */}
      <div className="mb-4 mt-5">
        <label className="block font-medium mb-1">Kategori Artikel:</label>
        <Listbox
          value={kategoriOptions.find(k => k.value === selectedKategori) || kategoriOptions[0]}
          onChange={(val) => onKategoriChange(val.value)}
        >
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md hover:shadow-[5px_8px_20px_rgba(0,0,0,0.5)] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all">
              <span>{kategoriOptions.find(k => k.value === selectedKategori)?.name || 'Tampilkan Semua'}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="w-4 h-4" />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black/10 focus:outline-none z-50">
              {kategoriOptions.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  value={option}
                  className={({ active, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-all duration-200 ease-in-out group ${
                      active ? 'text-white' : 'text-gray-200'
                    } ${selected ? 'font-semibold' : ''}`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className="block relative w-fit">
                        {option.name}
                        <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {/* Tambahkan filter lain di sini jika diperlukan (misal, Author, Tanggal) */}
      {/* Contoh:
      <div className="mb-4">
        <label className="block font-medium mb-1">Penulis:</label>
        {/* Implementasi Listbox untuk Penulis *}
      </div>
      */}
    </div>
  );
};

export default FilterSidebar;