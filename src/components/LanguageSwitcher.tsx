import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguage(newLanguage);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant="outline" onClick={toggleLanguage} className="w-16">
        {language === "en" ? "RU" : "EN"}
      </Button>
    </motion.div>
  );
}
