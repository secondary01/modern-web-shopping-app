import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-background"
    >
      {/* Nav */}
      <header className="border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center">
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              N
            </div>
            <span className="text-base font-semibold tracking-tight">
              Nexus
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-8xl font-bold text-primary/20 tracking-tighter">
              404
            </p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              Page not found
            </h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
              className="mt-8 gap-2"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
