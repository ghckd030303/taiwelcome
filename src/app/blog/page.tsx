import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "출장안마 이용 가이드 칼럼",
  description:
    "홈타이와 출장안마의 차이, 수면과 마사지, 교대 근무자 회복법 등 방문 케어를 더 잘 이용하기 위한 정보를 정리한 칼럼입니다.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "출장안마 이용 가이드 칼럼",
    description:
      "부산 출장안마·홈타이 이용 방법과 몸 관리 팁을 정리한 칼럼",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "이용 가이드 칼럼" }]} />

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            출장안마 이용 가이드
          </h1>
          <p className="text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            처음 이용하는 분들의 궁금증부터 몸 관리 팁까지.
            <br />
            방문 케어를 더 잘 이용하기 위한 정보를 정리했습니다.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-4xl gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:border-[var(--massage-coral-300)] hover:shadow-lg sm:p-8"
            >
              <h2 className="text-xl font-bold text-[var(--massage-brown-900)] transition group-hover:text-[var(--massage-coral-300)] sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[var(--massage-brown-700)]/70 sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingMinutes}분 읽기
                </span>
                <span className="ml-auto inline-flex items-center gap-1 font-semibold text-[var(--massage-coral-300)]">
                  읽어보기
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
