const menuSelection = [
  {
    id: 0,
    name: "Menu",
  },
  {
    id: 1,
    name: "Category",
  },
];
const menuLink = [
  {
    path: "#",
    name: "Home",
  },
  {
    path: "#",
    name: "Tentang Kami",
  },
  {
    path: "#",
    name: "Belanja",
  },
  {
    path: "#",
    name: "Login",
  },
  {
    path: "#",
    name: "Register",
  },
];

const menuCategory = [
  {
    path: "#",
    name: "Pakaian",
    subCategory: ["Pakaian Anak", "Pakaian Tidur", "Pakaian Mandi"],
  },
  {
    path: "#",
    name: "Pakaian Wanita",
  },
  {
    path: "#",
    name: "Pakaian Lebaran",
  },
  {
    path: "#",
    name: "Eelektronik",
  },
];

const serviceCompany = [
  {
    name: "Pengiriman Cepat",
    icon: "bxs-truck",
    desc: "Terintegrasi dengan jasa pengiriman di seluruh indonesia",
  },
  {
    name: "Layanan 24 Jam",
    icon: "bx-support",
    desc: "Kami siap membantu anda",
  },
  {
    name: "Pembayaran Mudah Dan Aman",
    icon: "bxs-wallet",
    desc: "Bekerja sama dengan pembayaran di indonesia",
  },
  {
    name: "Produk Terlengkap",
    icon: "bxs-t-shirt",
    desc: "Bekerjasama dengan penjual yang berpengalaman",
  },
];

export { menuSelection, menuCategory, menuLink, serviceCompany };
