import { Project, Experience, SocialLink, PhilosophyRule, PhilosophySetLogic } from './types';

export const RESUME_URL = "https://www.dropbox.com/scl/fi/muxe6aezb1wq0nbekr3x6/Jayaram_H_Resume.pdf?rlkey=uk5ksee5omgrpgcvzmy36ywd3&st=74qy6y7j&dl=0";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Precision Joystick Grip Upgrade",
    category: "Mechatronics",
    image: "/case-studies/viper/home-card-latest.jpg",
    heroImages: [
      "/case-studies/viper/home-card-latest.jpg",
      "/pics/final-front.jpg",
      "/pics/final-quarter.jpg"
    ],
    description: "Upgraded a premium joystick grip with an added twist feature, preserving the original ergonomic shape while expanding control.",
    details: {
      client: "Private Client",
      year: "2023",
      role: "Product Design, Mechatronics, CAD, Firmware",
      techStack: ["CAD", "C++", "Arduino", "Reverse Engineering", "3D Printing"],
      challenge: "A flight sim enthusiast had found their perfect grip - a Thrustmaster F-16C Viper HOTAS, a premium 1:1 scale metal replica. The ergonomics were exactly what they wanted.\n\nBut it was missing one critical feature: twist yaw. The grip could handle pitch and roll, but for yaw control, they'd need separate rudder pedals - an expensive and space-consuming addition.\n\nThe Challenge: Build a custom, 1:1 scale operational replica that integrates a high-precision twist axis without altering the external ergonomics.",
      solution: "I analyzed what went wrong with previous attempts and identified the core mistake: trying to shrink the wrong thing. Instead of cramming existing electronics into a smaller space, I needed to rethink the architecture entirely.\n\nThe key insight: the grip's upper body (the distinct head, the triggers) was fixed and non-negotiable. But the mounting interface was the opportunity for innovation.\n\nInstead of trying to fit someone else's electronics, I asked: what if I only add what's actually needed?",
      outcome: "Precision: 10-bit Hall-Effect sensing with custom auto-calibration and deadzone filtering.\n\nErgonomics: 100% geometric match to original grip, but with added 6th degree of freedom (twist).\n\nCost Efficiency: $15 COTS mechatronics BOM replaced $10k+ potential ground-up fabrication costs.\n\nValidation: Built a $15 'Ghost' emulator to replace $300+ hardware; 100% functional validation.\n\nInnovation: First-ever 1:1 scale Viper grip with integrated high-precision twist yaw functionality.\n\nDeployment: Delivered a field-tested, bespoke unit with zero post-delivery maintenance issues.",
      research: [
        {
          title: "The Split-Brain Architecture",
          content: "I designed a dual-interface architecture - a dedicated twist module with its own sensor and controller, running alongside the original button electronics. Two systems, one grip.\n\nNew Signal Path:\nHall-Effect twist axis -> SparkFun Qwiic Pro Micro -> separate USB port (independent HID joystick)\n\nLegacy Signal Path:\nOriginal Thrustmaster 5-pin DIN connector -> Warthog base (19+ buttons)"
        },
        {
          title: "Precision Sensing",
          content: "The new twist axis required its own independent signal path that wouldn't interfere with the complex button matrix.\n\nHardware:\nMicrocontroller: SparkFun Qwiic Pro Micro (ATmega32U4-based)\nSensor: Analog Hall-Effect sensor mounted on the twist mechanism, tracking magnet rotation\n\nFirmware (C++/Arduino):\nAuto-Calibration Routine: Samples 100 readings during initialization to dynamically set min/max sensor values\nDeadzone Elimination: Custom logic to eliminate center deadzone\nAnti-Jitter Smoothing: Filters mechanical noise from twist motion for clean input"
        },
        {
          title: "Building a Ghost",
          content: "A major bottleneck occurred: the Warthog Base - needed for testing all 19+ buttons - was unavailable in India and cost-prohibitive to ship for a single test.\n\nI needed to validate that every button worked before shipping the final unit. But I couldn't get the hardware.\n\nThe Solution:\nI built a base emulator using a second SparkFun Qwiic Pro Micro with MMJoy2/FreeJoy open-source joystick firmware. This transformed the microcontroller into a Warthog Base emulator - eliminating the need for the $300+ physical base.\n\nResult: Successfully validated 100% of button and twist functionality before shipping, without ever having the original mounting base. Testing infrastructure cost: ~$15 vs. $300+."
        }
      ],
      moodboard: {
        keywords: ["Military", "Precision", "Stealth", "Ergonomic"],
        images: [
          "/pics/closeup.png",
          "/pics/clay_model.png",
          "/pics/exploded.png"
        ]
      },
      process: [
        {
          title: "What Didn't Work",
          description: "Before I took over, there was already a failed attempt. The previous approach tried to force entire VPC internal electronics into the Thrustmaster body.\n\nThe result was an oversized, bulky base that compromised the premium feel. The assembly was so complex it was nearly impossible to test or maintain. The project was placed on indefinite hold.\n\nThree constraints were non-negotiable:\n- The 1:1 scale had to be maintained at the grip level\n- Button compatibility with the Warthog base was mandatory\n- The twist yaw had to be high-precision (Hall Effect sensing)",
          image: "/pics/wireframe_drawings (1).png"
        },
        {
          title: "Mechanical Hybridization",
          description: "Instead of trying to shrink the VPC electronics, I modularized the hardware.\n\nI harvested the mechanical twist control from a VPC unit and engineered a custom base extension in CAD. The lower section of the Thrustmaster aluminum body was modified to accommodate the twist module while keeping the upper ergonomics identical to the original.\n\nInternal supports were added for the controller boards within the joystick rather than increasing the overall part girth - maintaining a sleek profile.",
          image: "/pics/wireframe_drawings (2).png"
        },
        {
          title: "Manufacturing",
          description: "Prototype Phase:\nMaterial: PLA (Polylactic Acid)\nProcess: FDM 3D printing for rapid iteration\nPurpose: Form validation, fit testing, and mechanical integration proof-of-concept\n\nFinal Production:\nBase Housing Material: Aluminum 6061-T6\nSurface Finish: Anodized Black (Type II anodizing) matches premium aesthetic\nFastening: Thread inserts (brass or stainless steel) for metal-to-plastic connections to ensure durability under high-torque twist operation",
          image: "/pics/electronics.png"
        }
      ],
      gallery: [
        {
          image: "/pics/Hero (1).png",
          caption: "Final front view showing 1:1 scale"
        },
        {
          image: "/pics/Hero (2).png",
          caption: "3/4 view"
        },
        {
          image: "/pics/USB (1).png",
          caption: "Internal component layout"
        }
      ],
      stats: [
        { value: "10-bit", label: "Precision Hall-Effect" },
        { value: "40%", label: "Volume Reduction" },
        { value: "$15", label: "COTS BOM Cost" },
        { value: "100%", label: "Ghost Validated" }
      ],
      cmf: [
        {
          name: "Aluminum 6061-T6",
          code: "Anodized Tooling",
          finish: "Matte Black Type II",
          hex: "#111827"
        },
        {
          name: "Brass/Steel",
          code: "Heat-Set Inserts",
          finish: "Thread Locks",
          hex: "#B45309"
        },
        {
          name: "Twist Module",
          code: "Custom Hybrid",
          finish: "Hidden Integration",
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
    title: "Sealed Hydrofoil Test Boat",
    category: "Waterproofing / FDM",
    image: "/case-studies/hydrofoil/hero.png",
    description: "Built a hydrofoil test boat to prove a waterproofing method for rotating shafts, printed hulls, and dynamic loads below the waterline.",
    details: {
      client: "Blueprint Community",
      year: "2024",
      role: "Mechanical Design / Prototyping",
      techStack: ["CAD", "FDM PETG", "Waterproofing", "Sealing Design", "PETG Post-Process"],
      challenge: "27 parts - 19 mechanical, 8 electrical - total BOM $207.60. The propeller shaft has to rotate at ~3000 RPM while seated in a watertight hull below the waterline. Standard rubber seals compress out of spec under sustained dynamic load. FDM-printed hulls have layer-line porosity invisible to the naked eye - but water finds it.\n\nCommunity data is unambiguous: PLA hulls flood in under 60 seconds. PETG fares better but reaches 75% water ingress after 2 hours at 5 bars without post-treatment. The material is not the waterproofing - it buys time for the sealing architecture to work. If the architecture is wrong, the material does not matter.",
      solution: "Waterproofing is not a single decision - it is a hierarchy. Material selection determines the failure mode. Sealing architecture determines when water reaches the hull. Porosity closure determines whether the hull itself is the failure.\n\nMaterial first: PETG over PLA - failure-mode selection, not preference. Still requires post-print epoxy treatment to close layer-line porosity.\n\nSealing hierarchy: marine grease fills the annular gap around the shaft first. Water must displace the entire grease column before it reaches the rubber stern tube seal. The seal is the last resort, not the plan.\n\nPorosity closure: post-print epoxy treatment applied to all exterior surfaces before any water exposure. Not optional for any printed part in a wet environment.",
      outcome: "Shaft seal held through repeated full-throttle runs with zero ingress. The infill strategy across the 12 printed parts reflects the failure consequence map: 100% on control arms (servo linkage, smallest cross-section, highest failure risk), 70% on shaft housing, 60% on motor mount, 50% on struts, 25% on the hull shell (weight-critical, post-print treatment closes the porosity).\n\nThe methodology proved at the hardest version of the problem: rotating shaft, dynamic load, below waterline. The same three decisions - material, sealing hierarchy, porosity closure - transfer directly to any printed enclosure in a wet environment.",
      research: [
        {
          title: "Material Selection Under Constraint",
          content: "PLA was ruled out first. Community data is consistent: PLA hulls take on water in under 60 seconds because the material is hydrophilic and layer-line porosity cannot be reliably sealed. PETG provides better moisture resistance and tighter inter-layer adhesion, but even PETG hulls have been documented at 75% water ingress after 2 hours at 5 bars without post-treatment. The material is not the waterproofing - it buys time for the sealing architecture to work."
        },
        {
          title: "Sealing Hierarchy",
          content: "The propeller shaft penetrates the hull at a point that sees both rotational load and forward water pressure at around 3000 RPM. A rubber/silicone stern tube seal packed with marine grease creates a grease-buffer layer the water must displace before it reaches the seal face. Most printed enclosures get this backwards - they treat the seal as the primary barrier and the geometry as secondary. Here, the grease column is the primary barrier and the seal is the last resort."
        },
        {
          title: "Infill as Structural Engineering",
          content: "12 of the 19 mechanical parts are 3D-printed PETG. Infill percentages are structural decisions, not defaults: control arms at 100% (servo linkage, smallest cross-section, highest failure consequence), shaft housing at 70%, motor mount at 60%, struts at 50%, hull at 25%. Five tiers across 12 parts. Mass goes where failure risk is highest, and post-print treatment closes the surface rather than relying on dense infill everywhere."
        }
      ],
      process: [
        {
          title: "Material and Porosity Closure",
          description: "PETG selected over PLA based on failure-mode analysis: PLA hulls flood in under 60 seconds in community stress tests. PETG reduces immediate ingress risk but still requires post-print epoxy treatment to close layer-line porosity. Treatment applied to all exterior surfaces before any water exposure - not optional.",
          image: "/case-studies/hydrofoil/hero.png"
        },
        {
          title: "Sealing Architecture",
          description: "Stern tube packed with marine grease, terminated with a rubber/silicone seal at the hull penetration. Grease fills the annular gap around the shaft as the primary barrier - water must displace the entire grease column before reaching the seal face. Shaft housing printed at 70% infill - highest-stress printed part - to handle combined bearing load and water pressure at the penetration point.",
          image: "/case-studies/hydrofoil/hero.png"
        },
        {
          title: "Infill Tiering by Failure Consequence",
          description: "Five infill tiers across 12 printed parts: 100% for control arms (servo linkage, smallest cross-section, highest failure consequence), 70% for shaft housing, 60% for motor mount, 50% for struts (hydrodynamic stiffness), 25% for the hull shell (weight-critical, post-print treatment closes the porosity). Mass allocated by failure consequence, not by convenience.",
          image: "/case-studies/hydrofoil/hero.png"
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
          image: "/case-studies/hydrofoil/hero.png",
          caption: "Hydrofoil boat build"
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
