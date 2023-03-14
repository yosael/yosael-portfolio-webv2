import DeloitteLogo from "@/public/companiesLogos/deloitteLogo.png";
import AudiomedLogo from "@/public/companiesLogos/audiomedLogo.png";
import GTLogo from "@/public/companiesLogos/logo-Gyt.png";
import DaviviendaLogo from "@/public/companiesLogos/banco-davivienda-Logo.jpg";
import TelusLogo from "@/public/companiesLogos/telus-logo.png";
import QuantumBlackLogo from "@/public/companiesLogos/quantumBlackLogo.png";
import { Company } from "@/types/Types";

export const companies: Company[] = [
  {
    name: "Deloitte",
    image: DeloitteLogo,
    url: "https://www2.deloitte.com/sv/es.html",
  },
  {
    name: "Audiomed",
    image: AudiomedLogo,
    url: "https://audiomed.com.sv/",
  },
  {
    name: "G&T Continental Bank",
    image: GTLogo,
    url: "https://www.gtc.com.gt/",
  },
  {
    name: "Davivienda Bank",
    image: DaviviendaLogo,
    url: "https://www.davivienda.com.sv/#/personas",
  },
  {
    name: "Telus International",
    image: TelusLogo,
    url: "https://www.telusinternational.com/",
  },
  {
    name: "Quantum Black",
    image: QuantumBlackLogo,
    url: "https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients",
  },
];
