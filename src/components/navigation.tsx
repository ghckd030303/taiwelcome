"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PHONE_NUMBER, PHONE_TEL_HREF } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/course", label: "코스 및 가격" },
  { href: "/regions", label: "서비스 지역" },
  { href: "/guide", label: "이용안내" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-[var(--massage-coral-300)]"
            >
              휴케어 부산
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
              <Button className="ml-2 gap-2 bg-[var(--massage-coral-200)] text-white hover:bg-[var(--massage-coral-300)]">
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </Button>
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_TEL_HREF}
                aria-label={`전화 문의 ${PHONE_NUMBER}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[var(--massage-coral-200)] px-3 py-2 text-base font-semibold text-white hover:bg-[var(--massage-coral-300)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
