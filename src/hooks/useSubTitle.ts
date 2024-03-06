import { useContext } from "react";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import { SubTitle } from "../@types/player.model";
import toWebVTT from "../utils/srt-to-vtt";

export const useSubTitle = () => {
  const { getVideoRef, state } = useContext(VideoPlayerContext);

  const getSubtitles = () => {
    return state.subTitles;
  };

  const getSelectedTrack = (tracks: TextTrackList) => {
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (track.mode === "showing") {
        return track;
      }
    }
  };

  const loadTrack = async (subtitle: SubTitle) => {
    try {
      const res = await fetch(subtitle.url);
      const blob = await res.blob();
      const vttUrl = await toWebVTT(blob);
      const track = document.createElement("track");
      track.kind = "captions";
      track.label = subtitle.title;
      track.id = subtitle.code;
      track.srclang = subtitle.code;
      track.src = vttUrl;
      return track;
    } catch {
      return null;
    }
  };

  const changeSubtitle = async (index: number) => {
    const videoRef = getVideoRef();
    if (!videoRef) {
      return;
    }

    const titles = getSubtitles();
    if (titles) {
      const tracks = videoRef.textTracks;
      const selected = titles[index];
      const currentTrack = getSelectedTrack(tracks);
      if (currentTrack && currentTrack?.id !== selected?.code) {
        currentTrack.mode = "hidden";
      }
      if (!selected) {
        state.currentSubtitle = undefined;
        return;
      }

      let selectedTrack = tracks.getTrackById(selected.code);
      if (!selectedTrack) {
        const newTrack = await loadTrack(selected);
        if (newTrack) {
          videoRef.append(newTrack);
          console.log('append')
          selectedTrack = tracks[tracks.length - 1];
        }
      }
      if (selectedTrack) {
        selectedTrack.mode = "showing";
      }
    }
  };

  const initSubtitle = async () => {
    const titles = getSubtitles();
    const selectedIndex = titles.findIndex((x) => x.is_selected);
    if (selectedIndex >= 0) {
      changeSubtitle(selectedIndex);
    }
  };

  return {
    getSubtitles,
    changeSubtitle,
    initSubtitle,
  };
};
