export type ProjectCategory = "Infra" | "Cloud" | "Support";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  thumbnail: string;
  link?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
};

export type SkillGroup = {
  category: string;
  skills: { name: string }[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "data-center-infrastructure",
    title: "Data Center Infrastructure Deployment",
    description:
      "Structured cabling, switch patching, and hardware installation supporting a multi-floor infrastructure rollout with zero missed deadlines.",
    tags: ["Cabling", "Switching", "Linux"],
    category: "Infra",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "network-monitoring-dashboard",
    title: "Network Monitoring Dashboard",
    description:
      "Visibility tooling for tracking port usage, connectivity health, and uptime metrics across data center environments.",
    tags: ["CloudWatch", "AWS", "Linux"],
    category: "Cloud",
    thumbnail: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "helpdesk-automation",
    title: "IT Helpdesk",
    description:
      "Streamlined ticket triage and documentation workflows, reducing average resolution time and improving team throughput.",
    tags: ["Windows Server", "ITSM", "Docs"],
    category: "Support",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "asset-inventory-system",
    title: "IT Asset Inventory System",
    description:
      "Implemented structured auditing and tracking for IT equipment across the organization, eliminating loss and misallocation.",
    tags: ["Excel", "Documentation", "Hardware"],
    category: "Support",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=90&fit=crop&crop=center",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "datacenter-rollout",
    title: "Scaling Data Center Infrastructure at Direct Line",
    problem:
      "A growing organization needed rapid multi-floor infrastructure expansion while maintaining uptime and network stability across all existing systems.",
    approach:
      "Executed 4–8 structured cabling and switch patching tasks daily, coordinating with network and infrastructure teams to ensure accurate configurations and smooth hardware integration.",
    result:
      "All project deadlines were met consistently. Network stability improved through resolution of misconfigured connections and port issues before they caused outages.",
    metrics: [
      { label: "Daily tasks completed", value: "4–8+" },
      { label: "Downtime incidents", value: "↓ Significantly" },
      { label: "Deadline hit rate", value: "100%" },
    ],
  },
  {
    slug: "it-support-optimization",
    title: "Reducing IT Downtime at BreakThru Autism Services",
    problem:
      "Staff experienced frequent hardware, software, and network disruptions that interrupted daily operations. Documentation was sparse and asset tracking was unreliable.",
    approach:
      "Resolved daily support tickets systematically, standardized workstation setup procedures, rebuilt the IT knowledge base, and implemented a regular asset audit cycle.",
    result:
      "Downtime was minimized through faster resolution times. The rebuilt documentation enabled the team to self-serve common issues, and inventory audits eliminated equipment loss.",
    metrics: [
      { label: "Tickets resolved", value: "Daily" },
      { label: "KB articles created", value: "20+" },
      { label: "Asset accuracy", value: "↑ Audited" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Infrastructure",
    skills: [
      { name: "Rack & Stack" },
      { name: "Hardware Installations" },
      { name: "VLAN Fundamentals" },
      { name: "Structured Cabling" },
      { name: "Switch Provisioning" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS" },
      { name: "EC2" },
      { name: "S3" },
      { name: "CloudWatch" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Linux" },
      { name: "Windows Server" },
      { name: "Kali Linux" },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Security Operations",
    company: "Allied Universal",
    period: "2025 — Present",
    bullets: [
      "Monitor and secure high-traffic public facilities, conducting routine patrols and enforcing safety protocols.",
      "Manage visitor access and incident reporting, ensuring compliance with site procedures.",
      "Resolve customer and public conflicts through de-escalation while maintaining a safe environment.",
    ],
  },
  {
    role: "Event Security",
    company: "TLS Crowd Management",
    period: "May 2025 — Oct 2025",
    bullets: [
      "Provided security for large-scale events including crowd control and attendee screening.",
      "Identified and mitigated real-time risks, contributing to smooth and incident-free event execution.",
    ],
  },
  {
    role: "Technician I",
    company: "Direct Line",
    period: "Aug 2024 — Mar 2025",
    bullets: [
      "Completed 4–8+ daily data center tasks including structured cabling, switch patching, and multi-floor infrastructure deployments.",
      "Installed and connected network hardware and FSDs into switches, ensuring accurate configurations and improved network stability.",
      "Diagnosed and resolved connectivity issues caused by incorrect port usage or misconfigured connections, reducing downtime.",
      "Partnered with network and infrastructure teams to maintain and scale data center environments.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "BreakThru Autism Services",
    period: "May 2020 — Aug 2024",
    bullets: [
      "Resolved daily hardware, software, and network support tickets, minimizing downtime for staff.",
      "Installed and configured workstations, printers, and network-connected devices.",
      "Maintained and updated IT documentation and knowledge base resources for faster issue resolution.",
      "Managed IT asset inventory and conducted regular audits to strengthen equipment tracking.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "B.A. Computer Technology",
    institution: "Bowie State University",
    year: "2024",
  },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Data Center Tasks", value: 100, suffix: "+" },
  { label: "Uptime Focus", value: 99, suffix: "%" },
];
