import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HolyGrail() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <h1>
            <a className="text-2xl font-bold hover:underline" href="#">
              logoipsum
            </a>
          </h1>
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {links.map((link, index) => (
                <Link {...link} key={index} />
              ))}
            </ul>
          </nav>
        </div>

        <nav
          className={`mt-4 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 rounded-lg bg-gray-700 p-4">
            {links.map((link, index) => (
              <Link {...link} key={index} />
            ))}
          </ul>
        </nav>
      </header>

      <div className="flex grow flex-col md:flex-row">
        <main className="flex grow flex-col p-6">
          <div>
            <h2 className="mb-4 text-xl font-bold">
              Responsive Design in Tailwind CSS
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              corporis mollitia ipsam quos, adipisci vitae veniam quidem nobis
              debitis. Eaque error iste, eveniet ducimus deserunt quae porro
              voluptatem blanditiis maxime?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius
              minus sequi, totam repudiandae distinctio error magnam sunt,
              itaque iusto vero quo, corporis tenetur illo? Dolores nesciunt
              voluptatibus iusto fuga.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              cupiditate cum sed inventore voluptatem repellendus sequi ab,
              illum quam laborum corporis accusantium quia saepe minus expedita
              veritatis aliquam, quo rem.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-blue-100 p-4 text-center">Item 1</div>
            <div className="bg-blue-200 p-4 text-center">Item 2</div>
            <div className="bg-blue-300 p-4 text-center">Item 3</div>
            <div className="bg-blue-400 p-4 text-center">Item 4</div>
            <div className="bg-blue-500 p-4 text-center">Item 5</div>
            <div className="bg-blue-600 p-4 text-center">Item 6</div>
            <div className="bg-blue-700 p-4 text-center">Item 7</div>
            <div className="bg-blue-800 p-4 text-center">Item 8</div>
            <div className="bg-blue-900 p-4 text-center">Item 9</div>
          </div>
        </main>

        <aside className="bg-gray-100 p-4 md:w-64">
          <h3 className="mb-2 font-semibold">Sidebar</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
            eligendi nemo ipsum id omnis similique exercitationem? Possimus,
            aperiam eligendi praesentium nemo aspernatur quod iste dignissimos
            rem libero suscipit quae.
          </p>
        </aside>
      </div>

      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2025 Holy Grail Layouts Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Link({ href, text }) {
  return (
    <li className="hover:underline">
      <a href={href}>{text}</a>
    </li>
  );
}

const links = [
  { href: "#", text: "Docs" },
  { href: "#", text: "Showcase" },
  { href: "#", text: "About us" },
];
