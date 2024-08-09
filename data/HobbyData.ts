interface Hobby {
  title: string
  info: string
  imgSrcs: string[]
}

const HobbyData: Hobby[] = [
  {
    title: 'Love for material science',
    info: `💭🌌 When I'm not deep in code, I always remember where my journey began.
My love for material science remains steadfast. Exploring the intricate world of computational 
materials science has been more than just an academic pursuit; it’s been a source of endless enrichment. 
The knowledge I’ve gained in these areas continues to shape my perspective in profound ways. 🔬💡`,
    imgSrcs: [
      '/static/images/mse01.JPG',
      '/static/images/mse02.jpg',
      '/static/images/mse03.jpg',
      '/static/images/mse04.jpg',
      '/static/images/mse05.jpg',
    ],
  },
  {
    title: 'Love for writing',
    info: `📖📝 For over a decade, I’ve kept a journal, faithfully capturing both the trivial and significant moments of life. 
            As I pen down my thoughts, I’ve discovered a deeper sense of calm and a way to make sense of the world around me. 🌺✨`,
    imgSrcs: [
      '/static/images/write01.JPG',
      '/static/images/write02.jpg',
      '/static/images/write03.jpg',
      '/static/images/write04.jpg',
    ],
  },
  {
    title: 'Love for gaming',
    info: `🎮💖 In recent years, I’ve also found joy in unexpected places. Gaming has opened up a new world of creativity and relaxation. 
Stardew Valley, in particular, has captured my heart and become my favorite game. One of the highlights of 2024 
was the incredible experience of attending a Stardew Valley concert and meeting the game’s creator, ConcernedApe. 🎉🌟`,
    imgSrcs: [
      '/static/images/stardew01.jpg',
      '/static/images/stardew02.jpg',
      '/static/images/stardew03.jpg',
      '/static/images/stardew04.jpg',
    ],
  },
]

export default HobbyData
