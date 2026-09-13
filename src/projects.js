// Editorial picks, not a quantitative ranking. Official sources reviewed 2026-09-13.
// Keep descriptions, limitations, and sources together when adding a project.
export const projects = [
  {
    id: "eos",
    name: "/e/OS",
    category: "Operating systems",
    tagline: "Your phone. Minus the Google grip.",
    description:
      "An Android-based mobile OS that reduces your reliance on Google services and puts privacy controls in your hands.",
    replaces: ["Android"],
    alternative: "Google’s Android experience",
    setup: "Check your device",
    color: "#e66342",
    background: "#fff0e9",
    tag: "A FRESH START",
    impact:
      "Makes a more independent smartphone experience accessible beyond the custom-ROM crowd.",
    caveat:
      "Only supported devices can run it. Check essential apps, banking, payments, and device-specific support before switching. Android compatibility is not universal, and installing an OS can erase your data.",
    start:
      "Check the supported-device list first, or explore a phone with /e/OS preinstalled.",
    url: "https://e.foundation/e-os/",
    source: "https://doc.e.foundation/os/",
    guide: "https://doc.e.foundation/devices",
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    category: "Everyday tools",
    tagline: "Your cloud. Your little kingdom.",
    description:
      "Files, calendars, contacts, and collaboration in a cloud you can host yourself or choose a provider for.",
    replaces: ["Google Drive", "Dropbox"],
    alternative: "Google Drive & Dropbox",
    setup: "Hosting needed",
    color: "#0082c9",
    background: "#eaf5fd",
    tag: "TAKE BACK YOUR FILES",
    impact:
      "Brings file sharing and team collaboration into infrastructure that individuals and organizations can control.",
    caveat:
      "The software is open source, but servers, storage, backups, and managed hosting can cost money. Self-hosting means you maintain updates and security. Features depend on installed apps and your provider.",
    start:
      "Choose a managed provider for less administration, or follow the self-hosting documentation.",
    url: "https://nextcloud.com/",
    source: "https://nextcloud.com/files/",
    guide: "https://nextcloud.com/install/",
  },
  {
    id: "jellyfin",
    name: "Jellyfin",
    category: "Media & creativity",
    tagline: "The only algorithm is your taste.",
    description:
      "Give your own movies, shows, and music a beautiful home. Stream your collection from your own media server.",
    replaces: ["Plex", "Emby"],
    alternative: "Plex & Emby",
    setup: "Hosting needed",
    color: "#8855c4",
    background: "#f1ecfa",
    tag: "YOUR OWN BOX OFFICE",
    impact:
      "A community-built media server with free official clients and no subscription required to unlock server features.",
    caveat:
      "Jellyfin does not supply movies, music, or a streaming-service catalogue. You provide the media, storage, and server. Transcoding and remote access can need extra setup.",
    start:
      "Install a server on a suitable computer, add your own media, then connect a client.",
    url: "https://jellyfin.org/",
    source: "https://jellyfin.org/docs/general/about/",
    guide: "https://jellyfin.org/docs/general/quick-start/",
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    category: "Everyday tools",
    tagline: "Big spreadsheet energy. No rent.",
    description:
      "Documents, spreadsheets, and presentations. A full desktop office suite that gets down to business, offline too.",
    replaces: ["Microsoft 365", "Microsoft Office"],
    alternative: "Microsoft 365",
    setup: "Easy first switch",
    color: "#258542",
    background: "#edf6e8",
    tag: "GET STUFF DONE",
    impact:
      "Keeps a capable, community-developed office suite available to anyone, with open document formats at its core.",
    caveat:
      "Complex Microsoft Office layouts, macros, and advanced features may not transfer perfectly. It is a desktop suite, not a hosted real-time collaboration service.",
    start:
      "Install it alongside your current suite and test copies of the documents you use most.",
    url: "https://www.libreoffice.org/",
    source: "https://www.libreoffice.org/discover/libreoffice/",
    guide: "https://www.libreoffice.org/download/download-libreoffice/",
  },
  {
    id: "linuxmint",
    name: "Linux Mint",
    category: "Operating systems",
    tagline: "New life for your trusty laptop.",
    description:
      "A welcoming Linux desktop with familiar essentials. An excellent place to begin exploring life beyond Windows.",
    replaces: ["Windows", "macOS"],
    alternative: "Windows & macOS",
    setup: "Try a live USB",
    color: "#53893b",
    background: "#f0f5dd",
    tag: "MEET LINUX",
    impact:
      "Makes the wider Linux ecosystem approachable with a familiar desktop, graphical tools, and a community focus.",
    caveat:
      "Check hardware, games, and work apps first; some Windows and macOS software has no native Linux version. Back up before installing. Optional codecs and drivers may be proprietary.",
    start:
      "Try a live USB without installing, then follow the official installation guide if it fits.",
    url: "https://linuxmint.com/",
    source: "https://linuxmint.com/about.php",
    guide: "https://linuxmint-installation-guide.readthedocs.io/en/latest/",
  },
  {
    id: "blender",
    name: "Blender",
    category: "Media & creativity",
    tagline: "Make the thing in your head.",
    description:
      "Model, sculpt, animate, and render in a complete 3D creation suite. Your imagination can keep the subscription fee.",
    replaces: ["Maya", "Cinema 4D"],
    alternative: "Autodesk Maya & Cinema 4D",
    setup: "Room to learn",
    color: "#e47828",
    background: "#fff0de",
    tag: "CREATIVE FREEDOM",
    impact:
      "Puts a broad 3D production toolkit within reach of independent artists, students, and professional teams.",
    caveat:
      "Expect a learning curve. Existing plugins and studio pipelines may require adaptation, and complex rendering benefits from capable hardware.",
    start:
      "Download Blender and work through the official getting-started material.",
    url: "https://www.blender.org/",
    source: "https://www.blender.org/about/",
    guide: "https://www.blender.org/support/tutorials/",
  },
  {
    id: "onlyoffice",
    name: "ONLYOFFICE Desktop Editors",
    category: "Everyday tools",
    tagline: "A familiar face for your documents.",
    description:
      "An open-source desktop editor for documents, spreadsheets, and presentations, with a focus on Microsoft file formats.",
    replaces: ["Microsoft 365", "Microsoft Office"],
    alternative: "Microsoft 365 desktop apps",
    setup: "Easy first switch",
    color: "#cf603d",
    background: "#fff0e9",
    impact:
      "Adds another open-source office choice, particularly for people exchanging DOCX, XLSX, and PPTX files.",
    caveat:
      "This recommendation is for Desktop Editors. Cloud and server editions have separate plans and limits. Test complex files and macros; compatibility is not identical to Microsoft Office.",
    start: "Install Desktop Editors and test your usual document workflow.",
    url: "https://www.onlyoffice.com/desktop",
    source: "https://www.onlyoffice.com/desktop",
    guide: "https://www.onlyoffice.com/download-desktop",
  },
  {
    id: "firefox",
    name: "Firefox",
    category: "Everyday tools",
    tagline: "A browser with its own engine.",
    description:
      "An open-source browser with tracking protection, extensions, and an independent browser engine.",
    replaces: ["Chrome", "Edge"],
    alternative: "Google Chrome & Edge",
    setup: "Easy first switch",
    color: "#d85a24",
    background: "#fff0e4",
    impact:
      "Preserves an important alternative browser engine in a web dominated by Chromium-based browsers.",
    caveat:
      "Some sites work differently across browsers. Review privacy settings, telemetry preferences, and optional features to suit your needs; no browser makes you anonymous by default.",
    start: "Install Firefox, import bookmarks, and try your everyday websites.",
    url: "https://www.firefox.com/",
    source: "https://www.firefox.com/en-US/",
    guide:
      "https://support.mozilla.org/en-US/kb/get-started-firefox-overview-main-features",
  },
  {
    id: "bitwarden",
    name: "Bitwarden",
    category: "Everyday tools",
    tagline: "Your passwords deserve better.",
    description:
      "Generate and manage unique passwords in an encrypted vault, with apps and browser extensions across devices.",
    replaces: ["LastPass", "1Password"],
    alternative: "LastPass & 1Password",
    setup: "Easy first switch",
    color: "#175ddc",
    background: "#eaf0ff",
    impact:
      "Makes an open-source password-manager option available for personal use and team workflows.",
    caveat:
      "Paid plans unlock some features. Bitwarden has multiple products and component licenses; this pick is the password manager. Keep recovery information safe and review import/export handling.",
    start:
      "Set up a vault and recovery plan, then migrate passwords using the official guide.",
    url: "https://bitwarden.com/",
    source: "https://bitwarden.com/open-source/",
    guide: "https://bitwarden.com/help/getting-started-webvault/",
  },
  {
    id: "signal",
    name: "Signal",
    category: "Everyday tools",
    tagline: "Less noise. Private conversations.",
    description:
      "An open-source messaging app with end-to-end encrypted messages and calls, built by an independent nonprofit.",
    replaces: ["WhatsApp"],
    alternative: "WhatsApp",
    setup: "Bring your friends",
    color: "#3866d9",
    background: "#eaf0ff",
    impact:
      "Makes encrypted everyday communication accessible through a straightforward messaging experience.",
    caveat:
      "Your contacts need Signal too. A phone number is required to register, although usernames can help you connect without sharing it. It does not connect to WhatsApp chats.",
    start: "Install the app and invite one person you talk to regularly.",
    url: "https://signal.org/",
    source: "https://signal.org/",
    guide:
      "https://support.signal.org/hc/en-us/articles/360008216551-Installing-Signal",
  },
  {
    id: "thunderbird",
    name: "Thunderbird",
    category: "Everyday tools",
    tagline: "An inbox that answers to you.",
    description:
      "Bring email, calendars, and contacts together in an open-source desktop app that works with many mail providers.",
    replaces: ["Outlook"],
    alternative: "Outlook desktop",
    setup: "Easy first switch",
    color: "#287bc3",
    background: "#eaf5fd",
    impact:
      "Keeps a community-oriented email client available across desktop operating systems and email providers.",
    caveat:
      "It is an email client, not an email hosting service. Check compatibility with your organization’s authentication and calendar requirements.",
    start: "Install Thunderbird and connect an existing email account.",
    url: "https://www.thunderbird.net/",
    source: "https://www.thunderbird.net/en-US/",
    guide: "https://support.mozilla.org/en-US/products/thunderbird",
  },
  {
    id: "gimp",
    name: "GIMP",
    category: "Media & creativity",
    tagline: "More layers. Fewer strings.",
    description:
      "Retouch photos, compose images, and make original artwork with an extensible image editor.",
    replaces: ["Photoshop"],
    alternative: "Adobe Photoshop",
    setup: "Room to learn",
    color: "#6c645a",
    background: "#f0eeeb",
    impact:
      "Gives people a substantial image-editing toolkit without a proprietary subscription.",
    caveat:
      "Photoshop workflows, plugins, and complex PSD files may not transfer cleanly. Check the features your print or photography workflow needs.",
    start: "Open a copy of a photo and try the official beginner tutorials.",
    url: "https://www.gimp.org/",
    source: "https://www.gimp.org/about/",
    guide: "https://www.gimp.org/tutorials/",
  },
  {
    id: "inkscape",
    name: "Inkscape",
    category: "Media & creativity",
    tagline: "Big ideas. Infinitely scalable.",
    description:
      "Draw logos, illustrations, and diagrams with a vector editor built around the open SVG format.",
    replaces: ["Illustrator"],
    alternative: "Adobe Illustrator",
    setup: "Room to learn",
    color: "#44463d",
    background: "#efefea",
    impact:
      "Makes vector design and standards-based graphics available across Windows, macOS, and Linux.",
    caveat:
      "Illustrator files and print-production features are not fully interchangeable. Confirm export and color requirements before migrating a professional workflow.",
    start: "Try a simple illustration using the built-in tutorials.",
    url: "https://inkscape.org/",
    source: "https://inkscape.org/en/about/overview/",
    guide: "https://inkscape.org/learn/tutorials/",
  },
  {
    id: "vlc",
    name: "VLC",
    category: "Media & creativity",
    tagline: "The traffic cone that just plays it.",
    description:
      "A versatile media player for local files, discs, and streams, with broad format support.",
    replaces: ["Windows Media Player"],
    alternative: "Proprietary media players",
    setup: "Easy first switch",
    color: "#d97819",
    background: "#fff1df",
    impact:
      "A longstanding example of open-source software solving a common problem: playing media across platforms.",
    caveat:
      "It plays media you provide; it does not include a content subscription or replace a media-server library. DRM-protected streaming services may require their own apps.",
    start: "Install VLC and open a local audio or video file.",
    url: "https://www.videolan.org/vlc/",
    source: "https://github.com/videolan/vlc",
    guide: "https://www.videolan.org/vlc/",
  },
  {
    id: "obs",
    name: "OBS Studio",
    category: "Media & creativity",
    tagline: "Your broadcast. No gatekeeper.",
    description:
      "Record your screen and build live streams with scenes, audio mixing, and flexible capture sources.",
    replaces: ["XSplit"],
    alternative: "XSplit Broadcaster",
    setup: "Some setup",
    color: "#42424a",
    background: "#edecf2",
    impact:
      "Puts a capable recording and broadcasting toolkit in the hands of creators, educators, and communities.",
    caveat:
      "OBS is a recorder and broadcaster, not a full video editor. Encoding settings, capture permissions, and hardware affect performance.",
    start: "Run the auto-configuration wizard and make a short test recording.",
    url: "https://obsproject.com/",
    source: "https://obsproject.com/",
    guide: "https://obsproject.com/kb/quick-start-guide",
  },
  {
    id: "krita",
    name: "Krita",
    category: "Media & creativity",
    tagline: "A blank canvas. An open invitation.",
    description:
      "A digital painting studio for illustrations, concept art, comics, and 2D animation.",
    replaces: ["Photoshop", "Corel Painter"],
    alternative: "Corel Painter & painting in Photoshop",
    setup: "Room to learn",
    color: "#b04794",
    background: "#f9eafa",
    impact:
      "Gives digital artists a painting-focused tool shaped by an open-source community.",
    caveat:
      "Krita focuses on painting, not replacing every photo-editing or publishing workflow. Check drawing-tablet support on your system.",
    start: "Install it and explore brushes with a drawing tablet or mouse.",
    url: "https://krita.org/",
    source: "https://krita.org/en/",
    guide: "https://docs.krita.org/en/user_manual/getting_started.html",
  },
  {
    id: "debian",
    name: "Debian",
    category: "Operating systems",
    tagline: "The foundation under the foundations.",
    description:
      "A community-built operating system powering desktops and servers—and serving as the base for other Linux distributions.",
    replaces: ["Windows Server", "Windows"],
    alternative: "Windows & Windows Server",
    setup: "Some setup",
    color: "#b82654",
    background: "#fcebf0",
    impact:
      "A foundational distribution in the Linux ecosystem, with a social contract centered on free software.",
    caveat:
      "Stable releases prioritize predictability over the newest application versions. Hardware may need non-free firmware. Server administration and installation require care.",
    start:
      "Read the installation guide or explore Debian in a virtual machine.",
    url: "https://www.debian.org/",
    source: "https://www.debian.org/intro/about",
    guide: "https://www.debian.org/distrib/",
  },
  {
    id: "git",
    name: "Git",
    category: "Developer tools",
    tagline: "Great ideas deserve a history.",
    description:
      "Distributed version control that lets developers track changes, branch ideas, and collaborate on code.",
    replaces: ["Proprietary version control"],
    alternative: "Proprietary version control",
    setup: "Learn the basics",
    color: "#d44b32",
    background: "#fff0e9",
    impact:
      "A foundational collaboration tool for open-source programming. Every clone can carry a project’s history.",
    caveat:
      "Git is version control, not GitHub or a hosted collaboration platform. Branching, merging, and managing large binary files take practice.",
    start:
      "Work through the free Pro Git book and create a small local repository.",
    url: "https://git-scm.com/",
    source: "https://git-scm.com/",
    guide: "https://git-scm.com/book/en/v2",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Developer tools",
    tagline: "Serious data. Open foundations.",
    description:
      "An extensible open-source relational database for applications, analytics, and demanding data workloads.",
    replaces: ["Microsoft SQL Server", "Oracle Database"],
    alternative: "Oracle Database & SQL Server",
    setup: "Developer territory",
    color: "#336791",
    background: "#eaf2f7",
    impact:
      "A mature database foundation for building software without a proprietary database license.",
    caveat:
      "Migrating stored procedures, types, and operations from another database is a real engineering project. Hosting, backups, and support still need a budget.",
    start: "Follow the official tutorial with a local development database.",
    url: "https://www.postgresql.org/",
    source: "https://www.postgresql.org/about/",
    guide: "https://www.postgresql.org/docs/current/tutorial.html",
  },
  {
    id: "python",
    name: "Python",
    category: "Developer tools",
    tagline: "Small scripts. Very big possibilities.",
    description:
      "An open-source programming language for automation, web development, data analysis, and learning to code.",
    replaces: ["Proprietary scripting tools"],
    alternative: "Proprietary scripting ecosystems",
    setup: "Learn the basics",
    color: "#3976a4",
    background: "#edf3f7",
    impact:
      "An accessible entry into programming and a shared foundation for a broad ecosystem of scientific and developer tools.",
    caveat:
      "Python is a language, not a ready-made replacement for a particular app. Dependencies have their own licenses, and projects need environment and package management.",
    start:
      "Begin with the official introductory resources and automate one small task.",
    url: "https://www.python.org/",
    source: "https://www.python.org/about/",
    guide: "https://www.python.org/about/gettingstarted/",
  },
];
