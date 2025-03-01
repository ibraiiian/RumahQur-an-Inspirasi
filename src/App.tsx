import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RuangBelajar from "./pages/RuangBelajar";
import Perpustakaan from "./pages/Perpustakaan";
import TamanMurojah from "./pages/TamanMurojah";
import Masjid from "./pages/Masjid";
import Tahfidz from "./pages/Tahfidz";
import Tahsin from "./pages/Tahsin";
import Arabic from "./pages/Arabic";
import Daftar from "./pages/Daftar";
import TentangKami from "./pages/TentangKami";
import Kajian from "./pages/Kajian";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tahfidz" element={<Tahfidz />} />
            <Route path="/tahsin" element={<Tahsin />} />
            <Route path="/arabic" element={<Arabic />} />
            <Route path="/kajian" element={<Kajian />} />
            <Route path="/ruang-belajar" element={<RuangBelajar />} />
            <Route path="/perpustakaan" element={<Perpustakaan />} />
            <Route path="/taman-murojah" element={<TamanMurojah />} />
            <Route path="/masjid" element={<Masjid />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
