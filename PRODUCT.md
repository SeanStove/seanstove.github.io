# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **consultancy agencies and recruiters** who place freelance .NET developers on client projects. They land on seanstove.be while checking a candidate: they scan for seniority, current stack and availability, open the CV, and want a direct way to get in touch. They're comparing several freelancers, often quickly, and will forward the CV to an account manager or end client.

Secondary (inherited from the current copy, not reconfirmed as a focus): companies or individuals asking about a website, webshop or web app project.

## Product Purpose

seanstove.be is the professional business card of Sean Stove, a freelance .NET developer operating as Sean Stove Comm. V. Its job is to make an agency or recruiter confident enough to download the CV and make contact about a placement or consultancy assignment.

Success: a visitor quickly understands who Sean is, what Sean covers, that Sean is available for freelance work, and leaves with the CV or sends an email.

## Positioning

**Full-lifecycle .NET freelancer.** Sean covers the whole path: software design, development, CI/CD, deployment and ALM. Many .NET freelancers only write code; Sean also takes a project all the way to production. The current copy already points this way ("software design, ontwikkeling en deployment", "de vele facetten van het ALM verhaal", agile and transparent ways of working).

## Operating Context

- Visitors usually arrive through a link from an agency, recruiter or LinkedIn-style profile, or by searching for the name. They're often on desktop at work, but sometimes on a phone.
- The CV PDF is the artifact that travels onward: agencies forward it to clients. The site has to make the CV easy to find and download.
- Contact is by email (info@seanstove.be). The site has no contact form; the CSS still has form and popup styles from an earlier version.

## Capabilities and Constraints

- Static one-page site (`index.html`, inline CSS, `css/style.css`, self-hosted Lato fonts, `img/`) served by **GitHub Pages** on the custom domain `seanstove.be` (`CNAME`). Jekyll is configured (`jekyll-theme-cayman`) but doesn't process `index.html`, which has no front matter.
- Analytics: Plausible (`data-domain="seanstove.be"`). Keep it privacy-friendly, with no cookie banner.
- Dependencies today: jQuery 1.11.3 from cdnjs for smooth scrolling only.
- **Language: Dutch only** (`lang="nl"`). The copy addresses the visitor formally as "u".
- **Stack (confirmed 2026-11-11):** the core is still **.NET**, kept current on the latest versions. Version-pinned labels like "ASP.NET 4.0" are out of date. On the frontend: **React, Angular, Svelte** and **Tailwind**, plus the modern frontend tooling in general. **Umbraco is no longer offered**; don't mention it.
- **Experience (confirmed 2026-11-11):** **20 years**.
- **.NET web (confirmed 2026-11-11):** **ASP.NET MVC**, **WebAPI** and **Blazor**, with no version-pinned labels like "ASP.NET 4.0". **Don't distinguish "Core" from classic**: write "ASP.NET" and "Entity Framework", never "ASP.NET Core" / "EF Core" as separate items.
- **Cloud and ALM (confirmed 2026-11-11):** **Azure** and **Azure DevOps** (CI/CD pipelines, hosting and deployment). They back up the full-lifecycle positioning. Azure DevOps replaces "TFS" on the site.
- **Modern .NET (confirmed 2026-11-11):** ASP.NET (MVC / WebAPI, Minimal APIs), Blazor, Entity Framework, SignalR, gRPC, .NET Aspire, MassTransit / RabbitMQ, xUnit / Playwright. TypeScript next to JavaScript.
- **Azure (confirmed 2026-11-11):** App Service, Functions, Azure SQL, Service Bus, Key Vault, Entra ID / OpenID Connect, GitHub Actions, Bicep / Terraform, Application Insights, OpenTelemetry.
- **AI (confirmed 2026-11-11):** Azure OpenAI, Semantic Kernel, Microsoft.Extensions.AI, used to integrate AI into applications. Sean also writes software with AI coding tools such as Claude; mention it plainly, without hype.
- **Legacy, listed last:** WCF / ADO.NET, jQuery, XML / XSLT, Octopus Deploy, IIS. Keep them below the modern items; they show breadth, not focus.
- **Open — availability:** whether to show current availability (and how) hasn't been decided.

## Brand Commitments

- Name and legal entity: **Sean Stove**, trading as **Sean Stove Comm. V.**
- Fixed company details (confirmed correct, show them verbatim): Odiel Spruyttestraat 2, 8870 Izegem, West-Vlaanderen · BTW: BE0661846737 · info@seanstove.be
- Existing assets: logo (`img/logo.jpg`), favicons and tile icons, photos (`img/header.jpg`, `img/skills.jpg`, `img/contact.jpg`).
- Voice: personal, direct and professional Dutch. First person ("ik"), formal "u" towards the visitor.

## Evidence on Hand

- **CV PDF** at `files/seanstove-cv.pdf`. This is the primary proof. Sean says the CV is up to date or will provide a new one; check with Sean before replacing the file.
- **Not available, don't make up:** client names, project case studies, testimonials, logos of past clients, certifications, ratings or numeric claims beyond what Sean provides.

## Product Principles

1. **Built for the recruiter's scan.** Seniority, lifecycle coverage, stack and how to get in touch must come across within seconds, without scrolling through prose.
2. **The CV is the conversion.** Every path leads to downloading the CV or sending an email. Nothing should compete with that.
3. **Show the full lifecycle, not a buzzword list.** The design → build → deploy → ALM story is what sets Sean apart. Skill lists back it up, but they aren't the message.
4. **Only verifiable facts.** No made-up clients, quotes or numbers. Proof comes from the CV and Sean's own statements.
5. **Small and fast.** A static, light page on GitHub Pages that works well on a phone and needs little upkeep.
