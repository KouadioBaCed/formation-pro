import { Shield, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6">
    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{title}</h3>
    <div className="text-sm sm:text-base text-dark-600 dark:text-dark-300 leading-relaxed space-y-2">
      {children}
    </div>
  </section>
);

const PrivacyAndTermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-50 to-white dark:from-dark-950 dark:to-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">CGU & Politique de confidentialit&eacute;</h1>
          </div>
          <p className="text-primary-100 text-sm sm:text-base">Plateforme BIFA EXAM</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* CGU */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <FileText className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
              Conditions G&eacute;n&eacute;rales d&apos;Utilisation (CGU)
            </h2>
          </div>

          <div className="bg-white dark:bg-dark-800/50 rounded-2xl border border-dark-100 dark:border-dark-700/50 p-6 sm:p-8 space-y-0">
            <Section title="Article 1 – Objet">
              <p>
                Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales d&apos;Utilisation (CGU) r&eacute;gissent l&apos;acc&egrave;s et l&apos;utilisation
                de la plateforme BIFA Exam, propri&eacute;t&eacute; exclusive de BIFA Institute, d&eacute;di&eacute;e &agrave; la pr&eacute;paration,
                &agrave; l&apos;entra&icirc;nement et &agrave; l&apos;&eacute;valuation des candidats aux certifications professionnelles.
              </p>
              <p>
                Toute inscription et toute utilisation de la plateforme impliquent l&apos;acceptation pleine,
                enti&egrave;re et sans r&eacute;serve des pr&eacute;sentes CGU.
              </p>
            </Section>

            <Section title="Article 2 – Nature des services">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Des contenus p&eacute;dagogiques</li>
                <li>Des tests d&apos;&eacute;valuation</li>
                <li>Des examens blancs</li>
                <li>Des outils de pr&eacute;paration aux certifications professionnelles</li>
              </ul>
              <p>
                Tout le contenu diffus&eacute; dans le cadre du BIFA Exam rel&egrave;ve exclusivement de la
                responsabilit&eacute; de BIFA Institute et n&apos;engage en aucune mani&egrave;re les institutions
                internationales de r&eacute;f&eacute;rence.
              </p>
            </Section>

            <Section title="Article 3 – Acceptation obligatoire des CGU">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Cr&eacute;ation d&apos;un compte personnel</li>
                <li>Acceptation expresse des pr&eacute;sentes CGU</li>
                <li>Acceptation de la Politique de confidentialit&eacute;</li>
              </ul>
              <p>Sans acceptation explicite, aucun acc&egrave;s ne sera accord&eacute;.</p>
            </Section>

            <Section title="Article 4 – Compte utilisateur et responsabilit&eacute;">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Fournir des informations exactes</li>
                <li>Conserver ses identifiants strictement confidentiels</li>
                <li>Ne jamais partager son compte avec un tiers</li>
              </ul>
              <p>
                Toute activit&eacute; r&eacute;alis&eacute;e depuis un compte est r&eacute;put&eacute;e effectu&eacute;e par son titulaire, sans exception.
              </p>
            </Section>

            <Section title="Article 5 – Interdiction ABSOLUE">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl p-4">
                <p className="font-semibold text-red-700 dark:text-red-400 mb-2">IL EST STRICTEMENT INTERDIT :</p>
                <ul className="list-disc list-inside space-y-1 ml-1 text-red-600 dark:text-red-300">
                  <li>R&eacute;aliser des captures d&apos;&eacute;cran</li>
                  <li>Effectuer des enregistrements vid&eacute;o ou audio</li>
                  <li>Enregistrer l&apos;&eacute;cran ou le contenu de la plateforme</li>
                  <li>Copier, t&eacute;l&eacute;charger, reproduire ou diffuser les contenus</li>
                  <li>Partager les questions, r&eacute;ponses, supports ou r&eacute;sultats</li>
                  <li>Transmettre ses acc&egrave;s &agrave; un tiers</li>
                </ul>
                <p className="mt-2 font-medium text-red-700 dark:text-red-400">
                  Toute violation constitue une faute grave et entra&icirc;nera des sanctions imm&eacute;diates.
                </p>
              </div>
            </Section>

            <Section title="Article 6 – Sanctions">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Suspension ou suppression d&eacute;finitive du compte</li>
                <li>Blocage d&apos;acc&egrave;s futur</li>
                <li>Annulation des r&eacute;sultats</li>
                <li>Action juridique si n&eacute;cessaire</li>
              </ul>
              <p>Aucun remboursement ne sera accept&eacute;.</p>
            </Section>

            <Section title="Article 7 – R&eacute;sultats et absence de garantie">
              <p>
                Les r&eacute;sultats sont fournis &agrave; titre indicatif et ne garantissent en aucun cas la r&eacute;ussite
                &agrave; un examen officiel.
              </p>
            </Section>

            <Section title="Article 8 – Propri&eacute;t&eacute; intellectuelle">
              <p>
                L&apos;ensemble des contenus (questions, bases de donn&eacute;es, textes, m&eacute;thodes, interfaces, outils)
                est la propri&eacute;t&eacute; exclusive de BIFA Institute.
              </p>
            </Section>

            <Section title="Article 9 – Disponibilit&eacute; du service">
              <p>
                BIFA Institute met en &oelig;uvre les moyens n&eacute;cessaires pour assurer l&apos;accessibilit&eacute; de la plateforme.
              </p>
            </Section>

            <Section title="Article 10 – Modification des CGU">
              <p>
                BIFA Institute se r&eacute;serve le droit de modifier les pr&eacute;sentes CGU &agrave; tout moment.
                L&apos;utilisateur devra accepter les nouvelles CGU pour continuer &agrave; utiliser la plateforme.
              </p>
            </Section>

            <Section title="Article 11 – Droit applicable">
              <p>
                Les pr&eacute;sentes CGU sont r&eacute;gies par le droit en vigueur en C&ocirc;te d&apos;Ivoire.
                Tout litige rel&egrave;ve des juridictions comp&eacute;tentes.
              </p>
            </Section>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-dark-200 dark:border-dark-700 mb-12" />

        {/* Politique de confidentialit&eacute; */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <Shield className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
              Politique de confidentialit&eacute;
            </h2>
          </div>

          <div className="bg-white dark:bg-dark-800/50 rounded-2xl border border-dark-100 dark:border-dark-700/50 p-6 sm:p-8 space-y-0">
            <Section title="Article 1 – Donn&eacute;es collect&eacute;es">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Nom et pr&eacute;nom</li>
                <li>Adresse e-mail</li>
                <li>Num&eacute;ro de t&eacute;l&eacute;phone</li>
                <li>Donn&eacute;es de connexion</li>
                <li>R&eacute;sultats aux tests</li>
              </ul>
            </Section>

            <Section title="Article 2 – Finalit&eacute;">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>Gestion des comptes</li>
                <li>Acc&egrave;s s&eacute;curis&eacute;</li>
                <li>Suivi p&eacute;dagogique</li>
                <li>Am&eacute;lioration des services</li>
              </ul>
            </Section>

            <Section title="Article 3 – Confidentialit&eacute;">
              <p>
                BIFA Institute s&apos;engage &agrave; ne pas vendre ni c&eacute;der les donn&eacute;es personnelles &agrave; des tiers non autoris&eacute;s.
              </p>
            </Section>

            <Section title="Article 4 – S&eacute;curit&eacute;">
              <p>
                Des mesures techniques et organisationnelles prot&egrave;gent les donn&eacute;es contre tout acc&egrave;s non autoris&eacute;,
                perte, alt&eacute;ration ou divulgation.
              </p>
            </Section>

            <Section title="Article 5 – Droits">
              <p>
                L&apos;utilisateur dispose d&apos;un droit d&apos;acc&egrave;s, de rectification et de suppression.
              </p>
              <p>
                Contact : <strong className="text-dark-900 dark:text-white">contact@bifainstitute.com</strong> – <strong className="text-dark-900 dark:text-white">+225 07 08 91 64 64</strong>
              </p>
            </Section>

            <Section title="Article 6 – Conservation">
              <p>
                Les donn&eacute;es sont conserv&eacute;es pendant la dur&eacute;e d&apos;activit&eacute; du compte puis supprim&eacute;es conform&eacute;ment aux obligations l&eacute;gales.
              </p>
            </Section>
          </div>
        </div>

        {/* Back button */}
        
      </div>
    </div>
  );
};

export default PrivacyAndTermsPage;
