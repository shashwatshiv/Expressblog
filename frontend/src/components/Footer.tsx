import { FaPenNib, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="mt-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-emerald-500 flex items-center justify-center">
              <FaPenNib className="text-black" />
            </div>
            <span className="font-semibold">Express Log</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Express Log. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-700">
            <a
              className="hover:text-emerald-600 transition-colors"
              href="#"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-emerald-600 transition-colors"
              href="#"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-emerald-600 transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
