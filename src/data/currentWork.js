const currentWork = [
  {
    id: 1,
    title: 'ERIC',
    fullTitle: 'Edge-Aware Raster-Guided Image Captioning',
    category: 'RESEARCH',
    status: 'IN PROGRESS',
    image: 'eric.jpg',
    shortDescription:
      'Exploring how semantic raster representations can improve image understanding and caption generation in remote sensing imagery.',
    detailedDescription:
      'ERIC is a research-oriented framework for remote sensing image captioning. It investigates the use of semantic raster representations alongside visual features to understand how structured spatial information can contribute to more informative image descriptions.',
    pipeline: [
      'Remote Sensing Image',
      '7×7 Spatial Grid',
      'Semantic Raster Representation',
      'Visual / Raster Feature Learning',
      'Caption Generation & Evaluation',
    ],
    milestones: [
      {
        label: 'Dataset',
        value: '2,806 images from an 8-class RSICD subset',
      },
      {
        label: 'Semantic labels',
        value: '~137K labels generated across 7×7 image grids',
      },
      {
        label: 'Model training',
        value: 'Fine-tuned RemoteCLIP ViT-B/32',
      },
      {
        label: 'Trainable parameters',
        value: '14.2M out of 151M',
      },
      {
        label: 'Patch classification',
        value: '55.4% test accuracy on the 49-cell patch classification task',
      },
      {
        label: 'Captioning evaluation',
        value:
          'Compared image-only, semantic-raster and multimodal approaches using automatic and blind human evaluation',
      },
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

    links: [
      { label: 'Repository', url: 'https://github.com/VedantBarhate/ERIC-1' },
      { label: 'Module 1', url: 'https://lnkd.in/p/gSZiEAK4' },
      { label: 'Module 2', url: 'https://lnkd.in/p/gk6gzyJg' },
      { label: 'Module 3', url: 'https://lnkd.in/p/gmSTCXrJ' },
    ],
  },
];

export default currentWork;
