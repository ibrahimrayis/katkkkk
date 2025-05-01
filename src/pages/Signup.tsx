
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Github, Instagram, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: t('signup.passwordMismatch'),
        description: t('signup.passwordsMustMatch'),
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: t('signup.termsRequired'),
        description: t('signup.pleaseAcceptTerms'),
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup with timeout
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: t('signup.success'),
        description: t('signup.accountCreated'),
      });
      navigate('/');
    }, 1500);
  };

  const handleSocialSignup = (provider: string) => {
    toast({
      title: t('signup.socialSignupAttempt'),
      description: `${t('signup.attemptingWith')} ${provider}`,
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
                {t('signup.title')}
              </CardTitle>
              <CardDescription>
                {t('signup.createAccount')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('signup.fullName')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('signup.fullNamePlaceholder')}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('signup.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('signup.emailPlaceholder')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    {t('signup.password')}
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('signup.passwordPlaceholder')}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">
                    {t('signup.confirmPassword')}
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t('signup.confirmPasswordPlaceholder')}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-kidstore-green"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms} 
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('signup.acceptTerms')} <Link to="/terms" className="text-kidstore-blue hover:underline">{t('signup.termsAndConditions')}</Link>
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-kidstore-pink hover:bg-kidstore-pink/90 kidstore-button"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="mr-2 animate-spin">◌</span>
                      {t('signup.creatingAccount')}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <UserPlus className="w-4 h-4 mr-2" />
                      {t('signup.signup')}
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
                    {t('signup.orContinueWith')}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 kidstore-button"
                  onClick={() => handleSocialSignup('Facebook')}
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  {t('signup.continueWithFacebook')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-black text-white hover:bg-black/90 kidstore-button"
                  onClick={() => handleSocialSignup('GitHub')}
                >
                  <Github className="h-5 w-5 mr-2" />
                  {t('signup.continueWithGithub')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90 kidstore-button"
                  onClick={() => handleSocialSignup('Instagram')}
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  {t('signup.continueWithInstagram')}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 mt-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {t('signup.alreadyHaveAccount')}{" "}
                  <Link
                    to="/login"
                    className="text-kidstore-blue font-medium hover:underline"
                  >
                    {t('signup.login')}
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

export default Signup;
