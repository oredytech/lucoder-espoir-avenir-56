import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Droplets, Wheat, TreePine, Building, Shield, Handshake } from "lucide-react";

export const Actions = () => {
  const actions = [
    {
      icon: Handshake,
      title: "Paix et cohésion sociale",
      description: "Projet de Gouvernance foncière, cohésion sociale, réinsertion socioéconomique et prévention des violences basées sur le genre (VSBG) dans la zone prioritaire autour de Kitshanga, sur financement du Fonds de Cohérence pour la Stabilisation, à travers UNFPA.",
      details: [
        "Distribution des AGR collectifs aux membres de communauté « autour de Kitshanga »",
        "Site de Kikuku : une moto pour 4 personnes, un moulin pour 4 personnes, 800 litres d'huile de palme pour 4 personnes et 200 Kgs de poissons salés pour 4 personnes",
        "Site de Katsiru-Luve-Nyanzale : 1 groupe de 11 personnes reçoit 2 motos et 1 moulin. 1 groupe de 6 personnes bénéficie de la vente des unités et la messagerie monétaire (transfert d'argent)",
        "105 bénéficiaires, tous ont reçu une formation sur la gestion pratique des AGR avant de recevoir leur aide"
      ],
      images: []
    },
    {
      icon: Heart,
      title: "Santé communautaire et bien-être",
      description: "Dans l'objectif d'améliorer la qualité de soins de santé dans la zone de santé de Kirotshe en général, et dans l'aire de santé Afia-Sake, LUCODER a construit et équipé trois grandes salles d'hospitalisation, un laboratoire moderne et un bloc sanitaire, alimenté en énergie électrique par système photovoltaïque, au sein du centre de santé Afia-Sake, dans la cité de Sake, grâce au financement du Fonds de Contrepartie Congo-Japon.",
      details: [
        "Construction de trois grandes salles d'hospitalisation",
        "Laboratoire moderne équipé",
        "Bloc sanitaire avec système photovoltaïque",
        "Dotation de matériels médicaux modernes : microscope binoculaire olympus, glucomètres, paravents, chariots, potences, bassins de lit, urinoirs hommes, lampes de consultation",
        "30 lits métalliques avec roulettes, 30 matelas avec similicuir, 30 couvertures en laine, 120 pièces de draps de lit"
      ],
      images: [
        "/lovable-uploads/Santé_communautaire_et_bien-etre_1.jpg",
        "/lovable-uploads/Santé_communautaire_et_bien-etre_2.jpg"
      ]
    },
    {
      icon: Users,
      title: "Formation et Réinsertion socio-économique",
      description: "Réhabilitation de la route axe Luve-JTN avec une main d'œuvre locale recrutés dans les jeunes démobilisés des groupes armés (dans le Works for cash). Ces jeunes ont été initiés ensuite à la gestion des AGR (Activités Génératrices des Revenus) avant de recevoir chacun son argent.",
      details: [
        "Recrutement de jeunes démobilisés des groupes armés",
        "Formation en gestion des AGR (Activités Génératrices des Revenus)",
        "Programme 'Works for cash' pour la réinsertion",
        "Réhabilitation d'infrastructures routières"
      ],
      images: [
        "/lovable-uploads/Formation_et_reinsertion_socio-economique_1.jpg",
        "/lovable-uploads/Formation_et_reinsertion_socio-economique_2.jpg"
      ]
    },
    {
      icon: Wheat,
      title: "Développement rural et sécurité alimentaire",
      description: "LUCODER a travaillé avec NRC dans un projet d'appui à la sécurité alimentaire et aux moyens de subsistance des déplacés vivants dans les camps CCCM et communautés hôtes environnant Masisi-Centre.",
      details: [
        "Implantation d'un moulin hydraulique à LUSHEBERE",
        "Renforcement des capacités de 50 bénéficiaires ciblés parmi les jeunes déplacés de la localité de Kalinga",
        "Projet d'aquaculture en cages flottantes sur la baie de Mubambiro pour améliorer l'alimentation de la population",
        "Activités maraichères : choux, chou-fleur, oignons, poireaux, pastèques",
        "Activités vivrières : maïs, arachide, manioc"
      ],
      images: [
        "/lovable-uploads/Developpement_rural_et_securité_alimentaire_1.png",
        "/lovable-uploads/Developpement_rural_et_securité_alimentaire_2.png",
        "/lovable-uploads/Developpement_rural_et_securité_alimentaire_3.png",
        "/lovable-uploads/Developpement_rural_et_securité_alimentaire_4.png",
        "/lovable-uploads/Projet_d_acquaculture_en_cages_flottants_sur_la_baie_de_Mubambiro_1.jpg",
        "/lovable-uploads/Projet_d_acquaculture_en_cages_flottants_sur_la_baie_de_Mubambiro_2.jpg"
      ]
    },
    {
      icon: Droplets,
      title: "Eau, hygiène et assainissement",
      description: "Projet d'Appui à la promotion de l'eau, hygiène et assainissement pour atténuer les maladies infectieuses et pour lutter contre la COVID-19, en faveur des sinistrés du volcan Nyiragongo.",
      details: [
        "Promotion de l'accès à l'eau potable",
        "Sensibilisation aux bonnes pratiques d'hygiène",
        "Actions de lutte contre la COVID-19",
        "Appui aux sinistrés du volcan Nyiragongo"
      ],
      images: [
        "/lovable-uploads/eau_hygene_et_assainissement_3.jpg",
        "/lovable-uploads/eau_hygene_et_assainissement_4.jpg"
      ]
    },
    {
      icon: Building,
      title: "Infrastructures sociales de base",
      description: "Projet de construction de six salles de classe, un bureau, une salle des réunions et deux blocs de latrines à l'Ecole Primaire MUSOMI dans la ville de Butembo sur financement du Fonds Social de la République Démocratique du Congo.",
      details: [
        "Construction de six salles de classe",
        "Un bureau administratif",
        "Une salle des réunions",
        "Deux blocs de latrines",
        "Financement du Fonds Social de la RDC"
      ],
      images: [
        "/lovable-uploads/Infrastructures_sociales_de_base_1.jpg",
        "/lovable-uploads/Infrastructures_sociales_de_base_2.jpg"
      ]
    },
    {
      icon: TreePine,
      title: "Climat et environnement",
      description: "LUCODER en collaboration avec la commune de Goma, a exécuté un projet de reboisement et assainissement de certaines artères routières de la ville de Goma. Ce projet permet de lutter contre le changement climatique et l'insalubrité de la ville.",
      details: [
        "Collaboration avec la commune de Goma",
        "Reboisement des artères routières",
        "Assainissement urbain",
        "Lutte contre le changement climatique",
        "Amélioration de la salubrité urbaine"
      ],
      images: [
        "/lovable-uploads/Climat_et_environnement_1.jpg",
        "/lovable-uploads/Climat_et_environnement_2.jpg"
      ]
    },
    {
      icon: Shield,
      title: "Protection contre les violences basées sur le genre",
      description: "Activité de sensibilisation sur les Violences Basées sur les genres (VBG)/Protection contre les exploitations et abus sexuelles (PSEA) au camp des déplacés DGDA – Août 2024.",
      details: [
        "Sensibilisation sur les VBG",
        "Protection contre les exploitations et abus sexuels (PSEA)",
        "Intervention dans les camps de déplacés",
        "Actions de prévention et protection"
      ],
      images: [
        "/lovable-uploads/Activité_de_sensibilisation_1.JPG",
        "/lovable-uploads/Activité_de_sensibilisation_2.JPG",
        "/lovable-uploads/Activité_de_sensibilisation_3.JPG",
        "/lovable-uploads/Activité_de_sensibilisation_4.JPG"
      ]
    }
  ];

  return (
    <section id="actions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos actions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Découvrez les projets concrets que LUCODER mène sur le terrain pour transformer les vies et construire un avenir meilleur pour les communautés du Nord-Kivu.
          </p>
        </div>

        <div className="space-y-12">
          {actions.map((action, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <action.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-700">{action.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">{action.description}</p>
                
                {action.details.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Réalisations clés :</h4>
                    <ul className="space-y-2">
                      {action.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {action.images.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Images du projet :</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {action.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="relative overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={image} 
                            alt={`${action.title} - Image ${imageIndex + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};