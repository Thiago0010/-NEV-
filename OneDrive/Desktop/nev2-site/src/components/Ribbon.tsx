interface RibbonProps {
  /** Palavra ou frase curta repetida entre as marcas, ex: "SOFTWARE" */
  label?: string;
}

const WORDS = ['ENGENHARIA', 'DESIGN', 'SOFTWARE', 'INTELIGÊNCIA ARTIFICIAL'];

/**
 * Fita horizontal contínua com a marca [NEV]² intercalada com
 * palavras-chave do posicionamento da empresa. Usada como respiro
 * editorial entre seções — não como decoração aleatória.
 */
export default function Ribbon({ label }: RibbonProps) {
  const words = label ? [label] : WORDS;
  const sequence = Array.from({ length: 2 }).flatMap(() =>
    words.flatMap((w) => [w])
  );

  return (
    <div className="ribbon" role="presentation" aria-hidden="true">
      <div className="ribbon__track">
        {Array.from({ length: 2 }).map((_, dupIndex) => (
          <div className="ribbon__item" key={dupIndex}>
            {sequence.map((word, i) => (
              <span key={`${dupIndex}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <span className="mark">[NEV]²</span>
                <span className="ribbon__dot" />
                <span>{word}</span>
                <span className="ribbon__dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
