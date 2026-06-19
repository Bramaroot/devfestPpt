import { motion } from "framer-motion";
import { ShieldCheck, UserCog, Users } from "lucide-react";
import { useState } from "react";

const UseCaseModelingSlide = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'organizer' | 'client'>('client');

  const useCases = {
    admin: {
      icon: <ShieldCheck className="w-8 h-8 text-slate-600" />,
      title: "Administrateur",
      color: "border-slate-200 bg-slate-50/50",
      cases: [
        "Gérer les utilisateurs et organisateurs",
        "Valider les comptes organisateurs (KYC)",
        "Superviser les revenus globaux",
        "Consulter les logs de scan en temps réel",
        "Modérer les événements publiés"
      ]
    },
    organizer: {
      icon: <UserCog className="w-8 h-8 text-primary" />,
      title: "Organisateur",
      color: "border-primary/30 bg-primary/5",
      cases: [
        "Créer et configurer des événements",
        "Gérer les types de billets (VIP, Standard...)",
        "Générer des codes d'accès temporaires",
        "Consulter les statistiques de vente",
        "Envoyer des invitations par email"
      ]
    },
    client: {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Client (Participant)",
      color: "border-green-500/30 bg-green-500/5",
      cases: [
        "Rechercher et consulter les événements",
        "Réserver des billets (Guest ou Inscrit)",
        "Effectuer un paiement mobile (AmanaTa, NITA)",
        "Télécharger ses billets au format PDF",
        "Gérer son profil et historique"
      ]
    }
  };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Modélisation : <span className="text-primary">Cas d'utilisation</span>
        </h2>
        <p className="text-muted-foreground">Définition des interactions par rôle</p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-10">
        {(['client', 'organizer', 'admin'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === tab 
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
            }`}
          >
            {useCases[tab].title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex-1 flex gap-10 items-stretch justify-between p-8 rounded-3xl border ${useCases[activeTab].color}`}
      >
        <div className="w-full h-full flex flex-col bg-white rounded-[2rem] p-6 border border-border shadow-inner">
          <h3 className="text-2xl font-black mb-4 text-center flex items-center justify-center gap-2 text-foreground">
            {useCases[activeTab].icon}
            <span>Diagramme de Cas d'Utilisation : {useCases[activeTab].title}</span>
          </h3>
          <div className="w-full flex-1 flex items-center justify-center overflow-hidden min-h-[300px]">
            {activeTab === 'organizer' ? (
              <object
                data="/Diagram/organiserClassUse.svg"
                type="image/svg+xml"
                className="max-w-full max-h-[320px] w-full h-full pointer-events-none rounded-xl"
              />
            ) : (
              <img 
                src={
                  activeTab === 'client' 
                    ? "/Diagram/Diagram-UserUseCaseDiagram.drawio.png" 
                    : "/Diagram/_Diagram-AdminUseCase.drawio.png"
                } 
                alt={`Use Case ${useCases[activeTab].title}`}
                className="max-w-full max-h-[320px] object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UseCaseModelingSlide;
