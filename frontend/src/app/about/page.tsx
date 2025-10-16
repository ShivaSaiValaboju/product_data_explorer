import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About World of Books Explorer</h1>
      
      <section className="prose lg:prose-lg">
        <p>
          Welcome to World of Books Explorer, a platform designed to help you
          discover and explore books from World of Books' vast collection. Our
          platform provides an intuitive way to browse through different categories,
          find detailed information about books, and read reviews from other
          readers.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! You can reach us
          through any of the following channels:
        </p>

        <ul>
          <li>Email: contact@worldofbooksexplorer.com</li>
          <li>Twitter: @wob_explorer</li>
          <li>GitHub: github.com/worldofbooks-explorer</li>
        </ul>

        <h2>Technical Details</h2>
        <p>
          This platform is built using modern web technologies including:
        </p>
        <ul>
          <li>Next.js 14 with App Router</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS for styling</li>
          <li>Server-side rendering for optimal performance</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}