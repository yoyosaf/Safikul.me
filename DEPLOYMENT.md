# Netlify Deployment Instructions

This portfolio is optimized for Netlify hosting with Decap CMS.

## Steps to Deploy

1. **Push to GitHub/GitLab/Bitbucket**:
   Ensure your code is in a Git repository.

2. **Connect to Netlify**:
   - Log in to Netlify.
   - Click "Add new site" > "Import an existing project".
   - Select your repository.

3. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

4. **Enable Identity & Git Gateway**:
   - In Netlify Dashboard: **Site settings** > **Identity** > **Enable Identity**.
   - Scroll down to **Services** > **Git Gateway** > **Enable Git Gateway**.
   - Under **Identity** > **Registration**, set it to "Invite only" for security.

5. **Access Admin Panel**:
   - Go to `your-site-url.netlify.app/admin`.
   - You will be prompted to log in via Netlify Identity.

## Local Development
- Run `npm run dev` to start the development server.
- The admin panel is available at `localhost:3000/admin` but requires a live Netlify site for Git Gateway to work.
