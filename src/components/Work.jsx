import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        tahun: 2020,
        title: 'Web Developer',
        durasi: '6 Bulan',
        deskripsi: 'Membuat website menggunakan ReactJS Menerapkan prinsip-prinsip desain web yang responsif dan user-friendly.Menulis kode JavaScript yang bersih dan efisien.Bekerja sama dengan tim developer lain untuk menyelesaikan proyek tepat waktu'
    },
    {
        tahun: 2020,
        title: 'Game Testing',
        durasi: '1 Tahun',
        deskripsi: 'Menguji game yang sedang dikembangkan Memberikan laporan terperinci tentang bug dan masalah yang ditemukan.Bekerja sama dengan tim developer game untuk meningkatkan kualitas game.Memberikan masukan untuk desain dan fitur game.'
    },
    {
        tahun: 2021,
        title: 'Data Analist',
        durasi: '2 Tahun',
        deskripsi: 'Mengumpulkan, membersihkan, dan menganalisa data dari berbagai sumber.Mengidentifikasi pola dan tren dalam data.Membuat laporan dan visualisasi data untuk mengkomunikasikan temuan kepada stakeholders.Memberikan rekomendasi berdasarkan data untuk meningkatkan kinerja perusahaan'
    },
    {
        tahun: 2023,
        title: 'UI/UX Designer',
        durasi: '1 Tahun',
        deskripsi: 'Merancang User Interface (UI) yang menarik dan mudah digunakan.Memastikan User Experience (UX) yang intuitif dan user-friendly.Membuat prototipe dan wireframe untuk menguji desain.Bekerja sama dengan tim developer dan stakeholders untuk memfinalisasi desain.'
    
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem key={idx} 
            tahun={item.tahun}
            title={item.title} 
            durasi={item.durasi} 
            deskripsi={item.deskripsi}/>
        ))}
        </div>
  )
}

export default Work