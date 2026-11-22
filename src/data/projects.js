/**
 * Projects data file.
 * 
 * To add links to any project, simply add objects to the `links` array:
 * links: [
 *   { label: 'GitHub', url: 'https://github.com/your-repo', type: 'github' },
 *   { label: 'Live Demo', url: 'https://your-demo-url.com', type: 'demo' },
 *   { label: 'Documentation', url: 'https://...', type: 'doc' },
 *   { label: 'Paper', url: 'https://...', type: 'paper' },
 * ]
 */

const projects = [
  {
    id: 1,
    index: '01',
    title: 'ERIC',
    fullTitle: 'Edge-Aware Raster-Guided Image Captioning',
    status: 'ONGOING',
    statusKind: 'ongoing',
    image: 'eric.jpg',
    description:
      'A research-oriented remote sensing image captioning framework investigating how semantic raster representations can complement visual features during caption generation.',
    details: [
      'Developed a semantic-raster pipeline on an 8-class, 2,806-image RSICD subset.',
      'Generated approximately 137K semantic labels across 7×7 spatial grids using scene-conditioned vocabularies.',
      'Fine-tuned RemoteCLIP ViT-B/32 for 49-cell patch classification.',
      'Evaluated image-only, raster-only and multimodal captioning approaches.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'Qwen-VL',
      'RemoteCLIP',
      'CLIP',
      'DINOv2',
    ],
    githubUrl: "https://github.com/VedantBarhate/ERIC-1",
    liveUrl: null,
    links: [
      // { label: 'GitHub', url: 'https://github.com/VedantBarhate/ERIC-1', type: 'github' },
    ],
  },
  {
    id: 2,
    index: '02',
    title: 'Resilio',
    fullTitle: 'Measuring Behavioral Stability of Quantized LLMs Under Prompt Drift',
    status: 'PREPRINT',
    statusKind: 'preprint',
    image: 'resilio.jpg',
    description:
      'A co-authored evaluation framework studying how quantization and progressive prompt degradation affect the behavioral stability of large language models.',
    details: [
      'Evaluated Llama 3.1 8B, Mistral 7B and Phi-3 Mini across 4-bit, 8-bit and 16-bit precision configurations.',
      'Designed experiments with 40 base prompts, five progressive drift levels and three prompt variants per level.',
      'Analyzed 5,760 scored responses across nine model-precision configurations.',
      'Implemented task-performance scoring, baseline-relative behavioral stability and embedding-similarity analysis.',
      'Observed a 26–39% task-score reduction at the highest prompt-drift level; average quantization effect was approximately 3%.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'BitsAndBytes',
      'Sentence-Transformers',
      'Groq API',
    ],
    githubUrl: "https://github.com/VedantBarhate/Resilio",
    liveUrl: null,
    links: [
      {
        label: 'Zenodo Preprint',
        url: 'https://zenodo.org/records/19740706',
        type: 'paper',
      },
      { label: "LinkedIn", url: "https://lnkd.in/p/gPHt2DFN", type: "LinkedIn" }
    ],
  },
  {
    id: 3,
    index: '03',
    title: 'RTVAIN',
    fullTitle: 'Real-Time Vision Augmented Interpretation & Narration',
    status: null,
    statusKind: null,
    image: 'rtvain.jpg',
    description:
      'A real-time computer vision pipeline that interprets football penalty-kick events and converts them into contextual spoken narration.',
    details: [
      'Developed a custom YOLOv11 detection pipeline for ball, kicker, goalkeeper and goalpost.',
      'Used OpenCV and coordinate-based logic to track relevant spatial interactions.',
      'Implemented rule-based event interpretation for kick, goal, save and miss.',
      'Integrated Groq LLM inference for contextual narration generation.',
      'Used Edge TTS to synthesize spoken output.',
    ],
    technologies: ['Python', 'YOLOv11', 'OpenCV', 'Groq API', 'Edge TTS'],
    githubUrl: "https://github.com/VedantBarhate/RTVAIN",
    liveUrl: null,
    links: [
      { label: "LinkedIn", url: "https://lnkd.in/p/gkS8xCtB", type: "LinkedIn" }
    ],
  },
  {
    id: 4,
    index: '04',
    title: 'CanvEx',
    fullTitle: 'Gemini Canvas React Apps to Desktop Executables',
    status: null,
    statusKind: null,
    image: 'canvex.jpg',
    description:
      'An automated packaging pipeline that converts AI-generated React applications into standalone Windows executables.',
    details: [
      'Built a Docker-based workflow to package Gemini Canvas React projects into portable Windows executables.',
      'Automated dependency detection, React/Vite scaffolding and Electron packaging.',
      'Created a FastAPI backend architecture integrated with GitHub Actions.',
      'Implemented build-status polling and executable delivery.',
      'Validated on more than 10 real Gemini Canvas applications.',
      'Published as Docker image vedantbarhate/canvex:v1.2.',
    ],
    technologies: [
      'Python',
      'React',
      'Vite',
      'Electron',
      'Docker',
      'FastAPI',
      'GitHub Actions',
    ],
    githubUrl: "https://github.com/VedantBarhate/CanvEX",
    liveUrl: null,
    links: [
      {
        label: 'Docker Hub',
        url: 'https://hub.docker.com/r/vedantbarhate/canvex',
        type: 'docker',
      },
      { label: "Phase 1", url: "https://lnkd.in/p/gPaeebFr", type: "LinkedIn" },
      { label: "Phase 2", url: "https://lnkd.in/p/gZyf6y6n", type: "LinkedIn" },
    ],
  },
  {
    id: 5,
    index: '05',
    title: 'PrivateBrain',
    fullTitle: 'Offline Containerized RAG Knowledge System',
    status: null,
    statusKind: null,
    image: 'privatebrain.jpg',
    description:
      'A privacy-oriented, locally operated retrieval-augmented generation system for querying personal documents without relying on hosted LLM inference.',
    details: [
      'Built a document ingestion and retrieval pipeline for PDF, DOCX and TXT files.',
      'Integrated LangChain, ChromaDB and local Ollama models.',
      'Developed a FastAPI backend and React interface.',
      'Containerized using Docker Compose with multiple isolated services.',
      'Integrated Prometheus, Grafana and cAdvisor for monitoring.',
      'Reduced the backend Docker image from approximately 10 GB to 6.3 GB through dependency and build optimisation.',
      'Added GitHub Actions CI/CD, Trivy image scanning and Cosign signing.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'React',
      'ChromaDB',
      'Ollama',
      'Docker',
      'Prometheus',
      'Grafana',
      'GitHub Actions',
    ],
    githubUrl: "https://github.com/VedantBarhate/PrivateBrain",
    liveUrl: null,
    links: [],
  },
];

export default projects;
