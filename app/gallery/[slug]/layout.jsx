import { photoItems } from "@/data/galleryData";

export function generateStaticParams() {
    return photoItems.map((item) => ({
        slug: item.slug,
    }));
}

export default function GallerySlugLayout({ children }) {
    return children;
}
