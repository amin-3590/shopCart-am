import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: ContactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "Isfahan, Kashan",
        icon: (
            <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Call Us",
        subtitle: "+98 913 423 0680",
        icon: (
            <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 12:00 AM - 11:00 PM",
        icon: (
            <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Email Us",
        subtitle: "lyakbryamyn7@gmail.com",
        icon: (
            <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
];

export default function FooterTop() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
            {data.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-all duration-300 ease-in-out">
                    {item.icon}
                    <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-black transition-all duration-300 ease-in-out">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-all duration-300 ease-in-out">{item.subtitle}</p>
                    </div>
                </div>
            ))}
        </div> 
    );
}