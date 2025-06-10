/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function AnalyticsScripts() {
  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('consent','default',{
            ad_storage:         'denied',
            ad_user_data:       'denied',
            ad_personalization: 'denied',
            analytics_storage:  'denied'
          });
        `}
      </Script>

      <Script id="consent-reapply" strategy="beforeInteractive">
        {`
          (function(){
            try {
              const consent = localStorage.getItem('cookieConsent');
              console.log('Reapply consent, localStorage cookieConsent=', consent);
              if (consent === 'accepted') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){ dataLayer.push(arguments); console.log('gtag reapply called:', arguments); }
                gtag('consent','update',{
                  ad_storage:         'granted',
                  ad_user_data:       'granted',
                  ad_personalization: 'granted',
                  analytics_storage:  'granted'
                });
              }
            } catch(err) {
              console.error('Error reapplying consent:', err);
            }
          })();
        `}
      </Script>

      <Script
        id="gtm"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-NZ8WGG2F"
      />

      <Script
        id="ga"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y1T9FPW59X"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-Y1T9FPW59X', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}

export function CookieConsentBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const updateConsent = (
    ad_storage: "granted" | "denied",
    ad_user_data: "granted" | "denied",
    ad_personalization: "granted" | "denied",
    analytics_storage: "granted" | "denied"
  ) => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
      console.log("gtag consent update called:", args);
    }
    gtag("consent", "update", {
      ad_storage,
      ad_user_data,
      ad_personalization,
      analytics_storage,
    });
  };

  useEffect(() => {
    if (pathname.startsWith("/privacidade")) return;

    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    } else {
      setVisible(false);
      updateConsent(
        consent === "accepted" ? "granted" : "denied",
        consent === "accepted" ? "granted" : "denied",
        consent === "accepted" ? "granted" : "denied",
        consent === "accepted" ? "granted" : "denied"
      );

      if (consent === "accepted") {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag("config", "G-Y1T9FPW59X", { page_path: window.location.pathname });
      }
    }
  }, [pathname]);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    updateConsent("granted", "granted", "granted", "granted");

    // reconfigura o GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
      console.log("gtag config after accept called:", args);
    }
    gtag("config", "G-Y1T9FPW59X", {
      page_path: window.location.pathname,
    });

    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    updateConsent("denied", "denied", "denied", "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end p-6 justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white p-6 rounded-2xl max-w-lg lg:max-w-full shadow-xl animate-fade-in">
        <div className="flex items-start lg:items-center gap-4">
          <span className="p-2 bg-blue/25 text-orange rounded-lg">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.9803 8.5468C17.5123 8.69458 17.0197 8.7931 16.5271 8.7931C14.2118 8.76847 12.3399 6.89655 12.3153 4.58128C12.3153 4.13793 12.3892 3.69458 12.537 3.27586C11.9951 2.68473 11.6995 1.92118 11.6995 1.13301C11.6995 0.812808 11.7488 0.492611 11.8473 0.172414C11.2315 0.0738918 10.6158 0 10 0C4.48276 0 0 4.48276 0 10C0 15.5172 4.48276 20 10 20C15.5172 20 20 15.5172 20 10C20 9.77833 20 9.55665 19.9754 9.33498C19.2611 9.26108 18.5468 8.99015 17.9803 8.5468ZM4.58128 7.31527C6.30542 7.31527 6.30542 10.0246 4.58128 10.0246C2.85714 10.0246 2.61084 7.31527 4.58128 7.31527ZM6.05912 15.7635C4.08867 15.7635 4.08867 12.8079 6.05912 12.8079C8.02956 12.8079 8.02956 15.7635 6.05912 15.7635ZM9.01478 1.33005C10.7389 1.33005 10.7389 4.28571 9.01478 4.28571C7.29064 4.28571 7.04434 1.33005 9.01478 1.33005ZM10.2463 8.84237C11.7241 8.84237 11.7241 10.8128 10.2463 10.8128C8.76848 10.8128 9.01478 8.84237 10.2463 8.84237ZM11.9704 16.9458C10.4926 16.9458 10.4926 14.9754 11.9704 14.9754C13.4483 14.9754 13.202 16.9458 11.9704 16.9458ZM16.6503 13.1034C15.4187 13.1034 15.4187 11.133 16.6503 11.133C17.8818 11.133 17.8818 13.1034 16.6503 13.1034Z" />
            </svg>
          </span>
          <div className="lg:flex lg:items-center flex-1 text-gray-700 lg:gap-4">
            <p className="text-sm">
              Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com
              nossa política de privacidade.&nbsp;
              <Link
                href="/privacidade"
                className="text-orange underline p-0 m-0 inline-flex text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </Link>
            </p>
            <div className="mt-4 lg:mt-0 flex gap-2">
              <button
                onClick={decline}
                className="bg-gray-300 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg transition-colors w-full"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="bg-blue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-full"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
