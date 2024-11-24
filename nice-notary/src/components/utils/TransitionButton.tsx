"use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

import { useRouter } from "next/navigation";

interface TransitionButtonProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionButton = ({
  children,
  href,
  ...props
}: TransitionButtonProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    // todo run a animation
    const body = document.querySelector("body");
    body?.classList.add("button-transition");

    // sleep
    await sleep(500);
    router.push(href);
    // enter animation
    await sleep(300);
    body?.classList.remove("button-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
