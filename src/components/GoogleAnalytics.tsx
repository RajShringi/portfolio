import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      ></Script>
      <Script id="" strategy="lazyOnload">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');`}
      </Script>
    </head>
  );
};

export default GoogleAnalytics;