# Cocotte

Site de recettes de cuisson lente en cocotte en fonte.

## Stack

- Next.js 15.5 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI

## Développement

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Commandes

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm start            # Serveur de production
npm run lint         # Linter
npm run type:check   # Vérification TypeScript
```

## Ajouter une recette

1. Créer `app/[slug]/page.tsx`
2. Ajouter la route dans `config/navigation.ts`
3. Ajouter l'image dans `public/`
