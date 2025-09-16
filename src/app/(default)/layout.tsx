import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SocialsFooter } from "@/components/layout/socials-footer";
import { Link } from "@/components/custom/link";
import { Leaf } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col gap-4 p-4 sm:p-16">
        <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-7xl mx-auto relative min-h-full h-full rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-[2px] sm:p-8">
          <div className="grid gap-1">
            <div className="flex gap-2">
              <h1 className="text-3xl font-semibold text-foreground">
                Landing Page
              </h1>
              <div className="relative w-12 h-12 group">
                <Leaf className="absolute left-0 top-0 z-10 w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-40 transition duration-300" />
                <Leaf className="absolute left-2 top-2 z-20 w-6 h-6 text-muted-foreground opacity-100 group-hover:opacity-60 transition duration-300" />
                <Leaf className="absolute left-4 top-4 z-30 w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            </div>
            <h2 className="text-lg text-muted-foreground">
              Welcome to the landing page for Herbie Bingham!
            </h2>
          </div>
          <Separator />
          {children}
          <Badge
            variant="outline"
            className="absolute -top-2.5 left-4 bg-background sm:left-8"
          >
            Work in progress
          </Badge>
        </div>
        <SocialsFooter />
      </main>
    </>
  );
}
