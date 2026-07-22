# RENEW Landing Page

A highly optimized landing page for RENEW Pain & Wellness Center. Built with Vite.

## Setup
1. `npm install`
2. `npm run dev` to start the development server.
3. `npm run optimize` to compress images in `assets/images`.
4. `npm run build` to create a production build in `dist/`.

## Callback form

The paid landing page callback form posts a limited lead payload to the
configured Google Apps Script endpoint: form name, full name, phone, email, best
time to call, and a safe callback-topic dropdown. It must not send click IDs,
full page URLs, URL parameters, free-text medical details, or form field values
to GTM, GA4, Google Ads, the data layer, or Enhanced Conversions. Tracking
should rely on the successful `/thank-you/` pageview.
