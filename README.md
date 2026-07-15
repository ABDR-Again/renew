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
Script `/exec` URL before publishing. The form sends `form_name`,
`submission_page`, optional `gclid`, a `website` honeypot field, and
`cc_email=care@renewpainwellness.com` for the email copy.
