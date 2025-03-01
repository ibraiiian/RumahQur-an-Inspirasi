import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Daftar = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login berhasil",
        description: "Selamat datang kembali!",
      });
    }, 2000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Pendaftaran berhasil",
        description: "Silahkan cek email Anda untuk verifikasi.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16 pb-8 px-4 flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1a365d]">
            <TabsTrigger 
              value="login" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#1a365d] text-white"
            >
              Masuk
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="data-[state=active]:bg-white data-[state=active]:text-[#1a365d] text-white"
            >
              Daftar
            </TabsTrigger>
          </TabsList>
          
          {/* Login Form */}
          <TabsContent value="login">
            <Card className="border-[#1a365d] border shadow-lg">
              <CardHeader className="bg-[#1a365d] text-white rounded-t-lg">
                <CardTitle>Masuk</CardTitle>
                <CardDescription className="text-gray-200">
                  Masuk ke akun Anda untuk melanjutkan pendaftaran program
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1a365d] hover:bg-[#1a365d]/90 text-white text-lg font-semibold" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Memproses..." : "Masuk"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Register Form */}
          <TabsContent value="register">
            <Card className="border-[#1a365d] border shadow-lg">
              <CardHeader className="bg-[#1a365d] text-white rounded-t-lg">
                <CardTitle>Daftar Baru</CardTitle>
                <CardDescription className="text-gray-200">
                  Buat akun baru untuk mendaftar program
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="nama@email.com"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor HP</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      required
                      className="border-[#1a365d]/20 focus:border-[#1a365d] focus:ring-[#1a365d]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1a365d] hover:bg-[#1a365d]/90 text-white text-lg font-semibold" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Memproses..." : "Daftar"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Daftar;
