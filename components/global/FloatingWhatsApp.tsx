export default function FloatingWhatsApp() {
  const message = encodeURIComponent('Hi Jiyology, I would like to get a free quote.')
  return (
    <a
      href={`https://wa.me/27731294401?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jiyology on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.1-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 2.1.6 4.1 1.6 5.8L2 23l5.4-1.4c1.6.9 3.5 1.4 5.4 1.4h.1C17.5 23 22 18.5 22 13S17.5 2 12 2zm0 19.4c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.5.9.9-3.4-.2-.4C2.9 15.5 2.4 13.8 2.4 12 2.4 6.8 6.8 2.4 12 2.4S21.6 6.8 21.6 12 17.2 21.4 12 21.4z" />
      </svg>
    </a>
  )
}
