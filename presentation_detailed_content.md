# CONTENU DÉTAILLÉ DE LA PRÉSENTATION TIQUICK

## Slide 1: Cover
* **Fichier** : [CoverSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/CoverSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-center gap-8 flex-shrink-0"
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white flex-shrink-0">
          <img src="/Logos/logoOCI.jpg" alt="OCI Logo" className="w-10 h-10 object-contain rounded-full" />
        </div>
        <div className="text-center">
          <p className="font-black text-[10px] tracking-widest text-white/90">ORGANISATION DE LA COOPÉRATION ISLAMIQUE</p>
          <p className="font-black text-sm tracking-wide mt-0.5">UNIVERSITÉ ISLAMIQUE DU NIGER</p>
          <p className="text-xs text-white/80 mt-0.5">Faculté des Sciences et Techniques — Département Informatique</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white flex-shrink-0">
          <img src="/Logos/logoUIN.jpg" alt="UIN Logo" className="w-10 h-10 object-contain rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-3xl"
        >
          {/* TiQuick logo */}
          <div>
            <div
              className="inline-flex items-center gap-1 mb-2"
              style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              <span className="text-7xl font-black tracking-tight" style={{ color: "#18636B" }}>Ti</span>
              <span className="text-7xl font-black tracking-tight" style={{ color: "#43A6B0" }}>Quick</span>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <p className="text-sm font-medium leading-relaxed" style={{ color: "#4A6567" }}>
              Soutenance de mémoire de fin de cycle en vue d'obtention du diplôme de Bachelor de Sciences de l'Informatique, option Technologie de l'Information
            </p>
            <h1 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#1A2B2C" }}>
              Conception et développement d'une plateforme web sécurisée
              de billetterie électronique adaptée au contexte nigérien
            </h1>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          </div>

          {/* Author info */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-sm" style={{ color: "#1A2B2C" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Présenté par</p>
              <p className="font-bold mt-1">Nouhou Soumana Ibrahim</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Encadreur</p>
              <p className="font-bold mt-1">M. Almou Bassirou</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">Ingénieur en Informatique</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Année</p>
              <p className="font-bold mt-1">2025 – 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-between flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">H</span>
          </div>
          <span className="text-xs font-bold tracking-wider">HYPE AGENCY</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-wider">CAPITAL HUMAIN</span>
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Slide 2: Plan
* **Fichier** : [PlanSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/PlanSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Plan de la <span className="text-primary">présentation</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.09 }}
            className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          >
            <div
              className="text-2xl font-black w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-mono"
              style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)" }}
            >
              {p.num}
            </div>
            <div className="flex items-start gap-3 flex-1">
              <div className="mt-1 text-primary">
                <p.icon size={24} />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
```

---

## Slide 3: Introduction
* **Fichier** : [IntroductionSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/IntroductionSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground"
      >
        Introduction
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground text-center mb-4 leading-relaxed"
      >
        Alors que le Niger vit une mutation numérique sans précédent avec plus de 
        <span className="text-primary font-bold"> 14 millions d'abonnés mobiles</span>, le secteur de l'événementiel 
        reste paradoxalement prisonnier de méthodes archaïques. La billetterie papier, synonyme 
        d'opacité financière et de fraudes, freine l'épanouissement de notre économie créative.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-lg text-muted-foreground text-center mb-8 leading-relaxed"
      >
        C'est à l'intersection de ce besoin de <span className="text-primary font-semibold">transparence</span> et 
        de l'essor des fintechs locales comme <span className="text-primary font-semibold">AmanaTa</span> et 
        <span className="text-primary font-semibold"> NITA</span> que naît **TiQuick** : un dispositif 
        technologique souverain conçu pour répondre à un défi majeur :
      </motion.p>

      <div className="flex items-center gap-4 w-full max-w-2xl mb-8">
        <div className="flex-1 h-px border-t border-border" />
        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <div className="flex-1 h-px border-t border-border" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55 }}
        className="p-8 rounded-3xl text-white text-center max-w-3xl w-full"
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
      >
        <p className="text-xl md:text-2xl font-bold italic leading-relaxed">
          « Comment offrir à chaque Nigérien la possibilité de réserver et payer un billet
          d'événement en toute sécurité, depuis son téléphone ? »
        </p>
      </motion.div>

      <div className="flex items-center gap-4 w-full max-w-2xl mt-8">
        <div className="flex-1 h-px border-t border-border" />
        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <div className="flex-1 h-px border-t border-border" />
      </div>
    </div>
  );
}
```

