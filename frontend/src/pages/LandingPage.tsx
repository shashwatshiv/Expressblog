import { Link } from "react-router";
import {
  FaPenNib,
  FaUsers,
  FaBookOpen,
  FaMagnifyingGlass,
  FaCircleCheck,
} from "react-icons/fa6";

const features = [
  {
    title: "Write with ease",
    description: "A clean, focused editor for your ideas.",
    Icon: FaPenNib,
  },
  {
    title: "Discover stories",
    description: "Follow topics and creators you love.",
    Icon: FaMagnifyingGlass,
  },
  {
    title: "Join the community",
    description: "Engage with writers and readers.",
    Icon: FaUsers,
  },
  {
    title: "Read anywhere",
    description: "Responsive design for any device.",
    Icon: FaBookOpen,
  },
];

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* Hero */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700">
              <FaCircleCheck className="text-emerald-400" />
              Welcome to Express Log
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Where ideas move at the speed of Express
            </h1>
            <p className="mt-4 text-neutral-600 text-lg md:text-xl max-w-xl">
              Publish, discover, and grow your voice. Minimal design, maximum
              focus. Built for readers and writers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 transition-colors"
              >
                Get started
              </Link>
              <Link
                to="/blogs"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold px-6 py-3 transition-colors"
              >
                <FaBookOpen />
                Start reading
              </Link>
              <Link
                to="/signin"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 px-6 py-3 transition-colors"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-neutral-600">
              <div className="inline-flex items-center gap-2">
                <FaBookOpen className="text-emerald-400" />
                <span className="text-sm">No ads. Just stories.</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FaUsers className="text-emerald-400" />
                <span className="text-sm">Free to join</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <FaPenNib className="text-black" />
                </div>
                <div>
                  <div className="font-semibold">Express Log</div>
                  <div className="text-sm text-neutral-600">
                    Write. Read. Share.
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {features.map(({ title, description, Icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-1">
                      <Icon className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-sm text-neutral-600">
                        {description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 hover:bg-neutral-100 hover:border-emerald-300 transition-colors"
            >
              <Icon className="text-emerald-400" />
              <div className="mt-3 font-semibold">{title}</div>
              <div className="mt-1 text-sm text-neutral-600">{description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Start your first story on Express Log
            </h2>
            <p className="text-neutral-600 mt-2 max-w-xl">
              Create an account and share your perspective with the world.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 transition-colors"
            >
              Create account
            </Link>
            <Link
              to="/signin"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 px-6 py-3 transition-colors"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};
