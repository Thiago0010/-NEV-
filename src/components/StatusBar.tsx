const ITEMS = [
  'Todos os sistemas operacionais',
  'Uptime 99,98% (30 dias)',
  'Latência média da API 84ms',
  '6 deploys esta semana'
];

export default function StatusBar() {
  return (
    <div className="status-bar" role="status" aria-live="off">
      <div className="container status-bar__inner">
        <span>
          <span className="status-bar__dot" aria-hidden="true" />
          {ITEMS.join('   ·   ')}
        </span>
      </div>
    </div>
  );
}
