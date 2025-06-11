/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

function getLocalStorage(key: string, defaultValue: any) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function AnalyticsScripts({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams;

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        id="gtm"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-NZ8WGG2F"
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                  'ad_storage': 'denied'
                  'ad_user_data': 'denied'
                  'ad_personalization': 'denied'
                  'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}

export function CookieConsentBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      ad_storage: newValue,
      ad_user_data: newValue,
      ad_personalization: newValue,
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`${
        cookieConsent != null ? "hidden" : "flex"
      } fixed inset-0 z-50 flex items-end p-6 justify-center bg-black/50 backdrop-blur-sm transition-opacity`}
    >
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
                onClick={() => setCookieConsent(false)}
                className="bg-gray-300 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg transition-colors w-full"
              >
                Recusar
              </button>
              <button
                onClick={() => setCookieConsent(true)}
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
