const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.";

const datas = [
  {
    id: 1,
    date: "09 Oktober 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",

    title:
      "Lomba Desain Poster Tingkat Nasional Hari Lahir Pancasila - ITENAS 2023",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDpet-RwLSaLXEh-pwc_APyX-zCK9OVokJmdqUXSis2wwevSRnZqjMpn2rL38YeGNbvuQzV3OwvHF2jpHirvl4jVc-49BbnCU-5I82tCXWyI7mpm4cskV2e898wTFR6jlfJRJCcNZjJO-xDn3HpxFNA4xzAL2h_nNX6AjSb8qHB96hABeNj3dd4bCs/s2048/Lomba-Poster-Hari-Pancasila-2048x2048.jpg",
    
    content: content,
    
  },
  {
    id: 2,
    date: "20 Oktober 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title: "Lomba Menulis Esai Pelajar dan Mahasiswa Tingkat Nasional - UKACOM 4.0 2023",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-9jIKU3RfxL_eMLiJrvtN4ID0_hEKjhirIZM-YTefI-Peflt3aL-ap01PM6Ld4DB8OmHPlilIXMOkF5umjWIAHW3T7NYb8ZsBZE7tADpQkh_i8RESv5l7s0YgOXifqBIfjKuNHpqEGKvYCyLe-W7ErUe-Ie6_nju_yw6ZqpK7iwz6mRU3VR7zx7Th/s617/Screenshot_349.png",
    content: content,
  },
  {
    id: 3,
    date: "02 November 2023",
    time: "Friday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "Lomba Karya Tulis Ilmiah ( LKTI ) Mahasiswa Tingkat Nasional - VISICO 2023 ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFsMbubWpU2FhiPspTaqhuKgRV5_nybZCaqoTh_H27vOPtqNRv5PxwW7lbZLm5_Kc_mMTefhScu7ScpKk6_6HknUnUL3q3Gntenib5gL3YVD5Vqn9dE-GEVlWsHkjUN0Fn6-6aZ_fIjCC_353329vVFARZi4j5hoGSZWKymiURLM6jJqWu70bd3o_A/s803/Screenshot_345.png",
    content: content,
  },
  {
    id: 4,
    date: "13 November 2023",
    time: "Wednesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title: "Lomba Desain Aplikasi Smart Office - MAGIC 2023",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUDzTO0lM_6c94tdW4kKhXrIKvexEtSpYGtpPRASq6c7OFL_ANfZV8aAf9AKe0a_06LLrrhgooz9jj2dQj0X-rj-X0PGRd0hiaUKKxJrHtm8jYEmcdSvbeexegzwLQwunNEcNM3AT30sYUxgm3495axhwnIoBt5Q6osgcQaVcJDUJMsakfeLEJjtKb/s803/Screenshot_312.png",
    content: content,
  },
  {
    id: 5,
    date: "13 November 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "BRILLIANT OTAK LOGIKA NATIONAL COMPETITION 1.0 ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSYQq6dyeHHoR_GmCnjHu7jn-LCOIFeX8m3weU2gXhxWqWTTv9bDqUCDbEPs-nNIekYRLSVZJlQJ9-WBVVPgSWEKxDO0kkHPiJyugU7EcNQFUTA2ns8v1Fe2Cnw5_JGDI6g2liqR_-tx0YvUSkuPbpr0OUE4ezOy5ukBWzNrLNja281hwXg_xDfHpBC28U/w320-h400/11.png",
    content: content,
  },
  {
    id: 6,
    date: "14 November 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "TECHCOMFEST 2024 ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkTaNSERfJBBxpCKt1tlfhEyV-xJqewbvPa8CLaAjWfPxGKTXhLSX8Vq688VuJ4AxrW17-fHuSEeFkKKJrq71o8PmayroRg-WURpyZIZxiL-QR0HpddKSi1ckZvFbN3uKPgH1OdWBy_8V_s2NRAsLOwpAEembVQs8z-NC5n5ApT7SUklFhVzlKkMtDRQUd/w480-h640/Pamflet%20Lomba%20Techcomfest%202024%20-%202.jpg",
    content: content,
  },
  {
    id: 7,
    date: "15 November 2023",
    time: "Sunday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title: "UI/UX Techcare 2023 - Technology for Careers ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbLg3hM-JZDqgS8HqmUR95D3_8MsSSvqO6jTnrKUtOu8UpANx5efHVaWHtrrahPwTrW3HneLWwfwlb9hnqFcu7zxXdwuuGz0oYqTjvHs2UheyvbEMPxrqe7Md9BTMdjHfGmPD1BRgzkXoHD87gGDSKPpF9hM_CldgnklGPO1s_wsw3S55jeMYFbK-EnwFO/w453-h640/image_6487327.JPG",
    content: content,
  },
  {
    id: 8,
    date: "20 November 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "IT Competition INVOFEST 2023 ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjmHGNCLQ6-e4-aFsdgY9iP-nGNecYbYsu-_6aLcVLcOyCd2In6TA-y7LtTerMt51uBgWJ02T099SCDPy23_o4BM9SaD2td6Xa3MajhRPz5LyfDkLaUS2o287i53n_W5BDH7gxqLfAhVo7zqEMN3-_eBm9S6FJC4S-LefA6qiR4CWnR8LAOMwvv8xPNq2E/w320-h400/slide%202.png",
    content: content,
  },
  {
    id: 9,
    date: "21 November 2023",
    time: "Monday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title: "Lomba Data Science - Intelligo Data Competition 2023 ",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnyqQZNk-Qf13MrgmVYrRkjMLq3_nciJk1FP8ggWt6_Xj_miFKQwcC7sHKO_MF9YkikpShIoeCMHVEIiFM4aFoELm-ozp2uNmQm3OTpKGSo7VvJ_ib9LcSd8B82puFUZFWdMjmFPzVsQ3xtmrxCjifhl_A_N9N2VxYrrs6CrC7aFkgou2FfgguNtSmaQZZ/w512-h640/%5B1%5D%20Feed_OpregDC1.png",
    content: content,
  },
  {
    id: 10,
    date: "10 Oktober 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "BIOS Hackathon ",
    image:
      "https://1.bp.blogspot.com/-0OaRcfAByCM/XYnfDx_-z_I/AAAAAAAAAbQ/nTIqlI1OsD8LEGzb0IoHq9Iq-xLR19yywCLcBGAsYHQ/s640/1.png",
    content: content,
  },
  {
    id: 11,
    date: "10 Oktober 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "ANFORCOM (Annual Informatics Competition)",
    image:
      "https://1.bp.blogspot.com/-PEPpaecbOrw/XW0xP6O9ebI/AAAAAAAAAaw/IvMP5PgqorQ211gLZVecUUZa5ghtdLGlgCLcBGAs/s640/IMG_7333.jpg",
    content: content,
  },
  {
    id: 12,
    date: "10 Oktober 2023",
    title: "IT TODAY IPB 2023",
    time: "Tuesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    image:
      "https://1.bp.blogspot.com/-Ixl3Q283cqM/XR4ERL8JARI/AAAAAAAAAY4/TYciikRqEb4g5dcoX11DaKNu6p3XZVRBQCLcBGAs/s1600/Poster%2BUtama.png",
    content: content,
  },
  {
    id: 13,
    date: "10 Oktober 2023",
    time: "Saturday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    title:
      "COMPFEST COMPETITION 2019",
    image:
      "https://1.bp.blogspot.com/-euDiOB-KJTI/XQhNSItnybI/AAAAAAAAAYk/jxrwlTeBRjsdEEJRo1fqoP_Cp-SeveFigCLcBGAs/s640/General-01.png",
    content: content,
  },
  {
    id: 14,
    date: "10 Oktober 2023",
    title: "HACKATHON CYBERTECH PNP 2023",
    time: "Wednesday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    image:
      "https://4.bp.blogspot.com/-0S0O4ZilaAM/XKLx1JzvorI/AAAAAAAAAXM/rxG8No3et8kWP8aVMhmh_Cznc6snwyKdgCLcBGAs/s640/C08B11A0-7283-48BE-B9CA-DB9A8AF974FE.jpeg",
    content: content,
  },
  {
    id: 15,
    date: "10 Oktober 2023",
    title:
      "Beasiswa Bank Indonesia",

      time: "Tuesday, 4:00PM - 9:00PM",

      location: "Gala Convention Center",
    image:
      "https://hima.pwk.its.ac.id/wp-content/uploads/2023/02/Screenshot_2023-02-03-13-18-41-70_1c337646f29875672b5a61192b9010f9-Dimas-Setyo-Budi.jpg",
    content: content,
  },
  {
    id: 16,
    date: "10 Oktober 2023",
    title: "Beasiswa Bakti BCA",

    time: "Friday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    image:
      "https://sinmawa.unud.ac.id/uploads/post/07c0eff5029b790dc84e79daecba7885.jpeg",
    content: content,
  },
  {
    id: 17,
    date: "10 Oktober 2023",
    title:
      "Beasiswa Sejuta Cita",

    time: "Monday, 4:00PM - 9:00PM",

    location: "Gala Convention Center",
    image:
      "https://ebaok43qpcr.exactdn.com/wp-content/uploads/2021/01/Beasiswa-Sejutacita.png?strip=all&lossy=1&ssl=1",
    content: content,
  },
];

export default datas;
