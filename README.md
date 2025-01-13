 <header>
<!--      <h1 class="text-3xl font-bold text-center mb-4">Blog App</h1> -->
  <h1> MERN Blog Application Project</h1> 
    </header>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Project Overview</h2>
      <p>
        Our adventure kicks off with setting up <strong>React.js</strong> and <strong>Tailwind CSS</strong>, followed by navigating <strong>React Router Dom</strong> for dynamic pages. We'll dive deep into robust authentication using <strong>JSON Web Tokens</strong> and <strong>Google OAuth integration</strong>, all powered by <strong>Redux Toolkit</strong> for easy state management.
    </p>
<!--       <p class="mb-4">This Blog App is a React-based mern web application that features a dynamic and responsive interface. The app utilizes <code>react-router-dom</code> for seamless client-side routing and is structured with components and pages for easy scalability and maintainability.</p> -->
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Features</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Home Page:</strong> Acts as the landing page for the blog app.</li>
        <li><strong>About Page:</strong> Contains information about the app or its purpose.</li>
        <li><strong>Sign-In Page:</strong> Provides a login interface for users to access their accounts.</li>
        <li><strong>Sign-Up Page:</strong> Allows new users to register an account.</li>
        <li><strong>Dashboard Page:</strong> Displays user-specific content or controls after logging in.</li>
        <li><strong>Projects Page:</strong> Showcases projects or blog content.</li>
        <li><strong>Header Component:</strong> A navigation bar displayed across all pages for easy navigation.</li>
      </ul>
    </section>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MERN Blog Application Project</title>
   
</head>
<body>
<!--     <h1>🛠️ MERN Blog Application Project</h1> -->
<!--     <p>
        Our adventure kicks off with setting up <strong>React.js</strong> and <strong>Tailwind CSS</strong>, followed by navigating <strong>React Router Dom</strong> for dynamic pages. We'll dive deep into robust authentication using <strong>JSON Web Tokens</strong> and <strong>Google OAuth integration</strong>, all powered by <strong>Redux Toolkit</strong> for easy state management.
    </p> -->
    <h2>🔒 Secure Client and Backend</h2>
    <p>
        Specific pages, like the admin dashboard, are secured to ensure data protection. Admins gain the ability to effortlessly manage posts, comments, and users, complete with CRUD operations using the <strong>MongoDB database</strong>. The website is meticulously designed to be completely responsive, ensuring a seamless experience across various devices. Plus, we've added a sleek <strong>dark mode</strong> to enhance user experience and cater to different preferences.
    </p>
    <h2>🔍 Advanced Search Functionality</h2>
    <p>
        What sets this course apart is the addition of advanced search functionality. Users can search by title, limit results, and sort through a modern sidebar, utilizing cutting-edge search query techniques with <strong>MongoDB</strong>. Everyone has the ability to leave, edit, and delete their comments on the post pages, fostering an interactive community.
    </p>
    <h2>🚀 Deployment</h2>
    <p>
        Finally, we'll deploy our fully functional MERN stack blog application for free using the <strong>'render'</strong> platform, enabling you to share your creation and add it to your portfolio.
    </p>
<!--     <h2>💻 Prerequisites</h2>
    <p>
        All you need is a basic understanding of <strong>JavaScript</strong> and <strong>React</strong> to start this project. If you're as excited as we are, let's dive in and build this incredible project together! Subscribe, hit the bell, and join us on this coding adventure.
    </p> -->
 <section>
      <h2 class="text-2xl font-semibold mb-2">Features</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Home Page:</strong> Acts as the landing page for the blog app.</li>
        <li><strong>About Page:</strong> Contains information about the app or its purpose.</li>
        <li><strong>Sign-In Page:</strong> Provides a login interface for users to access their accounts.</li>
        <li><strong>Sign-Up Page:</strong> Allows new users to register an account.</li>
        <li><strong>Dashboard Page:</strong> Displays user-specific content or controls after logging in.</li>
        <li><strong>Projects Page:</strong> Showcases projects or blog content.</li>
        <li><strong>Header Component:</strong> A navigation bar displayed across all pages for easy navigation.</li>
      </ul>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Folder Structure</h2>
      <pre class="bg-gray-200 p-4 rounded">
src/
├── components/
│   └── Header.js         # Header component for navigation
├── pages/
│   ├── Home.js           # Home page
│   ├── About.js          # About page
│   ├── Signin.js         # Sign-In page
│   ├── SignUp.js         # Sign-Up page
│   ├── Dashboard.js      # Dashboard page
│   └── Projects.js       # Projects page
├── App.js                # Main application file
└── index.js              # Entry point for the app
      </pre>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Installation</h2>
      <h3 class="text-xl font-semibold mt-2">Prerequisites</h3>
      <ul class="list-disc ml-6 space-y-2">
        <li>Node.js (v16 or later recommended)</li>
        <li>npm or yarn package manager</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4">Steps</h3>
      <ol class="list-decimal ml-6 space-y-2">
        <li>Clone the repository:
          <pre class="bg-gray-200 p-2 rounded">git clone &lt;repository_url&gt;</pre>
        </li>
        <li>Navigate to the project directory:
          <pre class="bg-gray-200 p-2 rounded">cd blog-app</pre>
        </li>
        <li>Install dependencies:
          <pre class="bg-gray-200 p-2 rounded">npm install</pre>
        </li>
        <li>Start the development server:
          <pre class="bg-gray-200 p-2 rounded">npm start</pre>
        </li>
        <li>Open your browser and navigate to:
          <pre class="bg-gray-200 p-2 rounded">http://localhost:3000</pre>
        </li>
      </ol>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Dependencies</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
        <li><strong>React Router DOM:</strong> For client-side routing and navigation.</li>
        <li><strong>Tailwind CSS:</strong> For utility-first CSS styling.</li>
        <li><strong>Flowbite:</strong> Prebuilt UI components for Tailwind CSS.</li>
      </ul>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Usage</h2>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Home Page:</strong> View the introduction or main content of the blog app.</li>
        <li><strong>Navigate:</strong> Use the header to switch between pages.</li>
        <li><strong>Authentication:</strong> Sign in or sign up to access personalized features.</li>
        <li><strong>Dashboard & Projects:</strong> Explore additional functionalities or manage your content.</li>
      </ul>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">Contributing</h2>
      <ol class="list-decimal ml-6 space-y-2">
        <li>Fork the repository.</li>
        <li>Create a new feature branch:
          <pre class="bg-gray-200 p-2 rounded">git checkout -b feature-name</pre>
        </li>
        <li>Commit changes:
          <pre class="bg-gray-200 p-2 rounded">git commit -m "Description of changes"</pre>
        </li>
        <li>Push to the branch:
          <pre class="bg-gray-200 p-2 rounded">git push origin feature-name</pre>
        </li>
        <li>Open a pull request.</li>
      </ol>
    </section>
    <section>
      <h2 class="text-2xl font-semibold mb-2">License</h2>
      <p>This project is open-source and available under the MIT License.</p>
    </section>
    <footer class="mt-6 text-center">
      <p>Created by <strong>Janvi Master</strong>.</p>
    </footer>
  </div>
</body>
</html>
