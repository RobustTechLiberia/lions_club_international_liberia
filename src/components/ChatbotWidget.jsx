import React, { useMemo, useRef, useState } from "react";
import logo from "../assets/images/lions.png";

function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! How can we help you today?",
    },
  ]);
  const [text, setText] = useState("");
  const listRef = useRef(null);

  const quickReplies = useMemo(
    () => ["Find a club", "Join Lions", "Donate", "Contact us"],
    [],
  );

  const scrollToBottom = () => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  };

  const send = (payload) => {
    const trimmed = (payload || "").trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setText("");

    // Front-end only (no backend). Simple deterministic bot reply.
    const lower = trimmed.toLowerCase();
    let reply = "Thanks! We received your message.";

    if (lower.includes("club") || lower.includes("find")) {
      reply = "Use the Find a club page to search by location or keyword.";
    } else if (lower.includes("join")) {
      reply =
        "You can join through the Join page. Select the membership path that fits you.";
    } else if (lower.includes("donate") || lower.includes("support")) {
      reply =
        "You can donate from the Donate page. Thank you for supporting Lions Club Liberia.";
    } else if (lower.includes("contact")) {
      reply =
        "For support, use Contact LCI or Contact LCIF from the navigation.";
    }

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 300);
  };

  React.useEffect(() => {
    if (!open) return;
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, open]);

  return (
    <div className="fixed z-[9999] bottom-5 right-5 pointer-events-auto">
      {/* Chat panel */}
      {open && (
        <div className="w-[92vw] max-w-[360px] h-[68vh] max-h-[540px] bg-white shadow-2xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-950 text-white">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Lions logo"
                className="w-8 h-8 rounded-full bg-white"
              />
              <div>
                <div className="font-semibold leading-tight">Lions Helper</div>
                <div className="text-xs text-blue-100">Online support</div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              className="text-white/90 hover:text-white"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div
            ref={listRef}
            className="px-4 py-3 overflow-y-auto h-[calc(68vh-112px)] max-h-[428px] bg-gray-50"
          >
            <div className="space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={
                    m.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      m.role === "user"
                        ? "bg-blue-950 text-white px-3 py-2 rounded-2xl max-w-[80%]"
                        : "bg-white text-gray-900 px-3 py-2 rounded-2xl max-w-[80%] border border-gray-200"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="text-xs px-3 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 text-gray-900"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="px-3 py-3 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(text);
              }}
              className="flex gap-2"
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-900/20"
              />
              <button
                type="submit"
                className="bg-blue-950 text-white rounded-xl px-4 py-2 font-semibold hover:bg-blue-900"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        className="w-14 h-14 rounded-full bg-blue-950 shadow-lg hover:shadow-2xl flex items-center justify-center border border-white/10"
      >
        <img
          src={logo}
          alt="Chat icon"
          className="w-9 h-9 rounded-full bg-white"
        />
      </button>
    </div>
  );
}

export default ChatbotWidget;
