import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  years: string;
  description: string;
  specialties: string[];
  linkedinUrl?: string;
  email?: string;
  index: number;
}

export const TeamMember = ({
  name,
  role,
  years,
  description,
  specialties,
  linkedinUrl,
  email,
  index,
}: TeamMemberProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initials = name.split(" ").map((n) => n[0]).join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className={`p-8 flex flex-col h-full ${isExpanded ? "" : ""}`}>
          {/* Profile Avatar */}
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center flex-shrink-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl font-bold text-primary-foreground">{initials}</span>
          </motion.div>

          {/* Basic Info - Always Visible */}
          <div className="text-center mb-6 flex-shrink-0">
            <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
            <p className="text-primary font-semibold mb-1">{role}</p>
            <p className="text-sm text-muted-foreground mb-4">{years}</p>
          </div>

          {/* Expand Button */}
          <motion.button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors mx-auto mb-6 text-sm font-medium text-primary flex-shrink-0"
            animate={{ backgroundColor: isExpanded ? "rgba(210, 100%, 56%, 0.3)" : "rgba(210, 100%, 56%, 0.2)" }}
          >
            {isExpanded ? "Show Less" : "Show More"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden flex-grow flex flex-col"
              >
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-6"
                >
                  <p className="text-muted-foreground text-justify leading-relaxed text-sm">{description}</p>
                </motion.div>

                {/* Specialties */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mb-6"
                >
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="flex gap-4 justify-center pt-6 border-t border-primary/10 mt-auto"
                >
                  {linkedinUrl && (
                    <motion.a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, backgroundColor: "rgba(210, 100%, 56%, 0.4)" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </motion.a>
                  )}
                  {email && (
                    <motion.a
                      href={`mailto:${email}`}
                      whileHover={{ scale: 1.15, backgroundColor: "rgba(210, 100%, 56%, 0.4)" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
                      title="Send Email"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMember;
