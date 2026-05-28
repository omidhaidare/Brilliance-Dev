import { CaseStudyDetailsAchievement } from '@/src/components/case-study/details-achievement';
import { CaseStudyDetailsHero } from '@/src/components/case-study/details-hero';
import CTA from '@/src/components/shared/cta';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { getCaseStudies } from '@/src/utils/getCaseStudies';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = getMarkDownData('src/data/case-studies');
  return items?.map((item) => ({ slug: item?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const study = getMarkDownContent('src/data/case-studies', slug);
    const data = study?.data ?? {};
    const title = (data?.title as string) ?? 'Case Study';
    const description = (data?.excerpt as string) ?? undefined;
    const imageUrl = (data?.image as string) ?? (data?.mainImg as string) ?? undefined;
    return buildMetadata(
      `${title} - AI Marketing Agency || Nexsas`,
      description,
      `/case-study/${slug}`,
      imageUrl
    );
  } catch {
    return buildMetadata(
      'Case Study Details - AI Marketing Agency || Nexsas',
      undefined,
      `/case-study/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let study;
  try {
    study = getMarkDownContent('src/data/case-studies', slug);
  } catch {
    notFound();
  }

  const data = study?.data ?? {};
  const title = (data?.title as string) ?? '';
  const client = (data?.client as string) ?? undefined;
  const image = (data?.image as string) ?? (data?.mainImg as string) ?? undefined;
  const detailsImgOne = (data?.detailsImgOne as string) ?? undefined;
  const detailsImgTwo = (data?.detailsImgTwo as string) ?? undefined;
  const excerpt = (data?.excerpt as string) ?? undefined;

  const allStudies = getCaseStudies();

  return (
    <main className="bg-background-5">
      <CaseStudyDetailsHero
        title={title}
        client={client}
        excerpt={excerpt}
        content={study?.content ?? ''}
        image={image}
        detailsImgOne={detailsImgOne}
        detailsImgTwo={detailsImgTwo}
      />
      <CaseStudyDetailsAchievement studies={allStudies} currentSlug={slug} limit={3} />
      <CTA className="pt-20! md:pt-30! lg:pt-44!" />
    </main>
  );
};

export default page;
