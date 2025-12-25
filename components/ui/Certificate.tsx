import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';

interface CertificateProps {
    name: string;
    id?: string;
    year?: string;
    url ?: string;
}

const Certificate = ({name, id, year ,url}: CertificateProps) => {
  return (
    <Link
      href={url || "#"}
      target={url ? "_blank" : undefined}
      className={`flex flex-row items-center gap-4 mt-3 group ${
        !url ? "pointer-events-none" : "cursor-pointer"
      }`}>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-semibold tracking-tight flex items-center gap-1">
            {name}
            {url && (
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            )}
          </h3>
          <span className="text-sm text-muted-foreground shrink-0 hidden sm:block">{year}</span>
        </div>
        {id && (
          <p className="text-xs text-muted-foreground mt-1 break-all">
            Credential Id: {id}
          </p>
        )}
        <span className="text-sm text-muted-foreground shrink-0 sm:hidden">{year}</span>
      </div>
    </Link>
  );
}

export default Certificate