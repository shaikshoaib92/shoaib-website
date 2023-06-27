import { Montserrat, DM_Sans, Inter } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const dmsans = DM_Sans({
    subsets: ["latin"],
    weight: "700"
});

const inter = Inter({subsets:["latin"]});

export { montserrat, dmsans, inter };