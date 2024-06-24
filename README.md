<div id="top"></div>

<br />
<div align="center">  
  <h3 align="center">Game Hub</h3>

  <p align="center">
    <a href="https://lorena-swe-issue-tracker.vercel.app" target="_blank">View Website</a>
    ·
    <a href="https://github.com/lorena-swe/issue-tracker">Code</a>
  </p>
</div>

<br /><br />

<!-- ABOUT THE PROJECT -->

## About The Project
<div align="center">
  <a href="https://lorena-swe-issue-tracker.vercel.app">
    <img src="app/assets/IssueTrackerGif_20s.gif">
  </a>
</div>

Issue Tracker is a web application designed to help teams manage and track issues efficiently. The app features a comprehensive dashboard for viewing the latest issues, a bar chart categorizing issues by their status (Open, In Progress, Closed), and an issue list page where all issues can be viewed and managed.

**Features**

- **Dashboard**: View the latest issues and a bar chart showing the distribution of issues by status.
- **Issue List**: Filter issues by status and sort by title, status, or created date. View issues in a table format for easy management.
- **Authentication**: Secure login through Google authentication using NextAuth.
- **Issue Management**: Create, edit, and delete issues. Each issue includes a title and a description, with the description supporting React Markdown for rich text formatting.
- **User Experience**: Loading skeletons provide a smooth user experience while data is being fetched.

## Built With

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- TypeScript
- HTML & CSS
- Axios

<!-- GETTING STARTED -->

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. In the project folder, rename **.env.example** to **.env** (no period after).
3. Set **all** the environment variables according to the instructions I've included in the file. If you don't set them properly, the application is not going to work.
4. Run `npm install` to install the dependencies.
5. Run `npx prisma migrate dev` to generate your database tables.
6. Run `npm run dev` to start the web server.

<br />

<p align="right">(<a href="#top">back to top</a>)</p>
