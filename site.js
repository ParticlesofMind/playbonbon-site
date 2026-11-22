// BonBon Studios: a lollipop that spins and bonbons that unwrap. Nothing is tracked or stored.
document.documentElement.classList.add("js");

const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

const lolly = document.querySelector(".lolly");
if (lolly) {
  lolly.addEventListener("click", () => {
    lolly.classList.remove("spin");
    void lolly.offsetWidth; // restart the spin on every tap
    lolly.classList.add("spin");
  });
}

// Tapping a bonbon twists its wrapper open, then goes to its game.
document.querySelectorAll(".bonbon").forEach((b) => {
  b.addEventListener("click", (e) => {
    const target = document.getElementById(b.dataset.game);
    if (!target) return;
    e.preventDefault();
    b.classList.add("open");
    setTimeout(() => {
      target.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", "#" + b.dataset.game);
      setTimeout(() => b.classList.remove("open"), 900);
    }, calm ? 0 : 280);
  });
});

// Arrow buttons under each screenshot strip, for people with a mouse.
document.querySelectorAll(".reel").forEach((reel) => {
  const box = document.createElement("div");
  box.className = "reel-wrap";
  reel.before(box);
  box.append(reel);
  const nav = document.createElement("div");
  nav.className = "reel-nav";
  const mk = (label, txt, dir) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", label);
    b.textContent = txt;
    b.addEventListener("click", () => {
      const step = reel.querySelector("img")?.getBoundingClientRect().width || reel.clientWidth * 0.8;
      reel.scrollBy({ left: dir * (step + 14), behavior: calm ? "auto" : "smooth" });
    });
    nav.append(b);
    return b;
  };
  const prev = mk("Previous screenshot", "‹", -1);
  const next = mk("Next screenshot", "›", 1);
  const sync = () => {
    prev.disabled = reel.scrollLeft < 4;
    next.disabled = reel.scrollLeft + reel.clientWidth > reel.scrollWidth - 4;
  };
  reel.addEventListener("scroll", sync, { passive: true });
  addEventListener("resize", sync);
  addEventListener("load", sync);
  sync();
  box.append(nav);
});
