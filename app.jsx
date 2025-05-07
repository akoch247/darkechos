import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Episode List</h1>
      <EpisodeList episodes={episodes} onSelect={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}


function EpisodeList ({episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id} onClick={() => onSelect(episode)}>
          {episode.title}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select a episode to learn more</p>
      </section>
    );
  }

  return (
    <section className="details">
      <h2>Episode {episodeList.id}: {episodeList.title}</h2>
      <p>{episode.description}</p>
    </section>
  );
}

