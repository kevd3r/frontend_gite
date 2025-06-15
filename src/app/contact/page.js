import React from 'react'
import Head from 'next/head'
import {Mail,Phone, MapPin, Send} from 'lucide-react'
import Footer from '../../../components/Footer'

const contact = () => {
  return (
    // Conteneur principal avec le même style de fond que housing et wellness
    <div className="min-h-screen bg-[#0C1824] text-white pt-20 pb-12">
      <Head>
        <title>Contactez-nous - Votre Hébergement</title>
        <meta name="description" content="Contactez-nous pour toute demande d'information, réservation ou question sur nos services et soins bien-être." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Section Titre */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FECD31]">
          Contactez-nous
        </h1>

        {/* Section Informations de Contact */}
        <section className="bg-[#14273A] p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FECD31]">Informations de contact</h2>
          <div className="space-y-4 text-lg text-white">
            <p className="flex items-center">
              <Mail className="inline-block mr-3 text-2xl text-blue-400" /> Email : <a href="mailto:votre.email@example.com" className="hover:underline ml-2">votre.email@example.com</a>
            </p>
            <p className="flex items-center">
              <Phone className="inline-block mr-3 text-2xl text-blue-400" /> Téléphone : <a href="tel:+33688648195" className="hover:underline ml-2">06.88.64.81.95</a> (Christophe)
            </p>
            <p className="flex items-center">
              <MapPin className="inline-block mr-3 text-2xl text-blue-400" /> Adresse : Votre adresse ici, Ville, Code Postal
            </p>
            <p className="mt-6">
              N&apos;hésitez pas à nous contacter pour toute question, demande d&apos;information ou pour planifier votre séjour et vos soins. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </section>

        {/* Section Formulaire de Contact */}
        <section className="bg-[#14273A] p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#FECD31]">Envoyez-nous un message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Votre Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Entrez votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Votre Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-white mb-2">Votre Téléphone (optionnel)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white mb-2">Votre Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Tapez votre message ici..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FECD31] text-[#0C1824] font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center text-lg cursor-pointer"
            >
              Envoyer le message <Send className="ml-2 w-5 h-5" />
            </button>
          </form>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default contact