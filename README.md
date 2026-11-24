# Museu da Meia-Noite

Galeria digital em português sobre detalhes, contextos e interpretações de pinturas. A primeira exposição reúne quatro obras e três pistas interativas por obra.

O site é estático e está em `dist/`. Para abrir localmente, execute `python3 -m http.server 8000 --directory dist` na raiz e acesse [localhost:8000](http://localhost:8000/).

O catálogo e as pistas ficam em `dist/museu.js`. Cada investigação tem um link direto, como `/#obra-arnolfini`, e inclui a ficha da instituição que guarda a obra.

## Créditos

- [O Retrato dos Arnolfini](https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg), Jan van Eyck, National Gallery. Reprodução em domínio público via Wikimedia Commons. A capa usa um recorte.
- [A Ceia em Emaús](https://commons.wikimedia.org/wiki/File:Supper_at_Emmaus-Caravaggio_(1601).jpg), Caravaggio, National Gallery. Reprodução em domínio público via Wikimedia Commons.
- [Moça com Brinco de Pérola](https://commons.wikimedia.org/wiki/File:Girl_with_a_Pearl_Earring.jpg), Johannes Vermeer, Mauritshuis. Reprodução em domínio público via Wikimedia Commons.
- [Saturno devorando seu filho](https://commons.wikimedia.org/wiki/File:Saturn_Devouring_His_Son.jpg), Francisco de Goya. Reprodução do Museo del Prado via Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). A versão WebP foi redimensionada.
- Cormorant Garamond e DM Sans são distribuídas sob a SIL Open Font License. Os textos das licenças acompanham as fontes em `dist/assets/licenses/`.
