import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Phone } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  blogPosts,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/lib/blog-posts";
import {
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  SITE_URL,
} from "@/lib/site-config";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "페이지를 찾을 수 없습니다" };
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      locale: "ko_KR",
    },
  };
}

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const otherPosts = blogPosts.filter((item) => item.slug !== post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": canonicalUrl,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    inLanguage: "ko",
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <RegionBreadcrumb
        segments={[
          { label: "이용 가이드 칼럼", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[var(--massage-brown-900)] sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--massage-brown-700)]/70">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingMinutes}분 읽기
              </span>
            </div>
          </header>

          <p className="text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            {post.intro}
          </p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-[var(--massage-brown-700)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-3 text-lg font-bold text-[var(--massage-brown-900)]">
              마무리
            </h2>
            <p className="text-base leading-relaxed text-[var(--massage-brown-700)]">
              {post.conclusion}
            </p>
            <a
              href={PHONE_TEL_HREF}
              aria-label={`전화 문의 ${PHONE_NUMBER}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--massage-coral-300)] px-7 py-3 font-bold text-white transition hover:bg-[var(--massage-coral-200)]"
            >
              <Phone className="h-5 w-5" />
              {PHONE_NUMBER} 전화 상담
            </a>
          </div>
        </div>
      </article>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
            함께 읽어보세요
          </h2>
          <div className="grid gap-4">
            {otherPosts.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border bg-white px-6 py-4 shadow-sm transition hover:border-[var(--massage-coral-300)]"
              >
                <span className="font-semibold text-[var(--massage-brown-900)]">
                  {other.title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--massage-coral-300)] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--massage-coral-300)]"
          >
            <ArrowLeft className="h-4 w-4" />
            칼럼 목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
