import React from 'react';
import { ChevronDown, Shield, Clock, Users, Github, Linkedin, Twitter, Download } from 'lucide-react';

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#EBEDF0] text-[#1C1C1C] font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <svg width="120" height="125" viewBox="0 0 516 536" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M233.992 87.4889C238.374 60.912 276.622 60.912 281.004 87.4888L300.469 205.556C302.129 215.623 310.027 223.514 320.103 225.172L438.278 244.62C464.879 248.997 464.879 287.211 438.278 291.588L320.103 311.036C310.027 312.694 302.129 320.585 300.469 330.652L281.004 448.719C276.622 475.296 238.374 475.296 233.992 448.719L214.527 330.652C212.867 320.585 204.969 312.694 194.893 311.036L76.7178 291.588C50.1167 287.211 50.1167 248.997 76.7178 244.62L194.893 225.172C204.969 223.514 212.867 215.623 214.527 205.556L233.992 87.4889Z" fill="#FF4D4D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M212.145 22.1939C235.54 -7.39796 280.459 -7.39796 303.854 22.1939C318.478 40.6916 342.803 48.588 365.517 42.211C401.853 32.0096 438.192 58.3875 439.71 96.0664C440.659 119.619 455.692 140.291 477.819 148.471C513.218 161.556 527.098 204.237 506.159 235.611C493.069 255.223 493.069 280.775 506.159 300.387C527.099 331.761 513.218 374.443 477.819 387.528C455.692 395.708 440.659 416.38 439.71 439.933C438.192 477.611 401.853 503.99 365.517 493.789C342.803 487.412 318.478 495.308 303.854 513.806C280.459 543.398 235.54 543.398 212.145 513.806C197.521 495.308 173.198 487.412 150.484 493.789C114.147 503.991 77.8076 477.612 76.2901 439.933C75.3414 416.38 60.3082 395.708 38.1808 387.528C2.78212 374.443 -11.0985 331.761 9.84123 300.387C22.9304 280.776 22.9305 255.223 9.84123 235.611C-11.0985 204.237 2.78212 161.556 38.1808 148.471C60.3082 140.291 75.3415 119.619 76.2901 96.0664C77.8076 58.3874 114.147 32.0094 150.484 42.211C173.197 48.5878 197.521 40.6913 212.145 22.1939Z" fill="#00C2FF"/>
            </svg>
          </div>
          
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            IARM
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-[#00C2FF] font-medium">
            Intelligence Artificielle pour la Régulation Médicale
          </p>
          
          {/* Slogan */}
          <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed">
            Parce qu'en cas d'urgence, <span className="text-[#FF4D4D] font-medium">chaque seconde compte</span>
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-[#00C2FF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir le projet
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#00C2FF]" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Le Problème
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Lorsqu'on appelle les urgences, chaque seconde compte. Mais trop souvent, l'attente est longue, 
              les informations mal captées ou mal retransmises, et cela peut avoir des conséquences graves.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-[#FF4D4D] font-medium">
              🚨 Ce constat simple nous a menés à développer une solution innovante.
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Notre Solution
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Avec IARM, notre objectif est de soutenir les assistants de régulation médicale (ARM) 
              en leur fournissant, dès le début de l'appel :
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#00C2FF] bg-opacity-10 rounded-full p-6 mb-4 inline-block">
                  <Shield className="text-[#00C2FF]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transcription automatique</h3>
                <p className="text-gray-600">de ce que dit l'appelant en temps réel</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#FF4D4D] bg-opacity-10 rounded-full p-6 mb-4 inline-block">
                  <Clock className="text-[#FF4D4D]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Extraction des mots-clés</h3>
                <p className="text-gray-600">lieu, type d'accident, blessures essentielles</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#00C2FF] bg-opacity-10 rounded-full p-6 mb-4 inline-block">
                  <Users className="text-[#00C2FF]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interface simple</h3>
                <p className="text-gray-600">pour que l'ARM puisse agir vite et efficacement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 bg-[#D2D6DA] bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Aperçu de l'Application
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#D2D6DA] rounded-lg h-64 flex items-center justify-center mb-4">
                <p className="text-gray-600 text-lg">Interface de transcription</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transcription en temps réel</h3>
              <p className="text-gray-600">L'interface principale permet de visualiser la transcription en direct des appels d'urgence.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#D2D6DA] rounded-lg h-64 flex items-center justify-center mb-4">
                <p className="text-gray-600 text-lg">Extraction des données</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse intelligente</h3>
              <p className="text-gray-600">Les informations critiques sont automatiquement extraites et mises en évidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Fonctionnalités Clés
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#00C2FF] mb-4">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Temps réel</h3>
              <p className="text-gray-600">Transcription et analyse instantanées des appels entrants</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#FF4D4D] mb-4">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fiabilité</h3>
              <p className="text-gray-600">Système robuste conçu pour les situations critiques</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#00C2FF] mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Assistance ARM</h3>
              <p className="text-gray-600">Outil de support pour les professionnels de la régulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#D2D6DA] bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Notre Équipe
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Ce projet allie <span className="text-[#FF4D4D] font-medium">santé</span>, 
              <span className="text-[#00C2FF] font-medium"> numérique</span> et 
              <span className="text-[#FF4D4D] font-medium"> utilité publique</span>.
            </p>
            
            <p className="text-xl font-medium text-[#00C2FF]">
              Et ce n'est que le début ! 🚀
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-[#D2D6DA] rounded-lg p-8 w-64 h-32 flex items-center justify-center">
                <p className="text-gray-600">Photo de l'équipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Links Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Nous Contacter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Suivez-nous</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-[#00C2FF] text-white p-4 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-[#00C2FF] text-white p-4 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Code Source</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-[#1C1C1C] text-white p-4 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#00C2FF] to-[#FF4D4D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Prêt à découvrir IARM ?</h3>
            <p className="text-lg mb-6">Téléchargez l'application et rejoignez la révolution de la régulation médicale</p>
            <a href="#" className="bg-white text-[#1C1C1C] px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center space-x-2">
              <Download size={20} />
              <span>Télécharger IARM</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#1C1C1C] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <svg width="60" height="62" viewBox="0 0 516 536" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M233.992 87.4889C238.374 60.912 276.622 60.912 281.004 87.4888L300.469 205.556C302.129 215.623 310.027 223.514 320.103 225.172L438.278 244.62C464.879 248.997 464.879 287.211 438.278 291.588L320.103 311.036C310.027 312.694 302.129 320.585 300.469 330.652L281.004 448.719C276.622 475.296 238.374 475.296 233.992 448.719L214.527 330.652C212.867 320.585 204.969 312.694 194.893 311.036L76.7178 291.588C50.1167 287.211 50.1167 248.997 76.7178 244.62L194.893 225.172C204.969 223.514 212.867 215.623 214.527 205.556L233.992 87.4889Z" fill="#FF4D4D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M212.145 22.1939C235.54 -7.39796 280.459 -7.39796 303.854 22.1939C318.478 40.6916 342.803 48.588 365.517 42.211C401.853 32.0096 438.192 58.3875 439.71 96.0664C440.659 119.619 455.692 140.291 477.819 148.471C513.218 161.556 527.098 204.237 506.159 235.611C493.069 255.223 493.069 280.775 506.159 300.387C527.099 331.761 513.218 374.443 477.819 387.528C455.692 395.708 440.659 416.38 439.71 439.933C438.192 477.611 401.853 503.99 365.517 493.789C342.803 487.412 318.478 495.308 303.854 513.806C280.459 543.398 235.54 543.398 212.145 513.806C197.521 495.308 173.198 487.412 150.484 493.789C114.147 503.991 77.8076 477.612 76.2901 439.933C75.3414 416.38 60.3082 395.708 38.1808 387.528C2.78212 374.443 -11.0985 331.761 9.84123 300.387C22.9304 280.776 22.9305 255.223 9.84123 235.611C-11.0985 204.237 2.78212 161.556 38.1808 148.471C60.3082 140.291 75.3415 119.619 76.2901 96.0664C77.8076 58.3874 114.147 32.0094 150.484 42.211C173.197 48.5878 197.521 40.6913 212.145 22.1939Z" fill="#00C2FF"/>
            </svg>
          </div>
          <p className="text-gray-400">
            © 2024 IARM - Intelligence Artificielle pour la Régulation Médicale
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Parce qu'en cas d'urgence, chaque seconde compte
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
