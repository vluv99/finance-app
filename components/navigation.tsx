"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "@/components/nav-button";
import { useState } from "react";
import { useMedia } from "react-use";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const routes = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onclick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={`font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none
            focus-visible:rind-offset-0 focus-visible:ring-transparent outline-none text-white
            focus:bg-white/30 transition`}
          >
            <Menu className="size-4"></Menu>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px0-4">
          <nav className="flex flex-col gap-y-2 pt-6">
            <SheetHeader>
              <SheetTitle className="hidden" />
            </SheetHeader>
            {routes.map((route) => (
              <Button
                variant={route.href === pathName ? "secondary" : "ghost"}
                key={route.href}
                onClick={() => onclick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathName === route.href}
        />
      ))}
    </nav>
  );
}
