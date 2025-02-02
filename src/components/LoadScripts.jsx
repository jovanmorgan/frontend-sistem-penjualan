import { useEffect } from "react";

const LoadScripts = () => {
  useEffect(() => {
    // Memuat skrip eksternal
    const scripts = [
      "./assets/js/core/popper.min.js",
      "./assets/js/core/bootstrap.min.js",
      "./assets/js/plugins/perfect-scrollbar.min.js",
      "./assets/js/plugins/smooth-scrollbar.min.js",
      "./assets/js/plugins/chartjs.min.js",
      "https://buttons.github.io/buttons.js",
      "./assets/js/argon-dashboard.min.js?v=2.0.4",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    // Inisialisasi scrollbar jika diperlukan
    if (navigator.platform.indexOf("Win") > -1) {
      const scrollbarElement = document.querySelector("#sidenav-scrollbar");
      if (scrollbarElement) {
        import("./assets/js/plugins/smooth-scrollbar.min.js").then((module) => {
          const Scrollbar = module.default;
          Scrollbar.init(scrollbarElement, { damping: "0.5" });
        });
      }
    }

    return () => {
      // Membersihkan skrip jika komponen di-unmount
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null; // Komponen ini hanya untuk memuat skrip, tidak menampilkan apa pun
};

export default LoadScripts;
