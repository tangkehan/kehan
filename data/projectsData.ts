interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Discord Music Bot',
    description: `I developed a discord music bot in Java with Java Discord API and LavaPlayer. 
    It allows users to play music directly from YouTube within a Discord server. 
    The bot supports playing specific songs or entire playlists based on YouTube searches. 
    Additionally, it offers playback controls including play, skip, list, and shutdown. `,
    imgSrc: '/static/images/discordBot.jpg',
    href: 'https://github.com/tangkehan/discord_music_bot',
  },
  {
    title: 'Facial Recognition Platform',
    description: `I made a facial recognition platform, allowing users to upload images, 
    manage accounts, track history, and retrieve results. The platform automatically detects 
    and returns the number of faces in the uploaded photos using a robust RESTful API. 
    Built in React, CSS, Node.js and Knex.js`,
    imgSrc: '/static/images/faceDetect.jpg',
    href: 'https://github.com/tangkehan/Facial-Recognition',
  },
  {
    title: 'Dynamic Storage Allocator',
    description: `Designed a dynamic memory allocator consisting of the malloc, 
    free, realloc, and calloc functions in C.`,
    imgSrc: '/static/images/malloc.jpg',
    href: 'https://github.com/tangkehan/Dynamic-Storage-Allocator',
  },
  {
    title: 'Bomb It',
    description: `Bomb it is a 15x15 grid-based game developed in Python 
      using the Tkinter framework. Features include Dijkstra's algorithm 
      for dynamic map generation and breadth-first search for realistic NPC movements.`,
    imgSrc: '/static/images/bombit.jpg',
    href: 'https://github.com/tangkehan/BombIt',
  },
]

export default projectsData
