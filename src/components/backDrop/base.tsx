const createTile = (id: number) => {
  return <div key={id} data-index={id} className="tile"></div>;
};

const createTiles = (quantity: number) => {
  const tiles = [];
  for (let i = 0; i < quantity; i++) {
    tiles.push(createTile(i));
  }
  return tiles;
};

export function BackDrop() {
  const columns = Math.floor(document.documentElement.clientWidth / 50);
  const rows = Math.floor(document.documentElement.clientHeight / 50);

  const backdropStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: '1px',
  };

  return (
    <div className="absolute h-screen w-screen -z-50">
      <div className="absolute gradient h-screen w-screen"></div>
      <div className="absolute backdrop h-screen w-screen" style={backdropStyle}>
        {createTiles(columns * rows)}
      </div>
    </div>
  );
}