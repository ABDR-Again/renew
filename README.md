# RENEW Landing Page

A highly optimized landing page for RENEW Pain & Wellness Center. Built with Vite.

## Setup
1. `npm install`
2. `npm run dev` to start the development server.
3. `npm run optimize` to compress images in `assets/images`.
4. `npm run build` to create a production build in `dist/`.

## Callback form

Set `VITE_CALLBACK_FORM_ENDPOINT` to the existing CRM or form-provider endpoint before building. The endpoint must accept a multipart `POST` request and return a successful HTTP status only after accepting the lead.
