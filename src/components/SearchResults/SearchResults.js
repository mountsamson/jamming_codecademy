import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../Tracklist/TrackList";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      {/* <!-- Add a TrackList component --> */}
      <TrackList
        userSearchResults={props.userSearchResults}
        isRemoval={false}
        onAdd={props.onAdd}
      />
    </div>
  );
}

export default SearchResults;
