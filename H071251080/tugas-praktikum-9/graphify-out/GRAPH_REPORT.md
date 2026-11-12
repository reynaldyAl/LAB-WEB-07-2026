# Graph Report - pustaka-senja9  (2026-11-12)

## Corpus Check
- 34 files · ~10,040 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 156 nodes · 247 edges · 17 communities (10 shown, 7 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

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
- Rules
- Ponytail, lazy senior dev mode

## God Nodes (most connected - your core abstractions)
1. `next` - 16 edges
2. `Rules` - 10 edges
3. `react` - 9 edges
4. `gayaUntuk()` - 8 edges
5. `scripts` - 7 edges
6. `BerandaPage()` - 7 edges
7. `ambilBukuById` - 7 edges
8. `KatalogInteraktif()` - 6 edges
9. `TombolHapus()` - 6 edges
10. `caveman` - 6 edges

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

## Communities (17 total, 7 thin omitted)

### Community 0 - "Package Dependencies and Tooling"
Cohesion: 0.10
Nodes (24): eslintConfig, dependencies, @fontsource-variable/fraunces@^5.3.0, @fontsource-variable/instrument-sans@^5.3.0, next@16.4.5, react@19.3.0, react-dom@19.3.0, server-only@^0.0.1 (+16 more)

### Community 1 - "Catalog Mutation Server Actions"
Cohesion: 0.11
Nodes (19): Pustaka Senja Sunset & Bookshelf Favicon, Database Connection Pool Pattern, PostgreSQL Raw SQL Integration, Pustaka Senja Community Library, Next.js Server Actions Katalog Mutasi, next, tambahBuku(), ubahBuku() (+11 more)

### Community 2 - "Global Layout and Shared Constants"
Cohesion: 0.25
Nodes (7): metadata, RootLayout(), viewport, Footer(), daftarMenu, Navbar(), infoRuangBaca

### Community 3 - "Home Page and Virtual Bookshelf"
Cohesion: 0.29
Nodes (9): BerandaPage(), dynamic, Hero(), dapatkanGayaPunggung(), profilBuku, RakBukuVirtual(), ambilBukuSiapDipinjam(), ambilSemuaBuku() (+1 more)

### Community 4 - "Book Detail and Deletion Flow"
Cohesion: 0.16
Nodes (14): react, hapusBuku(), DetailBukuPage(), dynamic, pesanStatus, BukuCard(), daftarKategori, TombolHapus() (+6 more)

### Community 5 - "Interactive Catalog Search and Filter"
Cohesion: 0.29
Nodes (5): dynamic, KatalogPage(), metadata, pesanStatus, KatalogInteraktif()

### Community 6 - "Database Driver and CLI Setup"
Cohesion: 0.29
Nodes (4): pg@^8.23.1, pg, pool, client

### Community 7 - "NPM Scripts and Development Commands"
Cohesion: 0.29
Nodes (7): scripts, build, db:cek, db:setup, dev, lint, start

### Community 15 - "Rules"
Cohesion: 0.12
Nodes (15): 1. Answer first, 2. Kill ceremony, 3. Short word, 4. Articles optional, meaning never, 5. One idea per sentence, 6. Payload verbatim, 7. Tool runs: bounded status, 8. User's language (+7 more)

### Community 16 - "Ponytail, lazy senior dev mode"
Cohesion: 0.50
Nodes (3): Before you write, Ponytail, lazy senior dev mode, The smallest complete change

## Knowledge Gaps
- **3 isolated node(s):** `Database Connection Pool Pattern`, `Pustaka Senja Sunset & Bookshelf Favicon`, `Server-side Validation & Integrity`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 66 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Catalog Mutation Server Actions` to `Package Dependencies and Tooling`, `Global Layout and Shared Constants`, `Home Page and Virtual Bookshelf`, `Book Detail and Deletion Flow`, `Interactive Catalog Search and Filter`?**
  _High betweenness centrality (0.229) - this node is a cross-community bridge._
- **What connects `Database Connection Pool Pattern`, `Pustaka Senja Sunset & Bookshelf Favicon`, `Server-side Validation & Integrity` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Dependencies and Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.10461538461538461 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Book Detail and Deletion Flow` to `Package Dependencies and Tooling`, `Catalog Mutation Server Actions`, `Home Page and Virtual Bookshelf`, `Book Suggestion Submission`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `Catalog Mutation Server Actions` be split into smaller, more focused modules?**
  _Cohesion score 0.11384615384615385 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `NPM Scripts and Development Commands` to `Package Dependencies and Tooling`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._