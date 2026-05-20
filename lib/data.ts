export type ProjectCategory = "Infra" | "Cloud" | "Support" | "Live";

export type Project = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  tags: string[];
  category: ProjectCategory;
  thumbnail: string;
  images?: string[];
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
    slug: "redhat-linux-scripting",
    title: "Red Hat Linux Scripting Lab",
    description:
      "Hands-on Linux scripting on Red Hat Enterprise Linux using VMware Workstation — bash scripts, user management, and system automation.",
    detail:
      "Worked inside a **Red Hat Enterprise Linux 9** VM on **VMware Workstation 17**. Built **shell scripts from scratch** covering: reading user input and writing to files, conditional logic and menu-driven scripts, sudo user creation with password prompts, and running scripts with elevated privileges. Wrote an assignment script that greets the Linux Administrator, reads a name from the user, **stores it in a names.txt file**, and displays the contents. Built a **menu-driven script (assignmentpt2.sh)** that prompts for a username and password, **creates a new sudo-enabled user**, and assigns a password — demonstrating real sysadmin automation. Ran and debugged scripts live in the terminal using **vim and bash**.",
    tags: ["Red Hat", "Bash", "Linux", "VMware", "Sysadmin"],
    category: "Live",
    thumbnail: "/RedHat/Picture1.jpg",
    images: [
      "/RedHat/Picture1.jpg",
      "/RedHat/Picture2.jpg",
      "/RedHat/Picture3.jpg",
      "/RedHat/Picture4.jpg",
    ],
  },
  {
    slug: "java-stack-assignment",
    title: "Java Stack Data Structure Lab",
    description:
      "Built and compared two Stack data structures in Java — tested push/pop operations, tracked highs, and validated results using an online Java compiler.",
    detail:
      "Written in **Java** and run via an **online Java compiler (Programiz)**. Created **two Stack objects** each loaded with 20 random integers. Implemented logic to find the **top of each stack**, compare values, and determine which stack had the **higher top element**. Used a **Random number generator** to populate stacks dynamically, then iterated through checking top values across multiple trials. The output console shows results like 'Top of Stack 1 vs Top of Stack 2' comparisons and 'Stack one higher X times out of 8' — demonstrating **stack traversal, conditional logic, and loop control** in a real Java environment.",
    tags: ["Java", "Data Structures", "OOP", "Stacks", "Algorithms"],
    category: "Live",
    thumbnail: "/Stack/Picture1.png",
    images: ["/Stack/Picture1.png"],
  },
  {
    slug: "data-center-infrastructure",
    title: "Data Center Infrastructure Deployment",
    description:
      "Structured cabling, switch patching, and hardware installation supporting a multi-floor infrastructure rollout with zero missed deadlines.",
    detail:
      "At **Direct Line**, completed **4–8+ daily data center tasks** including structured cabling, patching switches, and supporting multi-floor infrastructure deployments. Installed and connected **network hardware and FSDs into switches**, ensuring accurate configurations and improving overall network stability. **Diagnosed and resolved connectivity issues** caused by incorrect port usage or misconfigured connections, reducing downtime and restoring service quickly. Partnered with **network and infrastructure teams** to maintain and scale data center environments across the rollout.",
    tags: ["Cabling", "Switching", "Linux"],
    category: "Infra",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "network-monitoring-dashboard",
    title: "Network Monitoring Dashboard",
    description:
      "Visibility tooling for tracking port usage, connectivity health, and uptime metrics across data center environments.",
    detail:
      "Built **visibility tooling using AWS CloudWatch** to monitor port usage, connectivity health, and uptime metrics across data center environments. Set up **alarms and dashboards** to surface anomalies before they caused outages. Integrated with **EC2 and S3** for log aggregation and storage. The goal was **proactive monitoring** — catching misconfigurations and performance degradation early rather than reacting to incidents.",
    tags: ["CloudWatch", "AWS", "Linux"],
    category: "Cloud",
    thumbnail: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "helpdesk-automation",
    title: "IT Helpdesk",
    description:
      "Streamlined ticket triage and documentation workflows, reducing average resolution time and improving team throughput.",
    detail:
      "At **BreakThru Autism Services**, resolved **daily hardware, software, and network support tickets** to keep staff systems running without interruption. Standardized the workstation setup process and **rebuilt the IT knowledge base with 20+ documented procedures**, enabling the team to self-serve common issues. **Reduced average resolution time** by establishing clear triage workflows and escalation paths inside the ITSM system.",
    tags: ["Windows Server", "ITSM", "Docs"],
    category: "Support",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=90&fit=crop&crop=center",
  },
  {
    slug: "asset-inventory-system",
    title: "IT Asset Inventory System",
    description:
      "Implemented structured auditing and tracking for IT equipment across the organization, eliminating loss and misallocation.",
    detail:
      "Designed and maintained a **structured IT asset inventory system** covering all hardware across the organization. Conducted **regular physical audits** reconciled against spreadsheet records to catch discrepancies early. Tagged and documented every device — **workstations, printers, network-connected peripherals** — with location, assignment, and status. **Eliminated equipment loss and misallocation** that had previously gone untracked, giving the team reliable visibility into what assets existed and where they were.",
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
