import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLanding from "@/components/locations/LocationLanding";
import SiteShell from "@/components/layout/SiteShell";
import { getLocationPage, locationPages } from "@/lib/locationPages";

type LocationRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(locationPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LocationRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return {};

  return {
    title: `BeautyPod for ${page.name}`,
    description: page.intro,
    openGraph: {
      title: page.title,
      description: page.intro,
      images: [{ url: page.heroImage, alt: `${page.name} BeautyPod deployment` }],
    },
  };
}

export default async function LocationPage({ params }: LocationRouteProps) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  return (
    <SiteShell>
      <LocationLanding page={page} />
    </SiteShell>
  );
}
