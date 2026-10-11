export interface PreviousRole { role: string; dateLabel: string }
export interface Experience {
  id: string; company: string; role: string; context: string; summary: string;
  dateLabel: string; roleDateLabel: string; previousRole: PreviousRole | null;
  logoHtml: string; highlights: string[]; details: string[]; tools: string[];
}
export const experience: Experience[] = [
  {
    "id": "gameloft",
    "company": "Gameloft",
    "role": "DevOps Engineer",
    "context": "Global game-platform operations",
    "summary": "Operated global infrastructure across products and regions, including Kubernetes and hybrid EKS workloads.",
    "dateLabel": "Nov 2024 – Jul 2026",
    "roleDateLabel": "Nov 2024 – Jul 2026",
    "previousRole": null,
    "logoHtml": "<span class=\"logo-tile brand-original\"><img class=\"brand-svg brand-original\" src=\"/logos/gameloft-color.png\" alt=\"\" width=\"32\" height=\"32\"></span>",
    "highlights": [
      "Improved GitHub/GitLab delivery workflows using Argo CD, Helm, Docker and Kubernetes.",
      "Built Go and Python tooling for log analysis and recurring maintenance.",
      "Built Prometheus exporters, Grafana dashboards and an ELK pipeline for game-server observability."
    ],
    "details": [
      "Used Cursor/Claude and MCP integrations to support incident triage and IaC work.",
      "Operated Linux/Windows infrastructure and Akamai CDN profiles."
    ],
    "tools": [
      "Kubernetes",
      "Amazon EKS",
      "Argo CD",
      "Helm",
      "Go",
      "Python",
      "Prometheus",
      "Grafana"
    ]
  },
  {
    "id": "microsoft",
    "company": "Microsoft",
    "role": "Site Reliability Engineer (SRE)",
    "context": "Customer Success · Enterprise APAC",
    "summary": "Led incident response for enterprise customers using Microsoft 365 and Azure across multiple tenants and regions.",
    "dateLabel": "Nov 2022 – Nov 2024",
    "roleDateLabel": "Nov 2022 – Nov 2024",
    "previousRole": null,
    "logoHtml": "<span class=\"logo-tile brand-original\"><img class=\"brand-svg brand-original\" src=\"/logos/microsoft-color.svg\" alt=\"\" width=\"32\" height=\"32\"></span>",
    "highlights": [
      "Led response to product and service incidents affecting enterprise customers across APAC, coordinating Tier 3 Technical Support Engineers during investigation and escalation.",
      "Rotated SRE shifts with teams in the US, Australia and China to maintain incident response coverage across time zones.",
      "Maintained infrastructure with Terraform/Azure DevOps and automated recurring remediation with Python, PowerShell and Azure Runbooks.",
      "Used Geneva and KQL during on-call to investigate Entra ID/Active Directory authentication failures.",
      "Worked with global teams on root cause analysis, incident workflows and compliance documentation."
    ],
    "details": ["Worked with Kubernetes and Azure Kubernetes Service (AKS) across enterprise customer environments."],
    "tools": [
      "Azure",
      "Kubernetes",
      "Azure AKS",
      "Terraform",
      "Azure DevOps",
      "Python",
      "PowerShell",
      "Geneva",
      "KQL"
    ]
  },
  {
    "id": "spotify",
    "company": "Spotify",
    "role": "Data Platform Engineer",
    "context": "Data platforms & analytics",
    "summary": "Data-platform operations spanning pipelines, monitoring and automation scripting.",
    "dateLabel": "Aug 2021 – Nov 2022",
    "roleDateLabel": "Oct 2021 – Nov 2022",
    "previousRole": {
      "role": "Data Engineer Intern",
      "dateLabel": "Aug 2021 – Oct 2021"
    },
    "logoHtml": "<span class=\"logo-tile brand-monochrome\"><span class=\"brand-svg brand-inline\" aria-hidden=\"true\"><svg fill=\"#1ED760\" aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Spotify</title><path d=\"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z\"/></svg></span></span>",
    "highlights": [
      "Worked on monitoring, automation scripting and logs scripting alongside data-platform operations.",
      "Operated Luigi pipelines for analytics and maintained Python/SQL ETL/ELT workflows.",
      "Built monitoring for latency, errors and freshness; automated database maintenance and reduced error-log noise.",
      "Supported SQL operations, escalation paths and RCA with global teams."
    ],
    "details": [],
    "tools": [
      "Luigi",
      "Python",
      "SQL"
    ]
  },
  {
    "id": "consulting",
    "company": "Independent SRE Consulting",
    "role": "Incident & observability",
    "context": "Confidential client",
    "summary": "Built a centralized incident-response path and automated incident coordination.",
    "dateLabel": "Project-based",
    "roleDateLabel": "Project-based",
    "previousRole": null,
    "logoHtml": "<span class=\"logo-tile brand-original\"><img class=\"brand-svg brand-original\" src=\"/logos/pizza-sector.svg\" alt=\"\" width=\"32\" height=\"32\"></span>",
    "highlights": [
      "Integrated Datadog and Akamai signals with incident.io for centralized alert routing.",
      "Automated Slack incident-channel provisioning and used incident.io timelines/post-mortems for incident coordination."
    ],
    "details": [],
    "tools": [
      "Datadog",
      "Akamai CDN",
      "incident.io",
      "Slack"
    ]
  }
];
