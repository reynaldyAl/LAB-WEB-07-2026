# Graph Report - pustaka-senja9  (2026-11-12)

## Corpus Check
- Corpus is ~8,548 words - fits in a single context window. You may not need a graph.

## Summary
- 136 nodes · 228 edges · 15 communities (8 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.93)
- Token cost: 120 input · 85 output

## Community Hubs (Navigation)
- Package Dependencies and Tooling
- Catalog Mutation Server Actions
- Global Layout and Shared Constants
- Home Page and Virtual Bookshelf
- Book Detail and Deletion Flow
- Interactive Catalog Search and Filter
- Database Driver and CLI Setup
- NPM Scripts and Development Commands
- Book Suggestion Submission
- JavaScript Path Aliases Configuration
- Next.js Framework Configuration
- Server-side Input Validation

## God Nodes (most connected - your core abstractions)
1. `next` - 15 edges
2. `react` - 9 edges
3. `gayaUntuk()` - 8 edges
4. `scripts` - 7 edges
5. `BerandaPage()` - 7 edges
6. `ambilBukuById` - 7 edges
7. `FormBuku()` - 6 edges
8. `KatalogInteraktif()` - 6 edges
9. `TombolHapus()` - 6 edges
10. `pg` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Server Actions Katalog Mutasi` --references--> `hapusBuku()`  [INFERRED]
  README.md → src/app/katalog/actions.js
- `Database Connection Pool Pattern` --implements--> `pool`  [INFERRED]
  README.md → src/lib/db.js
- `PostgreSQL Raw SQL Integration` --references--> `pool`  [INFERRED]
  README.md → src/lib/db.js
- `Next.js Server Actions Katalog Mutasi` --references--> `tambahBuku()`  [INFERRED]
  README.md → src/app/katalog/actions.js
- `Pustaka Senja Sunset & Bookshelf Favicon` --conceptually_related_to--> `Pustaka Senja Community Library`  [INFERRED]
  public/favicon.svg → README.md

## Import Cycles
- None detected.

## Communities (15 total, 7 thin omitted)

### Community 0 - "Package Dependencies and Tooling"
Cohesion: 0.10
Nodes (24): eslintConfig, dependencies, @fontsource-variable/fraunces@^5.3.0, @fontsource-variable/instrument-sans@^5.3.0, next@16.4.5, react@19.3.0, react-dom@19.3.0, server-only@^0.0.1 (+16 more)

### Community 1 - "Catalog Mutation Server Actions"
Cohesion: 0.15
Nodes (13): Pustaka Senja Sunset & Bookshelf Favicon, Database Connection Pool Pattern, PostgreSQL Raw SQL Integration, Pustaka Senja Community Library, Next.js Server Actions Katalog Mutasi, tambahBuku(), BaruPage(), metadata (+5 more)

### Community 2 - "Global Layout and Shared Constants"
Cohesion: 0.14
Nodes (11): metadata, RootLayout(), viewport, Footer(), daftarMenu, Navbar(), gayaCadangan, gayaKategori (+3 more)

### Community 3 - "Home Page and Virtual Bookshelf"
Cohesion: 0.20
Nodes (11): next, metadata, BerandaPage(), dynamic, Hero(), dapatkanGayaPunggung(), profilBuku, RakBukuVirtual() (+3 more)

### Community 4 - "Book Detail and Deletion Flow"
Cohesion: 0.24
Nodes (12): react, hapusBuku(), DetailBukuPage(), dynamic, generateMetadata(), pesanStatus, BukuCard(), daftarKategori (+4 more)

### Community 5 - "Interactive Catalog Search and Filter"
Cohesion: 0.28
Nodes (6): dynamic, KatalogPage(), metadata, pesanStatus, KatalogInteraktif(), ambilSemuaBuku()

### Community 6 - "Database Driver and CLI Setup"
Cohesion: 0.29
Nodes (4): pg@^8.23.1, pg, pool, client

### Community 7 - "NPM Scripts and Development Commands"
Cohesion: 0.29
Nodes (7): scripts, build, db:cek, db:setup, dev, lint, start

## Knowledge Gaps
- **3 isolated node(s):** `Database Connection Pool Pattern`, `Server-side Validation & Integrity`, `Pustaka Senja Sunset & Bookshelf Favicon`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 50 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Home Page and Virtual Bookshelf` to `Package Dependencies and Tooling`, `Catalog Mutation Server Actions`, `Global Layout and Shared Constants`, `Book Detail and Deletion Flow`, `Interactive Catalog Search and Filter`?**
  _High betweenness centrality (0.296) - this node is a cross-community bridge._
- **What connects `Database Connection Pool Pattern`, `Server-side Validation & Integrity`, `Pustaka Senja Sunset & Bookshelf Favicon` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Dependencies and Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.10461538461538461 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Book Detail and Deletion Flow` to `Package Dependencies and Tooling`, `Catalog Mutation Server Actions`, `Home Page and Virtual Bookshelf`, `Book Suggestion Submission`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `Global Layout and Shared Constants` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `NPM Scripts and Development Commands` to `Package Dependencies and Tooling`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._