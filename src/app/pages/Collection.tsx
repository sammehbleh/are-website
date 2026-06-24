import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, X } from "lucide-react";
import { DARK, applyTokens, v } from "../theme";
import { GALLERY_ARTWORKS, type Artwork } from "../data/artworks";

export default function Collection() {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    applyTokens(DARK);
  }, []);

  useEffect(() => {
    if (!selectedArtwork) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedArtwork(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedArtwork]);

  return (
    <div
      className="min-h-screen"
      style={{ background: v("site-bg"), color: v("site-text"), fontFamily: "'Raleway', sans-serif" }}
    >
      {/* ── HEADER ── */}
      <div
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ background: v("site-nav-bg"), borderColor: v("site-border") }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors"
            style={{ color: v("site-text") }}
            onMouseEnter={(e) => (e.currentTarget.style.color = v("site-teal"))}
            onMouseLeave={(e) => (e.currentTarget.style.color = v("site-text"))}
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <span
            className="text-lg lg:text-xl font-light"
            style={{ fontFamily: "'Cormorant Unicase', serif", letterSpacing: "0.25em" }}
          >
            SNØVA
          </span>
        </div>
      </div>

      {/* ── COLLECTION ── */}
      <section className="py-10 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-8 lg:mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 opacity-60" style={{ background: "#f5d894" }} />
              <span className="text-[12px] tracking-[0.4em] uppercase" style={{ color: "#f5d894" }}>
                Full Collection
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Every <em className="italic" style={{ color: v("site-gold") }}>Artwork</em>
            </h1>
            <p className="text-sm leading-relaxed max-w-xl mt-3 font-light" style={{ color: v("site-muted") }}>
              {GALLERY_ARTWORKS.length} pieces, spanning oil, acrylic, and mixed media.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {GALLERY_ARTWORKS.map((art) => (
              <button
                key={art.id}
                type="button"
                onClick={() => setSelectedArtwork(art)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[var(--site-teal)]"
                aria-label={`View details for ${art.title}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl" style={{ background: v("site-card") }}>
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to top, ${v("site-bg")} 0%, transparent 60%)` }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[11px] tracking-[0.3em] uppercase mb-1" style={{ color: v("site-gold") }}>
                      {art.medium} · {art.year}
                    </p>
                    <p style={{ fontFamily: "'Playfair Display', serif", color: v("site-text") }} className="text-xl italic">
                      {art.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTWORK DETAIL POPUP ── */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 lg:px-8"
          style={{ background: "rgba(5,0,10,0.82)", backdropFilter: "blur(14px)" }}
          onClick={() => setSelectedArtwork(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="collection-artwork-title"
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border lg:grid-cols-[1.1fr_0.9fr]"
            style={{ background: v("site-card"), borderColor: v("site-border") }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
              style={{ background: v("site-card"), borderColor: v("site-border"), color: v("site-gold") }}
              aria-label="Close artwork details"
            >
              <X size={18} />
            </button>

            <div className="min-h-[320px] overflow-hidden lg:min-h-[620px]">
              <img src={selectedArtwork.img} alt={selectedArtwork.title} className="h-full w-full object-cover" />
            </div>

            <div className="overflow-y-auto p-8 lg:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 opacity-60" style={{ background: "#f5d894" }} />
                <span className="text-[12px] tracking-[0.4em] uppercase" style={{ color: "#f5d894" }}>
                  Collection Piece
                </span>
              </div>

              <h3
                id="collection-artwork-title"
                className="mb-4 text-6xl font-normal leading-tight lg:text-7xl"
                style={{ fontFamily: "'Playfair Display', serif", color: v("site-text") }}
              >
                {selectedArtwork.title}
              </h3>

              <p className="mb-8 text-lg leading-relaxed font-light" style={{ color: v("site-muted") }}>
                {selectedArtwork.description}
              </p>

              <div className="grid gap-4 border-y py-6" style={{ borderColor: v("site-divider") }}>
                {[
                  ["Medium", selectedArtwork.medium],
                  ["Made Date", selectedArtwork.madeDate],
                  ["Year", selectedArtwork.year],
                  ["Dimensions", selectedArtwork.dimensions],
                  ["Availability", selectedArtwork.availability],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-6">
                    <span className="text-[12px] uppercase tracking-[0.25em]" style={{ color: "#00c4b4" }}>{label}</span>
                    <span className="text-right text-sm" style={{ color: "#f5d894" }}>{value}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/#contact-us")}
                className="mt-8 inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold uppercase tracking-[0.25em] transition-colors"
                style={{ background: v("site-gold"), color: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = v("site-teal"))}
                onMouseLeave={(e) => (e.currentTarget.style.background = v("site-gold"))}
              >
                Inquire About This Piece
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
