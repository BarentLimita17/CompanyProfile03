import Image from "next/image";

function Testimoni() {
    return (
        <div className="flex flex-col bg-white w-auto h-auto px-[5%] py-[2%]">
            <div className="flex items-center px-[5%] my-[39px]">
                <div className="text-[#212121] font-bold text-[23px] px-[5%]">
                    Apa Kata Pengguna MyPertamina?
                </div>
            </div>
            <div className="flex px-[5%] justify-start w-full">
                <div className="flex px-[5%] gap-[33px]">
                    <div>
                        <Image className="" src="/testimoni/testimoni1.png" alt="testimoni1" width={330} height={180} />
                    </div>
                    <div>
                        <Image className="" src="/testimoni/testimoni2.png" alt="testimoni2" width={330} height={180} />
                    </div>
                    <div>
                        <Image className="" src="/testimoni/testimoni3.png" alt="testimoni3" width={330} height={180} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimoni