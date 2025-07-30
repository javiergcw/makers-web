import { BookADemo } from '@/components/bookAdemo';
import HeroBanner from "@/components/home/hero_banner";
import CanopyBlogPreview from "@/components/canopyWeb/CanopyBlogPreview";
export default function BookADemoPage() {
    return (
        <>  <BookADemo />
            <CanopyBlogPreview
                title="Get a glimpse of the Jungle world"
                subtitle=""
            />
            <HeroBanner
                bannerText="We develop the solutions  to tackle your data jungles"
                buttonText="Start today"
                buttonRedirect="/canopy"
            />
        </>
    );
}