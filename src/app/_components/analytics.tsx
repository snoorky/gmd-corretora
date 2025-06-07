"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (document.getElementById("gtag-script")) return;

    const script = document.createElement("script");
    script.id = "gtag-script";
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Y1T9FPW59X";
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y1T9FPW59X', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}
