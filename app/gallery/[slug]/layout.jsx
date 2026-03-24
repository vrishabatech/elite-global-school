import { photoItems } from "@/data/galleryData";

export function generateStaticParams() {
    return photoItems.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const album = photoItems.find((item) => item.slug === slug);

    if (!album) return { title: "Album Not Found" };

    return {
        title: `${album.title} | Elite Global School`,
        alternates: {
            canonical: `/gallery/${slug}`,
        },
    };
}

export default function GallerySlugLayout({ children }) {
    return children;
}
