import { Project, Experience, SocialLink, PhilosophyRule, PhilosophySetLogic } from './types';
import flightstickCloseup from './assets1/flightstick/closeup.png';
import flightstickWireframe from './assets1/flightstick/wireframe.png';
import flightstickExploded from './assets1/flightstick/exploded.png';
import flightstickElectronics from './assets1/flightstick/electronics.png';
import flightstickFull from './assets1/flightstick/full.png';
import flightstickLastSection1 from './assets1/flightstick/last_section (1).png';
import flightstickLastSection2 from './assets1/flightstick/last_section (2).png';
import boatHero from './assets1/boat/hero1.png';
import boatBottom from './assets1/boat/bottom.png';
import boatFront from './assets1/boat/front.png';
import boatShape from './assets1/boat/shape.png';
import boatDraft from './assets1/boat/draft.png';
import boatExplorations from './assets1/boat/explorations.png';

export const RESUME_URL = "https://www.dropbox.com/scl/fi/23hl8s4mtt27p26u92ahh/jayaram_hariharan-resume.pdf?rlkey=krxna677qsjagszmjh7nc4owp&st=l2zyh8v0&dl=0";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Flightstick Twist Axis",
    category: "Mechatronics",
    image: flightstickCloseup,
    heroImages: [
      flightstickCloseup,
      flightstickFull,
      flightstickLastSection1
    ],
    description: "Added yaw to a premium flight grip so the client could keep the grip they liked without pedals or a full replacement.",
    details: {
      client: "Private Client",
      year: "2023",
      role: "Product Design, Mechatronics",
      techStack: ["CAD", "3D Scanning", "Electromechanical Integration", "CNC Machining"],
      challenge: "The client already had the Thrustmaster Viper grip they wanted to keep. What it lacked was twist yaw, which pushed them toward pedals, awkward remaps, or a much more expensive hardware swap.\n\nThe job was to add the missing axis without turning the project into a full replacement.",
      solution: "I treated the retrofit as an add-on, not a rebuild. First came a scan-led fit map of the grip interior, then a base-side twist package that handled rotation, sensing, and routing without forcing a new grip body.\n\nThe added axis stayed on its own electrical path, so the original controls and the new yaw input did not need to share the same signal chain.",
      outcome: "The finished build added analog yaw while letting the client keep the grip they already preferred.\n\nA $15 emulator validated the full electrical interface before $300+ production hardware was involved.\n\nThe result was a narrower, more practical upgrade path than pedals or a full hardware swap.",
      research: [
        {
          title: "Keep the Grip",
          content: "The useful problem was not replacing a premium grip. It was keeping the grip the client already liked and only adding the missing yaw input."
        },
        {
          title: "Add Only the Missing Axis",
          content: "The project got smaller once the architecture got clearer: reuse a proven twist mechanism, add contactless sensing, and keep the new axis on its own interface."
        },
        {
          title: "Validate the Risk Early",
          content: "The high-risk part was the electrical interface, not the bench prototype. A low-cost emulator made it possible to prove wiring and axis behavior before touching expensive production hardware."
        }
      ],
      process: [
        {
          title: "Reverse Engineering",
          description: "The grip was scanned first because internal clearance around the shaft, connectors, and PCB was tighter than expected. That fit map defined where a twist axis could exist at all.",
          image: flightstickWireframe
        },
        {
          title: "Mechanical Layout",
          description: "A proven twist module handled the rotation feel. The custom work was the collar, interface parts, and tolerances that made the added axis fit cleanly at the base.",
          image: flightstickExploded
        },
        {
          title: "System Integration",
          description: "The added axis stayed on its own sensing and USB path. That kept the retrofit focused while the original control path stayed separate.",
          image: flightstickElectronics
        }
      ],
      gallery: [
        {
          image: flightstickFull,
          caption: "Final assembly"
        },
        {
          image: flightstickLastSection1,
          caption: "Integration detail"
        },
        {
          image: flightstickLastSection2,
          caption: "Section detail"
        }
      ],
      stats: [
        { value: "$15", label: "Validation Rig" },
        { value: "1", label: "Added Yaw Axis" },
        { value: "0", label: "Pedals Required" },
        { value: "3", label: "Integration Stages" }
      ],
      cmf: [
        {
          name: "Aluminum 6061-T6",
          code: "Base-Side Machined Parts",
          finish: "Matte Black Type II",
          hex: "#111827"
        },
        {
          name: "Hall Sensor + Magnet",
          code: "Contactless Yaw Readout",
          finish: "Low-Wear Sensing",
          hex: "#B45309"
        },
        {
          name: "Printed Interface Parts",
          code: "Prototype Fit Checks",
          finish: "Bench Validation",
          hex: "#374151"
        }
      ]
    }
  },
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
