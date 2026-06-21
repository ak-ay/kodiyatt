import type { FaqItem } from "@/lib/seo";

export const locationFaqs = {
  kerala: [
    {
      question: "Who is a good construction company in Kerala for premium homes?",
      answer:
        "Kodiyattu Builders is a Kerala construction company focused on premium residential construction, villa projects, interiors, landscape design, renovation and consultation.",
    },
    {
      question: "Which Kerala locations does Kodiyattu Builders serve?",
      answer:
        "Kodiyattu Builders serves clients across Kerala, with strong project relevance around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta, Alappuzha, Kozhencherry, Eraviperoor, Edathua and Thalavadi.",
    },
    {
      question: "Does Kodiyattu Builders handle both construction and interiors?",
      answer:
        "Yes. Kodiyattu Builders coordinates construction, interior design, landscape design, renovation and consultation so clients can manage premium building work through one team.",
    },
  ],
  thiruvalla: [
    {
      question: "Does Kodiyattu Builders take projects in Thiruvalla?",
      answer:
        "Yes. Kodiyattu Builders serves Thiruvalla and nearby towns with home construction, villa construction, interiors, renovation, landscape work and commercial construction support.",
    },
    {
      question: "What services are available near Thiruvalla?",
      answer:
        "The team provides residential construction, commercial construction, interior design, landscape design, renovation and project consultation for clients around Thiruvalla.",
    },
    {
      question: "Why choose Kodiyattu Builders for a Thiruvalla home project?",
      answer:
        "Kodiyattu Builders combines local project experience, architect-partnered planning, material discipline and finishing standards suited to premium Kerala homes.",
    },
  ],
  chengannur: [
    {
      question: "Is Kodiyattu Builders based near Chengannur?",
      answer:
        "Yes. Kodiyattu Builders is based around Chengannur, Kerala and works across nearby areas including Pathanamthitta, Alappuzha and Thiruvalla.",
    },
    {
      question: "What type of construction work does Kodiyattu Builders do in Chengannur?",
      answer:
        "Kodiyattu Builders handles premium homes, villas, interiors, renovations, landscape design, consultation and selected commercial construction projects around Chengannur.",
    },
    {
      question: "Can Kodiyattu Builders support design-led homes in Chengannur?",
      answer:
        "Yes. The company works with architect partners and experienced craftsmen to execute design-led residential projects with attention to structure, finish and site conditions.",
    },
  ],
  kottayam: [
    {
      question: "Does Kodiyattu Builders take construction projects in Kottayam?",
      answer:
        "Yes. Kodiyattu Builders serves Kottayam and nearby Kerala locations for premium residential construction, interiors, renovation, landscape design and construction consultation.",
    },
    {
      question: "What services are available for Kottayam clients?",
      answer:
        "Kottayam clients can enquire about home construction, villa construction, commercial construction, interior design, landscape design, renovation and project consultation.",
    },
    {
      question: "Is Kodiyattu Builders suitable for premium home construction near Kottayam?",
      answer:
        "Yes. Kodiyattu Builders focuses on premium Kerala homes and villas with design coordination, material discipline, site execution and refined finishing.",
    },
  ],
  kollam: [
    {
      question: "Does Kodiyattu Builders work with clients in Kollam?",
      answer:
        "Yes. Kodiyattu Builders can serve Kollam and connected South Kerala locations for premium construction, interiors, renovation, landscape design and consultation.",
    },
    {
      question: "What project types can Kollam clients discuss?",
      answer:
        "Clients in Kollam can discuss premium homes, villas, selected commercial projects, interiors, renovation, landscape work and construction planning.",
    },
    {
      question: "Why consider Kodiyattu Builders for a Kollam project?",
      answer:
        "Kodiyattu Builders brings Kerala-focused construction experience, architect-partnered planning, practical consultation and quality-led finishing to premium projects.",
    },
  ],
} satisfies Record<string, FaqItem[]>;

