import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NotFound from './components/NotFound'
import { I18nProvider } from './i18n/I18nProvider'
import type { Dictionary } from './i18n/types'
import './styles/global.css'

// Entrada da página 404 (404.html). O Cloudflare a serve com status 404 para
// qualquer caminho que não existe (ver wrangler.jsonc → not_found_handling).
const title = (t: Dictionary) => t.notFound.title

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider pageTitle={title}>
      <NotFound />
    </I18nProvider>
  </StrictMode>,
)
