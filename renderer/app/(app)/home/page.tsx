import {CardInfo} from "@/renderer/components/shared/CardInfo/CardInfo";

export default function Dashboard() {
    return (
        <div className="flex justify-center h-full w-full">
            <div className="flex mx-[20px] flex-col w-[100%] mt-[30px] h-full">

                <div className="overflow-x-hidden w-full">
                    <div className="mt-[5px] flex w-full flex-wrap gap-4">
                        <CardInfo type="Баланс" balance="$41,210" svgIcon="/walletIcon.svg"/>
                        <CardInfo type="Доход" balance="$41,210" svgIcon="/bagIcon.svg"/>
                        <CardInfo type="Расходы" balance="$41,210" svgIcon="/cardIcon.svg"/>
                        <CardInfo type="Сбережения" balance="$41,210" svgIcon="/dollarIcon.svg"/>
                    </div>
                </div>
            </div>

        </div>
)
}