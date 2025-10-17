import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Youtube",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Github",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Slack",
        icon: <Slack className="w-5 h-5" />,
    },
];

export default function SocialMedia({ className, iconClassName, tooltipClassName }: Props) {
    return (
        <>
            <div className={cn("flex items-center gap-3.5 p-5", className)}>
                {socialLink.map(item => (
                    <Tooltip key={item.title}>
                        <>
                            <TooltipTrigger>
                                <div className={cn("cursor-pointer p-1.5 border rounded-full hover:text-white hover:border-shop_light_green transition-all duration-300 ease-in-out", iconClassName)}>
                                    {item.icon}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
                                {item.title}
                            </TooltipContent>
                        </>
                    </Tooltip>
                ))}
            </div>
        </>
    );
}