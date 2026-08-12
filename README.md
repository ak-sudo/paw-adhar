# 🐾 Paw-Adhar

Paw-Adhar is a fun, unofficial pet identity-card generator inspired by
the viral trend of creating Aadhaar-style identity cards for pets.

Users can upload a pet photo, enter pet details, generate a unique
Paw-Adhar ID, save the pet profile, view a public profile, download the
generated card, share it, and scan a QR code to open the pet's profile.

> **Disclaimer:** Paw-Adhar is a parody/entertainment project. It is not
> an official government identification document and is not affiliated
> with UIDAI or the Government of India.

## Features

-   Responsive landing page
-   Pet identity creation form
-   Pet image upload through Cloudinary
-   UUID-based Paw-Adhar number in `XXXX-XXXX-XXXX` format
-   Pet data stored in MongoDB
-   Pet images stored in Cloudinary
-   Live Paw-Adhar card preview
-   Download generated Paw-Adhar as PNG
-   Share Paw-Adhar profile
-   QR code linking to the public pet profile
-   Public pet profile accessible using the Paw-Adhar ID
-   React Router navigation
-   Mobile and desktop responsive UI

## Tech Stack

### Frontend

-   React
-   Vite
-   React Router
-   Tailwind CSS
-   Lucide React
-   `html-to-image`
-   `qrcode.react`

### Backend

-   Node.js
-   Express
-   CommonJS
-   Mongoose
-   Multer
-   Cloudinary
-   CORS
-   dotenv

### Services

-   MongoDB / MongoDB Atlas
-   Cloudinary
-   Netlify
-   Render

## Architecture

``` text
React Frontend (Netlify)
        |
        | HTTPS / REST API
        v
Express Backend (Render)
       /       /        v     v
 MongoDB  Cloudinary
 metadata   images
```

## Project Structure

``` text
paw-adhar/
├── public/
│   └── _redirects
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CreatePawAdhar.jsx
│   │   ├── PawAdharResult.jsx
│   │   └── PetProfile.jsx
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── config/
│   │   └── cloudinary.js
│   ├── models/
│   │   └── Pet.js
│   ├── routes/
│   │   ├── petRoutes.js
│   │   └── uploadRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Getting Started

### 1. Install frontend dependencies

From the project root:

``` bash
npm install
```

### 2. Install backend dependencies

``` bash
cd server
npm install
```

The backend uses CommonJS and therefore uses `require()` rather than ES
module imports.

## Environment Variables

### Frontend

Create `.env` in the project root:

``` env
VITE_API_URL=http://localhost:3000
VITE_PUBLIC_URL=http://localhost:5173
```

For production:

``` env
VITE_API_URL=https://your-api.onrender.com
VITE_PUBLIC_URL=https://your-site.netlify.app
```

### Backend

Create `server/.env`:

``` env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

FRONTEND_URL=http://localhost:5173
```

For production, set `FRONTEND_URL` to your deployed Netlify URL.

**Never commit `.env` files or expose Cloudinary API secrets or MongoDB
credentials in frontend code.**

## Running Locally

### Backend

``` bash
cd server
npm run dev
```

The API runs on:

``` text
http://localhost:3000
```

Health check:

``` text
http://localhost:3000/api/health
```

### Frontend

From the project root:

``` bash
npm run dev
```

Vite normally runs on:

``` text
http://localhost:5173
```

## Frontend Routes

  Route                Page               Purpose
  -------------------- ------------------ -----------------------
  `/`                  `HomePage`         Landing page
  `/create`            `CreatePawAdhar`   Create a pet identity
  `/result`            `PawAdharResult`   View generated card
  `/pet/:pawAdharId`   `PetProfile`       Public pet profile

## API Routes

### Health Check

``` http
GET /api/health
```

### Upload Pet Photo

``` http
POST /api/upload
```

Multipart form field:

``` text
photo
```

The backend uploads the image to Cloudinary and returns its secure URL.

### Create Pet

``` http
POST /api/pets
```

Example request:

``` json
{
  "pawAdharId": "A7F2-91BC-4D83",
  "name": "Billu",
  "dob": "2025-10-15",
  "gender": "Male",
  "breed": "Desi Billa",
  "owner": "Pet Parent",
  "address": "Meow Meow Gali, Billa Nagar",
  "specialId": "मूछ में एक बाल कम",
  "photo": "https://res.cloudinary.com/..."
}
```

### Get Pet

``` http
GET /api/pets/:pawAdharId
```

Example:

``` text
GET /api/pets/A7F2-91BC-4D83
```

## Paw-Adhar ID

A unique identifier is generated using:

``` js
crypto.randomUUID()
```

The UUID is stripped of hyphens and the first 12 characters are
formatted as:

``` text
XXXX-XXXX-XXXX
```

Example:

``` text
A7F2-91BC-4D83
```

The identifier is stored with the pet record and reused for the public
profile and QR code.

## QR Code Flow

Each generated card contains a QR code pointing to:

``` text
https://your-site.netlify.app/pet/<pawAdharId>
```

The flow is:

``` text
QR scan
   ↓