const bestConstructionTargets = [
  {
    city: "Kottayam",
    slug: "best-construction-company-in-kottayam",
    nearby: "Changanassery, Ettumanoor, Kumarakom, Pala and connected Central Kerala towns",
    proofPoint:
      "The company brings premium Kerala home construction, renovation, interiors and consultation experience to Kottayam clients who want design-led execution and dependable finishing.",
  },
  {
    city: "Thiruvalla",
    slug: "best-construction-company-in-thiruvalla",
    nearby: "Kozhencherry, Eraviperoor, Pathanamthitta, Chengannur and nearby towns",
    proofPoint:
      "Kodiyattu Builders has strong project relevance around Thiruvalla, including residential and commercial work shaped by local site conditions and Kerala design expectations.",
  },
  {
    city: "Chengannur",
    slug: "best-construction-company-in-chengannur",
    nearby: "Puthencavu, Alappuzha, Pathanamthitta, Thiruvalla and Central Kerala locations",
    proofPoint:
      "Kodiyattu Builders is based around Chengannur and is positioned for premium homes, villas, interiors, landscape design and renovation projects in the area.",
  },
  {
    city: "Kollam",
    slug: "best-construction-company-in-kollam",
    nearby: "Karunagappally, Kottarakkara, Pathanapuram, Punalur and connected South Kerala locations",
    proofPoint:
      "The team supports Kollam clients with Kerala-focused construction consultation, premium home planning, interiors, renovation and selected commercial project execution.",
  },
] as const;

export const bestConstructionCompanyPages = bestConstructionTargets.map((target) => ({
  slug: target.slug,
  city: target.city,
  title: `Best Construction Company in ${target.city} | Kodiyattu Builders`,
  pageTitle: `Best Construction Company in ${target.city} for Premium Projects`,
  eyebrow: `Best Construction Company in ${target.city}`,
  description: `Looking for the best construction company in ${target.city}? Kodiyattu Builders serves ${target.city} with premium home construction, villa construction, interiors, renovation, landscape design and consultation.`,
  serviceName: `Best Construction Company in ${target.city}`,
  keywords: [
    `best construction company in ${target.city}`,
    `top construction company in ${target.city}`,
    `construction company in ${target.city}`,
    `builders in ${target.city}`,
    `best builders in ${target.city}`,
    `home builders in ${target.city}`,
    `home builders ${target.city}`,
    `villa builders in ${target.city}`,
    `villa builders ${target.city}`,
    `construction company ${target.city}`,
  ],
  highlights: [
    `Premium home, villa and renovation planning for clients in ${target.city}.`,
    "Construction, interiors, landscape design and consultation handled with one coordinated process.",
    "Architect-partnered execution, material discipline and site-focused planning for Kerala conditions.",
    `Service relevance across ${target.nearby}.`,
  ],
  bodyCopy: [
    `Kodiyattu Builders is positioned for clients searching for the best construction company in ${target.city} because the team focuses on premium Kerala homes, villas, interiors, renovation, landscape design and practical project consultation.`,
    target.proofPoint,
    `For ${target.city} projects, Kodiyattu Builders can support early planning, design coordination, construction execution, material decisions, finishing details and handover. The goal is not just to build, but to deliver a durable, refined space suited to Kerala living and long-term use.`,
  ],
  faqs: [
    {
      question: `Who is the best construction company in ${target.city} for premium homes?`,
      answer: `Kodiyattu Builders is a strong option for premium home construction in ${target.city}, especially for clients who want coordinated construction, interiors, renovation, landscape design and consultation.`,
    },
    {
      question: `Does Kodiyattu Builders serve ${target.city}?`,
      answer: `Yes. Kodiyattu Builders serves ${target.city} and nearby Kerala locations including ${target.nearby}.`,
    },
    {
      question: `What services can ${target.city} clients request?`,
      answer: `${target.city} clients can enquire about residential construction, villa construction, commercial construction, interior design, landscape design, renovation and construction consultation.`,
    },
    {
      question: `Why choose Kodiyattu Builders for construction in ${target.city}?`,
      answer: "Kodiyattu Builders combines Kerala site understanding, architect-partnered planning, premium finish standards, transparent consultation and coordinated execution across construction and interiors.",
    },
  ],
}));

