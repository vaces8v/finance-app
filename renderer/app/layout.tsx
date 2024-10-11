'use client'
import {Minus, RectangleHorizontal, X} from 'lucide-react'
import {ThemeProvider} from '../components/shared/theme-provider'
import {cn} from '../lib/utils'
import './globals.css'
import {Inter as FontSans} from "next/font/google"
import {motion} from 'framer-motion'
import {Menu} from "@/renderer/components/shared/Menu/Menu";

const fontSans = FontSans({
    subsets: ["latin"],
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    const handleMinimize = () => {
        window.ipc.send('minimize-window', null);
    };

    const handleClose = () => {
        window.ipc.send('close-window', null);
    };

    const handleMaximize = () => {
        window.ipc.send('maximize-window', null);
    };

    return (
        <html lang="ru">
        <body className={cn(fontSans.className)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="titlebar">
                <div className='flex gap-[3px]'>
                    <motion.button
                        className='z-20 px-[2px] cursor-pointer'
                        whileHover={{
                            background: '#aaaaaa63',
                        }}
                        onClick={handleMinimize}><Minus/></motion.button>
                    <motion.button
                        className='z-20 px-[5px] cursor-pointer'
                        whileHover={{
                            background: '#aaaaaa63',
                        }}
                        onClick={handleMaximize}><RectangleHorizontal size={20}/></motion.button>
                    <motion.button
                        className='z-20 px-[5px] cursor-pointer'
                        initial={{
                            background: 'none'
                        }}
                        transition={{
                            duration: .3
                        }}
                        whileHover={{
                            background: 'red',
                        }}
                        onClick={handleClose}>
                        <X size={24}/>
                    </motion.button>
                </div>
            </div>
            <main className='mt-[30px] flex bg-background w-full h-full'>
                <Menu/>
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
}
