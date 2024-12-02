"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").slice(2);

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const href = `/${["docs", ...pathSegments.slice(0, index + 1)].join("/")}`;

    return (
      <>
        {index !== pathSegments.length - 1 ? (
          index === 0 ? (
            <Link href={href} className="text-black uppercase font-medium">
              {segment.replace(/-/g, " ")}
            </Link>
          ) : (
            <div className="flex items-center">
              <img
                src="/images/arrowRight.svg"
                alt="separator"
                className="inline mx-2 w-5 max-xl:w-4 max-md:w-3"
              />
              <Link href={href} className="text-black uppercase font-medium">
                {segment.replace(/-/g, " ")}
              </Link>
            </div>
          )
        ) : (
          <div className="flex items-center">
            <img
              src="/images/arrowRight.svg"
              alt="separator"
              className="inline mx-2 w-5 max-xl:w-4 max-md:w-3"
            />
            <div className="uppercase text-link-color">
              {segment.replace(/-/g, " ")}
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap mb-5 label-text  tracking-wider text-nowrap"
    >
      {breadcrumbLinks}
    </nav>
  );
};

export default Breadcrumbs;