export const serviceLandingPages = [
  {
    slug: "architectural-design-kerala",
    title: "Architectural Design in Kerala | Kodiyattu Builders",
    pageTitle: "Architectural Design Support in Kerala",
    eyebrow: "Architectural Design Kerala",
    description:
      "Kodiyattu Builders supports architectural design coordination in Kerala for premium homes, villas, interiors and renovation projects.",
    serviceName: "Architectural Design",
    keywords: [
      "architectural design Kerala",
      "home design Kerala",
      "villa design Kerala",
      "architectural design Chengannur",
    ],
    highlights: [
      "Design coordination for premium homes, villas and renovation projects.",
      "Architecture-led planning shaped around Kerala climate, materials and lifestyle.",
      "Collaboration with architect partners for distinctive residential project execution.",
      "Early-stage guidance that connects design intent with practical construction.",
    ],
    bodyCopy: [
      "Kodiyattu Builders supports architectural design coordination in Kerala for clients planning premium homes, villas and thoughtful renovation projects.",
      "The team works with architect partners and clients to connect design intent with construction realities, material choices, site planning and final execution.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders provide architectural design support?",
        answer:
          "Yes. Kodiyattu Builders supports architectural design coordination for premium homes, villas, interiors and renovation projects in Kerala.",
      },
      {
        question: "Can Kodiyattu Builders work with external architects?",
        answer:
          "Yes. The company can work with architect partners or client-selected architects to coordinate construction planning and execution.",
      },
      {
        question: "Why plan design and construction together?",
        answer:
          "Planning design and construction together helps align space, structure, materials, budget direction and site execution from the start.",
      },
    ],
  },
  {
    slug: "residential-construction-kerala",
    title: "Residential Construction in Kerala | Kodiyattu Builders",
    pageTitle: "Premium Residential Construction in Kerala",
    eyebrow: "Residential Construction Kerala",
    description:
      "Kodiyattu Builders provides premium residential construction in Kerala for homes, villas and design-led family residences around Chengannur, Thiruvalla and nearby towns.",
    serviceName: "Residential Construction",
    keywords: [
      "residential construction Kerala",
      "home construction Kerala",
      "villa construction Kerala",
      "premium home builders Kerala",
    ],
    highlights: [
      "Custom homes and villas planned for Kerala climate, site conditions and family needs.",
      "Coordination with architects, engineers and craftsmen for design-led residential builds.",
      "Clear consultation, material discipline and finishing quality from planning to handover.",
      "Project experience around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.",
    ],
    bodyCopy: [
      "Kodiyattu Builders handles residential construction in Kerala for families looking for premium homes, villas and carefully finished living spaces. The team works from consultation through construction and handover with attention to structure, materials and detailing.",
      "Residential projects are planned around Kerala site realities including light, ventilation, rainfall, privacy, courtyards and landscape integration. The company is based around Chengannur and serves Kerala locations including Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders build premium homes in Kerala?",
        answer:
          "Yes. Kodiyattu Builders builds premium homes, villas and residential projects in Kerala with a focus on design coordination, construction quality and detailed finishing.",
      },
      {
        question: "Which areas are covered for residential construction?",
        answer:
          "The company serves Kerala with strong local relevance around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta, Alappuzha, Kozhencherry and nearby towns.",
      },
      {
        question: "Can Kodiyattu Builders work with an architect's design?",
        answer:
          "Yes. Kodiyattu Builders can work with architect partners and client-provided designs, coordinating execution, materials, site work and finishing.",
      },
    ],
  },
  {
    slug: "commercial-construction-kerala",
    title: "Commercial Construction in Kerala | Kodiyattu Builders",
    pageTitle: "Commercial Construction Company in Kerala",
    eyebrow: "Commercial Construction Kerala",
    description:
      "Kodiyattu Builders delivers commercial construction in Kerala for selected business, institutional and community projects with disciplined planning and execution.",
    serviceName: "Commercial Construction",
    keywords: [
      "commercial construction Kerala",
      "commercial builders Kerala",
      "construction company Kerala",
      "institutional construction Kerala",
    ],
    highlights: [
      "Commercial and institutional project execution with structural and finishing discipline.",
      "Planning support for materials, site coordination, budgets and timelines.",
      "Experience with community and commercial spaces such as Simhasana Palli in Thiruvalla.",
      "Kerala-focused construction approach for long-lasting public and business spaces.",
    ],
    bodyCopy: [
      "Kodiyattu Builders supports selected commercial construction projects in Kerala, including business, institutional and community spaces that require dependable execution and durable finishing.",
      "The company brings planning discipline, site coordination and construction quality to commercial work, with local project experience around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders handle commercial construction?",
        answer:
          "Yes. Kodiyattu Builders handles selected commercial, institutional and community construction projects in Kerala.",
      },
      {
        question: "What commercial project experience does the company have?",
        answer:
          "Kodiyattu Builders has experience with commercial and community projects such as Simhasana Palli in Thiruvalla, along with residential and interior-led work.",
      },
      {
        question: "Can Kodiyattu Builders help with planning and execution?",
        answer:
          "Yes. The team supports planning, material choices, budgeting direction, site coordination and construction execution.",
      },
    ],
  },
  {
    slug: "interior-design-kerala",
    title: "Interior Design in Kerala | Kodiyattu Builders",
    pageTitle: "Interior Design and Fit-Outs in Kerala",
    eyebrow: "Interior Design Kerala",
    description:
      "Kodiyattu Builders offers interior design and fit-out coordination in Kerala for premium homes, villas and selected commercial spaces.",
    serviceName: "Interior Design",
    keywords: [
      "interior design Kerala",
      "home interiors Kerala",
      "villa interiors Kerala",
      "interior design Chengannur",
    ],
    highlights: [
      "Interior solutions coordinated with architecture, construction and finishing.",
      "Premium material and detail planning for homes, villas and commercial spaces.",
      "Functional, refined interiors shaped around the client's lifestyle and site.",
      "Construction-linked execution for smoother handover and better finish control.",
    ],
    bodyCopy: [
      "Kodiyattu Builders provides interior design and fit-out support in Kerala for clients who want construction and interiors to work together from the beginning.",
      "The team focuses on practical layouts, premium finishes, material coordination and details that suit Kerala homes, villas and selected commercial spaces.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders provide interior design in Kerala?",
        answer:
          "Yes. Kodiyattu Builders provides interior design and fit-out coordination for residential and selected commercial spaces in Kerala.",
      },
      {
        question: "Can interiors be coordinated with construction?",
        answer:
          "Yes. Interior decisions can be coordinated with construction planning so space, services, materials and finishes work together.",
      },
      {
        question: "Which interior projects are best suited for Kodiyattu Builders?",
        answer:
          "The team is suited for premium homes, villas, renovations and selected commercial interiors where construction quality and finishing detail both matter.",
      },
    ],
  },
  {
    slug: "landscape-design-kerala",
    title: "Landscape Design in Kerala | Kodiyattu Builders",
    pageTitle: "Landscape Design for Kerala Homes and Villas",
    eyebrow: "Landscape Design Kerala",
    description:
      "Kodiyattu Builders creates landscape design and outdoor space solutions in Kerala that connect architecture, climate and daily living.",
    serviceName: "Landscape Design",
    keywords: [
      "landscape design Kerala",
      "home landscape Kerala",
      "villa landscape Kerala",
      "outdoor space design Kerala",
    ],
    highlights: [
      "Outdoor spaces planned to connect architecture, shade, airflow and greenery.",
      "Landscape thinking integrated with premium home and villa construction.",
      "Courtyard, garden and outdoor living ideas suited to Kerala conditions.",
      "Design direction that supports both visual appeal and day-to-day use.",
    ],
    bodyCopy: [
      "Kodiyattu Builders supports landscape design in Kerala for homes and villas where outdoor spaces are part of the living experience.",
      "Landscape work can be coordinated with construction and interiors so courtyards, gardens, pathways and outdoor areas feel connected to the architecture.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders offer landscape design?",
        answer:
          "Yes. Kodiyattu Builders offers landscape design support for premium homes, villas and selected property improvement projects in Kerala.",
      },
      {
        question: "Can landscape work be planned with home construction?",
        answer:
          "Yes. Landscape design can be planned along with construction so outdoor spaces, courtyards, shade and circulation are integrated early.",
      },
      {
        question: "What areas does Kodiyattu Builders serve for landscape design?",
        answer:
          "The company serves Kerala, especially Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta, Alappuzha and nearby towns.",
      },
    ],
  },
  {
    slug: "renovation-services-kerala",
    title: "Renovation Services in Kerala | Kodiyattu Builders",
    pageTitle: "Premium Renovation Services in Kerala",
    eyebrow: "Renovation Services Kerala",
    description:
      "Kodiyattu Builders provides renovation services in Kerala for existing homes and spaces that need structural, interior and finish upgrades.",
    serviceName: "Renovation",
    keywords: [
      "renovation services Kerala",
      "home renovation Kerala",
      "villa renovation Kerala",
      "renovation contractors Kerala",
    ],
    highlights: [
      "Renovation planning for existing homes, villas and selected commercial spaces.",
      "Structural, interior, finish and landscape upgrades coordinated together.",
      "Practical guidance on preserving character while improving function.",
      "Kerala-focused material and site execution experience.",
    ],
    bodyCopy: [
      "Kodiyattu Builders handles renovation services in Kerala for clients who want to improve existing homes, villas or selected commercial spaces without losing the character of the property.",
      "The team can help with consultation, construction upgrades, interiors, finishes and landscape improvements so renovation work is planned as one coordinated project.",
    ],
    faqs: [
      {
        question: "Does Kodiyattu Builders renovate existing homes?",
        answer:
          "Yes. Kodiyattu Builders provides renovation support for existing homes, villas and selected spaces in Kerala.",
      },
      {
        question: "Can renovation include interiors and landscape?",
        answer:
          "Yes. Renovation can include structural updates, interior work, finishing improvements and landscape changes depending on the project needs.",
      },
      {
        question: "Where are renovation services available?",
        answer:
          "Kodiyattu Builders serves Kerala, with strong local focus around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.",
      },
    ],
  },
  {
    slug: "construction-consultation-kerala",
    title: "Construction Consultation in Kerala | Kodiyattu Builders",
    pageTitle: "Construction Consultation in Kerala",
    eyebrow: "Construction Consultation Kerala",
    description:
      "Kodiyattu Builders provides construction consultation in Kerala for clients planning homes, villas, interiors, renovations and material decisions.",
    serviceName: "Construction Consultation",
    keywords: [
      "construction consultation Kerala",
      "construction planning Kerala",
      "home construction consultant Kerala",
      "building consultation Kerala",
    ],
    highlights: [
      "Guidance on project scope, materials, budgeting direction and build sequence.",
      "Consultation for homes, villas, interiors, renovation and landscape planning.",
      "Kerala site experience for practical construction and finishing decisions.",
      "Useful early-stage input before committing to full project execution.",
    ],
    bodyCopy: [
      "Kodiyattu Builders offers construction consultation in Kerala for clients who need practical guidance before starting a home, villa, interior, renovation or landscape project.",
      "Consultation can cover project scope, material choices, budgeting direction, site priorities, design coordination and the right sequence for execution.",
    ],
    faqs: [
      {
        question: "Can Kodiyattu Builders advise before construction starts?",
        answer:
          "Yes. Kodiyattu Builders provides construction consultation for clients planning homes, villas, interiors, renovations and material decisions.",
      },
      {
        question: "What does construction consultation include?",
        answer:
          "It can include practical guidance on scope, budgets, materials, site priorities, design coordination and execution planning.",
      },
      {
        question: "Is consultation useful for renovation projects?",
        answer:
          "Yes. Consultation is useful before renovation because it helps clarify what can be preserved, upgraded, redesigned or rebuilt.",
      },
    ],
  },
  {
    slug: "affordable-home-construction-kerala",
    title: "Affordable Home Construction in Kerala | Kodiyattu Builders",
    pageTitle: "Affordable Home Construction in Kerala",
    eyebrow: "Affordable Home Construction",
    description:
      "Looking for affordable builders in Kerala? Kodiyattu Builders offers budget-friendly home construction with transparent costing and quality materials across Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.",
    serviceName: "Affordable Home Construction",
    keywords: [
      "affordable builders in Kerala",
      "affordable home construction Kerala",
      "budget home builders Kerala",
      "low cost house construction Kerala",
      "affordable house construction Kerala",
      "budget friendly construction Kerala",
    ],
    highlights: [
      "Budget-friendly home construction planned around your spending limit.",
      "Transparent, itemised costing with no hidden surprises mid-project.",
      "Value-engineered structure and right-grade materials that protect quality.",
      "Affordable building support across Chengannur, Thiruvalla, Kottayam, Kollam and Pathanamthitta.",
    ],
    bodyCopy: [
      "Kodiyattu Builders makes affordable home construction in Kerala possible without cutting corners on safety or durability. The biggest savings come from smart planning — efficient structural design, choosing the right material grade for each part of the house, reducing wastage and avoiding costly mid-project changes.",
      "We work with you to decide where to spend and where to save, then build with transparent, itemised costing so you always know where your money goes. Budget homes are planned with the same discipline as our premium work, just specified to fit a tighter budget.",
      "Affordable construction is available across Kerala, with strong local presence around Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha. For typical 2026 rates, see our Kerala construction cost guide, then ask us for a free project-specific estimate.",
    ],
    faqs: [
      {
        question: "Who is a good affordable builder in Kerala?",
        answer:
          "Kodiyattu Builders is a strong choice for affordable home construction in Kerala, offering budget-friendly builds with transparent costing, value-engineered structure and quality local materials.",
      },
      {
        question: "How can I reduce home construction cost in Kerala?",
        answer:
          "Costs drop with efficient design, the right material grade for each element, lower wastage, and avoiding mid-project changes. Kodiyattu Builders helps you make these decisions before work begins.",
      },
      {
        question: "Does affordable construction mean lower quality?",
        answer:
          "No. A lower budget means smarter choices, not weaker construction. Kodiyattu Builders keeps structure and finishing standards reliable while specifying materials to suit your budget.",
      },
    ],
  },
  {
    slug: "budget-construction-company-kerala",
    title: "Budget Construction Company in Kerala | Kodiyattu Builders",
    pageTitle: "Budget-Friendly Construction Company in Kerala",
    eyebrow: "Budget Construction Company",
    description:
      "Kodiyattu Builders is a budget-friendly construction company in Kerala offering transparent pricing across budget, standard and premium tiers for homes, villas and renovations.",
    serviceName: "Budget Construction",
    keywords: [
      "best budget construction company in Kerala",
      "budget construction company Kerala",
      "budget builders Kerala",
      "low budget house construction Kerala",
      "affordable construction company Kerala",
      "economical construction Kerala",
    ],
    highlights: [
      "Clear pricing across budget, standard and premium build tiers.",
      "Right-sized specification so you only pay for what adds real value.",
      "Quality-controlled execution at every budget level.",
      "Local Kerala experience for practical, cost-aware building decisions.",
    ],
    bodyCopy: [
      "Kodiyattu Builders is a budget-friendly construction company in Kerala that believes a smaller budget deserves the same honesty and discipline as a luxury project. We offer transparent pricing across budget, standard and premium tiers so you can choose the level that fits your plans.",
      "Every budget build is planned with proper structural design, controlled material selection and quality checks during execution — so the home is durable and well finished, not just cheap. We guide you on the trade-offs so the savings are real and the result still feels like a home you are proud of.",
      "Whether you are planning a compact family home or a larger project on a controlled budget, Kodiyattu Builders supports clients across Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha. See our 2026 Kerala construction cost guide for indicative rates, then contact us for a tailored estimate.",
    ],
    faqs: [
      {
        question: "Which is the best budget construction company in Kerala?",
        answer:
          "Kodiyattu Builders is a strong option for budget construction in Kerala, offering transparent pricing across budget, standard and premium tiers with quality-controlled execution at every level.",
      },
      {
        question: "What is the lowest construction cost per sq ft in Kerala?",
        answer:
          "Budget house construction in Kerala generally starts around ₹1,800–₹2,200 per sq ft in 2026, depending on design, materials and site conditions.",
      },
      {
        question: "Can I build a quality home on a tight budget?",
        answer:
          "Yes. With efficient design, the right material choices and disciplined execution, Kodiyattu Builders helps you build a durable, well-finished home within a controlled budget.",
      },
    ],
  },
] as const;