Netlify /pet/:pawAdharId
   ↓
React PetProfile
   ↓
Render API
   ↓
MongoDB
   ↓
Pet profile
```

This allows the profile to be accessed from another device rather than
relying on browser `localStorage`.

## Image Storage

Images are uploaded through the Express backend:

``` text
Browser
   ↓
POST /api/upload
   ↓
Express + Multer
   ↓
Cloudinary
   ↓
Cloudinary URL
   ↓
MongoDB
```

MongoDB stores the Cloudinary URL instead of the image itself.

## Download and Sharing

The generated card is converted to a PNG in the browser using
`html-to-image`.

The Share button uses the browser's native Web Share API when available
and can fall back to copying the public profile URL.

## Netlify SPA Routing

Because React Router handles frontend routes, Netlify needs to serve
`index.html` for unknown paths.

Create:

``` text
public/_redirects
```

with:

``` text
/*    /index.html   200
```

This allows direct visits to routes such as:

``` text
/pet/A7F2-91BC-4D83
```

without a Netlify 404.

## Deployment

### Netlify

Build command:

``` bash
npm run build
```

Publish directory:

``` text
dist
```

Production frontend variables:

``` env
VITE_API_URL=https://your-api.onrender.com
VITE_PUBLIC_URL=https://your-site.netlify.app
```

### Render

Install/build command:

``` bash
npm install
```

Start command:

``` bash
npm start
```

The server should listen on:

``` js
const PORT = process.env.PORT || 3000;
```

Set all backend environment variables in Render.

## CORS and Security

Configure Express CORS to allow the deployed frontend origin.

CORS is a browser security mechanism, not authentication. It does not
prevent direct requests from tools such as curl or Postman.

Recommended production improvements:

-   Server-side validation for every field
-   API rate limiting
-   File-size and MIME-type restrictions
-   HTTPS
-   Secure environment variables
-   Image validation/compression
-   Better error handling
-   Monitoring and logging
-   Cleanup of Cloudinary uploads if database creation fails

## Legal and Privacy Disclaimer

Paw-Adhar is intended as a parody and entertainment project.

The generated card should not be represented as:

-   An official Aadhaar card
-   A government-issued identity document
-   A UIDAI-issued document
-   Proof of identity
-   Proof of address
-   An official pet registration document

Avoid using government seals, official Aadhaar branding, or other
elements in a way that could make the generated card appear genuine.

If the application is expanded to collect real names, addresses,
photographs, or other personal information, review applicable privacy
and data-protection requirements before production use.

## Development Status

### Completed

-   [x] Landing page
-   [x] Responsive UI
-   [x] Create Paw-Adhar page
-   [x] Live card preview
-   [x] UUID-based Paw-Adhar ID
-   [x] React Router
-   [x] Result page
-   [x] Card download
-   [x] Share flow
-   [x] Express backend
-   [x] MongoDB connection
-   [x] Pet model
-   [x] Create pet API
-   [x] Get pet API
-   [x] Cloudinary upload
-   [x] Public pet profile
-   [x] QR code generation
-   [x] Netlify SPA routing

### Recommended Next Improvements

-   [ ] Server-side required-field validation
-   [ ] API rate limiting
-   [ ] Better form validation UI
-   [ ] Image compression before upload
-   [ ] Cloudinary cleanup on failed database creation
-   [ ] Authentication/admin tools if needed
-   [ ] Automated tests
-   [ ] Production monitoring
-   [ ] Custom domain
-   [ ] Privacy policy and terms if collecting user data

## License

Add the project's chosen license here before publishing the repository
publicly.

------------------------------------------------------------------------

🐾 **Paw-Adhar**

*Because every pet deserves an unnecessarily official-looking identity.*
