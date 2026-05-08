import { Project, Experience, SocialLink, PhilosophyRule, PhilosophySetLogic } from './types';
import boatHero from './assets1/boat/hero1.png';
import boatBottom from './assets1/boat/bottom.png';
import boatFront from './assets1/boat/front.png';
import boatShape from './assets1/boat/shape.png';
import boatDraft from './assets1/boat/draft.png';
import boatExplorations from './assets1/boat/explorations.png';

export const RESUME_URL = "https://www.dropbox.com/scl/fi/r8oparg6h84q7x3yytzsh/jayaram_hariharan-resume.pdf?rlkey=3c3uxr5smrp50httf6x7gc9f1&st=zx8a5fm7&dl=0";

export const PROJECTS: Project[] = [
  {
    id: 2,
    title: "Wolf",
    category: "Product Design",
    image: "/case-studies/wolf/iso34th.png",
    description: "Designed and campaigned a battlebot that won the tournament with a low, impact-resistant chassis and a between-round wedge upgrade.",
    details: {
      client: "Propeller Technologies",
      year: "2022",
      role: "Design Lead",
      techStack: ["CAD", "Sheet Metal Fabrication", "Mechatronics", "Combat Robotics"],
      challenge: "Propeller Technologies ran a multi-day combat robotics tournament: royal rumble to open, then one-on-one elimination bouts through to the championship. Last bot in the ring wins. I was design lead on a three-person team, and there were no kits or templates. Each team got a sheet of aluminium and had to turn flat stock into a fighting machine.\n\nThe constraints were hard. Single Aluminum 5052 sheet. Three brushless motors, ESP32, 3S LiPo, three ESCs - all needing to fit inside. No fabrication equipment on our end, so the chassis had to be designed for mark, cut, and bend in a single pass. Everything had to resolve from one flat pattern and still survive repeated impacts in the ring.",
      solution: "Three chassis directions were evaluated against what actually mattered: can it be folded from a flat pattern, will it win a pushing match, and will it survive side impacts. The wedge ramp had the right combat physics because it could get under an opponent and lift their drive wheels, but the compound-angle bends made it too risky for a single-pass fabrication method. The tall-wall box improved perimeter protection, but the added height raised the center of gravity and made lateral impacts more dangerous. The flat rectangular chassis was the one option where fabrication reality and match performance pointed the same way: low center of gravity, clean fold geometry, and short walls that doubled as structural flanges.\n\nFrom there the engineering started with the flat pattern. I laid out cut lines, bend radii, motor mounts, battery positions, and wiring channels directly into the aluminium so the entire chassis could be cut and bent in one pass. Every fold had to do structural work. Side walls stiffened the base plate, and tab-slot joints locked the rear panel without welding or unnecessary complexity.\n\nThe build stayed simple on purpose. Dual Brushless 2205 2300KV motors on 30A ESCs drove the rear wheels, with a spinning drum weapon (6061 aluminum, steel teeth, 3536 1400KV motor) mounted forward. An ESP32 with Flysky 2.4GHz wireless RC handled control, powered by an 11.1V 3S LiPo through a Matek PDB. The result was a form that could actually be built under the constraint, hold ground in combat, and leave enough clarity in the design to improve quickly when live match data showed what needed to change.",
      outcome: "Wolf won the full tournament: the opening royal rumble and five one-on-one elimination bouts. 6/6 rounds won, 100% win rate, and 0 structural failures across the event.\n\nThe turning point came after round one. The base chassis was stable and had torque, but the flat front face gave up too much in direct engagements. Between rounds I designed and fabricated a bolt-on wedge from remaining sheet offcuts, using the existing chassis without changing the base structure. That upgrade gave Wolf a reliable way to get under opponents, break traction, and control the exchange.\n\nPropeller Technologies awarded Wolf both Tournament Champion and Best Designer. It was also the only bot in the field to receive a mid-tournament mechanical upgrade and turn that change directly into match advantage.",
      research: [
        {
          title: "Chassis Selection",
          content: "Three geometries were evaluated against the real constraint set, not just theory. The wedge ramp offered the best first-contact mechanics because it could attack below an opponent's center of gravity, but the compound bends made it too fabrication-sensitive for a single-pass build. The tall-wall box improved perimeter protection, yet the higher mass distribution increased tip risk under lateral hits.\n\nThe low rectangular chassis won because it satisfied both sides of the problem. It kept the center of gravity low, used short walls as structural flanges, and resolved cleanly from one flat pattern. When the fabrication method and the match requirements point in the same direction, that is the right geometry."
        },
        {
          title: "Single-Pass Fabrication",
          content: "The chassis had to begin and end as one aluminium sheet. That forced the design into a true flat-pattern exercise: cut lines, bend radii, mounting points, and wiring paths all had to be decided before fabrication. There was no room for welded correction parts or a second fabrication loop.\n\nThe fold geometry carried the structure. Side walls stiffened the base, tab-slot features closed the rear panel, and the layout kept motors, batteries, and electronics low inside the envelope. The constraint was not separate from the design; it defined the design."
        },
        {
          title: "Mid-Tournament Upgrade",
          content: "Round one made the missing capability obvious. Wolf could push on torque, but without a low contact surface it had no clean way to get under another bot and break traction. That meant any similarly planted opponent could turn the fight into a pure friction contest.\n\nThe fix was a front wedge fabricated between rounds from sheet offcuts and bolted onto the existing chassis. No welding, no new tooling, no rebuild. It was a small change with a large mechanical effect: contact moved below the opponent's center of mass, their wheels unloaded, and control of the exchange shifted immediately."
        }
      ],
      process: [
        {
          title: "Flat Pattern Engineering",
          description: "The chassis started as a full flat layout drawn directly into the sheet. Cut lines, bend radii, motor mounts, battery positions, and wiring paths were resolved before fabrication so the whole bot could be made in one mark-cut-bend pass.\n\nThe key decision was using fold geometry as structure. Short side walls reinforced the base plate, and the pattern stayed simple enough to manufacture without losing alignment.",
          image: "/case-studies/wolf/top.png"
        },
        {
          title: "Chassis Assembly",
          description: "Once the sheet came back from cutting and bending, the build moved into mechanical integration. The folded chassis was assembled first, then the rear-drive motors, battery pack, receiver, motor driver, and wiring were installed low inside the body.\n\nEverything was arranged for stability and impact survival. No welding, no redundant structure, and no loose routing that could fail during a hit.",
          image: "/case-studies/wolf/internal_ghost.png"
        },
        {
          title: "Combat Optimization",
          description: "The opening rumble validated the chassis but exposed a contact problem: Wolf could push, yet it could not consistently get under opponents. That made the next decision clear.\n\nBetween rounds I designed a bolt-on wedge from leftover sheet material and mounted it to the existing chassis. It was a fast, constraint-aware upgrade that changed the way Wolf entered every fight and directly improved match control.",
          image: "/case-studies/wolf/closeup_wedge.png"
        }
      ],
      stats: [
        { value: "6/6", label: "Rounds Won" },
        { value: "100%", label: "Win Rate" },
        { value: "0", label: "Structural Failures" },
        { value: "2", label: "Awards Won" }
      ],
      gallery: [
        {
          image: "/case-studies/wolf/hero.png",
          caption: "Front view"
        },
        {
          image: "/case-studies/wolf/iso34th.png",
          caption: "Three-quarter view"
        },
        {
          image: "/case-studies/wolf/top.png",
          caption: "Top view"
        }
      ],
      cmf: [
        {
          name: "Aluminum 5052 3mm",
          code: "Single Sheet",
          finish: "Mark-Cut-Bend",
          hex: "#D1D5DB"
        },
        {
          name: "Brushless 2205",
          code: "2300KV",
          finish: "Dual Rear Drive",
          hex: "#6B7280"
        },
        {
          name: "Sheet Offcuts",
          code: "Combat Wedge",
          finish: "Bolt-On Upgrade",
          hex: "#9CA3AF"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Sealed RC Boat",
    category: "Waterproofing / FDM",
    image: boatHero,
    description: "Printed hull, rotating shaft, zero ingress. Three-layer sealing stack proved at full throttle.",
    details: {
      client: "Personal Build",
      year: "2024",
      role: "Mechanical Design / Prototyping",
      techStack: ["CAD", "FDM PETG", "Epoxy Seal", "Marine Grease"],
      challenge: "27 parts, $207 BOM. The shaft spins at ~3000 RPM through a printed hull below the waterline. PLA floods in under 60 seconds. PETG buys time but still leaks without post-treatment.\n\nTwo leak paths: the rotating shaft penetration and the printed hull walls.",
      solution: "Three-layer sealing stack. PETG as the substrate. Marine grease fills the shaft annulus — water must displace the entire column before reaching the rubber seal. Post-print epoxy closes layer-line porosity on all exterior surfaces.",
      outcome: "Zero ingress through repeated full-throttle runs. Five infill tiers across 12 printed parts — mass allocated by failure consequence, not convenience.",
      research: [
        {
          title: "Material",
          content: "PLA floods in <60s. PETG buys time for the sealing stack. Material is not the waterproofing — it is the substrate."
        },
        {
          title: "Sealing Hierarchy",
          content: "Grease column is the primary barrier. Rubber seal is the last resort. Most printed enclosures get this backwards."
        },
        {
          title: "Infill Tiers",
          content: "100% control arms, 70% shaft housing, 60% motor mount, 50% struts, 25% hull. Mass goes where failure risk is highest."
        }
      ],
      process: [
        {
          title: "Material & Porosity",
          description: "PETG selected over PLA. Post-print epoxy applied to all exterior surfaces before water exposure.",
          image: boatExplorations
        },
        {
          title: "Sealing Architecture",
          description: "Stern tube packed with marine grease. Rubber seal terminates the shaft penetration. Grease column is the primary barrier.",
          image: boatDraft
        },
        {
          title: "Infill Tiering",
          description: "Five tiers across 12 parts. Mass allocated by failure consequence — control arms at 100%, hull at 25%.",
          image: boatShape
        }
      ],
      stats: [
        { value: "0", label: "Ingress Events" },
        { value: "$207", label: "Total BOM" },
        { value: "3", label: "Sealing Layers" },
        { value: "5", label: "Infill Tiers" }
      ],
      gallery: [
        {
          image: boatHero,
          caption: "Hero view"
        },
        {
          image: boatBottom,
          caption: "Hull underside"
        },
        {
          image: boatFront,
          caption: "Front view"
        },
        {
          image: boatExplorations,
          caption: "Form explorations"
        }
      ],
      cmf: [
        {
          name: "PETG",
          code: "12 Printed Parts",
          finish: "Post-Print Epoxy Sealed",
          hex: "#93C5FD"
        },
        {
          name: "Stern Tube Seal",
          code: "Rubber / Silicone",
          finish: "Marine Grease Packed",
          hex: "#374151"
        },
        {
          name: "Infill Tiers",
          code: "5 Levels",
          finish: "25% -> 100% by Risk",
          hex: "#6B7280"
        }
      ]
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Afterconcepts",
    role: "Product Design Engineer",
    period: "2024 - Present",
    description: "Mechanical design across healthcare, consumer, mobility, and industrial products, from concept work through CAD and prototypes.",
    details: [
      "Internal layouts, part design, assemblies, and mechanisms that have to work in a real build.",
      "Prototype changes, vendor feedback, and revisions that make the next version clearer."
    ]
  },
  {
    id: 2,
    company: "IIT Madras",
    role: "Solar Vehicle Engineering",
    period: "2023",
    description: "Structural design for a solar vehicle where CAD had to survive fabrication.",
    details: [
      "Mounting, part placement, and build sequence had to be resolved before parts were made."
    ]
  },
  {
    id: 3,
    company: "Design Internships",
    role: "CAD & Prototyping",
    period: "2022",
    description: "Aerospace and automotive internships focused on CAD, detailing, prototype builds, and drawing work.",
    details: [
      "That pushed me toward cleaner drawings, tighter revision control, and design work other engineers can build from."
    ]
  }
];

export const PHILOSOPHY_RULES: PhilosophyRule[] = [
  {
    title: "extra features are suspicious.",
    description: "If something does not make the product easier to use, easier to build, or easier to maintain, it probably should not be there."
  },
  {
    title: "smart only helps when it helps.",
    description: "Technology is useful when it removes real effort. If it adds setup, confusion, or failure points without doing real work, it is not an upgrade."
  },
  {
    title: "automate the repeatable parts.",
    description: "Repeated work should become a system. That saves time for the parts that still need judgment."
  },
  {
    title: "learn fast. correct fast.",
    description: "I would rather find the weak point early, admit it, and fix it than protect a bad decision for too long."
  }
];

export const PHILOSOPHY_SET_LOGIC: PhilosophySetLogic = {
  intro: "These four lines work as a system:",
  points: [
    "Cut what does not earn its place.",
    "Reject fake smartness.",
    "Systemize repeated work.",
    "Stay honest about gaps and improve quickly."
  ],
  conclusion: "They are short enough to scan, but specific enough to sound like Jay rather than generic portfolio copy."
};

export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jayaramh" },
  { name: "See full CV", url: RESUME_URL }
];
