    'use client'
    import React from 'react';
    import {Button} from "@mui/material"
    import Logo from './Logo';
    import {LayoutTemplate, ArrowRightLeft, Wallet, ChartPie, BookUser, Settings} from "lucide-react";
    import {usePathname, useRouter} from "next/navigation";
    import {motion, Variants} from "framer-motion";
    import {hidden} from "next/dist/lib/picocolors";

    function selectIcon(name: string): JSX.Element {
        switch (name) {
            case 'Доска':
                return <LayoutTemplate style={{ marginRight: '8px' }} />
            case 'Транзакции':
                return <ArrowRightLeft style={{ marginRight: '8px' }} />
            case 'Кошелек':
                return <Wallet style={{ marginRight: '8px' }} />
            case 'Аналитика':
                return <ChartPie style={{ marginRight: '8px' }} />
            case 'Семья':
                return <BookUser style={{ marginRight: '8px' }} />
            case 'Настройки':
                return <Settings style={{ marginRight: '8px' }} />
            default:
                return <></>
        }
    }

    const objPath = {
        "home": "Доска",
        "transaction": 'Транзакции',
        "wallet": 'Кошелек',
        "analytics": 'Аналитика',
        "family": 'Семья',
        "settings": 'Настройки',
    }

    const pathMap = {
        "Доска": "/home",
        "Транзакции": "/transaction",
        "Кошелек": "/wallet",
        "Аналитика": "/analytics",
        "Семья": "/family",
        "Настройки": "/settings",
    }


    export const Menu = () => {
        const path = usePathname()
        const router = useRouter()
        const currentPath = path.split('/')[1];

        const handleButtonClick = (text: string) => {
            const url = pathMap[text];
            if (url) {
                router.push(url);
            }
        };

        return (
            <nav style={{minWidth: 211}} className="h-screen">
                <div className="">
                    <div className="flex items-center gap-[8px] text-[24px] ml-[25px]">
                        <Logo/>
                        <p>Fbank</p>
                    </div>
                    <div className="mt-[30px] w-full flex flex-col items-center">
                        {["Доска", "Транзакции", "Кошелек", "Аналитика", "Семья", "Настройки"].map((text, index) => (
                            <Button
                                key={index}
                                onClick={() => handleButtonClick(text)}
                                style={{ color: objPath[currentPath] == text ? "#1FCB4F" : "#A9A9A9", fontSize: 12, alignItems: 'center', justifyContent: 'flex-start', padding: 30, paddingTop: 0, paddingBottom: 0}}
                                className="relative w-full hover:text-[#A9A9A9] hover:bg-[#A9A9A9]/10 h-[50px] font-bold"
                                startIcon={selectIcon(text)}
                            >
                                {text}
                                <motion.div
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: objPath[currentPath] == text ? 1 : 0
                                    }}
                                    className="absolute origin-right rounded-l-[5px] z-10 bg-amber-300 w-[5px] h-[20px] right-0"></motion.div>
                            </Button>
                        ))}
                    </div>
                </div>
            </nav>
        )
    };
