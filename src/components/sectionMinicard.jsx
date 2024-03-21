'use client'
import { useState } from "react";
import Image from "next/image";
import minicardData from "./minicardData";
import { FaArrowRight } from "react-icons/fa";

function Minicard() {
    const [index, setIndex] = useState(0);
    return (
        <div className="flex flex-col bg-white w-auto h-auto px-[5%] py-[2%]">
            <div className="flex justify-center gap-[33px] rounded-xl">
                {minicardData.map((minicard, index) => {
                    return (
                        <div onClick={() => setIndex(index)} key={index} className="w-[90px] h-[106px] py-[3%] rounded overflow-hidden shadow-lg flex flex-col justify-center items-center pt-9 bg-[#f3f5f6] cursor-pointer">
                            <div className="h-[50%] mt-[5%]">
                                <Image className="rounded-full" src={minicard.imageIcon} alt="E PAYMENTS" width={24} height={33} />
                            </div>
                            <div className="px-6 py-4 flex flex-col text-center">
                                <div className="text-[10.5px] mb-2 text-[#424242]">{minicard.title}</div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="w-full h-[500px] px-[5%] py-[2%] flex">
                <div className="w-[50%] flex justify-start items-center pl-[5%]">
                    <Image className="rounded-xl" src={minicardData[index].image} alt="bigImage" width={437} height={276} />
                </div>
                <div className="flex flex-col w-[469px] justify-center items-start gap-[15px]">
                    <div className="text-[18px] font-bold text-[#00192C]">
                        {minicardData[index].title}
                    </div>
                    <div>
                        {minicardData[index].description}
                    </div>
                    <div className="text-[#e32935] flex items-center justify-center gap-2">
                        <FaArrowRight />Pelajari Lebih Lanjut
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Minicard