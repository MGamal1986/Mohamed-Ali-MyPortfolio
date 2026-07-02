/**
 * ============================================================
 *  PORTFOLIO CONTENT — edit this file to update the site
 * ============================================================
 *  Everything visible on the page comes from CV_DATA below.
 *  You do NOT need to touch any component to change text,
 *  add a job, add a certificate, or add an entire new section.
 *
 *  HOW TO ADD A NEW SECTION
 *  -------------------------
 *  1. Copy any existing block inside `sections: [ ... ]`.
 *  2. Give it a unique `id` (used for the nav link + anchor).
 *  3. Set `type` to one of:
 *       "text"      – a heading + one or more paragraphs
 *       "timeline"  – a vertical list of dated entries with bullets
 *       "grid"      – categories of tags/pills (e.g. skills)
 *       "certs"     – a list of certificates with validity dates
 *       "list"      – a simple bullet list (e.g. training)
 *  4. Fill in the fields shown in the examples below.
 *  5. Save the file. The new section appears automatically in
 *     both the page and the left navigation, in the order it
 *     appears in this array.
 *
 *  To REMOVE a section, delete its block (or set `hidden: true`).
 * ============================================================
 */

export const CV_DATA = {
  // ---------- Header / hero plate ----------
  profile: {
    name: "Mohamed Ali",
    title: "Network Security Engineer",
    location: "Zagazig, Ash Sharqia, Egypt",
    phone: "(002) 0100-9827143",
    email: "elsayedmg@gmail.com",
    tagline: "IT/OT network security across enterprise and industrial (SCADA) environments",
    photo: "/profile.jpg",
  },

  // ---------- Signature career trace (hero timeline) ----------
  careerTrace: [
    { year: "2009", label: "B.Sc. Telecommunications & Electronics", sub: "Zagazig University" },
    { year: "2011", label: "SCADA Engineer", sub: "GUPCO" },
    { year: "2019", label: "Network Security Engineer", sub: "GUPCO" },
    { year: "Present", label: "IT/OT Security", sub: "Cisco · Fortinet · Zero Trust" },
  ],

  // ---------- Main sections, rendered top to bottom ----------
  sections: [
    {
      id: "summary",
      type: "text",
      navLabel: "Summary",
      heading: "Profile",
      paragraphs: [
        "Network Security Engineer with 7+ years of experience designing, implementing, and maintaining secure and reliable computer networks supporting enterprise IT infrastructure and industrial (OT/SCADA) operations. Specialized in firewall configuration, threat detection, VPNs, and Zero Trust architectures.",
        "Track record of optimizing network performance and reducing security incidents by 40% through proactive risk assessment and policy design. Regularly analyzes traffic and performance data to identify threats, configures and manages firewalls, IPS/IDS, VPNs, and access controls, and runs vulnerability assessments and penetration tests to remediate risk across the network.",
      ],
    },

    {
      id: "experience",
      type: "timeline",
      navLabel: "Experience",
      heading: "Experience",
      entries: [
        {
          date: "2019 — Present",
          title: "Network Security Engineer",
          org: "Gulf of Suez Petroleum Company (GUPCO) — Cairo, Egypt",
          points: [
            "Implemented FortiGate NGFW and Cisco Firepower, improving threat detection by 30% and reducing false positives.",
            "Designed and deployed Zero Trust Network Access (ZTNA) policies, improving remote user security and reducing attack surface.",
            "Led firewall rule optimization, removing outdated rules and cutting policy complexity by 25%.",
            "Improved VPN efficiency, reducing remote access downtime by 35% through better tunnel configuration.",
            "Managed a campus network on a 3-tier topology (core, distribution, access), ensuring scalable, organized architecture.",
            "Configured core switch routing for inter-VLAN routing and high-performance data forwarding enterprise-wide.",
            "Deployed distribution-layer redundancy with HSRP to ensure high availability and minimize failover time.",
            "Applied Layer 2 mitigations at the access layer — BPDU Guard, Port Security, DHCP Snooping — against common L2 attacks.",
            "Designed and deployed large-scale CCTV surveillance infrastructure, including NVR configuration, outdoor industrial switches, and large-scale fiber optic cabling, built on Cisco Catalyst 9500 core switches for low-latency, high-throughput video transport.",
          ],
        },
        {
          date: "2011 — 2019",
          title: "SCADA Engineer",
          org: "Gulf of Suez Petroleum Company (GUPCO) — Cairo, Egypt",
          points: [
            "Designed, implemented, and maintained SCADA systems to monitor and control industrial processes.",
            "Configured hardware and software and troubleshot communication networks across Ethernet, serial, and wireless links.",
            "Integrated PLCs and RTUs into plant monitoring and control systems.",
          ],
        },
      ],
    },

    {
      id: "skills",
      type: "grid",
      navLabel: "Skills",
      heading: "Technical Skills",
      categories: [
        {
          label: "Routing & Switching",
          tags: ["OSPF", "EIGRP", "BGP", "MPLS L3VPN (MP-BGP)", "MPLS L2VPN", "STP / PVST+ / Rapid PVST+"],
        },
        {
          label: "Firewalls & Threat Defense",
          tags: ["FortiGate", "Cisco ASA", "Cisco FTD", "IPS/IDS", "VPNs"],
        },
        {
          label: "High Availability & WAN",
          tags: ["HSRP", "VRRP", "GLBP", "Secure SD-WAN"],
        },
        {
          label: "VPN Architectures",
          tags: ["Site-to-Site IPsec", "GRE over IPsec", "DMVPN", "ADVPN", "Remote Access VPN", "Zero Trust Network Access"],
        },
        {
          label: "Secure Access",
          tags: ["802.1X", "RADIUS", "TACACS+", "Endpoint Compliance & Protection"],
        },
        {
          label: "Monitoring & Compliance",
          tags: ["Zabbix", "ISO 27001", "CCTV Infrastructure"],
        },
      ],
    },

    {
      id: "certifications",
      type: "certs",
      navLabel: "Certifications",
      heading: "Certifications",
      entries: [
        { name: "Cisco Certified Network Associate (CCNA)", valid: "Nov 2027" },
        {
          name: "Fortinet Certified Professional – Network Security (FCP)",
          valid: "Mar 2028",
          children: ["FortiGate 7.2 Administrator", "FortiClient EMS 7.2 Administrator"],
        },
        { name: "Fortinet Enterprise Firewall 7.6 Administrator", valid: "Mar 2028" },
        {
          name: "Cisco Certified Network Security Professional (CCNP Security)",
          valid: "Sep 2028",
          children: ["Security Core — SCOR 350-701", "Network Security Firepower — SNCF 300-710"],
        },
      ],
    },

    {
      id: "education",
      type: "timeline",
      navLabel: "Education",
      heading: "Education",
      entries: [
        {
          date: "May 2009",
          title: "B.Sc. Telecommunications & Electronics Engineering",
          org: "Zagazig University — GPA 3.6 / 5",
          points: [],
        },
      ],
    },

    {
      id: "training",
      type: "list",
      navLabel: "Training",
      heading: "Training",
      items: [
        { text: "Fortinet NSE7 Enterprise Firewall Training — 11.5 hrs", date: "Dec 2025", org: "Udemy" },
        { text: "Implementing and Operating Cisco Collaboration Core — 5 days", date: "Oct 2025", org: "New Horizon Training Center" },
        { text: "CCNP Security SCOR (350-701) Training — 55 hrs", date: "Feb 2025", org: "Udemy" },
        { text: "FortiClient EMS Complete Course — Endpoint Management Server — 5 hrs", date: "Jun 2024", org: "Udemy" },
        { text: "Stress Management and Burnout — 5 days", date: "Dec 2023", org: "ENPPI" },
        { text: "Reliability, Availability, Maintainability and Safety — 5 days", date: "May 2023", org: "ENPPI" },
        { text: "Coaching Skills — 5 days", date: "Oct 2022", org: "OGS (Oil and Gas Skills)" },
        { text: "Presentation Skills — 5 days", date: "Jan 2016", org: "MISR Petroleum Company" },
        { text: "Wireless Broadband System — 5 days", date: "Nov 2013", org: "SYSTEL Telecom" },
      ],
    },

    /* ---------------------------------------------------------
       EXAMPLE — copy/uncomment this block to add a new section.

    {
      id: "projects",
      type: "text",
      navLabel: "Projects",
      heading: "Projects",
      paragraphs: ["Describe a project here."],
    },

    --------------------------------------------------------- */
  ],
};
