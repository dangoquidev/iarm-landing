import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Clock, Github, Linkedin, Twitter, Download, CheckCircle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: Feature[] = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Transcription en temps réel",
      description: "Conversion automatique de la parole en texte pour une capture instantanée des informations vitales"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Extraction de mots-clés",
      description: "Identification automatique des éléments critiques : lieu, type d'accident, blessures, urgence"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Interface optimisée",
      description: "Dashboard simple et lisible permettant aux ARM d'agir rapidement et efficacement"
    }
  ];

  const teamMembers: TeamMember[] = [
    { name: "Alexandre Pereira De Almeida", role: "Frontend Developer", avatar: "" },
    { name: "Yvain Ye", role: "AI Integration & Azure Support", avatar: "" },
    { name: "Joris Francin", role: "AI Lead & Azure Setup", avatar: "" },
    { name: "Clément Martin", role: "Backend Developer", avatar: "" }
  ];


  const LogoIcon: React.FC = () => (
    <div className="relative">
      <svg width="100" height="105" viewBox="0 0 516 536" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
        <path d="M233.992 87.4889C238.374 60.912 276.622 60.912 281.004 87.4888L300.469 205.556C302.129 215.623 310.027 223.514 320.103 225.172L438.278 244.62C464.879 248.997 464.879 287.211 438.278 291.588L320.103 311.036C310.027 312.694 302.129 320.585 300.469 330.652L281.004 448.719C276.622 475.296 238.374 475.296 233.992 448.719L214.527 330.652C212.867 320.585 204.969 312.694 194.893 311.036L76.7178 291.588C50.1167 287.211 50.1167 248.997 76.7178 244.62L194.893 225.172C204.969 223.514 212.867 215.623 214.527 205.556L233.992 87.4889Z" fill="#FF4D4D"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M212.145 22.1939C235.54 -7.39796 280.459 -7.39796 303.854 22.1939C318.478 40.6916 342.803 48.588 365.517 42.211C401.853 32.0096 438.192 58.3875 439.71 96.0664C440.659 119.619 455.692 140.291 477.819 148.471C513.218 161.556 527.098 204.237 506.159 235.611C493.069 255.223 493.069 280.775 506.159 300.387C527.099 331.761 513.218 374.443 477.819 387.528C455.692 395.708 440.659 416.38 439.71 439.933C438.192 477.611 401.853 503.99 365.517 493.789C342.803 487.412 318.478 495.308 303.854 513.806C280.459 543.398 235.54 543.398 212.145 513.806C197.521 495.308 173.198 487.412 150.484 493.789C114.147 503.991 77.8076 477.612 76.2901 439.933C75.3414 416.38 60.3082 395.708 38.1808 387.528C2.78212 374.443 -11.0985 331.761 9.84123 300.387C22.9304 280.776 22.9305 255.223 9.84123 235.611C-11.0985 204.237 2.78212 161.556 38.1808 148.471C60.3082 140.291 75.3415 119.619 76.2901 96.0664C77.8076 58.3874 114.147 32.0094 150.484 42.211C173.197 48.5878 197.521 40.6913 212.145 22.1939ZM301.731 35.5941C279.655 7.67178 237.27 7.67151 215.195 35.5941C201.396 53.0486 178.444 60.4995 157.011 54.4821C122.724 44.8561 88.4349 69.7465 87.0027 105.3C86.1076 127.525 71.9219 147.032 51.0423 154.75C17.6403 167.098 4.54316 207.371 24.3018 236.975C36.6525 255.481 36.6525 279.592 24.3018 298.097C4.54316 327.702 17.6403 367.975 51.0423 380.323C71.9219 388.041 86.1076 407.548 87.0027 429.773C88.4348 465.326 122.724 490.217 157.011 480.591C178.444 474.573 201.396 482.024 215.195 499.479C237.27 527.401 279.655 527.401 301.731 499.479C315.53 482.024 338.483 474.573 359.916 480.591C394.203 490.217 428.492 465.326 429.924 429.773C430.819 407.548 445.005 388.041 465.885 380.323C499.286 367.975 512.384 327.702 492.625 298.097C480.274 279.592 480.274 255.481 492.625 236.975C512.384 207.371 499.286 167.098 465.885 154.75C445.005 147.032 430.819 127.525 429.924 105.3C428.492 69.7466 394.203 44.8564 359.916 54.4821C338.483 60.4995 315.53 53.0486 301.731 35.5941Z" fill="#00C2FF"/>
      </svg>
    </div>
  );

  const scrollToNext = () => {
    const nextPosition = window.innerHeight;
    window.scrollTo({ top: nextPosition, behavior: 'smooth' });
  };

  return (
    <div className="">
      <section className="min-h-screen flex items-center justify-center bg-custom-gray relative overflow-hidden">
        <div className="text-center z-10 px-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-12">
            <LogoIcon />
            <h1 className="text-8xl md:text-9xl font-black text-gray-900 tracking-tight">
              IARM
            </h1>
          </div>
          <div className="mb-12 border-b-4 border-gray-300 inline-block pb-2">
            <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed">
              "Parce qu'en cas d'urgence,<br />
              <span className="custom-red">chaque seconde compte</span>"
            </p>
          </div>
          {scrollY < window.innerHeight && (
            <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
              <ChevronDown className="w-12 h-12 mx-auto text-gray-400" />
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-custom-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Une nouvelle approche pour les appels d'urgence
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-50 to-white p-10 rounded-3xl shadow-lg border-l-8 border-red-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Le constat</h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      Lorsqu'on appelle les urgences, chaque seconde compte. Mais trop souvent, l'attente est longue, 
                      les informations mal captées ou mal retransmises, et cela peut avoir des conséquences graves.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-10 rounded-3xl shadow-lg border-l-8 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre solution</h3>
                    <p className="text-gray-700 text-xl leading-relaxed">
                      IARM soutient les assistants de régulation médicale (ARM) en leur fournissant, 
                      dès le début de l'appel, les outils nécessaires pour une intervention rapide et efficace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-3xl text-custom-black shadow-2xl">
              <h3 className="text-4xl font-bold mb-10">Ce projet allie :</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span className="text-2xl font-medium">Santé publique</span>
                </div>
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span className="text-2xl font-medium">Innovation numérique</span>
                </div>
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span className="text-2xl font-medium">Utilité publique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-custom-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Fonctionnalités <span className="custom-blue">clés</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Des outils intelligents pour optimiser la prise en charge des appels d'urgence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-center">
                    <div className="mb-8 flex justify-center">
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-custom-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Aperçu de l'<span className="custom-blue">interface</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-16 aspect-video flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Interface principale</h3>
                <p className="text-gray-600 text-xl">Transcription en temps réel</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-16 aspect-video flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dashboard ARM</h3>
                <p className="text-gray-600 text-xl">Extraction de mots-clés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-custom-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Notre <span className="custom-blue">équipe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
  {teamMembers.map((member, index) => (
    <div key={index} className="text-center group h-full">
      <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-red-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex-grow">
          {member.name}
        </h3>
        <p className="text-gray-600 text-lg">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="py-24 bg-custom-gray">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-8 custom-black">
            Rejoignez-nous
          </h2>
          <p className="text-2xl mb-16 custom-black">
            Découvrez IARM et contribuez à révolutionner les urgences médicales
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <a href="https://github.com/Fylga/IARM/releases/download/v15/iarm-release.zip" className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Download className="w-10 h-10 mx-auto mb-4 custom-blue group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-lg">Télécharger</p>
            </a>
            
            <a href="https://github.com/Fylga/IARM" className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Github className="w-10 h-10 mx-auto mb-4 custom-blue group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-lg">GitHub</p>
            </a>
            
            <a href="https://www.linkedin.com/company/iarm-proj/" className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Linkedin className="w-10 h-10 mx-auto mb-4 custom-red group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-lg">LinkedIn</p>
            </a>
            
            <a href="https://x.com/iarm_fr" className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Twitter className="w-10 h-10 mx-auto mb-4 custom-red group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-lg">Twitter</p>
            </a>
          </div>

          <div className="bg-white bg-opacity-10 rounded-3xl p-12">
            <p className="text-3xl mb-6 flex items-center justify-center gap-4">
              <span className="font-bold">IARM est en développement actif</span>
            </p>
            <p className="text-xl custom-black">
              Suivez nos avancées et contribuez au projet qui peut sauver des vies
            </p>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-custom-gray">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <LogoIcon />
            <div>
              <p className="text-gray-700 mb-2 text-xl">
                © 2025 IARM - Intelligence Artificielle pour la Régulation Médicale
              </p>
              <p className="text-gray-500 text-lg">
                Un projet au service de la santé publique et de l'innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
