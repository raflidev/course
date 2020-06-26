import Vue from "vue";

export default Vue.observable({
  kelas: [
    {
      nama: "Full-Stack Javascript",
      slug: "fullstack-javascript",
      harga: 500000,
      episode: 82,
      image:
        "https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg",
      tingkat: "Pemula",
      mentor: {
        nama: "Rafli Ramadhan",
        skill: "Full-Stack Developer",
      },
    },
    {
      nama: "Full-Stack Web Developer",
      slug: "fullstack-web-developer",

      harga: 360000,
      episode: 67,
      image:
        "https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg",
      tingkat: "Pemula",
      mentor: {
        nama: "David Santoso",
        skill: "Front-end Developer",
      },
    },
    {
      nama: "Front-end Android",
      slug: "frontend-android",

      harga: 280000,
      episode: 40,
      image:
        "https://storage.googleapis.com/fastwork-static/082dcee4-19a9-477b-ae5c-f703558764f2.jpg",
      tingkat: "Pemula",
      mentor: {
        nama: "Mayang Sagu",
        skill: "Android Developer",
      },
    },
  ],
});
