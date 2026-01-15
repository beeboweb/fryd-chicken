export type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  imageFolder: string;
  themeColor: string;
  stats: { label: string; value: string }[];
  details: string;
  nutrition: { cal: string; protein: string };
};

export const products: Product[] = [
  {
    id: "bucket",
    title: "THE O.G. BUCKET",
    subtitle: "LEGENDARY CRUNCH",
    description:
      "12 pieces of pure gold. Marinated for 24 hours, fried to perfection.",
    price: "€18.90",
    imageFolder: "/images/bucket/sequence", // 200 frames
    themeColor: "#D6001C",
    stats: [
      { label: "PIECES", value: "12" },
      { label: "SPICE", value: "SECRET" },
      { label: "CRUNCH", value: "100%" },
    ],
    details:
      "Our signature bucket. Freshly breaded by hand in-store every morning.",
    nutrition: { cal: "2400", protein: "180g" },
  },
  {
    id: "tower",
    title: "TOWER BURGER",
    subtitle: "DOUBLE FILLET STACK",
    description:
      "Two succulent chicken fillets, cheese, hash brown, and our secret sauce.",
    price: "€9.50",
    imageFolder: "/images/tower",
    themeColor: "#202020",
    stats: [
      { label: "FILLETS", value: "2" },
      { label: "HEIGHT", value: "15cm" },
      { label: "TASTE", value: "EPIC" },
    ],
    details:
      "A burger that commands respect. Double the chicken, double the pleasure.",
    nutrition: { cal: "950", protein: "45g" },
  },
  {
    id: "wings",
    title: "HOT WINGS",
    subtitle: "SPICY & CRUNCHY",
    description:
      "Fiery coated wings that pack a punch. Not for the faint hearted.",
    price: "€6.90",
    imageFolder: "/images/wings",
    themeColor: "#FF4500",
    stats: [
      { label: "HEAT", value: "XXL" },
      { label: "CRUNCH", value: "LOUD" },
      { label: "ADDICTIVE", value: "YES" },
    ],
    details: "Marinated in our special chili blend. Served with cooling dip.",
    nutrition: { cal: "550", protein: "32g" },
  },
];
