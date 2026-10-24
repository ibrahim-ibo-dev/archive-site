export interface VisualProject {
  slug: string;
  number: string;
  title: string;
  localTitle?: string;
  category: string;
  status: "Completed" | "Prototype";
  tagline: string;
  description: string;
  tech: string[];
  imageAlt: string;
  imageCaption: string;
  detailAlt: string;
  detailCaption: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string;
  features: { title: string; body: string }[];
  engineering: { title: string; body: string }[];
  noteTitle: string;
  note: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export const visualProjects: VisualProject[] = [
  {
    slug: "cosmic-scale", number: "01", title: "Cosmic Scale", localTitle: "پێوانەی گەردوون",
    category: "Interactive science", status: "Completed",
    tagline: "A different perspective on everything.",
    description: "A Kurdish journey from a proton to the observable universe. An interactive logarithmic scale makes vast differences in size something you can explore.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Kurdish RTL"],
    imageAlt: "Cosmic Scale application showing Earth, its approximate diameter, Kurdish explanations and a logarithmic ruler",
    imageCaption: "Earth at human-readable scale: a visual reference, a size and a Kurdish explanation.",
    detailAlt: "The Milky Way reference scale inside the Cosmic Scale explorer",
    detailCaption: "A shift to the Milky Way shows how the same interface handles astronomical distances.",
    metrics: [{ value: "12", label: "Reference scales" }, { value: "42", label: "Orders of magnitude on the ruler" }, { value: "RTL", label: "Kurdish experience" }],
    challenge: "A number can describe the size of an atom or a galaxy, but it rarely helps us feel the difference. The challenge was to give those unfamiliar scales a clear, explorable visual relationship.",
    approach: "Use one continuous logarithmic ruler, familiar reference objects and short Kurdish explanations. Scrolling changes the viewing scale; direct controls let the visitor pause and compare.",
    features: [
      { title: "A journey at your pace", body: "Scroll through the scale, select a marker, or use the keyboard to jump between reference points." },
      { title: "Context beside every object", body: "Readable units and a comparison with the previous stop explain the change in scale." },
      { title: "Built around Kurdish", body: "Sorani explanations, right-to-left layout and supporting English object names make the experience approachable." },
    ],
    engineering: [
      { title: "Logarithmic size mapping", body: "Object diameters are derived from differences in base-10 logarithms. A full exponent step represents a tenfold change, keeping microscopic and astronomical scales in one model." },
      { title: "Motion with a purpose", body: "Scroll events update a target; requestAnimationFrame draws the transition only while the view is changing. A reduced-motion preference removes the easing." },
      { title: "Resilient visuals", body: "Visible objects are managed by scale. Images load over fallback artwork, and the experience retains a useful visual when an image fails." },
    ],
    noteTitle: "A visual reference, with context",
    note: "Measurements are approximate and include different references such as height, diameter, width and distance. Illustrations communicate scale; they are not photographs of every object. The final stop is the observable universe, not the whole universe.",
  },
  {
    slug: "kurdistan-weather", number: "02", title: "Kurdistan Weather", localTitle: "کەش و هەوای کوردستان",
    category: "Everyday utility", status: "Completed",
    tagline: "The forecast, in your own language.",
    description: "A weather experience for Kurdish speakers, bringing current conditions, hourly forecasts and a seven-day outlook together with a sky that responds to the weather.",
    tech: ["Next.js", "React", "TypeScript", "Open-Meteo", "Kurdish RTL"],
    imageAlt: "Kurdistan Weather application with Kurdish current conditions and forecast information",
    imageCaption: "Current conditions and the forecast, presented in a native Kurdish interface.",
    detailAlt: "Kurdistan Weather hourly forecast and temperature chart",
    detailCaption: "The hourly forecast makes the temperature trend easy to follow at a glance.",
    metrics: [{ value: "25", label: "Cities and towns" }, { value: "7 days", label: "Forecast outlook" }, { value: "10 min", label: "Refresh interval" }],
    challenge: "A useful local forecast needs more than translated labels. City names, familiar number formatting, reading direction and the way people find their location all shape the experience.",
    approach: "Build around Kurdish Sorani from the beginning. Keep current conditions prominent, make deeper forecasts easy to scan, and let the atmosphere reflect the location’s weather and time of day.",
    features: [
      { title: "A complete forecast", body: "Current conditions, an hourly temperature view and an expandable seven-day outlook bring the essentials into one place." },
      { title: "Local places, easy to find", body: "Search supported cities in Kurdish or English, including alternate spellings. Optional geolocation finds the nearest supported city." },
      { title: "A living sky", body: "Weather conditions and sunrise or sunset times influence the background, from clear skies and stars to rain, snow and fog." },
    ],
    engineering: [
      { title: "A separate weather service", body: "Open-Meteo responses are mapped into internal types before reaching the interface. Request timeouts, retry logic and caching handle common network interruptions." },
      { title: "One view across the region", body: "A batched request supplies the city overview, while a local coordinates and alias dataset supports location lookup without sending city search text to the weather provider." },
      { title: "Designed for Kurdish", body: "Localized numbers, weekdays, directions and relative update times sit alongside right-to-left layouts. City-specific URLs make forecasts easy to revisit and share." },
    ],
    noteTitle: "Weather data, clearly presented",
    note: "Forecasts and conditions come from Open-Meteo. Update information helps visitors judge freshness, and the animated sky is a visual interpretation of the reported conditions.",
    liveUrl: "https://weather.ibrahim-eng.dev", sourceUrl: "https://github.com/ibrahim-ibo-dev/kurdistan-weather",
  },
  {
    slug: "algorithm-playground", number: "03", title: "Algorithm Playground", localTitle: "ئەلگۆریتم",
    category: "Learning through interaction", status: "Completed",
    tagline: "See the logic. Follow every step.",
    description: "A Kurdish algorithm playground for sorting, searching, pathfinding and maze generation. Visual steps, pseudocode and statistics turn abstract procedures into something you can inspect.",
    tech: ["Next.js", "React", "TypeScript", "Zustand", "Canvas", "Tailwind CSS"],
    imageAlt: "Algorithm Playground showing Quick Sort mid-run with highlighted pseudocode and playback controls",
    imageCaption: "Quick Sort in progress: the visual state and highlighted pseudocode share one learning workspace.",
    detailAlt: "Algorithm Playground showing a generated maze solved using Dijkstra's algorithm",
    detailCaption: "A generated maze, solved with Dijkstra: the route and run statistics make the result inspectable.",
    metrics: [{ value: "16", label: "Algorithms to explore" }, { value: "4", label: "Algorithm families" }, { value: "↔", label: "Step-by-step playback" }],
    challenge: "Reading pseudocode often hides the part that matters most: how the state changes from one operation to the next. Learners need a way to slow down, revisit a step and connect the code to its result.",
    approach: "Keep the visual state, pseudocode and statistics synchronized. Let visitors choose the input, control playback and experiment with the same idea on different arrays or grids.",
    features: [
      { title: "Four algorithm families", body: "Explore six sorting, five pathfinding, three maze-generation and two searching algorithms." },
      { title: "Control the explanation", body: "Play, pause, step forward or back, seek through the timeline and adjust speed while following the corresponding pseudocode." },
      { title: "Experiment with the input", body: "Edit walls and weights, generate a maze and find a route. A separate Conway’s Game of Life simulation explores another kind of evolving system." },
    ],
    engineering: [
      { title: "Recorded state transitions", body: "Algorithm runs produce inspectable steps. Playback can revisit those states, keeping the visual explanation and pseudocode aligned rather than relying on a one-way animation." },
      { title: "Meaningful measurements", body: "Algorithm-specific statistics expose comparisons, swaps, visited nodes and path cost. The interface makes the work performed by an algorithm visible." },
      { title: "An interactive grid", body: "Canvas rendering supports walls, weighted cells and generated mazes. State management coordinates the chosen algorithm, input and playback controls." },
    ],
    noteTitle: "Two kinds of exploration",
    note: "Recorded algorithm runs support reversible playback. Conway’s Game of Life is a separate forward-running simulation, with its own controls and behavior.",
  },
  {
    slug: "glyphcode", number: "04", title: "GlyphCode",
    category: "Experimental visual encoding", status: "Prototype",
    tagline: "What if data had a different shape?",
    description: "An experimental visual-code format exploring how text can become geometric patterns and be read back by a dedicated decoder. A working space for encoding, rendering and scanning ideas.",
    tech: ["Next.js", "React", "TypeScript", "Canvas", "Reed–Solomon", "CRC32"],
    imageAlt: "GlyphCode prototype showing a leaf-style code generated from Kurdish text",
    imageCaption: "A Kurdish text payload rendered in the leaf geometry, with the internal self-check shown.",
    detailAlt: "GlyphCode prototype showing a wave-style custom visual code",
    detailCaption: "The wave geometry explores a different arrangement of the same custom encoding idea.",
    metrics: [{ value: "6", label: "Geometric formats" }, { value: "UTF-8", label: "Text encoding" }, { value: "R&D", label: "Experimental prototype" }],
    challenge: "Visual codes balance data capacity, recognizable structure and reliable decoding. This project asks how that balance changes when the underlying geometry changes.",
    approach: "Build the format from the payload outward: encode text, add integrity and error-correction information, render the result and explore decoding it with a purpose-built scanner.",
    features: [
      { title: "Six visual geometries", body: "The generator explores multiple geometric arrangements using a shared approach to payload encoding." },
      { title: "Text to visual pattern", body: "UTF-8 payloads become a structured visual representation that can be rendered and inspected." },
      { title: "A dedicated decoder", body: "The project includes its own scanning and decoding workflow for its custom format." },
    ],
    engineering: [
      { title: "A defined data pipeline", body: "Text is encoded as UTF-8 bytes and packaged into the custom format before being mapped to a geometric layout." },
      { title: "Integrity and error correction", body: "CRC32 checks payload integrity, while Reed–Solomon adds error-correction structure. Their behavior is part of the encoding and decoding experiment." },
      { title: "Rendering meets recognition", body: "The renderer and scanner must agree on the geometry and symbol mapping. Exploring that boundary is the central engineering challenge of the prototype." },
    ],
    noteTitle: "Prototype scope",
    note: "GlyphCode is a custom format, not a standard QR code, and requires its own decoder. Synthetic tests do not establish reliable scanning from printed codes or phone cameras. Real-world scanning reliability remains work in progress.",
  },
];
