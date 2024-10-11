import React from 'react';
import {CardInfoProps} from "@/renderer/components/shared/CardInfo/CardInfo.interface";
import Image from "next/image";

export const CardInfo = ({type, svgIcon, balance}: CardInfoProps) => {
    return (
        <aside style={{minWidth: 215, minHeight: 95}} className="flex h-[12vh] w-[15vw] z-10 items-center transition hover:translate-y-[-5px] gap-[30px] shrink-0 rounded-[8px] px-[5px] pr-[30px] bg-background">
            <div style={{minWidth: 40, minHeight: 40}} className="flex items-center justify-center ml-[15px] bg-[#282C35] 2xl:w-[50px] 2xl:h-[50px] w-[40px] h-[40px] rounded-[8px]">
                <Image alt={type} src={svgIcon} width={25} height={25} quality={100} draggable={false} />
            </div>
            <div className="flex gap-[5px] flex-col">
                <p className="2xl:text-[20px] text-[16px] text-[#9E9E9E]">{type}</p>
                <p className="2xl:text-[32px] text-[26px]">{balance}</p>
            </div>
        </aside>
    );
};
