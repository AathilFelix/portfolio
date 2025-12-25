import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface EduDetailsProps {
  name: string;
  year: string;
  dept: string;
  logosrc?: string;
  url?: string;
}

const EduDetails = ({ name, year, dept, logosrc, url }: EduDetailsProps) => {
  return (
    <Link
      href={url || "#"}
      target={url ? "_blank" : undefined}
      className={`flex flex-row items-center gap-4 mt-2 group ${
        !url ? "pointer-events-none" : "cursor-pointer"
      }`}>
      <Image
        src={logosrc || "/rmd_logo.png"}
        width={50}
        height={50}
        alt={`${name} Logo`}
        className="rounded-full border border-gray-200 object-contain mt-1"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight flex items-center gap-1">
            {name}
            {url && (
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            )}
          </h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="text-xs text-muted-foreground">{dept}</p>
      </div>
    </Link>
  );
};

export default EduDetails;
