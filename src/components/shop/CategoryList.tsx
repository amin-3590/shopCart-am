import { Category } from "../../../sanity.types";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Title } from "../ui/text";

interface Props {
    categories: Category[];
    selectedCategory?: string | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function CategoryList({ categories, selectedCategory, setSelectedCategory }: Props) {
    return (
        <div className="w-full bg-white p-5">
            <Title className="text-base font-black">Product Categories</Title>
            <RadioGroup value={selectedCategory || ""} className="mt-2 space-y-1">
                {categories?.map((category) => (
                    <div onClick={() => { setSelectedCategory(category.slug?.current as string) }} key={category?._id} className="flex items-center space-x-2 cursor-pointer" >
                        <RadioGroupItem
                            value={category?.slug?.current as string}
                            id={category?.slug?.current}
                            className="rounded-sm"
                        />
                        <Label
                            htmlFor={category.slug?.current}
                            className={`${selectedCategory === category.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}
                        >
                            {category.title}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
            {selectedCategory && (
                <button onClick={() => setSelectedCategory(null)} className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green transition-all duration-300 ease-in-out text-left">
                    Reset selection
                </button>
            )}
        </div>
    );
}