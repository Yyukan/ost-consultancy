# OLEKSANDR SHTYKHNO

**Noord-Holland, Nederland** · [ost.consultancy@gmail.com](mailto:ost.consultancy@gmail.com) · [ost-consultancy.nl](https://ost-consultancy.nl) · [linkedin.com/in/yukan](https://www.linkedin.com/in/yukan) · [github.com/Yyukan](https://github.com/Yyukan)

## SAMENVATTING

Senior Scala- & cloud solution architect — 25+ jaar in JVM-backend, event-driven dataplatforms en cloud-native architectuur (Scala 2/3, Cats, ZIO, Akka, Kafka, Kubernetes, AWS/Azure), momenteel bezig met AI-ondersteunde delivery bij ING in een strikt afgeschermde enterprise-omgeving.

## KERNRESULTATEN

*   **Cloudmigratie:** 35+ microservices (60+ repositories), 5+ databases, Kafka, Cassandra en Elasticsearch — AWS → Azure met **nul downtime**.
*   **Schaal:** track-and-trace leespad herbouwd op Cassandra + Elasticsearch — **3–4 s → 15–30 ms bij ~1.000 rps**; de grootste klachtenbron opgelost.
*   **Modernisering & levering:** Scala 2.13 → 3 in de hele omgeving; 30+ endpoints van Akka HTTP naar ZIO; een Scala-service herschreven in Go binnen een **deadline van 2 maanden**.
*   **AI-ondersteunde engineering:** agent harnesses, session-hook geheugen en RAG-kennisbanken — gebouwd binnen een strikt afgeschermde omgeving (geen MCP, geen vendor memory).

## KERNSTACK

*   **Talen & FP:** Scala 2/3 (8+ jaar — Cats, ZIO, Akka), Java (15+ jaar), Go, Kotlin; functioneel ontwerp, TDD.
*   **Data & streaming:** Kafka (upgrade, schema registry), Cassandra, PostgreSQL, Oracle, Elasticsearch, Hadoop, DynamoDB, S3 / Azure Blob.
*   **Cloud & platform:** AWS, Azure, Kubernetes, Docker, GitHub Actions, Jenkins, gRPC / REST, DataDog.
*   **AI & agentic:** GitHub Copilot CLI (GH-300), Skills en session hooks, agent harnesses, RAG / LLM-kennisbanken, prompt engineering, MCP.
*   **Architectuur:** microservices, event-driven ontwerp, zero-downtime migraties, enterprise-architectuur, Agile / CI-CD, mentoring.

## WERKERVARING

### Software Engineer, ING, Nederland | Nov 2025 - heden

Externe consultant via OST Consultancy — Data Customer NL.

**Technologiestack:** Scala 2, Cats, Kafka, Postgres, Oracle, GitHub Copilot CLI.

*   **AI-coach en presentator voor het team:** hands-on sessies gegeven over Copilot CLI, custom Skills en agent-workflows, en engineers gecoacht om AI-ondersteunde ontwikkeling zelf toe te passen.
*   Gaf een afgeschermde coding assistant persistent geheugen over sessies heen met een second-brain laag van session hooks, Skills en Markdown-opslag — zonder MCP, vrijwel geen onderhoud — en zette verspreide teamdocumentatie om in een doorzoekbare RAG-wiki.
*   Verlaagde integratie-overhead met een gedeelde agent-as-runtime library die in meerdere teamprojecten wordt hergebruikt, automatiseerde PACT-integratietesten via Simulation TestKit, en verminderde technische schuld in een bedrijfskritische Scala 2-applicatie (stabilisatiemodule verwijderd, uitfasering begeleid).

### Freelance Scala/Go Engineer, Shell Recharge, Nederland | Nov 2024 - Nov 2025

Opdracht binnen MSP (Mobility Service Provider).

**Technologiestack:** Scala 2/3, GoLang, Cats, ZIO, Akka, Kafka, Postgres, DynamoDB, AWS, K8s, DataDog.

*   Herstelde berichtdoorvoer en betrouwbaarheid door kritieke Kafka-consumerproblemen op te lossen die de productieverwerking afknepen.
*   Moderniseerde services over meerdere stacks: 30+ endpoints van Akka HTTP naar ZIO achter een testvangnet, en een Scala-microservice herschreven in Go (30+ endpoints) en binnen een **deadline van 2 maanden** naar productie gebracht, met een kleinere resource-voetafdruk.
*   Bouwde een universele rate limiter als ZIO-middleware, verhielp Kubernetes-rollbackprocedures die mislukte deployments veroorzaakten, en begeleidde de migratie van laadpasgegevens naar een extern systeem.

### Freelance Scala Engineer / Solution Architect, FedEx Express, Nederland | Jun 2018 - Nov 2024

Bedrijfskritisch B2B-platform; afstemming met stakeholders, coaching en technische reviews.

**Technologiestack:** Scala, Cats, ZIO, Akka, Kafka, Cassandra, Postgres, Oracle, ElasticSearch, AWS, Azure, K8s.

*   **Cloudmigratie, nul downtime:** het hele platform van AWS naar Azure gemigreerd — **35+ microservices over 60+ repositories**, inclusief 5+ PostgreSQL-databases, een Kafka-cluster, Cassandra en Elasticsearch — **zonder voor klanten zichtbare downtime**, in kleine verifieerbare stappen achter feature flags; opslag verhuisde zonder codewijziging.
*   **Kafka-platform:** upgrade naar Kafka 2.x en verhuizing van het cluster tussen clouds met extra consumers en een geleidelijke overgang van producers — eveneens zonder downtime.
*   **Schaal — track & trace (~1.000 rps):** het Node.js/PostgreSQL-leespad vervangen door Cassandra plus Elasticsearch: klantgerichte queries van **3–4 seconden naar 15–30 ms** bij **~1.000 rps**, en de grootste klachtenbron opgelost.
*   **Latentie:** latency tussen services teruggebracht van **30 ms naar 5 ms** met een proto-definitie-library die interne calls van REST naar gRPC bracht.
*   **Modernisering, CI & team:** Scala 2.13 → 3; Jenkins → GitHub Actions met eigen pipelines en build images; Kubernetes-migratie waarbij JDK-valkuilen rond CPU en geheugen aan het licht kwamen; engineers gecoacht, ontwerpen gereviewd en technische interviews afgenomen.

### Senior Software Engineer, Bol.com, Nederland | Nov 2015 - Jun 2018

Een van de grootste e-commerceplatforms van Nederland — Java, Kotlin, Spring Boot, Hadoop, SQL/NoSQL, full-text search, GCP.

*   Breidde de message-based en reactieve architectuur van het platform uit voor hogere datavolumes, en leverde SQL-, NoSQL- en full-text zoekoplossingen.

### Senior Software Engineer, AssetControl, Nederland | Sep 2010 - Nov 2015

Software voor referentie- en risicogegevens bij financiële instellingen — Java, Spring, Oracle, JIRA-pluginontwikkeling, testautomatisering.

*   Leverde een risicogegevensbeheerder voor curve-gebaseerde financiële data, een realtime operationeel dashboard (desktop en mobiel), een JIRA-plugin die intern werd gebruikt voor de agile-werkwijze, en verbeterde de testautomatisering voor grote datavolumes.

## OPLEIDING & CERTIFICATEN

**Masterdiploma, Computer Engineering** — National Technical University of Ukraine 'Kharkiv Polytechnic Institute', 1997–2003

GH-300 GitHub Copilot (2026) · Prompt Engineering for AI Bootcamp (2025) · Software Architecture: Developer to Architect (2024) · Rust by Building Real Applications (2024) · Certified Kubernetes Application Developer (2020) · Scala Advanced (2018)

**Talen:** Oekraïens (moedertaal) · Engels (volledig professioneel) · Nederlands (B1)
