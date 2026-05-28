import CTA from '@/src/components/shared/cta';
import TeamHero from '@/src/components/team/hero';
import TeamMembers from '@/src/components/team/members';
import TeamTestimonial from '@/src/components/team/testimonial';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { getTeamMembers } from '@/src/utils/getTeamMembers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Team - AI Marketing Agency || Nexsas',
};

const TeamPage = () => {
  const members = getTeamMembers();
  return (
    <main className="bg-background-5">
      <TeamHero />
      <TeamMembers members={members} />
      <TeamTestimonial />
      <CTA className="pt-20! md:pt-30! lg:pt-44!" />
    </main>
  );
};

export default TeamPage;
