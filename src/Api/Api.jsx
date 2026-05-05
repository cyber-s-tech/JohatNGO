import axios from "axios";

// ✅ BASE CONFIG
const API = axios.create({
  baseURL: "https://johatngo.ahaanmedia.com/wp-json/wp/v2",
});


// ==============================
// 🔥 SERVICES API
// ==============================

export const getServices = async () => {
  const res = await API.get("/services");
  return res.data;
};


// ==============================
// 🔥 MEDIA API (IMAGE)
// ==============================

export const getImageById = async (id) => {
  const res = await API.get(`/media/${id}`);
  return res.data.source_url;
};

// 🔥 WORKS (your CPT)
export const getWorks = async () => {
  const res = await API.get("/works"); // 👈 projects na, works
  return res.data;
};

// ==============================
// 🔥 TESTIMONIALS API
// ==============================

export const getTestimonials = async () => {
  const res = await API.get("/testimonials");
  return res.data;
};

// 🔥 FIXED POST API
export const submitDonation = async (data) => {
  const res = await axios.post(
    "https://johatngo.ahaanmedia.com/wp-json/custom/v1/donation",
    data
  );
  return res.data;
};

export const submitContactEntry = async (data) => {
  const res = await fetch("https://johatngo.ahaanmedia.com/wp-json/contact-entry/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();   // ✅ REQUIRED
  return result;
};

// ==============================
// 🔥 WHAT WE DO API
// ==============================

export const getWhatWeDo = async () => {
  const res = await API.get("/what-we-do?_embed");
  return res.data;
};

export const submitDonationEntry = async (data) => {
  const res = await axios.post(
    "https://johatngo.ahaanmedia.com/wp-json/donation-entry/v1/submit",
    data
  );
  return res.data;
};


// ==============================
// 🔥 FAQ API
// ==============================

export const getFaqs = async () => {
  const res = await API.get("/faq?_embed");
  return res.data;
};