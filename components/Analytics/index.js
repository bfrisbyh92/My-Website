// export default function Analytics() {
//   return (
//     <>
//       <script
//         async
//         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CONFIG}`}
//       ></script>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CONFIG}');`,
//         }}
//       ></script>
//     </>
//   );
// }

'use client';
// import { Analytics } from '@vercel/analytics/react';

// export function AnalyticsWrapper() {
//   return <Analytics />;
// }
