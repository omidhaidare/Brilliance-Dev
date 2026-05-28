import CTA from '@/src/components/shared/cta';
import TeamDetailsHero from '@/src/components/team/details-hero';
import TeamDetailsMarkdown from '@/src/components/team/details-markdown';

import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = getMarkDownData('src/data/team');
  return items?.map((item) => ({ slug: item?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const member = getMarkDownContent('src/data/team', slug);
    const data = member?.data ?? {};
    const title = (data?.title as string) ?? 'Team';
    const description = (data?.position as string) ?? undefined;
    const imageUrl = (data?.image as string) ?? undefined;
    return buildMetadata(
      `${title} - AI Marketing Agency || Nexsas`,
      description,
      `/team/${slug}`,
      imageUrl
    );
  } catch {
    return buildMetadata(
      'Team Details - AI Marketing Agency || Nexsas',
      undefined,
      `/team/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let member;
  try {
    member = getMarkDownContent('src/data/team', slug);
  } catch {
    notFound();
  }

  const data = member?.data ?? {};
  const name = (data?.title as string) ?? '';
  const position = (data?.position as string) ?? '';
  const image = (data?.image as string) ?? '';

  return (
    <main className="bg-background-5">
      <TeamDetailsHero name={name} position={position} image={image} />
      <TeamDetailsMarkdown content={member?.content ?? ''} />
      <CTA className="pt-20! md:pt-30! lg:pt-44!" />
    </main>
  );
};

export default page;
