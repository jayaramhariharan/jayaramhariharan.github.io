import { Project, Experience, SocialLink, DesignValue } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Precision Joystick Grip Upgrade",
    category: "Mechatronics",
    image: "/case-studies/viper/home-card-latest.jpg",
    heroImages: [
      "https://picsum.photos/seed/flightstick1/1200/800",
      "https://picsum.photos/seed/flightstick2/600/400",
      "https://picsum.photos/seed/flightstick3/600/400"
    ],
    description: "Upgraded a premium joystick grip with an added twist feature, preserving the original ergonomic shape while expanding control.",
    details: {
      client: "Private Client",
      year: "2023",
      role: "Product Design, Mechatronics, CAD, Firmware",
      techStack: ["CAD", "C++", "Arduino", "Reverse Engineering", "3D Printing"],
      challenge: "A flight sim enthusiast had found their perfect grip—a Thrustmaster F-16C Viper HOTAS, a premium 1:1 scale metal replica. The ergonomics were exactly what they wanted.\n\nBut it was missing one critical feature: twist yaw. The grip could handle pitch and roll, but for yaw control, they'd need separate rudder pedals—an expensive and space-consuming addition.\n\nThe Challenge: Build a custom, 1:1 scale operational replica that integrates a high-precision twist axis without altering the external ergonomics.",
      solution: "I analyzed what went wrong with previous attempts and identified the core mistake: trying to shrink the wrong thing. Instead of cramming existing electronics into a smaller space, I needed to rethink the architecture entirely.\n\nThe key insight: the grip's upper body (the distinct head, the triggers) was fixed and non-negotiable. But the mounting interface was the opportunity for innovation.\n\nInstead of trying to fit someone else's electronics, I asked: what if I only add what's actually needed?",
      outcome: "Precision: 10-bit Hall-Effect sensing with custom auto-calibration and deadzone filtering.\n\nErgonomics: 100% geometric match to original grip, but with added 6th degree of freedom (twist).\n\nCost Efficiency: $15 COTS mechatronics BOM replaced $10k+ potential ground-up fabrication costs.\n\nValidation: Built a $15 'Ghost' emulator to replace $300+ hardware; 100% functional validation.\n\nInnovation: First-ever 1:1 scale Viper grip with integrated high-precision twist yaw functionality.\n\nDeployment: Delivered a field-tested, bespoke unit with zero post-delivery maintenance issues.",
      research: [
        {
          title: "The Split-Brain Architecture",
          content: "I designed a dual-interface architecture—a dedicated twist module with its own sensor and controller, running alongside the original button electronics. Two systems, one grip.\n\nNew Signal Path:\nHall-Effect twist axis -> SparkFun Qwiic Pro Micro -> separate USB port (independent HID joystick)\n\nLegacy Signal Path:\nOriginal Thrustmaster 5-pin DIN connector -> Warthog base (19+ buttons)"
        },
        {
          title: "Precision Sensing",
          content: "The new twist axis required its own independent signal path that wouldn't interfere with the complex button matrix.\n\nHardware:\nMicrocontroller: SparkFun Qwiic Pro Micro (ATmega32U4-based)\nSensor: Analog Hall-Effect sensor mounted on the twist mechanism, tracking magnet rotation\n\nFirmware (C++/Arduino):\nAuto-Calibration Routine: Samples 100 readings during initialization to dynamically set min/max sensor values\nDeadzone Elimination: Custom logic to eliminate center deadzone\nAnti-Jitter Smoothing: Filters mechanical noise from twist motion for clean input"
        },
        {
          title: "Building a Ghost",
          content: "A major bottleneck occurred: the Warthog Base—needed for testing all 19+ buttons—was unavailable in India and cost-prohibitive to ship for a single test.\n\nI needed to validate that every button worked before shipping the final unit. But I couldn't get the hardware.\n\nThe Solution:\nI built a base emulator using a second SparkFun Qwiic Pro Micro with MMJoy2/FreeJoy open-source joystick firmware. This transformed the microcontroller into a Warthog Base emulator—eliminating the need for the $300+ physical base.\n\nResult: Successfully validated 100% of button and twist functionality before shipping, without ever having the original mounting base. Testing infrastructure cost: ~$15 vs. $300+."
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
          description: "Instead of trying to shrink the VPC electronics, I modularized the hardware.\n\nI harvested the mechanical twist control from a VPC unit and engineered a custom base extension in CAD. The lower section of the Thrustmaster aluminum body was modified to accommodate the twist module while keeping the upper ergonomics identical to the original.\n\nInternal supports were added for the controller boards within the joystick rather than increasing the overall part girth—maintaining a sleek profile.",
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
    image: "/case-studies/wolf/hero.jpg",
    description: "Designed and campaigned a battlebot that won the tournament with a low, impact-resistant chassis and a between-round wedge upgrade.",
    details: {
      client: "Propeller Technologies",
      year: "2022",
      role: "Design Lead",
      techStack: ["CAD", "Sheet Metal Fabrication", "Mechatronics", "Combat Robotics"],
      challenge: "Propeller Technologies ran a multi-day combat robotics tournament: royal rumble to open, then one-on-one elimination bouts through to the championship. Last bot in the ring wins. I was design lead on a three-person team, and there were no kits or templates. Each team got a sheet of aluminium and had to turn flat stock into a fighting machine.\n\nThe constraints were hard. Single Aluminum 5052 sheet. Three brushless motors, ESP32, 3S LiPo, three ESCs—all needing to fit inside. No fabrication equipment on our end, so the chassis had to be designed for mark, cut, and bend in a single pass. Everything had to resolve from one flat pattern and still survive repeated impacts in the ring.",
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
          image: "/case-studies/wolf/top.jpg"
        },
        {
          title: "Chassis Assembly",
          description: "Once the sheet came back from cutting and bending, the build moved into mechanical integration. The folded chassis was assembled first, then the rear-drive motors, battery pack, receiver, motor driver, and wiring were installed low inside the body.\n\nEverything was arranged for stability and impact survival. No welding, no redundant structure, and no loose routing that could fail during a hit.",
          image: "/case-studies/wolf/iso.jpg"
        },
        {
          title: "Combat Optimization",
          description: "The opening rumble validated the chassis but exposed a contact problem: Wolf could push, yet it could not consistently get under opponents. That made the next decision clear.\n\nBetween rounds I designed a bolt-on wedge from leftover sheet material and mounted it to the existing chassis. It was a fast, constraint-aware upgrade that changed the way Wolf entered every fight and directly improved match control.",
          image: "/case-studies/wolf/closeup-wedge.jpg"
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
          image: "/case-studies/wolf/hero.jpg",
          caption: "Hero view"
        },
        {
          image: "/case-studies/wolf/iso.jpg",
          caption: "Isometric view"
        },
        {
          image: "/case-studies/wolf/top.jpg",
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
    category: "Marine Engineering",
    image: "/case-studies/hydrofoil/hero.png",
    description: "Built a hydrofoil test boat to prove a waterproofing method for rotating shafts, printed hulls, and dynamic loads below the waterline.",
    details: {
      client: "Blueprint Community",
      year: "2024",
      role: "Mechanical Design / Prototyping",
      techStack: ["CAD", "FDM PETG", "Foil Design", "Waterproofing", "ESP32"],
      challenge: "27 parts — 19 mechanical, 8 electrical — total BOM $207.60. The mechanical problem is getting the hull to leave the water, stay stable once it does, and not flood through the spinning propeller shaft in the process.\n\nShaft penetration is where RC marine builds die. The propeller shaft has to rotate at ~3000 RPM while seated in a watertight hull. Standard rubber seals compress out of spec under sustained dynamic load. Get the seal wrong and water tracks back up the stern tube into the electronics bay.",
      solution: "Foil geometry and shaft sealing are not independent problems — if the AoA is wrong, the boat porpoises, and porpoising creates surge loading at the shaft seal. The mechanical system fails at the weakest link.\n\nAll structural parts printed in PETG (better moisture resistance than PLA, tighter layer adhesion under sustained load). Hull waterproofed post-print to close layer-line porosity. Struts at 50% infill for hydrodynamic stiffness. Main foil at 4° AoA. Shaft sealed with a rubber/silicone stern tube seal packed with marine grease. Lead ballast at the bow set CG at 31% of waterline length.",
      outcome: "A hull that transitions from displacement to foil-supported mode at ~5 knots with stable pitch. Shaft seal held through repeated full-throttle runs with zero ingress. The infill strategy across the 12 printed parts reflects the load map: 100% on control arms (smallest linkage parts, highest failure risk), 70% on the shaft housing, down to 25% on the hull body where weight matters more than compressive strength.",
      research: [
        {
          title: "Foil AoA vs. Cavitation Risk",
          content: "High angle of attack gets lift fast — but steepen past 6° and water separates from the upper surface. Lift becomes unpredictable above that threshold. The 4° setting gives enough lift to clear the hull at takeoff speed without triggering early cavitation on the main foil."
        },
        {
          title: "Shaft Seal and Stern Tube",
          content: "The propeller shaft penetrates the hull at a point that sees both rotational load and forward water pressure. A rubber/silicone stern tube seal packed with marine grease provides a grease-buffer layer the water must displace before it reaches the seal face. The shaft housing is the highest-infill printed part (70%) because it takes the combined bearing load from the shaft and the water pressure at the penetration point."
        },
        {
          title: "PETG Infill Strategy",
          content: "12 of the 19 mechanical parts are 3D-printed PETG. The infill percentages are structural decisions: control arms at 100% (servo linkage, smallest cross-section, highest failure risk), shaft housing at 70%, motor mount at 60%, struts at 50% (stiff enough to hold AoA geometry under hydrodynamic load), hull at 25% (weight-critical, post-print waterproofing handles the porosity)."
        }
      ],
      process: [
        {
          title: "Hull and Foil Geometry",
          description: "Hull printed in PETG at 0.2mm layer height, 25% infill, waterproofed post-print. Main foil AoA: 4°. Struts at 50% infill. Stabilizer foil handles pitch — if the rear foil is oversized, the stern rises and the bow digs in. The entire transition inverts.",
          image: "/case-studies/hydrofoil/hero.png"
        },
        {
          title: "Propeller Shaft Sealing",
          description: "Shaft housing printed at 70% infill — highest-stress printed part. Stern tube packed with marine grease, terminated with a rubber/silicone seal at the hull penetration. Grease fills the annular gap as the primary barrier before water reaches the seal face.",
          image: "/case-studies/hydrofoil/hero.png"
        },
        {
          title: "Ballast and Drive Train",
          description: "Lead ballast at the bow sets CG at 31% of waterline length. Universal flexible coupling at the motor-shaft interface absorbs brushless motor vibration. Control arms printed at 100% infill — smallest parts in the servo linkage, highest failure risk under repeated actuation.",
          image: "/case-studies/hydrofoil/hero.png"
        }
      ],
      stats: [
        { value: "27", label: "Total Parts" },
        { value: "$207", label: "Total BOM" },
        { value: "4°", label: "Foil AoA" },
        { value: "15°", label: "Strut Sweep" }
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
          finish: "0.2mm / 25–100% Infill",
          hex: "#93C5FD"
        },
        {
          name: "Stern Tube Seal",
          code: "Rubber / Silicone",
          finish: "Marine Grease Packed",
          hex: "#374151"
        },
        {
          name: "Lead Ballast",
          code: "CG Tuning",
          finish: "31% WL Placement",
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
    description: "At Afterconcepts, I work across healthcare, consumer tech, mobility, and industrial products, helping shape products from early concepts through CAD and prototype development.",
    details: [
      "A lot of that work sits in mechanical design: internal layout, part design, assemblies, mounting, mechanisms, and the decisions that make a product come together properly.",
      "I also work through prototypes and revisions so the design gets clearer, works better, and is easier to move toward production."
    ]
  },
  {
    id: 2,
    company: "IIT Madras",
    role: "Solar Vehicle Engineering",
    period: "2023",
    description: "On the IIT Madras solar vehicle team, I worked on structural layout and vehicle layout for a build where fabrication exposed weak decisions quickly.",
    details: [
      "That made CAD more practical: mounting, part placement, and build sequence had to make sense before the team started making parts."
    ]
  },
  {
    id: 3,
    company: "Design Internships",
    role: "CAD & Prototyping",
    period: "2022",
    description: "In aerospace and automotive internships, I spent most of my time on CAD, detailing, and prototype support under stricter engineering standards.",
    details: [
      "That pushed me toward cleaner drawings, tighter revision discipline, and a better sense of how engineering teams depend on accurate design work."
    ]
  }
];

export const DESIGN_VALUES: DesignValue[] = [
  {
    title: "Useful first",
    description: "If the product does not solve the right problem, the rest of the work does not matter much."
  },
  {
    title: "Make it work",
    description: "A concept can look good early. I care more about whether it works properly when parts, tolerances, and use start to matter."
  },
  {
    title: "Keep it simple",
    description: "I try not to add parts, features, or complexity unless they improve the product in a clear way."
  },
  {
    title: "Ready to build",
    description: "Good design should be clear enough to prototype, explain, and hand off without confusion."
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jayaramh" },
  { name: "See full CV", url: "/resume.pdf" }
];
