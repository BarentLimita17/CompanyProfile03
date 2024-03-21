import Image from "next/image";

export default function FooterMyPertamina() {
    return (
        <div>
            <div className="w-full h-[50vh] bg-[#003154] py-[5%] px-[15%] flex justify-between">
                {/* DIV KIRI */}
                <div className="flex flex-col h-full w-[50%] justify-between">
                    {/* DIV KIRI(1) */}
                    <div className="flex">
                        <Image className="" src="/footer/LogoMyPertamina.png" alt="logo" width={42} height={42} />
                    </div>
                    {/* DIV KIRI(2) */}
                    <div className="flex gap-5">
                        <div className="text-white">Download Now</div>
                        <div className="text-white">License</div>
                    </div>
                    {/* DIV KIRI(3) */}
                    <div className="flex gap-5">
                        <div className="text-white">Instagram</div>
                        <div className="text-white">Tiktok</div>
                        <div className="text-white">Youtube</div>
                        <div className="text-white">Email</div>
                        <div className="text-white">Call</div>
                    </div>
                    {/* DIV KIRI(4) */}
                    <div className="flex gap-5 text-white">
                        <div>&copy; MyPertamina 2021 | PT.Pertamina (PERSERO)</div>
                    </div>
                </div>
                {/* DIV KANAN */}
                <div className="flex flex-col h-full w-[50%] justify-between">
                    {/* DIV KANAN(1) */}
                    <div className="flex justify-end text-white">
                        <Image className="" src="/footer/payment.png" alt="logo" width={481} height={48} />
                    </div>
                    {/* DIV KANAN(2) */}
                    <div className="flex justify-end text-xl text-white">
                        Bagian dari PT. Pertamina Patra Niaga.
                    </div>
                    {/* DIV KANAN(3) */}
                    <div>
                        <div className="flex justify-end text-white">
                            PT Pertamina (PERSERO)
                        </div>
                        <div className="flex justify-end text-white">
                            Jl. Medan Merdeka Tim. No.1A 2, RT.2/RW.1, GAMBIR,
                        </div>
                        <div className="flex justify-end text-white">
                            Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus
                        </div>
                        <div className="flex justify-end text-white">
                            Ibukota Jakarta 1011
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}