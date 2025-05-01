
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Instagram, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login with timeout
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: t('login.success'),
        description: t('login.welcomeBack'),
      });
      navigate('/');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: t('login.socialLoginAttempt'),
      description: `${t('login.attemptingWith')} ${provider}`,
    });
  };

  return (
    <div className={`min-h-screen bg-background ${isRtl ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main className="container mx-auto py-10 px-4">
        <div className="flex justify-center items-center">
          <Card className="w-full max-w-md kidstore-card border-kidstore-pink">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bubblegum text-kidstore-blue">
                {t('login.title')}
              </CardTitle>
              <CardDescription>
                {t('login.enterCredentials')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('login.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('login.emailPlaceholder')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      {t('login.password')}
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-kidstore-blue hover:underline"
                    >
                      {t('login.forgotPassword')}
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('login.passwordPlaceholder')}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-kidstore-blue hover:bg-kidstore-blue/90 kidstore-button"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="mr-2 animate-spin">◌</span>
                      {t('login.loggingIn')}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <LogIn className="w-4 h-4 mr-2" />
                      {t('login.login')}
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {t('login.orContinueWith')}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 kidstore-button"
                  onClick={() => handleSocialLogin('Facebook')}
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  {t('login.continueWithFacebook')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-black text-white hover:bg-black/90 kidstore-button"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <Github className="h-5 w-5 mr-2" />
                  {t('login.continueWithGithub')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90 kidstore-button"
                  onClick={() => handleSocialLogin('Instagram')}
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  {t('login.continueWithInstagram')}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {t('login.noAccount')}{" "}
                  <Link
                    to="/signup"
                    className="text-kidstore-blue font-medium hover:underline"
                  >
                    {t('login.signUp')}
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
