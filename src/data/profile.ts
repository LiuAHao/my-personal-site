export type KeywordSize = 'sm' | 'md' | 'lg';

export interface Keyword {
  text: string;
  size: KeywordSize;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  github: string;
}

export interface Technology {
  name: string;
  category: string;
}

export const profile = {
  name: 'LiuAHao',
  githubUrl: 'https://github.com/LiuAHao',
  email: '2659414541@qq.com',
  tagline: 'Architecting intelligent systems through elegant code and boundless curiosity.',
  contactIntro: '随时欢迎交流探讨 AI 工程、后端架构或是任何有趣的开源合作。',
};

export const keywords: Keyword[] = [
  { text: 'Southeast University', size: 'lg' },
  { text: 'AI Agents', size: 'lg' },
  { text: 'Backend Systems', size: 'lg' },
  { text: 'ByteDance', size: 'md' },
  { text: 'Tencent', size: 'md' },
  { text: 'Software Dev', size: 'md' },
  { text: 'C++', size: 'md' },
  { text: 'Quant Strategies', size: 'md' },
  { text: 'Financial Freedom', size: 'md' },
  { text: 'Stock Trading', size: 'sm' },
  { text: 'Gemini', size: 'sm' },
  { text: 'Claude Code', size: 'sm' },
  { text: 'Codex', size: 'sm' },
  { text: 'LangChain', size: 'sm' },
  { text: 'Minecraft', size: 'sm' },
  { text: 'Zenless Zone Zero', size: 'sm' },
  { text: 'Basketball', size: 'sm' },
  { text: 'Volleyball', size: 'sm' },
  { text: 'Fitness', size: 'sm' },
  { text: 'Photography', size: 'sm' },
  { text: 'Travel', size: 'sm' },
  { text: 'Music & Singing', size: 'sm' },
  { text: 'Jay Chou', size: 'sm' },
  { text: 'David Tao', size: 'sm' },
  { text: 'KUN', size: 'sm' },
  { text: 'ISFJ', size: 'sm' },
  { text: 'Goal-Oriented', size: 'sm' },
  { text: 'Mac Lover', size: 'sm' },
  { text: 'Calm & Steady', size: 'sm' },
];

export const projects: Project[] = [
  {
    title: '多 Agent AI 投资分析系统',
    desc: '一个多 Agent 协同的 AI 分析助手，融合行情数据、财经新闻和知识库检索，由不同 Agent 分工处理并提供分析结果。',
    tags: ['Python', 'LangChain', 'LLMs', 'RAG'],
    github: 'https://github.com/LiuAHao/ai_investment',
  },
  {
    title: 'Go Agent Platform',
    desc: '一个本地优先的 Agent Studio。采用“云端分发、本地执行”思路，支持快速创建 Agent、挂载 Skill 和 MCP 插件。前后端分离设计，并接入了 Electron 桌面端。',
    tags: ['Go', 'React', 'Electron', 'MCP'],
    github: 'https://github.com/LiuAHao/go-agent-platform',
  },
];

export const technologies: Technology[] = [
  { name: 'C++', category: 'Core' },
  { name: 'Python', category: 'Core' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'LangChain', category: 'AI/ML' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'Linux', category: 'OS' },
  { name: 'Go', category: 'Core' },
];