---

## Slide 4: Paradoxe
* **Fichier** : [ParadoxeSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ParadoxeSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6 justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Un <span className="text-primary">paradoxe nigérien</span>
        </h2>
        <p className="text-muted-foreground italic text-lg">Le contraste entre connectivité et pratiques événementielles</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 items-center mb-6 flex-1">
        {/* Left Side: Connectivité */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center shadow-sm h-full justify-center"
        >
          <Smartphone className="w-16 h-16 text-primary mb-4 animate-pulse" />
          <p className="text-4xl md:text-5xl font-black text-primary mb-2">14 MILLIONS</p>
          <p className="text-lg font-bold text-foreground">d'abonnés mobiles actifs au Niger</p>
          <span className="text-xs text-muted-foreground mt-2 block">(Source : ARCEP 2024)</span>
        </motion.div>

        {/* Right Side: Secteur Event */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center p-8 rounded-3xl bg-destructive/5 border border-destructive/20 text-center shadow-sm h-full justify-center"
        >
          <XCircle className="w-16 h-16 text-destructive mb-4" />
          <p className="text-2xl font-bold text-destructive mb-2">Secteur Événementiel</p>
          <p className="text-lg text-foreground">
            Reste prisonnier des formats physiques et de la vente informelle en espèces.
          </p>
        </motion.div>
      </div>

      {/* Grid of issues */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="flex items-center justify-between p-4 bg-white border border-border rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🎟️</span>
              <span className="font-bold text-foreground text-sm">{prob.text}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">{prob.detail}</span>
              <XCircle className="w-4 h-4 text-destructive shrink-0" />
            </div>
          </motion.div>
        ))}
```

---

## Slide 5: Problematique
* **Fichier** : [ProblematiqueSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ProblematiqueSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="w-full h-full min-h-screen bg-[#0A1628] flex flex-col items-center justify-center p-8 md:p-16 text-white absolute inset-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Contexte fintechs */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
        >
          Alors que les fintechs locales{" "}
          <span className="font-semibold text-white">AmanaTa</span> et{" "}
          <span className="font-semibold text-white">NITA</span> transforment les usages mobiles,
          le secteur événementiel nigérien reste sans solution numérique adaptée.
        </motion.p>

        {/* Ligne séparatrice */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-0.5 bg-[#43A6B0] mb-10"
        />

        {/* Question centrale */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-extrabold mb-10 leading-snug tracking-tight text-white max-w-3xl"
        >
          Comment offrir à chaque Nigérien la possibilité de réserver et payer un billet d'événement
          en toute sécurité, depuis son téléphone ?
        </motion.h3>

        {/* Ligne séparatrice */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-0.5 bg-[#43A6B0] mb-10"
        />

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl md:text-3xl text-slate-400 font-light">→</span>
          <span className="text-3xl md:text-5xl font-black tracking-wider text-[#F9C74C] drop-shadow-md">
            TiQuick
          </span>
        </motion.div>
      </div>
    </div>
  );
}
```

---

## Slide 6: Hypothese
* **Fichier** : [HypotheseSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/HypotheseSlide.tsx)

### Contenu brut :
```tsx
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

const HypotheseSlide = () => (
  <div className="flex flex-col h-full max-w-4xl mx-auto px-6 py-10 justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center mb-10"
    >
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
        <Lightbulb className="w-12 h-12 text-primary animate-pulse" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-2">
        Hypothèse de <span className="text-primary">Recherche</span>
      </h2>
      <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-primary/20 shadow-2xl relative"
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
        ?
      </div>
      <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground text-center">
        "L'intégration de passerelles de paiement mobile locales (AmanaTa, NITA) couplée à une architecture robuste (Laravel/React) et un mode hors-ligne permet de concevoir une solution de billetterie électronique sécurisée, traçable et accessible, répondant efficacement aux contraintes économiques et techniques du contexte nigérien."
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex justify-center gap-6"
    >
      {[
        "Sécurisation des flux",
        "Accessibilité offline",
        "Inclusion financière"
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/40 rounded-full border border-border/50 text-sm font-semibold text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>{item}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default HypotheseSlide;

```

---

## Slide 7: Objectives
* **Fichier** : [ObjectivesSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ObjectivesSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Objectifs du <span className="text-primary">Projet</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-6 items-stretch w-full">
        {/* Objectif Principal */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border border-primary/20 shadow-xl w-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2.5 bg-primary/20 rounded-2xl">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Objectif Principal</h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Concevoir, développer et documenter <span className="text-foreground font-semibold">TiQuick</span>, 
            une plateforme fullstack de gestion d'événements et de billetterie électronique adaptée au 
            <span className="text-primary font-semibold"> contexte nigérien</span>, garantissant sécurité, 
            traçabilité et accessibilité.
          </p>
        </motion.div>

        {/* Objectifs Spécifiques */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 w-full"
        >
          <h3 className="text-xl font-bold flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Objectifs Spécifiques
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {specificObjectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-start gap-3 p-3 bg-secondary/30 rounded-2xl border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-xs font-medium leading-tight">{obj}</p>
              </motion.div>
            ))}
```

---

## Slide 8: UseCaseModeling
* **Fichier** : [UseCaseModelingSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/UseCaseModelingSlide.tsx)

### Code JSX pertinent :
```tsx
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
```

---

## Slide 9: ClassDiagram
* **Fichier** : [ClassDiagramSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ClassDiagramSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Modélisation : <span className="text-primary">Diagramme de Classes</span>
        </h2>
        <p className="text-muted-foreground italic text-lg">Structure des données et relations (Eloquent ORM)</p>
      </motion.div>

      <div className="relative flex-1 bg-white rounded-[2rem] border border-border shadow-inner max-h-[480px] overflow-hidden flex flex-col">
        {/* Barre d'outils de Zoom */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur border border-border rounded-full p-1.5 shadow-sm z-10">
          <button
            onClick={handleZoomOut}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Zoom Arrière"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-medium w-12 text-center text-foreground select-none">
            {Math.round(scale * 100)}
```

---

## Slide 10: SequenceDiagram
* **Fichier** : [SequenceDiagramSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/SequenceDiagramSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6">
      <div className="flex flex-col items-center gap-4 mb-4 flex-shrink-0">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center flex items-center justify-center gap-3"
        >
          <img
            src={activeGateway === "amanata" ? "/Logos/amana.png" : "/Logos/logo.png"}
            alt={activeGateway === "amanata" ? "AmanaTa" : "NITA"}
            className="w-10 h-10 object-contain rounded-xl bg-white p-1 border border-border shadow-sm"
          />
          <span>{current.title}</span>
        </motion.h2>

        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveGateway("amanata")}
```

---

## Slide 11: Value
* **Fichier** : [ValueSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ValueSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-5xl font-black text-[#F9C74C]">Ti</span>
          <span className="text-5xl font-black text-primary">Quick</span>
        </div>
        <p className="text-primary font-mono text-sm">tiquick.com</p>
        <p className="text-muted-foreground mt-1">La billetterie électronique du Niger</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card p-5 rounded-2xl border border-border text-center"
          >
            <p className={`text-5xl font-black mb-1 ${s.color}`}>{s.value}</p>
            <p className="font-bold text-sm text-foreground mb-2">{s.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
          </motion.div>
        ))}
```

---

## Slide 12: Metrics
* **Fichier** : [MetricsSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/MetricsSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
      >
        Méthodologie <span className="text-primary">Scrum</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8 text-center text-sm"
      >
        8 sprints × 2 semaines = 16 semaines de développement itératif
      </motion.p>

      {/* Timeline */}
      <div className="w-full mb-6">
        {/* Top cards — S1 S3 S5 S7 (even indices) */}
        <div className="flex gap-2 w-full mb-2">
          {sprints.map((s, i) => (
            <div key={i} className="flex-1">
              {i % 2 === 0 ? (
                <SprintCard sprint={s} color={nodeColors[i]} position="top" delay={0.2 + i * 0.07} />
              ) : (
                <div className="invisible">
                  <SprintCard sprint={s} color={nodeColors[i]} position="top" delay={0} />
                </div>
              )}
```

---

## Slide 13: Architecture
* **Fichier** : [ArchitectureSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ArchitectureSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
      >
        Architecture <span className="text-primary">3-Tiers</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08 }}
        className="text-muted-foreground mb-6 text-center text-sm"
      >
        Déploiement VPS · Dokploy · Docker · Cloudflare
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full"
      >
        {/* Cloudflare — réseau */}
        <div className="flex justify-center mb-1">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border font-bold text-sm w-full max-w-2xl justify-center"
            style={{ background: "#FEF3E2", borderColor: "#F6821F", color: "#C05621" }}
          >
            <Cloud size={20} className="text-[#F6821F]" />
            <span>Cloudflare — DNS · CDN · SSL/TLS · DDoS Protection</span>
          </div>
        </div>

        <Arrow label="HTTPS" />

        {/* Tier 1 — Présentation */}
        <div
          className="rounded-2xl border p-3 mb-1"
          style={{ background: "#EEF6F7", borderColor: "#43A6B0" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 text-center">
            Tier 1 — Présentation
          </p>
          <div className="flex gap-3">
            <div
              className="flex-1 rounded-xl border px-4 py-2.5 text-center"
              style={{ background: "#DBEAFE", borderColor: "#93C5FD" }}
            >
              <p className="font-bold text-xs text-blue-700">React 18</p>
              <p className="text-[10px] text-blue-600/80 mt-0.5">Tailwind · shadcn/ui · TanStack Query</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2.5 text-center"
              style={{ background: "#E0F2FE", borderColor: "#7DD3FC" }}
            >
              <p className="font-bold text-xs text-sky-700">Flutter</p>
              <p className="text-[10px] text-sky-600/80 mt-0.5">iOS · Android · Dio + Provider</p>
            </div>
          </div>
        </div>

        <Arrow label="REST / JSON" />

        {/* Tier 2 — Application */}
        <div
          className="rounded-2xl border p-3 mb-1"
          style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-2 text-center">
            Tier 2 — Application · VPS Hetzner · Docker + Dokploy
          </p>
          <div className="flex gap-3">
            {/* Laravel */}
            <div
              className="flex-2 flex-grow rounded-xl border px-4 py-2.5"
              style={{ background: "#FFF1F0", borderColor: "#FECACA" }}
            >
              <p className="font-bold text-xs text-red-700 mb-0.5">Laravel 12 API</p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Sanctum · RBAC · Génération PDF · Horizon · Queues
              </p>
            </div>
            {/* Nginx */}
            <div
              className="rounded-xl border px-3 py-2.5 text-center flex-shrink-0"
              style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
            >
              <p className="font-bold text-xs text-green-700">Nginx</p>
              <p className="text-[10px] text-muted-foreground">Reverse proxy</p>
            </div>
            {/* External APIs */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#FFFBEB", borderColor: "#FCD34D" }}
              >
                <p className="font-bold text-[10px] text-yellow-700">AmanaTa B2B</p>
                <p className="text-[9px] text-muted-foreground">Paiement · HMAC</p>
              </div>
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
              >
                <p className="font-bold text-[10px] text-green-700">NITA</p>
                <p className="text-[9px] text-muted-foreground">Paiement en ligne</p>
              </div>
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#EFF6FF", borderColor: "#BFDBFE" }}
              >
                <p className="font-bold text-[10px] text-blue-700">Maileroo</p>
                <p className="text-[9px] text-muted-foreground">Emails</p>
              </div>
            </div>
          </div>
        </div>

        <Arrow />

        {/* Tier 3 — Données */}
        <div
          className="rounded-2xl border p-3"
          style={{ background: "#FFF3E0", borderColor: "#FFCC80" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-700 mb-2 text-center">
            Tier 3 — Données
          </p>
          <div className="flex gap-3">
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#EFF6FF", borderColor: "#93C5FD" }}
            >
              <p className="font-bold text-xs text-blue-800">PostgreSQL</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Base relationnelle</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#FFF1F0", borderColor: "#FECACA" }}
            >
              <p className="font-bold text-xs text-red-700">Redis</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Cache · Sessions · Queues</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#FEF3E2", borderColor: "#FBD38D" }}
            >
              <p className="font-bold text-xs text-orange-700">Cloudflare R2</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Backups SQL journaliers</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="mt-4 flex flex-wrap justify-center gap-4 text-[10px] text-muted-foreground"
      >
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-px bg-muted-foreground/50" />
          HTTPS / JSON
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-px border-t border-dashed border-muted-foreground/50" />
          Sauvegarde journalière
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-primary/30" />
          Service externe
        </span>
      </motion.div>
    </div>
  );
}
```

---

## Slide 14: TechStack
* **Fichier** : [TechStackSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/TechStackSlide.tsx)

### Code JSX pertinent :
```tsx
return () => window.removeEventListener("keydown", h, true);
  }
```

---

## Slide 15: Challenges
* **Fichier** : [ChallengesSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ChallengesSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Difficultés & <span className="text-primary">Solutions</span>
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid gap-6">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-xl"
          >
            <div className={`md:w-1/3 p-8 flex flex-col justify-center items-center text-center bg-${c.color}-500/10`}>
              <AlertTriangle className={`w-12 h-12 text-${c.color}-500 mb-4`} />
              <h3 className="text-xl font-black leading-tight mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground italic">{c.desc}</p>
            </div>
            
            <div className="flex-1 p-8 flex flex-col justify-center relative">
               <div className="absolute top-4 right-8 opacity-5">
                  <Lightbulb className="w-32 h-32" />
               </div>
               <div className="flex items-center gap-4 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h4 className="text-2xl font-bold text-primary">Solution Apportée</h4>
               </div>
               <p className="text-lg font-medium leading-relaxed">
                  {c.solution}
               </p>
            </div>
          </motion.div>
        ))}
```

---

## Slide 16: Demo
* **Fichier** : [DemoSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/DemoSlide.tsx)

### Code JSX pertinent :
```tsx
return () => window.removeEventListener("keydown", handler, true);
  }
```

---

## Slide 17: Mobile
* **Fichier** : [MobileSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/MobileSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-40 h-[320px] md:w-48 md:h-[380px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 flex flex-col">
        {/* Notch / Speaker */}
        <div className="h-5 md:h-6 bg-slate-900 flex items-center justify-center flex-shrink-0">
          <div className="w-12 h-3 md:w-16 md:h-4 bg-black rounded-full" />
        </div>
        <div className="flex-1 bg-slate-950 overflow-hidden relative flex items-center justify-center">
          {!hasError ? (
            <img
              src={img}
              alt={label}
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
```

---

## Slide 18: CICD
* **Fichier** : [CICDSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/CICDSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-center"
      >
        Infrastructure & <span className="text-primary">DevOps</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-7 text-center text-sm"
      >
        Du code au déploiement — pipeline automatisé
      </motion.p>

      {/* Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-card border border-border rounded-2xl p-5 mb-5"
      >
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4 font-semibold">Pipeline CI/CD</p>
        <div className="flex flex-col md:flex-row items-center gap-2 flex-wrap justify-center">
          {[
            { icon: <GitBranch className="w-4 h-4" />, label: "git push", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
            { icon: <Package className="w-4 h-4" />, label: "Nixpacks build", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "PHPUnit tests", color: "text-green-400 border-green-500/30 bg-green-500/5" },
            { icon: <Server className="w-4 h-4" />, label: "Dokploy deploy", color: "text-primary border-primary/30 bg-primary/5" },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Live ✓", color: "text-green-400 border-green-500/30 bg-green-500/10" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold ${step.color}`}>
                {step.icon}{step.label}
              </div>
              {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground/40 hidden md:block" />}
              {i < 4 && <ArrowDown className="w-4 h-4 text-muted-foreground/40 md:hidden" />}
            </div>
          ))}
```

---

## Slide 19: Backup
* **Fichier** : [BackupSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/BackupSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground"
      >
        Stratégie de <span className="text-primary">Sauvegarde</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold">Données Critiques</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Base de données PostgreSQL (Schéma + Données)</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Volumes Docker (Images, PDFs, documents)</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Fichiers de configuration et variables d'environnement</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
              <Cloud size={32} />
            </div>
            <h3 className="text-xl font-bold">Automatisation R2</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Clock size={18} className="text-primary mt-1 shrink-0" />
              <span>Tâches Cron quotidiennes configurées via Dokploy</span>
            </li>
            <li className="flex items-start gap-2">
              <Cloud size={18} className="text-orange-500 mt-1 shrink-0" />
              <span>Export chiffré vers Cloudflare R2 (S3 Compatible)</span>
            </li>
            <li className="flex items-start gap-2">
              <Database size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>Rétention glissante sur 30 jours (Auto-cleanup)</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-muted-foreground italic"
      >
        "Les données sont le cœur du système. Une sauvegarde automatique et déportée garantit la continuité de service en cas de sinistre sur le VPS."
      </motion.p>
    </div>
  );
}
```

---

## Slide 20: BackupDiagram
* **Fichier** : [BackupDiagramSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/BackupDiagramSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
      >
        Architecture de <span className="text-primary">Sauvegarde Automatique</span>
      </motion.h2>

      <div className="relative w-full flex flex-col items-center">
        {/* Top Level: Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2 flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-bold">Cron Task (Daily @ 03:00)</span>
          </div>
          <div className="h-8 w-0.5 bg-border my-2" />
        </motion.div>

        {/* Middle Level: Process */}
        <div className="flex items-center justify-between w-full max-w-4xl mb-8">
          {/* Source: VPS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-[#1E2A2C] border-2 border-[#43A6B0] rounded-2xl p-6 text-white w-48 shadow-xl">
              <div className="flex justify-center mb-3">
                <Server size={40} className="text-[#43A6B0]" />
              </div>
              <p className="text-center font-bold text-sm">VPS Hetzner</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] bg-white/5 p-1.5 rounded">
                  <Database size={12} />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] bg-white/5 p-1.5 rounded">
                  <HardDrive size={12} />
                  <span>Docker Volumes</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Source des données</span>
          </motion.div>

          {/* Action: Dokploy Backup Script */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-blue-600 rounded-full p-4 text-white shadow-lg animate-pulse">
              <ArrowRight size={32} />
            </div>
            <span className="text-[10px] font-mono mt-2 bg-muted px-2 py-1 rounded">
              dokploy-backup.sh
            </span>
          </motion.div>

          {/* Destination: Cloudflare R2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-[#FEF3E2] border-2 border-[#F6821F] rounded-2xl p-6 text-orange-900 w-48 shadow-xl">
              <div className="flex justify-center mb-3">
                <Cloud size={40} className="text-[#F6821F]" />
              </div>
              <p className="text-center font-bold text-sm">Cloudflare R2</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] bg-orange-600/5 p-1.5 rounded border border-orange-200">
                  <ShieldCheck size={12} />
                  <span>Off-site Storage</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] bg-orange-600/5 p-1.5 rounded border border-orange-200">
                  <Clock size={12} />
                  <span>30-day Retention</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Destination Sécurisée</span>
          </motion.div>
        </div>

        {/* Benefits Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 w-full max-w-4xl mt-4"
        >
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Automatique</p>
            <p className="text-[10px] text-muted-foreground">Aucune intervention humaine</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Déporté</p>
            <p className="text-[10px] text-muted-foreground">Séparé du serveur principal</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Économique</p>
            <p className="text-[10px] text-muted-foreground">Zéro frais d'egress Cloudflare</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
```

---

## Slide 21: Bilan
* **Fichier** : [BilanSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/BilanSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Bilan du <span className="text-primary">Projet</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-bold text-green-600 uppercase tracking-wide">Objectifs atteints</h3>
          </div>
          <div className="space-y-3">
            {achieved.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3 bg-green-500/5 border border-green-500/10 px-4 py-3 rounded-2xl shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
```

---

## Slide 22: Limites
* **Fichier** : [LimitesSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/LimitesSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Limites & <span className="text-orange-500">Perspectives</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {limits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-3xl flex items-start gap-4 shadow-sm"
          >
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-600 shrink-0">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
```

---

## Slide 23: IntegrationTests
* **Fichier** : [IntegrationTestsSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/IntegrationTestsSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-center"
      >
        <span className="text-primary">Perspectives</span> — Et après TiQuick ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8 text-center text-sm"
      >
        Roadmap à 3 niveaux de priorité
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5 w-full">
        {perspectives.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${p.dot} flex-shrink-0`} />
              <h3 className="font-bold text-base text-foreground">{p.priority}</h3>
            </div>
            <ul className="space-y-3">
              {p.items.map((item, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.15 + j * 0.07 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-muted-foreground/60 text-xs mt-0.5 flex-shrink-0">→</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
                </motion.li>
              ))}
```

---

## Slide 24: FutureEvolution
* **Fichier** : [FutureEvolutionSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/FutureEvolutionSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
          <Rocket className="w-12 h-12 text-primary animate-bounce" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Perspectives & <span className="text-primary">Évolutions</span>
        </h2>
        <p className="text-xl text-muted-foreground">La feuille de route de TiQuick pour la V2</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {evolutions.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-6 p-8 bg-card border border-border rounded-[2rem] hover:border-primary/50 transition-colors shadow-lg group"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {ev.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{ev.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {ev.desc}
              </p>
            </div>
          </motion.div>
        ))}
```

---

## Slide 25: Conclusion
* **Fichier** : [ConclusionSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ConclusionSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top header band */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white text-center py-4 flex-shrink-0"
      >
        <h2 className="text-2xl font-black tracking-wide">CONCLUSION</h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="border-2 rounded-3xl p-8 mb-8 max-w-3xl w-full text-center"
          style={{ borderColor: "#43A6B0", background: "rgba(67, 166, 176, 0.05)" }}
        >
          <p className="text-xl md:text-2xl font-black leading-snug" style={{ color: "#1A2B2C" }}>
            TiQuick démontre qu'il est possible de concevoir une solution logicielle de{" "}
            <span style={{ color: "#18636B" }}>qualité professionnelle</span> dans le cadre d'un mémoire
            académique, adaptée aux réalités d'un{" "}
            <span style={{ color: "#43A6B0" }}>marché local</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mb-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 bg-card border rounded-xl p-4 shadow-sm"
              style={{ borderColor: "#D4E8E9" }}
            >
              <p.icon size={20} className={p.color} />
              <p className="text-sm font-medium" style={{ color: "#1A2B2C" }}>{p.text}</p>
            </motion.div>
          ))}
```

---

## Slide 26: Thanks
* **Fichier** : [ThanksSlide.tsx](file:///D:/HypeTechnologies/TiQuick/devfestPpt/src/components/slides/ThanksSlide.tsx)

### Code JSX pertinent :
```tsx
return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top header */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white text-center py-4 flex-shrink-0"
      >
        <p className="text-sm font-semibold tracking-wider opacity-90">SOUTENANCE DE MÉMOIRE — 2025–2026</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-8"
        >
          <p className="text-7xl md:text-8xl font-black tracking-tighter mb-2" style={{ color: "#18636B" }}>
            Ti<span style={{ color: "#43A6B0" }}>Quick</span>
          </p>
          <p className="text-xl font-medium" style={{ color: "#4A6567" }}>Merci de votre attention</p>
        </motion.div>

        <div className="flex items-center gap-4 w-full max-w-xs mb-7">
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 rounded-2xl px-8 py-3 mb-8 text-white"
          style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)" }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg font-bold">Place aux questions</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-2 mb-8"
        >
          <p className="font-bold" style={{ color: "#1A2B2C" }}>Nouhou Soumana Ibrahim</p>
          <div className="flex items-center justify-center gap-2">
            <Globe className="w-4 h-4" style={{ color: "#18636B" }} />
            <p className="font-mono font-bold" style={{ color: "#18636B" }}>tiquick.com</p>
          </div>
          <p className="text-sm" style={{ color: "#4A6567" }}>nouhbrama@gmail.com</p>
        </motion.div>
      </div>

      {/* Bottom banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-between flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">H</span>
          </div>
          <span className="text-xs font-bold tracking-wider">HYPE AGENCY</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-wider">CAPITAL HUMAIN</span>
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

