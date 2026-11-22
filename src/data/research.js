/**
 * Research data file.
 * To add new research papers in the future, simply add another object to the researchPapers array!
 */

export const researchPapers = [
  {
    id: 1,
    title: 'Measuring Behavioral Stability of Quantized LLMs Under Prompt Drift',
    shortDescription:
      'An empirical study investigating the relative effects of model quantization and progressive input degradation on large language model task performance and behavioral stability.',
    status: 'Co-authored preprint',
    image: 'resilio.jpg',
    paperUrl: 'https://zenodo.org/records/19740706',

    researchQuestion:
      'How do quantization and progressive prompt degradation influence the behavioral stability and task performance of large language models, and how significant is the effect of input quality compared with numerical precision?',

    methodology: {
      models: ['Llama 3.1 8B', 'Mistral 7B', 'Phi-3 Mini'],
      precisions: ['4-bit', '8-bit', '16-bit'],
      design: [
        { label: 'Base Prompts', value: '40' },
        { label: 'Prompt Drift Levels', value: '5 progressive levels' },
        { label: 'Prompt Variants', value: '3 per drift level' },
        { label: 'Tested Configurations', value: '9 model-precision setups' },
        { label: 'Scored Responses', value: '5,760 total outputs' },
      ],
      dimensions: [
        {
          name: 'Task Performance Score',
          description: 'Category-weighted, five-dimension LLM-as-a-Judge evaluation.',
        },
        {
          name: 'Behavioral Stability Score',
          description: 'Baseline-relative performance comparison across perturbation stages.',
        },
        {
          name: 'Embedding Similarity',
          description: 'BGE-large-based semantic comparison of clean and perturbed prompts and responses.',
        },
      ],
    },

    findings: {
      stats: [
        {
          metric: '26–39%',
          label: 'Task score reduction',
          detail: 'Observed at the highest level of progressive prompt drift across evaluated configurations.',
        },
        {
          metric: '~3%',
          label: 'Average quantization effect',
          detail: 'Mean performance difference across precision configurations, with an observed range of 0–7%.',
        },
      ],
      takeaway:
        'Input quality had a considerably stronger influence on behavioral performance than quantization in the evaluated settings.',
      note:
        'Findings reflect empirical observations across the nine evaluated model-precision configurations under the specified drift framework.',
    },
  },
  /*
  // Example template for future research entries:
  {
    id: 2,
    title: 'Your Future Research Title',
    shortDescription: 'Brief summary of the paper and findings.',
    status: 'In review / Preprint / Published',
    paperUrl: 'https://...',
    researchQuestion: 'What is the primary scientific question examined?',
    methodology: {
      models: ['Model A', 'Model B'],
      precisions: ['FP16', 'INT8'],
      design: [
        { label: 'Dataset', value: '...' },
      ],
      dimensions: [
        { name: 'Metric 1', description: '...' },
      ],
    },
    findings: {
      stats: [
        { metric: '95%', label: 'Metric description', detail: 'Explanation' },
      ],
      takeaway: 'Core high-level summary.',
      note: 'Additional methodology context.',
    },
  },
  */
];

// Backwards compatibility export
export const featuredResearch = researchPapers[0];

export const researchInterests = [
  'Large Language Models',
  'Model Quantization',
  'LLM Evaluation',
  'Behavioral Stability',
  'Multimodal Learning',
  'Vision-Language Models',
  'Retrieval-Augmented Generation',
  'Edge AI',
];

export default researchPapers;
