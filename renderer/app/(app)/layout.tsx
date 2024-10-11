'use client'
import {Header} from "@/renderer/components/shared/Header/Header";
import {usePathname} from "next/navigation";
import {ScrollArea} from "@/renderer/components/ui/scroll-area";


const objPath = {
    "home": "Доска",
    "transaction": 'Транзакции',
    "wallet": 'Кошелек',
    "analytics": 'Аналитика',
    "family": 'Семья',
    "settings": 'Настройки',

}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    const path = usePathname()

    return (
        <div className="flex flex-grow flex-col w-screen h-screen">
            <Header>{objPath[path.slice(1, -1)]}</Header>
            <ScrollArea className="bg-[#282C35] rounded-tl-2xl h-full w-full">
                {children}
            </ScrollArea>
        </div>
    )
}
