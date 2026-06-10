"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+216 XX XXX XXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@nova-ice.tn",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Tunisie",
  },
];

export default function ContactSection() {
  const prefersReduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#050d1a] py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-16 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
                Contactez-nous
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                Besoin de glace alimentaire ou de glace en ecailles pour votre
                activite ? Notre equipe est disponible pour repondre a vos
                demandes.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 space-y-6"
            >
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#4bb0ec]/12 border border-[#4bb0ec]/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#4bb0ec]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/35 text-xs mb-0.5">{label}</p>
                    <p className="text-white/80 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Decorative divider line */}
            <div className="mt-14 w-24 h-px bg-gradient-to-r from-[#4bb0ec]/40 to-transparent" />
          </div>

          {/* Right: Form */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-7 md:p-9">
              <p className="text-white font-bold text-lg mb-7">
                Demander un devis
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="nom"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Nom *
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="societe"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Societe
                    </label>
                    <input
                      id="societe"
                      name="societe"
                      type="text"
                      placeholder="Nom de votre societe"
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="telephone"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Telephone *
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      placeholder="+216 XX XXX XXX"
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="produit"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Type de produit *
                    </label>
                    <select
                      id="produit"
                      name="produit"
                      required
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-[#0a1f4d] text-white">
                        Selectionner...
                      </option>
                      <option
                        value="alimentaire"
                        className="bg-[#0a1f4d] text-white"
                      >
                        Glace alimentaire
                      </option>
                      <option
                        value="ecailles"
                        className="bg-[#0a1f4d] text-white"
                      >
                        Glace en ecailles
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="quantite"
                      className="block text-white/60 text-xs font-medium"
                    >
                      Quantite estimee
                    </label>
                    <input
                      id="quantite"
                      name="quantite"
                      type="text"
                      placeholder="ex : 100 kg / jour"
                      className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-white/60 text-xs font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Decrivez vos besoins..."
                    className="w-full bg-white/6 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4bb0ec]/60 focus:bg-white/10 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(75,176,236,0.35)] active:scale-[0.99]"
                  style={{
                    background:
                      "linear-gradient(135deg, #122f6a 0%, #4bb0ec 100%)",
                  }}
                >
                  {submitted ? (
                    "Demande envoyee !"
                  ) : (
                    <>
                      Demander un devis
                      <Send size={15} strokeWidth={1.75} />
                    </>
                  )}
                </button>

                <p className="text-white/25 text-xs text-center">
                  Formulaire de demonstration - non fonctionnel
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
