# RENEW Landing Page

A highly optimized landing page for RENEW Pain & Wellness Center. Built with Vite.

## Setup
1. `npm install`
2. `npm run dev` to start the development server.
3. `npm run optimize` to compress images in `assets/images`.
4. `npm run build` to create a production build in `dist/`.

## Callback form

The callback form posts to the Google Apps Script URL configured in the form
`action`. Replace `YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL` with the deployed Apps
Script `/exec` URL before publishing. The page must not send form fields,
callback topics, click IDs, or message content to GTM, GA4, Google Ads, the
data layer, URL parameters, or Enhanced Conversions. Tracking should rely only
on the successful `/thank-you/` pageview.
