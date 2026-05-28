import ContactFindUs from '@/src/components/contact/find-us';
import ContactFollowUs from '@/src/components/contact/follow-us';
import ContactHero from '@/src/components/contact/hero';
import ContactLiveChatSupport from '@/src/components/contact/live-chat-support';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Contact - AI Marketing Agency || Nexsas',
};

const ContactPage = () => (
  <main className="bg-background-5">
    <ContactHero />
    <ContactLiveChatSupport />
    <ContactFindUs />
    <ContactFollowUs />
  </main>
);

export default ContactPage;
