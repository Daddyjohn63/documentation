import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {/* <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg> */}
        <Image
          src="/docs/images/common/john-paul.jpg"
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        John Paul's Portfolio
      </>
    )
  }
  // links: [
  //   {
  //     text: 'Documentation',
  //     url: '/docs',
  //     active: 'nested-url'
  //   }
  // ]
};
