import ServiceDetailsHero from '@/src/components/services/details-hero';
import ServiceDetailsMarkdown from '@/src/components/services/details-markdown';
import ServiceDetailsProcess from '@/src/components/services/details-process';
import CTA from '@/src/components/shared/cta';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = getMarkDownData('src/data/services');
  return items?.map((item) => ({ slug: item?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = getMarkDownContent('src/data/services', slug);
    const data = service?.data ?? {};
    const title = (data?.title as string) ?? 'Service';
    const description = (data?.description as string) ?? undefined;
    const imageUrl = (data?.image as string) ?? undefined;
    return buildMetadata(
      `${title} - Website Design Agency | Brilliance Dev`,
      description,
      `/service-details/${slug}`,
      imageUrl
    );
  } catch {
    return buildMetadata(
      'Service Details - Website Design Agency | Brilliance Dev',
      undefined,
      `/service/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let service;
  try {
    service = getMarkDownContent('src/data/services', slug);
  } catch {
    notFound();
  }

  const data = service?.data ?? {};
  const title = (data?.title as string) ?? '';
  const description = (data?.description as string) ?? '';

  return (
    <main className="bg-background-7" data-oid="6uzmaoo">
      <ServiceDetailsHero title={title} description={description} data-oid="34mr5.v" />
      <ServiceDetailsMarkdown content={service?.content ?? ''} data-oid="hhbbnms" />
      <ServiceDetailsProcess data-oid="mvb:mf8" />
      <CTA className="bg-background-6! pt-20! md:pt-30! lg:pt-44!" data-oid="w1nfdf-" />
    </main>
  );
};

export default page;
