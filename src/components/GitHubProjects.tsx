import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Clock } from 'lucide-react';
import { GithubIcon } from './icons';

const GitHubProjects: React.FC = () => {
  // Static data for now, ready for GitHub API integration later
  const repos = [
    {
      name: "awesome-cpp-backend",
      desc: "高性能 C++ 服务端组件与工程模式实践集合。",
      stars: 128,
      forks: 34,
      updatedAt: "2 天前",
      language: "C++",
      color: "#f34b7d"
    },
    {
      name: "agent-workflow-engine",
      desc: "轻量级的多 Agent 大模型工作流编排器。",
      stars: 85,
      forks: 12,
      updatedAt: "1 周前",
      language: "Python",
      color: "#3572A5"
    },
    {
      name: "my-personal-site",
      desc: "基于 React、Tailwind 和 Framer Motion 构建的个人主页。",
      stars: 12,
      forks: 2,
      updatedAt: "刚刚",
      language: "TypeScript",
      color: "#3178c6"
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="w-12 h-[2px] bg-white"></span>
            开源项目
          </h2>
          <a 
            href="https://github.com/LiuAHao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
          >
            <GithubIcon size={18} />
            <span>@LiuAHao</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-500/50 transition-colors flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <GithubIcon className="text-slate-400 mt-1" size={20} />
                <a 
                  href={`https://github.com/LiuAHao/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-400 hover:underline break-all"
                >
                  {repo.name}
                </a>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {repo.desc}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.color }}></span>
                  {repo.language}
                </div>
                <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                  <Star size={14} />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                  <GitFork size={14} />
                  {repo.forks}
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Clock size={12} className="opacity-70" />
                  {repo.updatedAt}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
