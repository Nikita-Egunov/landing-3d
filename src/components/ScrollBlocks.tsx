import Block from './Block'

const blocks = [
  {
    id: 1,
    position: [0, 0, 0] as [number, number, number],
    primaryColor: '#00ff88', // Яркий зеленый
    secondaryColor: '#8844ff', // Яркий фиолетовый
    glowColor: '#00ff88',
    title: 'Привет! Я разработчик',
    description: 'Fullstack Developer\nTypeScript • React • Node.js',
    icon: '👋',
    shape: 'sphere'
  },
  {
    id: 2,
    position: [0, -8, 0] as [number, number, number], // Увеличил расстояние с -4 до -6
    primaryColor: '#ff44aa', // Розовый
    secondaryColor: '#00ccff', // Голубой
    glowColor: '#ff44aa',
    title: 'Frontend Мастерство',
    description: 'React • Next.js • TypeScript\nRedux • Three.js',
    icon: '⚡',
    shape: 'box'
  },
  {
    id: 3,
    position: [0, -18, 0] as [number, number, number], // Увеличил расстояние
    primaryColor: '#ffaa00', // Оранжевый
    secondaryColor: '#00ffcc', // Бирюзовый
    glowColor: '#ffaa00',
    title: 'Backend Экспертиза',
    description: 'NestJS • Node.js • PostgreSQL\n GraphQL • Docker',
    icon: '🔧',
    shape: 'torus'
  },
  {
    id: 4,
    position: [0, -24, 0] as [number, number, number], // Увеличил расстояние
    primaryColor: '#8844ff', // Фиолетовый
    secondaryColor: '#00ff88', // Зеленый
    glowColor: '#8844ff',
    title: 'Мои Проекты',
    description: 'SPA • Лендинги • WebGL\nE-commerce',
    icon: '🚀',
    shape: 'octahedron'
  },
  {
    id: 5,
    position: [0, -30, 0] as [number, number, number], // Увеличил расстояние
    primaryColor: '#00ccff', // Голубой
    secondaryColor: '#ff44aa', // Розовый
    glowColor: '#00ccff',
    title: 'Технологический Стек',
    description: 'TypeScript как основа\nModern React Ecosystem\nClean Architecture',
    icon: '💻',
    shape: 'cone'
  },
]

export default function ScrollBlocks() {
  return (
    <group>
      {blocks.map((block) => (
        <Block
          key={block.id}
          position={block.position}
          primaryColor={block.primaryColor}
          secondaryColor={block.secondaryColor}
          glowColor={block.glowColor}
          title={block.title}
          description={block.description}
          icon={block.icon}
          shape={block.shape}
          blockId={block.id}
        />
      ))}
    </group>
  )
}