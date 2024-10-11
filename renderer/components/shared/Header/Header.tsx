import {Input} from "@/renderer/components/ui/input";
import {Bell, Search, User} from "lucide-react";
import {Avatar, IconButton} from "@mui/material";
import {green} from "@mui/material/colors";
import {HeaderProps} from "@/renderer/components/shared/Header/Header.interface";

export const Header = ({children}: HeaderProps) => {
    return (
        <header className="flex justify-between items-center h-[50px]">
            <h2 className="h-[25px] text-[20px]">{children}</h2>
            <div className="flex items-center gap-[10px] mr-[20px]">
                <div
                    className="relative flex items-center justify-center overflow-hidden w-[222px] h-[50px]">
                    <Input placeholder="Поиск..."
                           className="placeholder:text-[#9E9E9E] pr-[25px] bg-[#282C35] border-none h-[33px] w-[214px]"/>
                    <span className="absolute right-[10px]">
                        <Search color={"#9E9E9E"} size={18}/>
                    </span>
                </div>
                <IconButton className="hover:bg-[#A9A9A9]/10" style={{color: "#A9A9A9"}}>
                    <Bell color={"#9E9E9E"} size={24}/>
                </IconButton>
                <Avatar sx={{bgcolor: green[400], width: 33, height: 33}} variant="rounded">
                    <User color="#333"/>
                </Avatar>
            </div>
        </header>
    );
};