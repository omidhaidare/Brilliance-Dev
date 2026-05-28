import RevealAnimation from '@/src/components/animation/reveal-animation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface ServiceDetailsMarkdownProps {
  readonly content: string;
}

const ServiceDetailsMarkdown = ({ content }: ServiceDetailsMarkdownProps) => (
  <section className="relative z-10" data-oid="k.a9e.r">
    <div className="main-container" data-oid="d1ks_95">
      <RevealAnimation delay={0.4} data-oid="47n-57t">
        <div className="service-details-markdown pt-10" data-oid="k0oyeo_">
          <ReactMarkdown rehypePlugins={[[rehypeSlug]]} data-oid="g30v3z2">
            {content}
          </ReactMarkdown>
        </div>
      </RevealAnimation>
    </div>
  </section>
);

export default ServiceDetailsMarkdown;
