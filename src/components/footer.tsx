import { Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_NAME, PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-config";

export function Footer() {
  return (
    <footer
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="border-t border-[var(--massage-beige-300)] bg-[var(--massage-brown-900)] px-4 py-10 text-[var(--massage-beige-100)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm leading-relaxed sm:text-base">
          <p className="text-lg font-bold text-white" itemProp="name">
            {BUSINESS_NAME}
          </p>
          <p>
            <span className="text-[var(--massage-beige-300)]">사업장 소재지 </span>
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressRegion">{BUSINESS_ADDRESS.region}</span>{" "}
              <span itemProp="addressLocality">{BUSINESS_ADDRESS.city}</span>{" "}
              <span itemProp="streetAddress">{BUSINESS_ADDRESS.dong}</span>
            </span>
          </p>
          <p className="text-xs text-[var(--massage-beige-300)] sm:text-sm">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>

        <a
          href={PHONE_TEL_HREF}
          itemProp="telephone"
          aria-label={`전화 문의 ${PHONE_NUMBER}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--massage-coral-200)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-all hover:bg-[var(--massage-coral-300)] active:scale-95 sm:px-8 sm:text-xl"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          {PHONE_NUMBER}
        </a>
      </div>
    </footer>
  );
}
