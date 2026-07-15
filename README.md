# RENEW Landing Page

A highly optimized landing page for RENEW Pain & Wellness Center. Built with Vite.

## Setup
1. `npm install`
2. `npm run dev` to start the development server.
3. `npm run optimize` to compress images in `assets/images`.
4. `npm run build` to create a production build in `dist/`.

## Callback form

The callback form posts to FormSubmit using `ru208208@gmail.com` as the primary
recipient and `care@renewpainwellness.com` as the `_cc` recipient. It uses the
standard FormSubmit endpoint so first-time submissions can trigger the primary
recipient confirmation flow, then redirects successful submissions to
`https://landing.renewpainwellness.com/thank-you/`.
