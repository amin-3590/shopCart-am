export const dynamic = "force-dynamic";
export const revalidate = 0;

import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getCategories } from "@/sanity/queries";

export default async function CategoryPage({
    params
}: {
    params: { slug: string };
}) {
    const categories = await getCategories();
    const slug = params.slug;

    return (
        <div className="py-10">
            <Container>
                <Title>
                    Products by Category:{" "}
                    <span className="font-bold text-green-600 capitalize tracking-wide">
                        {slug && slug}
                    </span>
                </Title>
                <CategoryProducts categories={categories} slug={slug} />
            </Container>
        </div>
    );
}