"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              프리미엄 출장 마사지
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={navigationMenuTriggerStyle()}
                  >
                    홈
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                지역안내
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[250px]">
                <DropdownMenuItem asChild>
                  <Link
                    href="/region-guide/gyeongnam"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <div className="font-medium">경남</div>
                      <div className="text-xs text-muted-foreground">
                        김해, 양산, 창원 등
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/region-guide/busan" className="cursor-pointer">
                    <div className="flex flex-col">
                      <div className="font-medium">부산</div>
                      <div className="text-xs text-muted-foreground">
                        해운대, 서면, 남포동 등
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/region-guide" className="cursor-pointer">
                    <div className="font-medium">전체 지역 보기</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/#contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    연락처
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                홈
              </Link>
              <div className="px-3 py-2 text-base font-medium text-gray-900">
                지역안내
              </div>
              <Link
                href="/region-guide/gyeongnam"
                className="block rounded-md py-2 pr-3 pl-6 text-sm font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                경남
              </Link>
              <Link
                href="/region-guide/busan"
                className="block rounded-md py-2 pr-3 pl-6 text-sm font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                부산
              </Link>
              <Link
                href="/region-guide"
                className="block rounded-md py-2 pr-3 pl-6 text-sm font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                전체 지역 보기
              </Link>
              <Link
                href="/#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                연락처
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
