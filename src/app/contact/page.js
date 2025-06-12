import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-8 py-12 sm:px-20 sm:py-15 font-[family-name:var(--font-geist-sans)]">
        <div className="relative text-center">
          <div className="pattern-bg"></div>
          <h1 className="text-4xl font-bold tracking-light">
            Me contacter
          </h1>
        </div>
      </div>

      <div id="">
        <form
          action="https://formspree.io/f/mzzgrvpp"
          method="POST"
          className="mt-10 mx-3 max-w-4xl sm:mx-auto space-y-6 p-6 bg-blue-900/90 rounded-2xl shadow-lg"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Votre email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="exemple@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
              Objet
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Objet du message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Votre message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Votre message ici..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="hidden bg-green-500/20 text-green-200 border border-green-500/30"></div>
      <div className="hidden bg-purple-500/20 text-purple-200 border border-purple-500/30"></div>
      <div className="hidden bg-gray-500/20 text-gray-200 border border-gray-500/30"></div>
      <div className="hidden bg-gray-600/20 text-gray-200 border border-gray-600/30"></div>
      <div className="hidden bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"></div>
      <div className="hidden bg-pink-500/20 text-pink-200 border border-pink-500/30"></div>
      <div className="hidden bg-blue-500/20 text-blue-200 border border-blue-500/30"></div>
    </div>
  );
}
